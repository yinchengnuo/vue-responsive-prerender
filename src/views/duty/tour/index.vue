<template>
  <div class="tour">
    <div class="sec1 overflow">
      <div class="sec-pc-t">本次活动的名称</div>
      <div class="sec-pc-st">老岳讲感统 我们在行动 为幼儿大爱前行</div>
      <div class="bg">
        <div class="title">活动背景</div>
        <div class="line" />
        <div class="text">从 2015 年 4 月起，Ant Design 在蚂蚁金服中后台产品线迅速推广，对接多条业务线，覆盖系统 800 个以上。定位于中台业务的 Ant Design 兼顾专业和非专业的设计人员，具有学习成本低、上手速度快、实现效果好等特点，并且提供从界面设计到前端开发的全链路生态，可以大大提升设计和开发的效率。</div>
      </div>
      <div class="intro">
        <div class="left">
          <div class="title">活动介绍</div>
          <div class="line" />
          <div class="text">从 2015 年 4 月起，Ant Design 在蚂蚁金服中后台产品线迅速推广，对接多条业务线，覆盖系统 800 个以上。定位于中台业务的 Ant Design 兼顾专业和非专业的设计人员，具有学习成本低、上手速度快、实现效果好等特点，并且提供从界面设计到前端开发的全链路生态，可以大大提升设计和开发的效率。</div>
        </div>
        <img src="@/assets/duty/love/1.png">
      </div>
    </div>
    <div class="sec2 overflow">
      <div class="title">发展历程</div>
      <div class="line" />
      <div class="time">
        <div class="line-dash" />
        <div class="content">
          <div class="item">
            <div class="year">2017年</div>
            <div class="month">9月-10月</div>
            <div class="circle" />
            <div class="text">对本次事件的描述，第几期，要哪些地方，参与哪些事情。文本不超过4行。测试文字不超过4行最大承受限度。</div>
          </div>
          <div class="item">
            <div class="year">2017年</div>
            <div class="month">9月-10月</div>
            <div class="circle" />
            <div class="text">对本次事件的描述，第几期，要哪些地方，参与哪些事情。文本不超过4行。测试文字不超过4行最大承受限度。</div>
          </div>
          <div class="item">
            <div class="year">2017年</div>
            <div class="month">9月-10月</div>
            <div class="circle" />
            <div class="text">对本次事件的描述，第几期，要哪些地方，参与哪些事情。文本不超过4行。测试文字不超过4行最大承受限度。</div>
          </div>
          <div class="item">
            <div class="year">2017年</div>
            <div class="month">9月-10月</div>
            <div class="circle" />
            <div class="text">对本次事件的描述，第几期，要哪些地方，参与哪些事情。文本不超过4行。测试文字不超过4行最大承受限度。</div>
          </div>
        </div>
      </div>
    </div>
    <div class="sec3 overflow">
      <div class="title">我们的行动</div>
      <div class="line" />
      <div class="content">
        <div class="left">
          <slider ref="swiper1" class="swiper" :options="swiper1">
            <slideritem v-for="(item, index) in list" :key="index">
              <img :src="item.img">
            </slideritem>
          </slider>
        </div>
        <div class="right" @mouseenter="$refs.swiper2.$emit('autoplayStop')" @mouseleave="$refs.swiper2.$emit('autoplayStart', 5000)">
          <slider ref="swiper2" class="swiper" :options="swiper2" @slide="({ currentPage }) => $refs.swiper1.$emit('slideTo', currentPage)">
            <slideritem v-for="(item, index) in list" :key="index">
              <div class="item">
                <div class="date">{{ item.data }}</div>
                <div class="text">{{ item.text | slice(78) }}</div>
              </div>
            </slideritem>
          </slider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DutyTour',
  data() {
    return {
      swiper1: {
        freeze: true,
        effect: 'fade',
        pagination: false
      },
      swiper2: {
        loop: true,
        autoplay: 5000,
        loopedSlides: 8,
        pagination: false,
        centeredSlides: true,
        direction: 'vertical',
        thresholdDistance: '1',
        thresholdTime: '666666'
      },
      list: [
        { data: '2020年10月', text: '此处为活动事件，活动事件文本最大承受两行，为滚动播放。左图随图变动。此处为活动事件，活动事件文本最大承受两行，为滚动播放。左图随图变动。此处为活动事件，活动事件文本最大承受两行，为滚动播放。左图随图变动。 ', img: require('@/assets/duty/love/1.png') },
        { data: '2020年10月', text: '此处为活动事件，活动事件文本最大承受两行，为滚动播放。左图随图变动。此处为活动事件，活动事件文本最大承受两行，为滚动播放。左图随图变动。此处为活动事件，活动事件文本最大承受两行，为滚动播放。左图随图变动。 ', img: require('@/assets/duty/love/2.png') },
        { data: '2020年10月', text: '此处为活动事件，活动事件文本最大承受两行，为滚动播放。左图随图变动。此处为活动事件，活动事件文本最大承受两行，为滚动播放。左图随图变动。此处为活动事件，活动事件文本最大承受两行，为滚动播放。左图随图变动。 ', img: require('@/assets/duty/love/1.png') },
        { data: '2020年10月', text: '此处为活动事件，活动事件文本最大承受两行，为滚动播放。左图随图变动。此处为活动事件，活动事件文本最大承受两行，为滚动播放。左图随图变动。此处为活动事件，活动事件文本最大承受两行，为滚动播放。左图随图变动。 ', img: require('@/assets/duty/love/2.png') },
        { data: '2020年10月', text: '此处为活动事件，活动事件文本最大承受两行，为滚动播放。左图随图变动。此处为活动事件，活动事件文本最大承受两行，为滚动播放。左图随图变动。此处为活动事件，活动事件文本最大承受两行，为滚动播放。左图随图变动。 ', img: require('@/assets/duty/love/1.png') },
        { data: '2020年10月', text: '此处为活动事件，活动事件文本最大承受两行，为滚动播放。左图随图变动。此处为活动事件，活动事件文本最大承受两行，为滚动播放。左图随图变动。此处为活动事件，活动事件文本最大承受两行，为滚动播放。左图随图变动。 ', img: require('@/assets/duty/love/2.png') }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./pc.scss";
@import "./mo.scss";
</style>
