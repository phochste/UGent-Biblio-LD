# BIBLIO-LD

## Introduction

This is a toolkit to map the Ghent University Bibliography [Biblio](https://biblio.ugent.be) into linked data.

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

Or, create first a small sample of the data

```
shuf -n 2000 data/publications.json > data/sample.json
```
