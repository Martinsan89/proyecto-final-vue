set -e

npm run build

cd dist


git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/Martinsan89/proyecto-final-vue.git master:gh-pages

set -e
