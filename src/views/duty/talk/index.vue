<template>
  <div class="talk duty-item">
    <div class="sec1 overflow">
      <div class="sec-t">老岳的1000场讲座</div>
      <div class="sec-st">点燃一朵朵感统智慧的花朵</div>
      <div class="bg">
        <div class="title">活动背景</div>
        <div class="line" />
        <div class="text">老岳的六个一工程中，一项重要的愿景就是要用10年时间开场1000场公益讲座。面对缺乏感统知识而给孩子造成感统失调的现代家庭，最迫切需要的事情就是去告诉家长关于感觉统合的知识，授予家长必要的感统理论和训练方式，也就是通过家长讲座的方式去往全国各地，不断为各个地方的家长面对面分享感觉统合。</div>
      </div>
      <div class="intro">
        <div class="left">
          <div class="title">活动介绍</div>
          <div class="line" />
          <div class="text">截止2020年末，讲座已经进行了530多场，按照每场平均600人到场观看聆听，老岳已经为近32万名家长讲述感觉统合，最少影响了16万组家庭正视感觉统合，接受感觉统合。在讲座中，岳老师和全国不同地方的家长们亲切的打着招呼，近距离的为大家讲述着儿童大脑工作的逻辑和发育原理，讲述着感觉统合的运行机制，也为大家分享了因为哪些不正确的带养方式而造成的儿童感统失调，特别是讲解到不同感统失调的表现时，家长们纷纷表示找到了自己孩子行为表现的根源，再结合岳老师所解析的造成感统失调表现时，家长恍然大悟是自己的错误带养给孩子的生长发育带来了极大的困扰，也表示要继续加强对感觉统合的学习，以及要和孩子一起开展感统训练。</div>
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
            <div class="year">2014年春</div>
            <div class="month">动漫火车</div>
            <div class="circle" />
            <div class="text">老岳开展第一堂家长课堂，现场家庭28组</div>
          </div>
          <div class="item">
            <div class="year">2018年冬</div>
            <div class="month">山西晋中</div>
            <div class="circle" />
            <div class="text">老岳第413场家长讲座，首次千人讲座达成</div>
          </div>
          <div class="item">
            <div class="year">2019年秋</div>
            <div class="month">江苏扬州</div>
            <div class="circle" />
            <div class="text">老岳第500场家长讲座，现场家庭达1100组</div>
          </div>
          <div class="item">
            <div class="year">2020年10月24日</div>
            <div class="month">浙江杭州</div>
            <div class="circle" />
            <div class="text">老岳第533场家长讲座我们仍在路上……</div>
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
  name: 'DutyTalk',
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
