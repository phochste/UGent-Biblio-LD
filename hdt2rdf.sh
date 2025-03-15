#!/bin/bash

docker run -it --rm -v `pwd`/data:/data rfdhdt/hdt-cpp hdt2rdf "$@"
