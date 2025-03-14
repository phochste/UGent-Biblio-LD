.PHONY: docker-build docker-interactive

docker-build:
	docker build . -t hochstenbach/ugent-biblio-ld:v0.0.1

docker-interactive:
	docker run --rm -it hochstenbach/ugent-biblio-ld:v0.0.1 sh 