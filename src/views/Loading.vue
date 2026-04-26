<template>
  <div class="loading">

    <!-- 背景光晕 -->
    <div class="glow"></div>

    <!-- 水晶球 -->
    <div class="crystal"></div>

    <!-- 文案 -->
    <div class="text">
      命运正在显现...
    </div>

  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.push('/result')
  }, 2500) // 2.5秒后跳转
})
</script>

<style scoped>
.loading {
  height: 100vh;
  background: radial-gradient(circle at top, #2b0a3d, #000);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}

/* 背景光晕 */
.glow {
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(168,85,247,0.4), transparent);
  filter: blur(100px);
}

/* 水晶球 */
.crystal {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: radial-gradient(circle, #c084fc, #4c1d95);
  box-shadow: 
    0 0 40px rgba(192,132,252,0.7),
    inset 0 0 20px rgba(255,255,255,0.3);

  animation: rotate 6s linear infinite, pulse 2s ease-in-out infinite;
}

/* 旋转动画 */
@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 呼吸发光 */
@keyframes pulse {
  0%,100% { box-shadow: 0 0 30px rgba(192,132,252,0.6); }
  50% { box-shadow: 0 0 60px rgba(192,132,252,1); }
}

/* 文案 */
.text {
  margin-top: 40px;
  color: white;
  font-size: 18px;
  letter-spacing: 2px;
  opacity: 0.85;
  animation: fade 2s ease-in-out infinite;
}

/* 文字闪烁 */
@keyframes fade {
  0%,100% { opacity: 0.4; }
  50% { opacity: 1; }
}
</style>