#!/bin/sh
tsc
echo $PWD
cp -r $PWD/src/__test__/ $PWD/dist/
node dist/index.js