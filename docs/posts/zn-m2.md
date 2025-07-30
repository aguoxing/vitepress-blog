---
title: ZN-M2折腾记录
description: ZN-M2折腾记录
date: 2023-11-21
category: 无线
tags:
  - 路由器
  - openwrt
---


### 官方系统刷openwrt

...

### ttl救砖

#### 直接刷回官方固件

```sh
# 设置路由器ip
setenv ipaddr 192.168.1.1
# 设置tftp服务器地址
setenv serverip 192.168.1.8
# 从ttftp服务器下载分区文件
tftpboot mtd16 
# 刷写分区
flash rootfs
# 保存
saveenv
```

> 如果遇到刷完不能官方固件后，不能通过官方固件升级刷过渡op（刷了重启还是官方固件），可以重新执行上面的操作，不用重启，接着直接刷uboot

#### 直接刷uboot

```sh
# 只刷UBOOT
tftpboot uboot-cmiot-ax18.bin && flash 0:APPSBL
tftpboot uboot-cmiot-ax18.bin && flash 0:APPSBL_1
```

```sh
# 合并和UBOOT（推荐）
tftpboot ax18-mibib.bin && flash 0:MIBIB
tftpboot uboot-cmiot-ax18-mod.bin && flash 0:APPSBL
tftpboot uboot-cmiot-ax18-mod.bin && flash 0:APPSBL_1
saveenv
```

> 进入uboot方法：断电，按住reset键，通电，第二个灯不再闪烁时松开

### 参考

https://www.right.com.cn/forum/thread-8295985-1-1.html

https://www.right.com.cn/forum/thread-8298529-1-1.html
