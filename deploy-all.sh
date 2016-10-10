#! /bin/sh
STEPS=`git tag`
for tag in $STEPS; do
    git checkout $tag && ng build && (cd dist && ln -s index.html 200.html) && surge dist/ ng2-master-detail-${tag%%-*}.surge.sh
done

