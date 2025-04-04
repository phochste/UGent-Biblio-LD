#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs');
const { rdfParser } = require("rdf-parse");
const streamifyString = require('streamify-string');
const stringifyStream = require('stream-to-string');
const { rdfSerializer } = require("rdf-serialize");
const N3 = require('n3');
const { Transform } = require('stream');
const { DataFactory } = N3;
const { namedNode, quad } = DataFactory;
const { v4: uuidv4 } = require('uuid');
const readline = require('readline');

const CONTEXT = './etc/biblio.jsonld';
const BASE_IRI = 'https://biblio.ugent.be/ns#';
const CONTEXT_JSON = JSON.parse(fs.readFileSync(CONTEXT,'utf-8'));

program
  .name('biblio-ld');

program
  .command('one')
  .option("--jsonld","Only return JSON-LD",false)
  .option("--type <type>","RDF output type","application/n-quads")
  .argument('<record>','JSON record')
  .action( async (record,options) => {
      let json = JSON.parse(fs.readFileSync(record,'utf-8'));
      json = fixJSON(json);

      if (options.jsonld) {
         console.log(JSON.stringify(json));
      }
      else {
         const rdf = await json2rdf(JSON.stringify(json),options.type);
         console.log(rdf);
      }
  });

program
  .command('many')
  .option("--jsonld","Only return JSON-LD",false)
  .argument('<export>','Biblio export file')
  .action( async (input,options) => {
      const fileStream = fs.createReadStream(input);

      const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
      });

      let nr = 0;
      for await (const line of rl) {
          nr++;
          try {
            let json = JSON.parse(line);
            json = fixJSON(json);

            if (options.jsonld) {
                console.log(JSON.stringify(json));
            }
            else {
                const rdf = await json2rdf(JSON.stringify(json));
                console.log(rdf);
                cache = {};
            }

            if (nr % 100 == 0) {
                console.error(`...${nr}`);
            }
          }
          catch (e) {
            console.error(`line ${nr} : parse error`);
            console.log(e);
            process.exit(1);
          }
      }
  });

function fixJSON(data) {
    data["@type"] = BASE_IRI + data["classification"];
    data["@context"] = CONTEXT_JSON["@context"];
    data["date_created"] = data["date_created"].replace(" ","T") + "Z";
    data["date_updated"] = data["date_updated"].replace(" ","T") + "Z";
    return data;
}

async function json2rdf(data,outputType) {
   if (! outputType) {
       outputType = "application/n-quads";
   }

   const textStream = streamifyString(data); 

   const quadStream = rdfParser.parse(textStream, { 
          contentType: 'application/ld+json', baseIRI: BASE_IRI });
 
   const transformStream = new Transform({
          objectMode: true, 
          transform(chunk,_, callback) {
              // Modify the chunk (item) as needed
              const modifiedChunk = blankNodeRewriter(chunk);
              this.push(modifiedChunk);
              callback();
          }
   });

   const outStream = rdfSerializer.serialize(quadStream.pipe(transformStream), { 
          contentType: outputType
   });

   return stringifyStream(outStream);
}

function blankNodeRewriter(q) {
    let subject = q.subject;
    let predicate = q.predicate;
    let object = q.object;
    let graph = q.graph;

    if (subject.termType === 'BlankNode') {
        const bn = subject.value;
        const newBn = globBN(bn);
        subject = namedNode(newBn);
    }
    if (predicate.termType === 'BlankNode') {
        const bn = predicate.value;
        const newBn = globBN(bn);
        predicate = namedNode(newBn);
    }
    if (object.termType === 'BlankNode') {
        const bn = object.value;
        const newBn = globBN(bn);
        object = namedNode(newBn);
    }
    if (graph.termType === 'BlankNode') {
        const bn = graph.value;
        const newBn = globBN(bn);
        graph = namedNode(newBn);
    }

    return quad(subject,predicate,object,graph);
}

let cache = {};

function globBN(bn) {
    if (cache[bn]) {
      return cache[bn];
    }
    else {
      const newBn = 'urn:uuid:' + uuidv4();
      cache[bn] = newBn;
      return newBn;
    }
}

program.parse();
