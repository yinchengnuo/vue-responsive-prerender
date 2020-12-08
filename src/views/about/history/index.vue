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
        <img src="@/assets/index/sec4-prev.png" @click="document.getElementsByClassName('van-tab')[active - 1] && document.getElementsByClassName('van-tab')[active - 1].click()">
        <van-tabs v-model="active" scrollspy swipeable>
          <van-tab v-for="(item, index) in list" :key="index" :title="item.year" />
        </van-tabs>
        <img src="@/assets/index/sec4-next.png" @click="document.getElementsByClassName('van-tab')[active + 1] && document.getElementsByClassName('van-tab')[active + 1].click()">
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

    <div class="contentMo">
      <div class="cont">
        <div class="line">
          <div v-for="index in 4" :key="index" class="item">
            <span v-if="index < 4">{{ list.some(e => e.year === (list[active].year - (2 - index)).toString()) ? (list[active].year - (2 - index)) : '' }}</span>
          </div>
        </div>
        <div class="year">
          <div class="img">
            <img src="@/assets/about/history/year.png">
            <span>{{ list[active].year }}</span>
          </div>
          <div class="text">{{ list[active].text }}</div>
        </div>
      </div>
      <div class="bot">
        <div class="choose">
          <img src="@/assets/index/sec4-prev.png" @click="document.getElementsByClassName('van-tab')[active - 1] && document.getElementsByClassName('van-tab')[active - 1].click()">
          <van-tabs v-model="active" scrollspy swipeable>
            <van-tab v-for="(item, index) in list" :key="index" :title="item.year" />
          </van-tabs>
          <img src="@/assets/index/sec4-next.png" @click="document.getElementsByClassName('van-tab')[active + 1] && document.getElementsByClassName('van-tab')[active + 1].click()">
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
  </div>
</template>

<script>
const list = [
  { year: '2008', text: '动漫火车感统训练中心成立' },
  { year: '2012', text: '会员规模突破280人，单月收入破50万' },
  { year: '2015', text: '北京卡贝迪教育科技有限公司成立，动漫火车感统课程及感统测评研发基地，2015年单月收入破100万' },
  { year: '2016', text: '会员总数达到800多人，实训基地扩展3000平方，年度总业绩突破1000万，2016年8月老岳讲感统栏目开播，观看人数突破300万' },
  { year: '2017', text: '老岳讲感统课程合作模式开始，合作机构半年突破50余家' },
  { year: '2018', text: '北京学前教育协会任命老岳为副会长，北京学前教育协会感统专业委员会成立' },
  { year: '2019', text: '“老岳讲感统”抖音号粉丝突破100万，合作单位达200余家，培训老师5000余人，开展讲座469场' },
  { year: '2020', text: '主角正当时-老岳讲感统正在引领儿童早教下一个篇章' }
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
