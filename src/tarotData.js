export const tarotDeck = [
  { name: "愚者", meaning: "新的开始、自由、冒险", reversed: "冲动、迷茫、不负责任" },
  { name: "魔术师", meaning: "创造力、行动力、掌控", reversed: "欺骗、操控、资源浪费" },
  { name: "女祭司", meaning: "直觉、潜意识、神秘", reversed: "隐藏、迷惑、不安" },
  { name: "皇后", meaning: "丰盛、母性、创造", reversed: "依赖、懒散、失衡" },
  { name: "皇帝", meaning: "权威、结构、控制", reversed: "专制、固执、压迫" },
  { name: "教皇", meaning: "信仰、传统、指导", reversed: "叛逆、盲从、束缚" },
  { name: "恋人", meaning: "关系、选择、契合", reversed: "冲突、不一致、犹豫" },
  { name: "战车", meaning: "前进、胜利、意志", reversed: "失控、冲突、失败" },
  { name: "力量", meaning: "勇气、耐心、内在力量", reversed: "软弱、自我怀疑" },
  { name: "隐者", meaning: "内省、寻找真理", reversed: "孤立、逃避" },
  { name: "命运之轮", meaning: "变化、循环、转机", reversed: "停滞、不顺" },
  { name: "正义", meaning: "公平、真相、因果", reversed: "偏见、不公" },
  { name: "倒吊人", meaning: "等待、牺牲、转变", reversed: "抗拒、拖延" },
  { name: "死神", meaning: "结束、重生、转变", reversed: "抗拒改变" },
  { name: "节制", meaning: "平衡、融合、调和", reversed: "失衡、过度" },
  { name: "恶魔", meaning: "欲望、束缚、诱惑", reversed: "释放、觉醒" },
  { name: "高塔", meaning: "崩塌、冲击、觉醒", reversed: "避免灾难、延迟变化" },
  { name: "星星", meaning: "希望、治愈、指引", reversed: "失望、迷失" },
  { name: "月亮", meaning: "幻想、不安、潜意识", reversed: "真相显现" },
  { name: "太阳", meaning: "成功、快乐、光明", reversed: "短暂的低落" },
  { name: "审判", meaning: "觉醒、重生、召唤", reversed: "自我怀疑" },
  { name: "世界", meaning: "完成、圆满、成就", reversed: "未完成、停滞" }
]

const suits = ["权杖", "圣杯", "宝剑", "星币"]

for (let suit of suits) {
  for (let i = 1; i <= 14; i++) {
    tarotDeck.push({
      name: `${suit}${i}`,
      meaning: `${suit}的能量影响`,
      reversed: `${suit}的失衡状态`
    })
  }
}