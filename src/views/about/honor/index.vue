<template>
  <div class="honor overflow">
    <div class="content">
      <div class="left">
        <span :class="{ active: type === 0 }" @click="switc(0)">岳老师荣誉</span>
        <span :class="{ active: type === 1 }" @click="switc(1)">动漫火车荣誉</span>
      </div>
      <div class="cent">
        <slider ref="swiper1" class="swiper" :options="options" @slide="({ currentPage }) => slide(2, currentPage)">
          <slideritem v-for="(item, index) in list" :key="index">
            <img class="right" :src="item.img">
            <span>{{ item.text }}</span>
          </slideritem>
        </slider>
      </div>
      <div class="righ">
        <div class="cont">
          <i class="el-icon-arrow-up" @click="$refs.swiper1.$emit('slidePre')" />
          <div class="swiper-wrapper">
            <slider ref="swiper2" class="swiper" :options="{ ...options, direction: 'vertical', freeze: true }" @slide="({ currentPage }) => slide(1, currentPage)">
              <slideritem v-for="(item,index) in list" :key="index" @tap="$refs.swiper1.$emit('slideTo', index); $refs.swiper2.$emit('slideTo', index)">
                <span>{{ item.text }}</span>
              </slideritem>
            </slider>
          </div>
          <i class="el-icon-arrow-down" @click="$refs.swiper1.$emit('slideNext')" />
        </div>
      </div>
    </div>

    <div class="contentMo">
      <div class="nav">
        <span :class="{ active: type === 0 }" @click="switc(0)">岳老师荣誉</span>
        <span :class="{ active: type === 1 }" @click="switc(1)">动漫火车荣誉</span>
      </div>
      <slider ref="swiper" class="swiper" :options="options">
        <slideritem v-for="(item, index) in list" :key="index">
          <img :src="item.img">
          <span>{{ item.text }}</span>
        </slideritem>
      </slider>
      <div class="split" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutHonor',
  data() {
    return {
      type: 0,
      options: {
        loop: true,
        loopedSlides: 8,
        pagination: false,
        centeredSlides: true,
        thresholdDistance: '1',
        thresholdTime: '666666'
      },
      list: null,
      list1: [
        { img: require('@/assets/about/honor/111.png'), text: '郑州幼专特教专业人才实训基地' },
        { img: require('@/assets/about/honor/222.png'), text: '2018年度极赞口碑奖' },
        { img: require('@/assets/about/honor/333.png'), text: '北京学前教育协会教育创新贡献奖' },
        { img: require('@/assets/about/honor/444.png'), text: '北京学前教育协会感觉统合专业委员会' },
        { img: require('@/assets/about/honor/555.png'), text: '2018中国学前教育百佳机构' },
        { img: require('@/assets/about/honor/666.png'), text: '北京学前教育协会常务副会长单位' }
      ],
      list2: [
        { img: require('@/assets/about/honor/1.png'), text: '年度新教育探索奖' },
        { img: require('@/assets/about/honor/2.png'), text: '2019年度影响力儿童教育人物' },
        { img: require('@/assets/about/honor/3.png'), text: '2018全国公益早教传播大使' },
        { img: require('@/assets/about/honor/4.png'), text: '2015年度最具口碑少儿品牌教育品牌' },
        { img: require('@/assets/about/honor/5.png'), text: '《创新之路》节目组特约嘉宾' },
        { img: require('@/assets/about/honor/6.png'), text: '“第七届中国行业影响力品牌峰会”品牌榜入围企业' },
        { img: require('@/assets/about/honor/7.png'), text: '《创新之路》节目组教育行业合作伙伴' },
        { img: require('@/assets/about/honor/8.png'), text: '2014年度“创业微导师”荣誉称号' },
        { img: require('@/assets/about/honor/9.png'), text: '北京学前教育协会2019年度“学前行业领军人物”' },
        { img: require('@/assets/about/honor/10.png'), text: '北京学前教育协会常务副会长' },
        { img: require('@/assets/about/honor/11.png'), text: '教育扶贫捐赠' },
        { img: require('@/assets/about/honor/12.png'), text: '北京学前教育协会感觉统合专业委员会主任' }
      ]
    }
  },
  mounted() {
    this.switc(0)
  },
  methods: {
    slide(type, index) {
      setTimeout(() => {
        if (index < this.list.length) {
          this.$refs['swiper' + type].$emit('slideTo', index)
        }
      })
    },
    switc(act) {
      this.type = act
      this.list = []
      setTimeout(() => {
        this.list = act ? this.list1 : this.list2
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./pc.scss";
@import "./mo.scss";
</style>
