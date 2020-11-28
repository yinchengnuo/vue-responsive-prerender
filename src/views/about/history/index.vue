<template>
  <div class="history">
    <div class="content">
      <div class="line">
        <div v-for="index in 5" :key="index" class="item">
          <span v-if="(index === 1 || index === 2) && list[active].year - (3 - index) >= +list[0].year" :class="{ sec: index === 2 }">{{ list[active].year - (3 - index) }}</span>
        </div>
      </div>
      <div class="year">
        <div class="num">{{ list[active].year }}</div>
        <div class="img">
          <img src="@/assets/about/history/year.png">
          <span>{{ list[active].year }}</span>
        </div>
        <div class="text">{{ list[active].text }}</div>
      </div>
    </div>
    <div class="years">
      <div class="choose" @mousemove="e => e.target.className.includes('van-tab') && e.target.click()">
        <img src="@/assets/index/sec4-prev.png" @click="document.getElementsByClassName('van-tab')[active - 1].click()">
        <van-tabs v-model="active" scrollspy swipeable>
          <van-tab v-for="(item, index) in list" :key="index" :title="item.year" />
        </van-tabs>
        <img src="@/assets/index/sec4-next.png" @click="document.getElementsByClassName('van-tab')[active + 1].click()">
      </div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="wave">
        <path>
          <animate
            attributeName="d"
            values="M0,50 A50,200 0 0,1 50,50 A50,200 0 0,0 100,50 L100,100 L0,100;    M0,60 A50,50 0 0,1 50,50 A50,50 0 0,0 100,50 L100,100 L0,100;    M0,50 A50,200 0 0,1 50,50 A50,200 0 0,0 100,50 L100,100 L0,100"
            dur="8s"
            repeatCount="indefinite"
            rotate="auto"
          />
        </path>
        <path>
          <animate
            attributeName="d"
            values="M0,50 A50,150 0 0,0 40,50 A50,100 0 0,1 100,50 L100,100 L0,100; M0,30 A50,300 0 0,0 40,50 A50,150 0 0,1 100,50 L100,100 L0,100; M0,50 A50,150 0 0,0 40,50 A50,100 0 0,1 100,50 L100,100 L0,100"
            dur="6s"
            repeatCount="indefinite"
            rotate="auto"
          />
        </path>
      </svg>
    </div>
  </div>
</template>

<script>
const list = [
  { year: '2008', text: '会员规模突破200800人，单月收入破2008万。' },
  { year: '2009', text: '会员规模突破200900人，单月收入破2009万。' },
  { year: '2010', text: '会员规模突破201000人，单月收入破2010万。' },
  { year: '2011', text: '会员规模突破201100人，单月收入破2011万。' },
  { year: '2012', text: '会员规模突破201200人，单月收入破2012万。' },
  { year: '2013', text: '会员规模突破201300人，单月收入破2013万。' },
  { year: '2014', text: '会员规模突破201400人，单月收入破2014万。' },
  { year: '2015', text: '会员规模突破201500人，单月收入破2015万。' },
  { year: '2016', text: '会员规模突破201600人，单月收入破2016万。' },
  { year: '2017', text: '会员规模突破201700人，单月收入破2017万。' },
  { year: '2018', text: '会员规模突破201800人，单月收入破2018万。' },
  { year: '2019', text: '会员规模突破201900人，单月收入破2019万。' },
  { year: '2020', text: '会员规模突破202000人，单月收入破2020万。' }
]
export default {
  name: 'AboutHistory',
  data() {
    return {
      active: list.length - 1,
      options: {
        pagination: false,
        currentPage: list.length
      },
      list
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./pc.scss";
@import "./mo.scss";
</style>
