#!/bin/bash

docker run --rm -v `pwd`/example:/app/example -v `pwd`/data:/app/data -i hochstenbach/ugent-biblio-ld:v0.0.1 "$@"
