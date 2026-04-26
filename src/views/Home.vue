<template>
  <div class="home">
    <!-- 背景光晕 -->
    <div class="glow"></div>

    <!-- 水晶球 -->
    <div class="crystal"></div>

    <!-- 标题 -->
    <h1 class="title">Tarot Oracle</h1>

    <!-- 按钮 -->
    <button class="start-btn" @click="goDraw">
      ✦ 缘起占卜 ✦
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goDraw = () => {
  router.push('/draw')
}
</script>

<style scoped>
.home {
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
  top: 10%;
  filter: blur(80px);
}

/* 水晶球 */
.crystal {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: radial-gradient(circle, #c084fc, #4c1d95);
  box-shadow: 
    0 0 30px rgba(192,132,252,0.6),
    inset 0 0 20px rgba(255,255,255,0.2);
  margin-bottom: 40px;
  animation: float 4s ease-in-out infinite;
}

/* 漂浮动画 */
@keyframes float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* 标题 */
.title {
  color: white;
  font-size: 28px;
  margin-bottom: 30px;
  letter-spacing: 2px;
  opacity: 0.9;
  font-family: 'Cinzel', serif;
}

/* 玻璃按钮 */
.start-btn {
  padding: 14px 40px;
  font-size: 16px;
  color: white;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.2);
  backdrop-filter: blur(12px);
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.start-btn:hover {
  background: rgba(255,255,255,0.18);
  transform: scale(1.05);
}
</style>