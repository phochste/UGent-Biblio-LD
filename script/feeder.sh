#!/bin/bash

mkfifo data.json

curl -s https://biblio.ugent.be/exports/publications.json | \
    ./bin/biblio-ld.js many --jsonld /dev/stdin > data.json & 

while IFS= read -r line; do
    echo "$line" > record.json
    jsonld2rdf record.json
done < data.json
