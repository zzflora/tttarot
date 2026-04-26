<template>
  <div class="draw">

    <!-- 标题 -->
    <div class="title">选择三张命运之牌</div>

    <!-- 卡牌区域 -->
    <div
       class="card-area"
       @touchstart="onTouchStart"
       @touchmove="onTouchMove"
       @mousedown="onMouseDown"
       @mousemove="onMouseMove"
       @mouseup="onMouseUp"
       @mouseleave="onMouseUp"
    >
      <div
         v-for="item in visibleCards"
         :key="item.index"
         class="card"
         :style="getCardStyle(item.index)"
         :class="{ selected: selectedCards.includes(item.index) }"
         @click="selectCard(item.index)"
        >
          ✦
        </div>
    </div>
    

    <!-- 已选提示 -->
    <div class="selected-count">
      已选择：{{ selectedCards.length }} / 3
    </div>

  </div>
</template>

<script setup>
let moved = false
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { selectedCards as globalSelected } from '../store'

const offsetX = ref(0)
let startX = 0

let isDragging = false

const onMouseDown = (e) => {
  isDragging = true
  startX = e.clientX
}

const onMouseMove = (e) => {
  if (!isDragging) return
  moved = true
  const moveX = e.clientX
  offsetX.value += (moveX - startX) * 0.1
  startX = moveX
  offsetX.value = Math.max(-39, Math.min(39, offsetX.value))
}

const onMouseUp = () => {
  isDragging = false
}
const onTouchStart = (e) => {
  startX = e.touches[0].clientX
}

const onTouchMove = (e) => {
  moved = true
  const moveX = e.touches[0].clientX
  offsetX.value += (moveX - startX) * 0.1
  startX = moveX
  offsetX.value = Math.max(-39, Math.min(39, offsetX.value))
}

const centerIndex = 39  // 中间卡牌位置（78张的话大概是39）

const getCardStyle = (index) => {
  const offset = index - centerIndex + offsetX.value

  const x = offset * 60
  const y = Math.abs(offset) * 15
  const rotate = offset * 8

  // ⭐ 距离中心的“强度”
  const distance = Math.abs(offset)

  // ⭐ 缩放（越远越小）
  const scale = 1 - distance * 0.1

  // ⭐ 透明度（越远越暗）
  const opacity = 1 - distance * 0.15

  const brightness = 1 - distance * 0.2

  return {
    left: `calc(50% + ${x}px - 35px)`,
    top: `${80 + y}px`,
    transform: `rotate(${rotate}deg) scale(${scale})`,
    opacity: opacity,
    zIndex: 100 - distance,
    filter: `brightness(${brightness})`,
  }
}
const router = useRouter()

// 模拟 78张牌
const cards = ref(Array.from({ length: 78 }, (_, i) => i))

onMounted(() => {
  console.log('cards.length', cards.value.length)
})
// 选中的卡牌
const selectedCards = ref([])

const selectCard = (index) => {
  if (moved) {
    moved = false
    return
  }

  if (selectedCards.value.includes(index)) return

  if (selectedCards.value.length < 3) {
    selectedCards.value.push(index)
  }

  if (selectedCards.value.length === 3) {
    // 👇 存到全局
    globalSelected.value = [...selectedCards.value]

    setTimeout(() => {
      router.push('/loading')
    }, 800)
  }
}

const visibleCards = computed(() => {
  const range = 8  // 左右各显示8张（共17张）

  const center = centerIndex - offsetX.value

  return cards.value
    .map((card, index) => ({ card, index }))
    .filter(item => Math.abs(item.index - center) < range)
})

</script>

<style scoped>
.draw {
  height: 100vh;
  background: radial-gradient(circle at top, #2b0a3d, #000);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* 标题 */
.title {
  color: white;
  margin-bottom: 40px;
  font-size: 20px;
  letter-spacing: 2px;
}

/* 卡牌区域 */
.card-area {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;

}

/* 卡牌样式 */
.card {
  position: absolute;

  width: 70px;
  height: 110px;
  border-radius: 10px;

  background: linear-gradient(145deg, #2e1065, #000);
  border: 1px solid rgba(255,255,255,0.2);

  display: flex;
  align-items: center;
  justify-content: center;

  color: rgba(255,255,255,0.3);
  font-size: 18px;

  cursor: pointer;
  transition: all 0.3s ease;
  filter: brightness(0.7);
}

/* 中间符号 */
.card::after {
  content: "✦";
  position: absolute;
  color: rgba(255,255,255,0.3);
  font-size: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* hover效果 */
.card:hover {
  filter: brightness(1.2);
}

/* 选中状态 */
.card.selected {
  transform: translateY(-30px) scale(1.1);
  box-shadow: 0 0 20px rgba(168,85,247,0.8);
}

/* 底部提示 */
.selected-count {
  margin-top: 30px;
  color: white;
}
</style>
