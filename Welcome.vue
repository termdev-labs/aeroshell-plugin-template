<template>
  <div class="welcome-container">
    <div class="welcome-content">
      <!-- 标题 -->
      <div class="welcome-title">🚀 Aeroshell</div>
      <div class="welcome-subtitle">
        高效 · 现代 · 智能 的终端管理体验
      </div>

      <!-- 按钮组 -->
      <div class="welcome-btn-group">
        <button class="welcome-btn welcome-primary" @click="openDocs">
          📖 查看使用指南
        </button>
        <button class="welcome-btn welcome-secondary" @click="openWebsite">
          🌐 官网
        </button>
      </div>

      <!-- License 提示区域 -->
      <div v-if="!activated" class="license-card">
        <h3>未激活 · 功能受限</h3>
        <ul>
          <li>仅可管理有限数量的主机</li>
          <li>部分高级功能不可用</li>
          <li>升级 Pro - 解锁多分屏、AI助手、高危命令拦截、在线编辑、媒体预览、主机地图等增强功能</li>
        </ul>
        <button class="upgrade-btn" @click="goUpgrade">
          🚀 立即升级 Pro
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Vue from "./vue-shim"
const { ref, onMounted } = Vue

const activated = ref(false) // 默认未激活

onMounted(async () => {
 const fetchStatus = async () => {
    try {
      const status = await window.license.getStatus()
      activated.value = status?.activated === true
    } catch {
      activated.value = false
    }
  }

  fetchStatus()
  setInterval(fetchStatus, 5000) // 每 5 秒刷新一次
})

function openDocs() {
  window.open("https://termdev.com/Aeroshell_manual.pdf", "_blank")
}

function openWebsite() {
  window.open("https://termdev.com", "_blank")
}

function goUpgrade() {

  window.dispatchEvent(
  new CustomEvent("handle-login", {
    detail: { }
  })
)


}
</script>


<style>
.welcome-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, var(--app-bg), var(--app-bg-secondary));
  color: var(--app-accent);
  animation: welcome-fadeIn 1.2s ease;
}

.welcome-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(-15%);
  gap: 24px;
}

/* 标题区 */
.welcome-title {
  font-size: 38px;
  font-weight: 700;
  margin-bottom: 6px;
  text-shadow: 0 0 18px color-mix(in srgb, var(--app-accent) 60%, transparent);
}

.welcome-subtitle {
  font-size: 16px;
  color: var(--app-placeholder-color);
}

/* 按钮组 */
.welcome-btn-group {
  display: flex;
  gap: 15px;
  width: 380px;
}

.welcome-btn {
  flex: 1;
  padding: 12px 0;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.25s ease;
  font-weight: 500;
}

/* 主按钮 */
.welcome-primary {
  background: var(--app-accent);
  color: #fff;
  border: none;
}
.welcome-primary:hover {
  background: color-mix(in srgb, var(--app-accent) 80%, #000);
  box-shadow: 0 0 14px color-mix(in srgb, var(--app-accent) 70%, transparent);
}

/* 次按钮 */
.welcome-secondary {
  background: transparent;
  border: 1px solid var(--app-accent);
  color: var(--app-accent);
}
.welcome-secondary:hover {
  background: color-mix(in srgb, var(--app-accent) 8%, transparent);
  box-shadow: 0 0 12px color-mix(in srgb, var(--app-accent) 60%, transparent);
}

/* License 提示卡片 */
.license-card {
  margin-top: 10px;
  padding: 20px;
  background: color-mix(in srgb, var(--app-bg-secondary) 70%, transparent);
  border: 1px solid color-mix(in srgb, var(--app-accent) 40%, transparent);
  border-radius: 12px;
  text-align: left;
  width: 380px;
  color: var(--app-fg);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
}

.license-card h3 {
  color: #ff5c5c;
  font-size: 18px;
  margin-bottom: 12px;
  border-left: 4px solid #ff5c5c;
  padding-left: 8px;
}

.license-card ul {
  padding-left: 18px;
  margin: 0 0 15px 0;
  line-height: 1.6;
}

.license-card li {
  margin: 6px 0;
}

/* 升级按钮 */
.upgrade-btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(90deg, var(--app-accent), color-mix(in srgb, var(--app-accent) 85%, #000));
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  transition: 0.25s;
}
.upgrade-btn:hover {
  background: linear-gradient(90deg, color-mix(in srgb, var(--app-accent) 80%, #000), color-mix(in srgb, var(--app-accent) 70%, #000));
  box-shadow: 0 0 15px color-mix(in srgb, var(--app-accent) 50%, transparent);
}

</style>

