<template>
  <div class="love duty-item">
    <div class="sec1 overflow">
      <div class="sec-t">爱的守望</div>
      <div class="sec-st">让特殊儿童融入社会感统指导公益行</div>
      <div class="bg">
        <div class="title">活动背景</div>
        <div class="line" />
        <div class="text">自2018年春，老岳已经先后举办三季《爱的守望》感统指导公益行。2020年的第三季中，更是和北京市慈善基金会联合，加入了教育工程专项基金中让特殊儿童融入社会这个公益项目，为了用感统帮助更多的家庭，为了让更多感统失调的儿童更好更健康的融入社会。老岳这一季爱的守望，将要用1个月的时间，走访8个省市，为300多组家庭面对面免费测评。</div>
      </div>
      <div class="intro">
        <div class="left">
          <div class="title">活动介绍</div>
          <div class="line" />
          <div class="text">第三季爱的守望从9月15日开始征集，并从8000多个名单中，筛选出最需要老岳帮助的300组家庭，同时对报名未筛选上的家庭开展了线上公益服务。10月9日，老岳的公益团队从郑州出发，先后经山西晋中、河北石家庄、山东济南、安徽合肥、江苏南京、浙江杭州、湖北武汉等站，最后回到河南郑州执行最后一站的公益感统测评。整场公益行中免费测评315个孩子，帮助家长找到了儿童行为表现异常的根源，并做出了训练的指导。同时整场公益行中，老岳连续开展线上直播答疑讲座13场，为共计20多万位家长讲述感统训练知识。</div>
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
          <slider ref="swiper1" class="swiper" :options="swiper1">
            <slideritem v-for="(item, index) in list" :key="index">
              <img :src="item.img">
            </slideritem>
          </slider>
        </div>
        <div class="right">
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

    <div class="contentMo">
      <div class="sec1 overflow">
        <div class="sec-t">爱的守望</div>
        <div class="sec-st">让特殊儿童融入社会感统指导公益行</div>
        <div class="title">活动背景</div>
        <div class="line" />
        <div class="text">自2018年春，老岳已经先后举办三季《爱的守望》感统指导公益行。2020年的第三季中，更是和北京市慈善基金会联合，加入了教育工程专项基金中让特殊儿童融入社会这个公益项目，为了用感统帮助更多的家庭，为了让更多感统失调的儿童更好更健康的融入社会。老岳这一季爱的守望，将要用1个月的时间，走访8个省市，为300多组家庭面对面免费测评。</div>
      </div>
      <div class="split" />
      <div class="sec2 overflow">
        <div class="title">活动介绍</div>
        <div class="line" />
        <div class="text">第三季爱的守望从9月15日开始征集，并从8000多个名单中，筛选出最需要老岳帮助的300组家庭，同时对报名未筛选上的家庭开展了线上公益服务。10月9日，老岳的公益团队从郑州出发，先后经山西晋中、河北石家庄、山东济南、安徽合肥、江苏南京、浙江杭州、湖北武汉等站，最后回到河南郑州执行最后一站的公益感统测评。整场公益行中免费测评315个孩子，帮助家长找到了儿童行为表现异常的根源，并做出了训练的指导。同时整场公益行中，老岳连续开展线上直播答疑讲座13场，为共计20多万位家长讲述感统训练知识。</div>
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
        <slider ref="swiper" class="swiper" :options="{ currentPage: 3, loop: true, thresholdDistance: '1', thresholdTime: '666666' }">
          <slideritem v-for="(item, index) in his" :key="index">
            <div class="yy">{{ item.y }}</div>
            <div class="mm">{{ item.m }}</div>
            <span class="cc" />
            <div class="tt">{{ item.t }}</div>
          </slideritem>
        </slider>
      </div>
      <div class="split" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DutyLove',
  data() {
    return {
      swiper1: {
        freeze: true,
        effect: 'fade',
        pagination: false
      },
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
        { y: '2018年', m: '春', t: '第一季《爱的守望》感统指导公益行出发，在河北走入多组家庭，面对面帮助20余位孩子进行感统测评，并指导家长如何科学育儿，杜绝感统失调。' },
        { y: '2018年', m: '冬', t: '第二季《爱的守望》感统指导公益行先后赴北京、天津、山东等地，帮助近百位孩子找到感统失调原因，并为家长带去感统训练课程和教具，让孩子能够更好更快回归正常生长发育。' },
        { y: '2020年', m: '9月', t: '老岳讲感统向北京市慈善基金会教育工程专项基金捐赠105000元，用以“让特殊儿童融入社会”公益项目。' },
        { y: '2020年', m: '10月', t: '老岳讲感统组建公益行团队，第三季《爱的守望》感统指导公益行出发，同时作为“让特殊儿童融入社会”公益项目的重要活动，先后走过河南、山西、河北、山东、合肥、江苏、浙江、湖北等地，帮助300多组家庭。' }
      ],
      list: [
        { data: '2018年3月', text: '第一季《爱的守望》老岳走进邯郸某家庭为孩子面对面测评指导 ', img: require('@/assets/duty/love/1.png') },
        { data: '2018年11月', text: '第二季《爱的守望》老岳来到山东某家庭为孩子做测评指导 ', img: require('@/assets/duty/love/2.png') },
        { data: '2020年9月', text: '老岳赴京参加“让特殊儿童融入社会”公益项目启动仪式，向北京市慈善基金会捐赠105000元善款 ', img: require('@/assets/duty/love/3.png') },
        { data: '2020年10月', text: '老岳第三季《爱的守望》出发，本次公益行共帮助315组家庭 ', img: require('@/assets/duty/love/4.png') }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./pc.scss";
@import "./mo.scss";
</style>
