```
---
title: SpringBoot整合Alipay
description: SpringBoot整合Alipay
date: 2022-05-22
category: SpringBoot
tags:
- alipay
- 支付
---
```

# SpringBoot整合Alipay

支付宝开放平台

https://open.alipay.com/platform/home.htm?from=wwwalipay

开发助手

https://opendocs.alipay.com/common/02kipl

生成密钥 复制公钥



web 沙箱应用： 自定义密钥->公钥查看->加签变更->粘贴



springboot需要用到的配置

```yaml
# 应用ID,您的APPID web沙箱应用中获取
appId:2021000119675024
# 商户私钥，您的PKCS8格式RSA2私钥，通过开发助手生成的应用私钥
privateKey:
# 支付宝公钥,在沙箱应用获取，通过应用公钥生成支付宝公钥
publicKey:
# 服务器异步通知页面路径需http://格式的完整路径，不能加?id=123这类自定义参数
notifyUrl:http://localhost:8081/alipay/success
# 页面跳转同步通知页面路径 需http://格式的完整路径，不能加?id=123这类自定义参数
returnUrl: http://localhost:8081/alipay/success
# 签名方式
signType: RSA2
# 字符编码格式
charset: utf-8
# 支付宝网关，在沙箱应用中获取
gatewayUrl: https://openapi.alipaydev.com/gateway.do
```



参考：https://blog.csdn.net/ybsgsg/article/details/124348842
