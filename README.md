# js-demo-dynamic-cv
代码动起来，预览 → [点我呀](https://venaissance.me/js-demo-dynamic-cv/dist/index.html)

# 部署方式

每次改完代码，必须要用以下方式编译生成静态页面，才能正确的请求 JS 和 CSS：

```
parcel build src/index.html --public-url .
```

如果用默认方式`parcel build src/index.html`编译，

会变成`<script src="/main.js">`，导致资源请求不到
