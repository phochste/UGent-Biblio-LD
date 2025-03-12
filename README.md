# BIBLIO-LD

## Introduction

This is a JSON-LD context for mapping Biblio JSON data into linked data.

### Install

```
npm install
```

### Use

Run:

```(bash)
./bin/biblio-ld.js one example/journalArticle.json
```

Download a JSON dump of the biblio data:

```
curl https://biblio.ugent.be/exports/publications.json > data/publications.json
```

Transform this JSON dump into RDF:

```
./bin/biblio-ld.js many data/publications.json
```