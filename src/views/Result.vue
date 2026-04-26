<template>
  <div class="result">

    <div class="title">你的命运启示</div>

    <!-- 卡牌展示 -->
    <div class="cards">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="card"
        :class="{ flipped: flipped[index] }"
        @click="flipCard(index)"
      >
        <div class="inner">
          <!-- 背面 -->
          <div class="back">✦</div>

          <!-- 正面 -->
          <div class="front">
            {{ getCardName(card) }}
          </div>
        </div>
      </div>
    </div>

    <!-- 解读 -->
    <div class="interpretation">
      {{ interpretation }}
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { selectedCards } from '../store'

// 取数据
const cards = selectedCards

// 控制翻牌
const flipped = ref([false, false, false])

const flipCard = (index) => {
  flipped.value[index] = true
}

// 模拟卡牌名称
const names = [
  '愚者', '魔术师', '女祭司', '皇后', '皇帝',
  '教皇', '恋人', '战车', '力量', '隐者'
]

const getCardName = (index) => {
  return names[index % names.length]
}

// 解读文本
const interpretation = ref('命运正在向你低语...')

onMounted(() => {
  setTimeout(() => {
    interpretation.value = '你正站在人生的关键节点，选择将决定未来的走向。'
  }, 1500)
})
</script>

<style scoped>
.result {
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
  font-size: 22px;
}

/* 卡牌区域 */
.cards {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
}

/* 卡牌 */
.card {
  width: 80px;
  height: 120px;
  perspective: 1000px;
  cursor: pointer;
}

.inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card.flipped .inner {
  transform: rotateY(180deg);
}

/* 正反面 */
.front, .back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
}

/* 背面 */
.back {
  background: linear-gradient(145deg, #2e1065, #000);
  color: rgba(255,255,255,0.4);
}

/* 正面 */
.front {
  background: #fff;
  color: #000;
  transform: rotateY(180deg);
}

/* 解读 */
.interpretation {
  color: white;
  width: 80%;
  text-align: center;
  line-height: 1.6;
}
</style>