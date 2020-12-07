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
        <img src="@/assets/duty/talk/1.png">
      </div>
    </div>
    <div class="sec2 overflow">
      <div class="title">发展历程</div>
      <div class="line" />
      <div class="time">
        <div class="line-dash" />
        <div class="content">
          <div v-for="(item, index) in his" :key="index" class="item">
            <div class="year">{{ item.y }}</div>
            <div class="month">{{ item.m }}</div>
            <div class="circle" />
            <div class="text">{{ item.t }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="sec3 overflow">
      <div class="title">我们的行动</div>
      <div class="line" />
      <div class="content">
        <div class="left">
          <img v-for="(item, index) in list" :key="index" :src="item.img" :class="{ active: index === activePc }">
        </div>
        <div class="right">
          <slider ref="swiper2" class="swiper" :options="swiper2" @slide="({ currentPage }) => activePc = currentPage">
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

    <div class="contentMo">
      <div class="sec1 overflow">
        <div class="sec-t">老岳的1000场讲座</div>
        <div class="sec-st">点燃一朵朵感统智慧的花朵</div>
        <div class="title">活动背景</div>
        <div class="line" />
        <div class="text">老岳的六个一工程中，一项重要的愿景就是要用10年时间开场1000场公益讲座。面对缺乏感统知识而给孩子造成感统失调的现代家庭，最迫切需要的事情就是去告诉家长关于感觉统合的知识，授予家长必要的感统理论和训练方式，也就是通过家长讲座的方式去往全国各地，不断为各个地方的家长面对面分享感觉统合。</div>
      </div>
      <div class="split" />
      <div class="sec2 overflow">
        <div class="title">活动介绍</div>
        <div class="line" />
        <div class="text">截止2020年末，讲座已经进行了530多场，按照每场平均600人到场观看聆听，老岳已经为近32万名家长讲述感觉统合，最少影响了16万组家庭正视感觉统合，接受感觉统合。在讲座中，岳老师和全国不同地方的家长们亲切的打着招呼，近距离的为大家讲述着儿童大脑工作的逻辑和发育原理，讲述着感觉统合的运行机制，也为大家分享了因为哪些不正确的带养方式而造成的儿童感统失调，特别是讲解到不同感统失调的表现时，家长们纷纷表示找到了自己孩子行为表现的根源，再结合岳老师所解析的造成感统失调表现时，家长恍然大悟是自己的错误带养给孩子的生长发育带来了极大的困扰，也表示要继续加强对感觉统合的学习，以及要和孩子一起开展感统训练。</div>
        <img class="b" src="@/assets/duty/love/1.png">
      </div>
      <div class="split" />
      <div class="sec3 overflow">
        <div class="title">发展历程</div>
        <div class="line" />
        <slider ref="swiper" class="swiper1" :options="{ currentPage: 3, loop: true, thresholdDistance: '1', thresholdTime: '666666' }">
          <slideritem v-for="(item, index) in his" :key="index">
            <div class="yy">{{ item.y }}</div>
            <div class="mm">{{ item.m }}</div>
            <span class="cc" />
            <div class="tt">{{ item.t }}</div>
          </slideritem>
        </slider>
      </div>
      <div class="split" />
      <div class="sec4 overflow">
        <div class="title">我们的行动</div>
        <div class="line" />
        <div class="swiper-wrapper">
          <div class="img">
            <img v-for="(item, index) in list" :key="index" :src="item.img" :class="{ active: index === activeMo }">
          </div>
          <slider class="swiperMo" :options="swiper2" @slide="({ currentPage }) => activeMo = currentPage">
            <slideritem v-for="(item, index) in list" :key="index">
              <div class="yy">{{ item.data }}</div>
              <div class="tt">{{ item.text }}</div>
            </slideritem>
          </slider>
        </div>
      </div>
      <div class="split" />
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
      activePc: 0,
      activeMo: 0,
      swiper2: {
        loop: true,
        autoplay: 3000,
        loopedSlides: 8,
        pagination: false,
        centeredSlides: true,
        direction: 'vertical',
        thresholdDistance: '1',
        thresholdTime: '666666'
      },
      his: [
        { y: '2014年春', m: '动漫火车', t: '老岳开展第一堂家长课堂，现场家庭28组' },
        { y: '2018年冬', m: '山西晋中', t: '老岳第413场家长讲座，首次千人讲座达成' },
        { y: '2019年秋', m: '江苏扬州', t: '老岳第500场家长讲座，现场家庭达1100组' },
        { y: '2020年10月24日', m: '浙江杭州', t: '老岳第533场家长讲座我们仍在路上……' }
      ],
      list: [
        { data: '2020年9月', text: '郑州动漫火车 老岳举行第526期家长讲座 ', img: require('@/assets/duty/talk/1.png') },
        { data: '2020年10月', text: '山西动漫火车 老岳举行第531场家长讲座 ', img: require('@/assets/duty/talk/2.png') },
        { data: '2020年10月', text: '合肥艾米乐贝 老岳开展第532场家长讲座 ', img: require('@/assets/duty/talk/1.png') },
        { data: '2020年10月', text: '杭州花儿朵朵 老岳举行第533场家长讲座 ', img: require('@/assets/duty/talk/2.png') }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./pc.scss";
@import "./mo.scss";
</style>
