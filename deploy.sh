# 生成静态文件
yarn docs:build
#vitepress build docs

# 生成静态文件后先推到master分支
git add -A
git commit -m 'build doc'
git push origin mainA

# 进入生成的文件夹
cd docs/.vitepress/dist

# 如果是发布到自定义域名
echo 'imgx.cc' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@gitee.com:<USERNAME>/<USERNAME>.gitee.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push <远程主机名> <本地分支名>:<远程分支名>
git push -f git@github.com:aguoxing/vitepress-blog.git main:gh-pages

cd -
