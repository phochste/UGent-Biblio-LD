#!/bin/bash

docker run -it --rm -v `pwd`/data:/data rfdhdt/hdt-cpp rdf2hdt "$@"
