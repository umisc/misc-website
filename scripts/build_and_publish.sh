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
echo "checking out to gh-pages"
git checkout gh-pages

cwb=$(git branch | grep \* | cut -d ' ' -f2)
if [ $cwb == "master" ]
then
    echo "can't checkout to gh-pages"
    exit
fi

cp ./public/* ./ -r
echo "copied files to root of gh-pages branch"
git push origin gh-pages
git checkout master
echo "checking out to master"
