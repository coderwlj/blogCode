#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd src/.vuepress/dist

git init
git add -A
git commit -m '工具网址和代理软件更新'

# 如果发布到 https://<USERNAME>.github.io  填写你刚刚创建的仓库地址
git push -f https://github.com/coderwlj/notes.git master

cd -