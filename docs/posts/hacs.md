---
title: docker安装HomeAssistant
description: docker安装HomeAssistant
date: 2023-12-15
category: Docker
tags:
  - HomeAssistant
---

### docker安装HomeAssistant

安装稳定版ha

```sh
docker pull homeassistant/home-assistant:stable
```

创建宿主机文件夹

```
mkdir /home/docker/homeassistant
mkdir /home/docker/homeassistant/www
mkdir /home/docker/homeassistant/custom_components
```

运行

```sh
docker run -d \
  --name homeassistant \
  --privileged \
  --restart=unless-stopped \
  -e TZ=Asia/Shanghai \
  -v /home/docker/homeassistant:/config \
  -p 8123:8123 \
  --network=docker-network --network-alias ha-network --ip 172.20.0.7 \
  homeassistant/home-assistant:stable
  
  
docker run -d --name="home-assistant" -v /volume1/docker/homeassistant/config:/config -p 8123:8123 homeassistant/home-assistant
```

安装hacs

https://github.com/hacs/integration/releases/

解压到 /home/docker/homeassistant/custom_components/hacs后重启

重启完成，配置--设备与服务--添加集成，搜索hacs，全选 提交 GitHub授权

参考

https://www.cnblogs.com/isit/p/17043428.html

https://zhuanlan.zhihu.com/p/654777271



