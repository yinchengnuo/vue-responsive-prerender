<template>
  <div class="tour duty-item">
    <div class="sec1 overflow">
      <div class="sec-pc-t">老岳的三尺讲台</div>
      <div class="sec-pc-st">为中国感统教育事业培养后备力量</div>
      <div class="bg">
        <div class="title">活动背景</div>
        <div class="line" />
        <div class="text">做中国感统教育行业的标准化推动者，是老岳的最大愿景。中国不乏感统失调儿童，也存在很多家长对专业感觉统合缺少认知。而能够帮助家长帮助孩子的专业感统教育从业者，还无法匹配上庞大的家庭需求量，针对这样的情况，老岳把培养100万名感统训练老师，视作了自己的责任和目标。</div>
      </div>
      <div class="intro">
        <div class="left">
          <div class="title">活动介绍</div>
          <div class="line" />
          <div class="text">从感觉统合认证研修班、高级班、实战班、测评班中走出的专业感统老师已经有近万人的规模，他们回到各自的城市，在不同的机构中为各地的家庭开展来自老岳的感觉统合训练。然而老岳的目标远不止于此，2019下半年度，老岳来到郑州幼儿师范专科院校，正式开始了他的三尺讲台生涯，从第一学期的几十名学生，到后来每逢开课就是整个阶梯教室爆满，岳老师在新的阵地上继续他推动感统教育事业的征程。</div>
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
            <div class="month">7月</div>
            <div class="circle" />
            <div class="text">岳老师首次用7天时间，培训来自全国各地慕名而来的感统学员。</div>
          </div>
          <div class="item">
            <div class="year">2018年</div>
            <div class="month">5月</div>
            <div class="circle" />
            <div class="text">老岳讲感统商学院正式成立，以培养专业感统训练老师为己任。</div>
          </div>
          <div class="item">
            <div class="year">2019年</div>
            <div class="month">9月</div>
            <div class="circle" />
            <div class="text">老岳走进郑州幼儿师范高等专科院校，和学校联手为社会输出感统人才。</div>
          </div>
          <div class="item">
            <div class="year">2020年</div>
            <div class="month">7月</div>
            <div class="circle" />
            <div class="text">老岳的国内首家标准感觉统合训练场落成，更快更标准的进行感觉统合培训学习。</div>
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
