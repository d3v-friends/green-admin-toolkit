#!/bin/zsh
rm -rf ./dist

tsc -p ./tsconfig.export.json;
rm ./**/tsconfig.export.tsbuildinfo;
rm -rf ./dist/app
mv ./dist/src/* ./dist
rm -rf ./dist/src
cp ./src/module.d.ts ./dist/module.d.ts;
resolve-tspaths -p ./tsconfig.export.json --verbose;


git add .;
