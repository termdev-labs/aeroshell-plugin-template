// plugins/welcome/index.ts
import type { App } from "vue"
import ServerStatus from "./Welcome.vue"

export default {
  name: "ServerStatusPlugin",
  install(app: App) {
    app.component("ServerStatusPlugin", ServerStatus)
  },
    unload() {
    // 没有独立挂载的 Vue 实例，无需主动清理
    // 所有清理工作由 ServerStatus 组件的 onBeforeUnmount 完成
  },
    Component: ServerStatus   // ✅ 加这一行
}
