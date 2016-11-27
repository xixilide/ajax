# Ajax

AJAX 的英语原意是“异步的 Javascript 和 XML”。

Ajax 就是使用 JS 来实现页面的局部刷新

AJAX 是一种用于创建快速动态网页的技术。

通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

### 用两种方式来实现 AJAX

第一种是比较传统的方式：jQuery + Express 。

第二种：React + Meteor 的 SPA 应用

###　XMLHttpRequest 对象用于和服务器交换数据。

- xmlhttp.open("GET","test1.txt",true);
- xmlhttp.send();

- open(method,url,async)	 规定请求的类型、URL 以及是否异步处理请求。
  - method：请求的类型；GET 或 POST
  - url：文件在服务器上的位置
  - async：true（异步）或 false（同步）

- send(string)	将请求发送到服务器。
  - string：仅用于 POST 请求
