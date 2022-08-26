---
title: Vagrant与VirtualBox搭建虚拟机
description: vagrant、virtual box
date: 2022-08-22
category: 虚拟机
tags:
- vagrant
- virtual box
---

# Vagrant与VirtualBox搭建虚拟机
## Vagrant

下载地址：https://www.vagrantup.com/downloads

## VirtualBox

下载地址：https://www.virtualbox.org/wiki/Downloads

配置虚拟机默认安装地址

打开全局设置，配置虚拟机安装地址

## Vagrant Box

Vagrant Box下载地址：https://app.vagrantup.com/boxes/search

下载完后，打开命令窗口，将它添加到Vagrant管理的box列表中

```shell
# centos7 是box名字 后面是路径
vagrant box add centos7 e:\xx\xx.box

# 查看是否添加成功
vagrant box list
```

## 创建虚拟机

创建一个文件夹统一管理vagrantfile，如：`e:/vm/vagrantfile/centos7`

```shell
# 到e:/vm/vagrantfile/centos7路径下 centos7是上面add的box名称
vagrant init centos7
```

> 执行完得到一个vagrantfile文件，可以配置虚拟机相关信息

常用命令

```shell
# 启动虚拟机
vagrant up
# 关机
vagrant halt
```

## 远程控制

```shell
# 虚拟机启动后先使用默认账号登录
vagrant ssh
# 修改root用户密码
sudo passwd root
# 修改 /etc/ssh/sshd_config 
vi /etc/ssh/sshd_config

# 放开以下的注释
37 LoginGraceTime 2m
38 PermitRootLogin yes
39 StrictModes yes

62 # To disable tunneled clear text passwords, change to no here!
63 PasswordAuthentication yes
64 #PermitEmptyPasswords no
65 #PasswordAuthentication no
```

修改完配置重启

```shell
service sshd restart

# 重启
vagrant reload
```

使用ssh连接

## 安装开发环境

先安装基本工具

```shell
yum -y install nano vim wget curl net-tools lsof zip unzip
```

换源

1. 备份旧的源

   ```shell
   mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
   ```

2. 下载对应版本的阿里源（wget -O 下载并以指定的文件名保存）

   ```shell
   wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-8.repo
   ```

3. 删除yum旧的缓存，生成新的换源后的缓存

   ```shell
   // 清理源缓存
   yum clean all && yum makecache
   // 更新源
   yum -y update
   ```

静态ip

```shell
ip addr

cd /etc/sysconfig/network-scripts/
ls ifcfig*

vim ifcfig

BOOTPROTO=“static” #dhcp改为static
ONBOOT=“yes” #开机启用本配置
IPADDR=192.168.244.101 #静态IP
GATEWAY=192.168.244.2 #默认网关
NETMASK=255.255.255.0 #子网掩码
DNS1=192.168.244.2 #DNS 配置
```

```shell
# 下载编译环境
yum install -y gcc-c++   pcre pcre-devel zlib zlib-devel openssl openssl-devel
# 下载安装包
wget -c https://nginx.org/download/nginx-1.18.0.tar.gz
# 解压
tar -zxvf nginx-1.18.0.tar.gz
# 进入目录
cd nginx-1.18.0
# 配置
./configure
# 编译安装
make && make install
# 查看安装路径
whereis nginx
# 开机启动
vi /etc/rc.local
# 底部添加一行
/usr/local/nginx/sbin/nginx
# 设置权限
chmod 755 /etc/rc.local
```



## 参考

- [Vagrant 与 VirtualBox 的保姆级安装教程](https://blog.csdn.net/qq_44713454/article/details/119943743)
- [vagrant root账号登录](https://blog.csdn.net/cbcxvbfxgb/article/details/106868092)
