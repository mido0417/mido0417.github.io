---
title: 【Drupal 8】如何使用twig修改views產生的頁面
date: 2019-10-25
tags: 
  - Drupal
  - views
  - twig
author: Mido.lin
location: Taiwan
description: 我們經常使用views製作page，但是這些page的twig使用的檔案名稱全都一模一樣...萬一我就是只有這個views特別跟人家不一樣的話該怎麼辦呢？

---

其實在Drupal8的views已經有了自己的twig命名規則
而這些命名規則也是有優先套用的順序

```
Twig優先套用順序
    1. [base template name]--[view machine name]--[view display id].html.twig
    2. [base template name]--[view machine name]--[view display type].html.twig
    3. [base template name]--[view display type].html.twig
    4. [base template name]--[view machine name].html.twig
    5. [base template name].html.twig
```

由於我們修改的是由views生成的東西
base template name的規則也會照著views的設定走



假如你的views格式設定為HTML清單的話就必須使用views-view-list來作為base template name
view machine name是建立views時的機器名稱
view display id則是page或是block的機器名稱

display id可以從這邊修改

```
範例
    格式設定為HTML清單 機器名稱為news_list display-id為page_1
    twig的檔案名稱就會是 views-view-list--news_list--page_1.html.twig
```

## 知道命名規則了，但是檔案從哪來呢？
我們要怎麼知道當前要使用的twig要複製哪個檔案來做更改呢？
在建立views的時候我們可以選擇想要呈現的格式，而這些格式各自有對應使用的twig


``` text
Grid: views-view-grid.html.twig
Table: views-view-table.html.twig
HTML List: views-view-list.html.twig
Unformatted: views-view-unformatted.html.twig
```

確定好自己選擇的格式之後就可以複製一份出來修改檔名囉！

參考文章：http://redcrackle.com/blog/drupal-8/theme-views-templates