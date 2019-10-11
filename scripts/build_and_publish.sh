#!/bin/bash
cwd=""
if [ -z "$1" ]
then
    cwd="./"
else
    cwd="$1"
fi
cd "$cwd"
gatsby build
git subtree push --prefix "$cwd/public" origin gh-pages
