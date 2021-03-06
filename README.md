## le-markdown-editor

### 为何要写这个组件
一直以来都有记笔记的习惯，但是之前都是在自己电脑上做记录，有时候在手机想查看很不方便，再加上自己word水平巨菜以及代码放在word中实在不美观的缘故，每次记笔记都感觉吃力不讨好，后来接触markdown，才发现原来记笔记还能这么简单。但是随着自己记录的内容越来越多，越来越感觉有时候真的是一图胜千言，但是找了一圈感觉带图片上传的云笔记貌似就没免费的😂。算了，没有就自己写一个吧，等写完了放在自己的系统上用:grimacing:。
演示地址：http://47.100.125.98/
### 预览图
![预览图](https://cdn.jsdelivr.net/gh/Chave-Z/picture/1b010cd6c7004529bfa856b3f5ff6a67.png)

![预览图](https://cdn.jsdelivr.net/gh/Chave-Z/picture/c0a3310b084d401a94ed95bc4c45969b.gif)

### 特性

- 导航
- 标题
- 文字效果
- 引用
- 脚注
- 上角标、下角标
- 有序列表、无序列表、任务清单
- 代码缩进、代码高亮
- 图片上传
- html内嵌(视频、音频等)
- Emoji 表情
- LaTeX 公式
- 流程图
- 编辑器样式
- 编辑器内容折叠
- 编辑器换肤功能
- 滚动条同步
- ...

### 更新
- 2020-03-08 优化插件、修复bug
- 2019-12-11 添加演示地址[点击访问](http://47.100.125.98/)
- 2019-12-09 修复了打开控制台点击全屏后再关闭控制台，编辑器大小不对的问题

###  插件使用
#### 使用cdn
有的人可能不太喜欢用webpack或者就是写个小demo，用不到webpack，可以点击访问[这个文件](./src/dev/notes.html)，参考这个文件即可使用
#### 在webpack构建的项目中
- 下载插件

```shell
$ npm i le-markdown-editor --save
```

- `index.js` 或 `main.js` 中

```javascript
import Vue from 'vue'
import leMarkdownEditor from 'le-markdown-editor'
// ...

Vue.use(leMarkdownEditor)
// ....
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
```
- `index.html`

```vue
<div id="editor-main">
      <le-editor></le-editor>
</div>

<style>
#app {
    width: 1200px;
    height: 500px;
    margin: 50px auto;
}

/*设置编辑器宽高*/
#editor-main {
	color: #2c3e50;
	width: 100%;
	height: 100%;
}
</style>
```
#### 我该如何了解插件语法？
打开项目根目录下的test.txt，将其拷贝到编辑区，对比右侧看到的预览文本，就能知道如何使用了

### API

#### props(自定义配置)

| 属性        | 说明                                           | 类型    | 默认值                               |
| :---------- | :--------------------------------------------- | :------ | :----------------------------------- |
| value       | 可以使用 v-model 双向绑定数据                  | Sting   | ''                                   |
| theme       | 编辑器主题                                         | Sting   | 'base16-dark'                                   |
| font        | 设置编辑区和展示区的文字大小   | Object  | {editor: 16, preview: 16} |
| shadow      | 编辑器是否带阴影效果                           | Boolean | true                                 |
| dragUpload  | 是否允许拖拽上传图片，需要结合图片上传配置使用 | Boolean | true                                 |
| showToolbar | 是否显示工具栏                                 | Boolean | true                                 |
| toolbar     | 菜单栏及快捷键的功能                           | Object  | 见下文                               |

##### 菜单栏配置配置

```html
// 默认菜单栏配置
toolbar: {
    undo: true, // 撤销
    redo: true, // 重做
    bold: true, // 粗体
    del: true, // 删除线
    underline: true, // 下划线
    italic: true, // 斜体
    quote: true, // 引用
    bookmark: true, // 标记
    superscript: true, // 上角标
    subscript: true, // 下角标
    h1: true, // 标题1
    h2: true, // 标题2
    h3: true, // 标题3
    h4: true, // 标题4
    h5: true, // 标题5
    h6: true, // 标题6
    alignLeft: true, // 居左
    alignCenter: true, // 居中
    alignRight: true, // 居右
    ol: true, // 有序列表
    ul: true, // 无序列表
    hr: true, // 分隔线
    link: true, // 链接
    inlineCode: true, // 行内代码
    code: true, // 代码块
    image: true, // 图片
    table: true, // 表格
    skin: true, // 皮肤
    fullScreenEdit: true, // 全屏编辑
    fullScreen: true, // 全窗口预览
    preview: true,  // 实时预览
    save: true,  // 保存预览的html文本
  }
// 使用(例如按照下图的配置，只会显示两个图标)
<template>
  <div id="app">
    <le-editor :toolbar="toolbar"></le-editor>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        toolbar: {
            undo: true,
            redo: true
        }
    }
  }
}
</script>
```

#### events(事件)

| 事件名       | 说明                      | 返回值                      |
| :---------- | :------------------------ | :------------------------  |
| save        | 保存预览文本               | 预览区的html文本             |
| uploadImg   | 上传图片                   | 组件对象、文件以及文件名，详细内容见下文|

### 图片上传配置

本地图片上传因为没有各种云存储账号的的原因，所以暂时只支持拖拽或者粘贴剪切板图片（windows粘贴本地图片需要先预览，截图则不需要）上传到Github仓库和自己的服务器，虽然都在说Github访问有点慢，但是我这几天测试了一下，虽然上传速度不快，但是访问时感觉效果还行，但是毕竟免费的，对于没有图床和服务器的用户还是很不错的，介意的话可以传到自己的服务器或者利用拓展方法上传到自己的云存储上。

**注意**：mac系统下粘贴本地图片会在编辑区留下原文件名，windows上没有问题，但是不影响使用，虽然能直接通过编辑器操作去除那一段文本，但是总感觉很别扭，所以就没处理，功能待优化，介意的话，请使用拖拽上传的功能。

图片上传演示：

![图片上传演示](https://cdn.jsdelivr.net/gh/Chave-Z/picture/71d962718f6443abbdea6802ee995f79.gif)

详情请点击这里-->[图片上传配置详情](./image.md)

### 快捷键
**注意：** 这里除了撤销和重做两个功能以外，其它的快捷键只在菜单设置为显示时生效

| 快捷键         | 功能           |
| -------------- | -------------- |
| Ctrl + Z       | 撤销           |
| Ctrl + Y       | 重做           |
| Ctrl + B       | 粗体           |
| Ctrl + D       | 删除线         |
| Ctrl + U       | 下划线         |
| Ctrl + I       | 斜体           |
| Ctrl + Q       | 引用           |
| Ctrl + M       | 标记           |
| Ctrl + L       | 链接           |
| Ctrl + 1(F1)   | 标题1          |
| Ctrl + 2(F2)   | 标题2          |
| Ctrl + 3(F3)   | 标题3          |
| Ctrl + 4(F4)   | 标题4          |
| Ctrl + 5(F5)   | 标题5          |
| Ctrl + 6(F6)   | 标题6          |
| Ctrl + Alt + S | 上角标         |
| Ctrl + Alt + B | 下角标         |
| Ctrl + Alt + L | 居左           |
| Ctrl + Alt + C | 居中           |
| Ctrl + Alt + R | 居右           |
| Ctrl + Alt + O | 有序列表       |
| Ctrl + Alt + U | 无序列表       |
| Ctrl + Alt + H | 分割线         |
| Ctrl + Alt + I | 行内代码       |
| Ctrl + Alt + D | 代码块         |
| Ctrl + Alt + P | 开关实时预览    |
| Ctrl + Alt + F | 开关全窗口预览  |
| Ctrl + S | 保存html文本  |

### 如何反馈 
使用过程中如果有建议或者问题，欢迎在issues上提交问题描述或建议。

