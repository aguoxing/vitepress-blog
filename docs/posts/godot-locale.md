---
title: Godot4国际化
description: Godot4国际化、gettext
date: 2024-02-12
category: Godot
tags:
  - 国际化
---



### Godot4国际化

1. 创建模板（.pot文件）message.pot

2. 通过模板生成本地化文件（.po文件）fr.po

   ```
   msginit --no-translator --input=message.pot --locale=fr
   ```

   













### 参考

https://docs.godotengine.org/zh-cn/4.x/tutorials/i18n/localization_using_gettext.html