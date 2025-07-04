SHELL:=/bin/bash
include .env

tag:
	sh ./script/tag.sh $(shell jq ".version" package.json | tr -d '"')
export:
	sh ./script/build.sh
prod:
	sh ./script/prod.sh
server:
	PORT=${PORT} NODE_OPTIONS='--inspect' next dev --turbopack