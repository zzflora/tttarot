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
                <div>{{ positions[index] }}</div>
                <div>{{ cards[index].name }}</div>
                <div>{{ orientations[index] ? '正位' : '逆位' }}</div>
           </div>
        </div>
      </div>
    </div>

    <!-- 解读 -->
    <div class="interpretation">
        <div v-for="(card, i) in cards" :key="i">
          【{{ positions[i] }}】{{ card.name }}（{{ orientations[i] ? '正位' : '逆位' }}）：
           {{ orientations[i] ? card.meaning : card.reversed }}
        </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { selectedCards } from '../store'
import { userQuestion } from '../store'

// 取数据
const cards = selectedCards

// 控制翻牌
const flipped = ref([false, false, false])
const positions = ["过去", "现在", "未来"]
const flipCard = (index) => {
  flipped.value[index] = true
}

const orientations = ref([true, true, true]) // true=正位

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
const aiResult = ref('正在连接命运之流...')

// onMounted(() => {
//   orientations.value = orientations.value.map(() => Math.random() > 0.5)
// })
onMounted(() => {
  aiResult.value = `你所询问的问题「${userQuestion.value}」，在命运中已有回应。

过去的影响显示为${cards[0].name}，暗示着${cards[0].meaning}。

现在你正处于${cards[1].name}的能量之中，意味着${cards[1].meaning}。

未来的发展指向${cards[2].name}，这预示着${cards[2].meaning}。

整体来看，你正站在一个关键转折点，选择将决定未来的方向。`
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