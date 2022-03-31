set -x
set -e
cp .npmrc.template .npmrc
npx google-artifactregistry-auth@3.0.0 .npmrc