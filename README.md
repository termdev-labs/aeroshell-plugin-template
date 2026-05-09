# Aeroshell 插件模板

一个基于 Vue 3 + TypeScript + Vite 的 Aeroshell 插件开发模板。

用于快速开发 Aeroshell 插件，支持：

- Vue 3
- TypeScript
- Vite
- ESModule
- Naive UI
- Aeroshell 动态插件加载

插件编译后会生成：

```txt
dist/
├── index.js
├── style.css
└── plugin.json
```

可直接复制到 Aeroshell 插件目录运行。

---

# 功能特点

- 基于 Vue 3 开发
- TypeScript 支持
- Vite 极速构建
- ESModule 动态加载
- 插件轻量化
- 不依赖 iframe
- 支持动态热加载
- 支持 Aeroshell 插件系统

---

# 项目结构

```txt
aeroshell-plugin-template/
├── public/
│   └── plugin.json
│
├── Welcome.vue
├── index.ts
├── vite.config.ts
├── tsconfig.json
├── vue-shim.ts
├── package.json
└── README.md
```

---

# 快速开始

## 1、克隆模板

```bash
git clone https://github.com/termdev-labs/aeroshell-plugin-template.git
```

或者：

```bash
npx degit termdev-labs/aeroshell-plugin-template my-plugin
```

---

## 2、安装依赖

```bash
npm install
```

---

## 3、编译插件

```bash
npm run build
```

编译完成后：

```txt
dist/
├── index.js
├── style.css
└── plugin.json
```

---

# 安装插件

将 dist 目录中的文件复制到：

```txt
Aeroshell安装目录的/plugins/welcome/
```

例如：

```txt
plugins/
└── welcome-plugin/
    ├── index.js
    ├── style.css
    └── plugin.json
```

即可被 Aeroshell 自动加载。

---

# plugin.json

插件信息文件：

```json
{
  "id": "welcome-plugin",
  "name": "欢迎插件",
  "version": "1.0.0",
  "main": "index.js",
  "style": "style.css",
  "component": "WelcomePlugin"
}
```

---

# 插件入口

## index.ts

```ts
import type { App } from "vue"
import Welcome from "./Welcome.vue"

export default {
  name: "WelcomePlugin",

  install(app: App) {
    app.component("WelcomePlugin", Welcome)
  },

  Component: Welcome,

  unload() {
    console.log("插件卸载")
  }
}
```

---

# Vue 组件示例

## Welcome.vue

```vue
<template>
  <div>
    欢迎使用 Aeroshell 插件
  </div>
</template>
```

---

# 运行原理

插件会被编译成：

```txt
ESModule
```

Aeroshell 会通过：

```js
import(file://...)
```

动态加载插件。

---

# Vue 运行时说明

Vue 由 Aeroshell 主程序提供。

插件不会重复打包 Vue。

这样可以避免：

- Vue 重复实例
- 组件异常
- 插件体积过大

---

# 开发说明

修改：

```txt
Welcome.vue
```

后重新编译：

```bash
npm run build
```

即可生成最新插件。

---

# 环境要求

- Node.js >= 18
- Aeroshell >= 2.x

---

# License

Apache License 2.0

---

# Aeroshell 官网

https://termdev.com
