---
title: docker部署的springboot应用flowable流程图乱码
description: docker、springboot、flowable
date: 2022-08-09
category: Bug
tags:
  - docker
  - flowable
---



### docker部署的flowable流程图乱码

原因：构建镜像使用的jdk没有需要的字体

将需要的字体提取，重新构建jdk镜像即可

docker 查看容器的长id

```sh
docker inspect -f '{{.ID}}' 短id
```

docker复制文件至容器内

```sh
docker cp 本地路径 容器长ID:容器路径
```

将Windows下 C:\Windows\Fonts下的字体文件提取

```
simsun.ttc 宋体常规
simhei.ttf 黑体常规
```

```
#依赖镜像名称和ID
FROM centos:7
#指定镜像创建者信息
MAINTAINER admin
#切换工作目录
WORKDIR /usr
RUN mkdir /usr/local/java
#ADD 是相对路径jar,把java添加到容器中
ADD jdk-8u333-linux-x64.tar.gz /usr/local/java/
ADD simsun.ttc /usr/local/java/jdk1.8.0_333/jre/lib/fonts
ADD simhei.ttf /usr/local/java/jdk1.8.0_333/jre/lib/fonts
#配置java环境变量
ENV JAVA_HOME /usr/local/java/jdk1.8.0_333
ENV JRE_HOME $JAVA_HOME/jre
ENV CLASSPATH $JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib:$CLASSPATH
ENV PATH $JAVA_HOME/bin:$PATH
```

