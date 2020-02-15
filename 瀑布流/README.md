## 小程序
### app.json 
    {
        "pages": [书写所有的路径],
        "window": { 顶部的属性与属性值 },
        "扩张功能"(自带的组件=>官网)：{
            "属性"： "属性值"，
            "list": [{"path": 路径，"text": 名称}]
        }
    }
######  在app.json中，配置路由 与 最顶部的(window)的样式

### 遵循 common.js 
 module.exports 抛出文件   
 reqiure 引入抛出的文件
