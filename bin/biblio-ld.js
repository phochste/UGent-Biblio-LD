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

const CONTEXT = './biblio.jsonld';
const BASE_IRI = 'https://biblio.ugent.be/ns#';

program
  .name('biblio-ld');

program
  .command('one')
  .argument('<record>','JSON record')
  .action( async (record) => {
      const context = JSON.parse(fs.readFileSync(CONTEXT,'utf-8'));
      const json = JSON.parse(fs.readFileSync(record,'utf-8'));
      json["@type"] = BASE_IRI + json["classification"];
      json["@context"] = context["@context"];
      const rdf = await json2rdf(JSON.stringify(json));
      console.log(rdf);
  });

async function json2rdf(data) {
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
          contentType: 'application/n-quads' 
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

const cache = {};

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