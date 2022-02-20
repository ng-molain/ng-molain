#!/bin/bash

readonly thisDir=$(cd $(dirname $0); pwd)

cd $(dirname $0)/../..

DIST="$(pwd)/dist"
ROOT=${DIST}/libs

# is snapshot mode, if true, should override the same version
SNAPSHOT=false
for ARG in "$@"; do
    case "$ARG" in
        --snapshot)
            SNAPSHOT=true
            ;;
    esac
done
echo "Use snapshot mode ${SNAPSHOT}"

# VERSION=$(node -p "require('./package.json').version")
# echo "Prev version ${VERSION}"

# 1. patch version and git tag
# npm version 0.8.0-beta.7 -m "Release version %s"
VERSION=$(node -p "require('./package.json').version")
echo "Current version ${VERSION}"

# 2. build libs
# npm run libs:build

# 3. fix libs package versions
# VERSION=0.8.0-beta.05
echo "Fix all libs version with ${VERSION}"

fixLibsVersion() {
    (cd ${ROOT}; for p in `ls .`; do sed -i "s/0\.0\.0-PLACEHOLDER/${VERSION}/g" ${p}/package.json; done)
}
fixLibsVersion

# 4. publish on registry
publishToRigistry() {
   (cd ${ROOT}; for p in `ls .`; do npm publish $p --registry http://[your.registry]; done)
}

publishToRigistry

# 5. publish on npmjs
#publishToNpmjs() {
#    (cd ${ROOT}; for p in `ls .`; do npm publish $p --access public --registry https://registry.npmjs.org ; done)
#}
#
#publishToNpmjs
