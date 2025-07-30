---
title: aseprite源码编译
description: aseprite源码编译
date: 2023-12-18
category: 开源软件
tags:
  - aseprite
  - 像素画
---

aseprite源码编译

```
git clone git@github.com:aseprite/aseprite.git

git submodule update --init --recursive 

cd aseprite
mkdir build
cd build

call "D:\Microsoft Visual Studio\2022\BuildTools\Common7\Tools\VsDevCmd.bat" -arch=x64

cmake -DCMAKE_BUILD_TYPE=RelWithDebInfo -DLAF_BACKEND=skia -DSKIA_DIR=E:\gitea\Skia -DSKIA_LIBRARY_DIR=E:\gitea\Skia\out\Release-x64 -DSKIA_LIBRARY=E:\gitea\Skia\out\Release-x64\skia.lib -G Ninja ..

ninja aseprite

```


参考
https://zhuanlan.zhihu.com/p/369309964
https://www.bilibili.com/read/cv28321328/
https://github.com/aseprite/aseprite
https://zhuanlan.zhihu.com/p/564437259