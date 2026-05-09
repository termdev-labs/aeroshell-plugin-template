<template>
  <div class="welcome-container">
    <div class="welcome-card">
      <div class="welcome-logo">🚀</div>
      <h1>欢迎使用 Aeroshell 插件</h1>
      <p>这是一个基于 Vue 3 的 Aeroshell 插件模板。</p>

      <div class="welcome-tips">
        修改 <code>Welcome.vue</code> 后重新执行 <code>npm run build</code>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 测试插件只保留最小逻辑，避免依赖主程序业务 API
</script>

<style>
.welcome-container {
  width: 100%;
  height: 100%;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: linear-gradient(135deg, #0f172a, #111827);
  color: #e5e7eb;
  box-sizing: border-box;
}

.welcome-card {
  width: 420px;
  max-width: 100%;
  padding: 32px 28px;
  border-radius: 18px;
  text-align: center;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);
}

.welcome-logo {
  font-size: 42px;
  margin-bottom: 14px;
}

.welcome-card h1 {
  margin: 0;
  font-size: 26px;
  font-weight: 700;
}

.welcome-card p {
  margin: 14px 0 0;
  font-size: 15px;
  color: rgba(229, 231, 235, 0.76);
}

.welcome-tips {
  margin-top: 22px;
  padding: 12px;
  border-radius: 10px;
  font-size: 13px;
  color: rgba(229, 231, 235, 0.72);
  background: rgba(255, 255, 255, 0.06);
}

.welcome-tips code {
  color: #93c5fd;
}
</style>