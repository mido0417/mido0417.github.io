---
title: 【Drupal 8】依據使用者的不同在body上面增加Class
date: 2020-01-27
tags: 
  - Drupal
  - preprocess
author: Mido.lin
location: Hellosanta
description: 輕鬆使用preprocess來根據使用者的不同在Body上面增加Class吧！

---

有些時候會需要依照使用者的不同來製作不同的樣式
像是買家與賣家使用的文字hover顏色、網站管理員與一般使用者要看到不同的特效，等諸如此類的東西

像這種情形我們就能使用preprocess來做判斷！

```php
function YOU_THEME_NAME_preprocess_html(&$variables)
{
    // The getRoles() method will return us the machine names, so there is no
    // need to process roles names additionally. However, I suggest prefixing
    // the names with "role-", so it's more obvious.
    
    foreach ($variables['user']->getRoles() as $role) {
        $variables['attributes']['class'][] = 'role-' . $role;
    }
}
```

![add user role to the body class](https://images.plurk.com/69PnFGW7JvbueZEmp34KtF.png)  
清快取之後就能在body上面看到成果囉！



參考資料  
[Drupal Answers](https://drupal.stackexchange.com/questions/195203/add-the-user-role-to-the-body-class)