<template>
  <div class="index">
    <div class="sec1">
      <video ref="video" src="https://dmhc-admin.oss-cn-beijing.aliyuncs.com/website/366587712495573.6.index.mp4" loop muted />
      <div class="news">
        <span @click="$router.push('/media')">NEWS</span>
        <div class="center">
          <slider class="swiper" :options="{ loop: true, autoplay: 3456, pagination: false, freeze: true }">
            <slideritem v-for="(item, index) in newsList" :key="index" @tap="({ index }) => $router.push({ name: 'MediaArticle', params: { id: newsList[index].id }})">
              {{ item.title | slice(20) }}
            </slideritem>
          </slider>
        </div>
        <span @click="$router.push('/media')">MORE</span>
      </div>
      <div class="mouse">
        <img src="@/assets/index/mouse.png">
        <span>鼠标滚动查看</span>
      </div>

      <img class="mo-center" src="@/assets/index/mo-icon.png">
      <img class="mo-more" src="@/assets/index/mo-more.png">
    </div>
    <div class="sec2">
      <div class="content">
        <div class="left">
          <div class="items">
            <div v-for="(item, index) in sec2.data" :key="index" class="item" :class="{ active: sec2.active === index }">
              <div class="title">{{ item.title }}</div>
              <div class="stitle">{{ item.stitle }}</div>
              <div class="cont">{{ item.cont }}</div>
            </div>
          </div>
          <div class="page-bar" @mouseenter="window.clearInterval(sec2.timer)" @mouseleave="setInterval">
            <div
              v-for="(item, index) in sec2.data"
              :key="index"
              class="page-item"
              :class="{ active: index === sec2.active }"
              @mouseenter="sec2.active = index"
            >{{ item.name }}</div>
          </div>
        </div>
        <div class="right">
          <img :class="{ act: sec2.active === 0 }" src="@/assets/index/sec2-1.png">
          <img :class="{ act: sec2.active === 1 }" src="@/assets/index/sec2-2.png">
          <img :class="{ act: sec2.active === 2 }" src="@/assets/index/sec2-3.png">
        </div>
      </div>
      <div class="mo-content">
        <img src="@/assets/index/mo-ytt.png" class="right">
        <slider ref="sec2SwiperMo" class="swiper" :options="{ ...sec2.options, freeze: false, effect: 'slide', loop: true }" @slide="({ currentPage }) => sec2.active = currentPage">
          <slideritem v-for="(item, index) in sec2.data" :key="index">
            <div class="title sec-t">{{ item.title }}</div>
            <div class="stitle sec-st">{{ item.stitle }}</div>
            <div class="cont">{{ item.cont }}</div>
          </slideritem>
        </slider>
        <div class="page-bar">
          <div
            v-for="(item, index) in sec2.data"
            :key="index"
            class="page-item"
            :class="{ active: index === sec2.active }"
            @click="$refs.sec2SwiperMo.$emit('slideTo', index); sec2.active = index;"
          >{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="split" />

    <div class="sec3 overflow">
      <div class="sec-t">产品与服务 赋能中国早幼教</div>
      <div class="sec-st">结合中国传统家庭教育习惯，推出符合中国国情感统教育体系</div>
      <el-tabs v-model="sec3.active" @tab-click="({ index }) => $refs.sec3Swiper.$emit('slideTo', index - 1)">
        <el-tab-pane label="启语慧声（建设中)" name="-1" disabled />
        <el-tab-pane v-for="(item, index) in sec3.data" :key="index" :label="item.name" :name="index.toString()" />
      </el-tabs>
      <div class="content">
        <slider ref="sec3Swiper" class="swiper" :options="sec3.options" @slide="({ currentPage }) => sec3.active = currentPage.toString()">
          <slideritem>
            <div class="left">
              <div class="top">
                <img src="@/assets/index/sec3-logo1.png">
                <div class="line" />
                <div class="r">
                  <span>线上多平台感统知识传播与训练</span>
                  <span>用标准感统成就孩子美好人生</span>
                </div>
              </div>
              <div class="mid">
                <div><span>12</span>年游学感统教育研发</div>
                <div><span>533</span>场全国感统讲座</div>
              </div>
              <div class="bot">
                <div class="t">服务范围：</div>
                <router-link class="router-link" to="/service/lyjgt">线上儿童感统测评 》</router-link>
                <router-link class="router-link" to="/service/lyjgt">线上儿童感统训练 》</router-link>
                <router-link class="router-link" to="/service/lyjgt">感统商学院 》</router-link>
              </div>
            </div>
            <img class="right" src="@/assets/index/sec3-banner1.jpg">
          </slideritem>
          <slideritem>
            <div class="left">
              <div class="top">
                <img src="@/assets/index/sec3-logo2.png">
                <div class="line" />
                <div class="r">
                  <span>线下儿童感统训练专业机构</span>
                  <span>让每一个孩子因感统训练而精彩</span>
                </div>
              </div>
              <div class="mid">
                <div><span>100</span>名专业感统训练师</div>
                <div><span>20</span>个国际标准感统训练室</div>
              </div>
              <div class="bot">
                <div class="t">服务范围：</div>
                <router-link class="router-link" to="/service/dmhc">线下儿童感统测评 》</router-link>
                <router-link class="router-link" to="/service/dmhc">线下儿童感统训练 》</router-link>
              </div>
            </div>
            <img class="right" src="@/assets/index/sec3-banner2.png">
          </slideritem>
        </slider>
      </div>
      <div class="contentMo">
        <slider ref="sec3SwiperMo" class="swiper" :options="{ ...sec3.options, pagination: true, loop: true, centeredSlides: true }" @slide="({ currentPage }) => sec3.active = currentPage.toString()">
          <slideritem @tap="$router.push('/service/lyjgt')">
            <img class="logo" src="@/assets/index/sec3-logo1.png">
            <img class="top" src="@/assets/index/sec3-banner1.jpg">
            <div class="n">老岳讲感统</div>
            <div class="line">1</div>
            <div class="t">线上多平台感统知识传播与训练</div>
            <div class="links">
              <span>线上儿童感统测评</span>
              <span>线上儿童感统训练</span>
              <span>感统商学院</span>
            </div>
            <div class="bot">
              <div class="i">
                <div class="num"><span>533</span>场</div>
                <div class="name">全国感统讲座</div>
              </div>
              <div class="i">
                <div class="num"><span>12</span>年</div>
                <div class="name">游学专注感统教育研发</div>
              </div>
            </div>
          </slideritem>
          <slideritem @tap="$router.push('/service/dmhc')">
            <img class="logo" src="@/assets/index/sec3-logo2.png">
            <img class="top" src="@/assets/index/sec3-banner2.png">
            <div class="n">动漫火车感统</div>
            <div class="line">1</div>
            <div class="t">线下儿童感统训练专业机构</div>
            <div class="links">
              <span>线下儿童感统测评</span>
              <span>线下儿童感统训练</span>
            </div>
            <div class="bot">
              <div class="i">
                <div class="num"><span>100</span>名</div>
                <div class="name">专业感统训练师</div>
              </div>
              <div class="i">
                <div class="num"><span>20</span>个</div>
                <div class="name">国际标准感统训练室</div>
              </div>
            </div>
          </slideritem>
        </slider>
      </div>
    </div>
    <div class="split" />
    <div class="sec4 overflow">
      <header>
        <div class="left">
          <img src="@/assets/index/sec4-mark.png">
          <span>让感统失调儿童融入社会 用标准感统成就美好人生。</span>
        </div>
        <div class="right">
          <img src="@/assets/index/sec4-prev.png" @click="$refs.sec4Swiper.$emit('slidePre')">
          <img src="@/assets/index/sec4-next.png" @click="$refs.sec4Swiper.$emit('slideNext')">
        </div>
      </header>
      <div class="content">
        <div class="index">0{{ +sec4.active + 1 }}</div>
        <slider ref="sec4Swiper" class="swiper" :options="sec4.options" @slide="({ currentPage }) => sec4.active = (currentPage < sec4.data.length ? currentPage.toString() : sec4.data.length - 1)">
          <slideritem v-for="(item, index) in sec4.data" :key="index" @tap="$router.push(item.to)">
            <div class="inner" @mousemove="e => { sec4.top = e.offsetY; sec4.left = e.offsetX }">
              <div class="bg" />
              <div class="text">{{ item.text }}</div>
              <div class="move" :style="{ top: sec4.top - 120 + 'px', left: sec4.left - 120 + 'px' }" />
              <img :src="item.banner">
            </div>
          </slideritem>
        </slider>
      </div>
      <div class="contentMo overflow">
        <div class="sec-t">老岳讲感统 我们在行动</div>
        <div class="sec-st">结合中国传统家庭教育习惯，推出符合中国国情感统教育体系</div>
        <slider class="swiper" :options="sec4.options">
          <slideritem v-for="(item, index) in sec4.data" :key="index" @tap="$router.push(item.to)">
            <img :src="item.banner">
            <div class="text">{{ item.text }}</div>
          </slideritem>
        </slider>
      </div>
    </div>
    <div class="split" />
    <div class="sec5 overflow">
      <div class="sec-t">公司新闻 为幼儿大爱前行</div>
      <div class="sec-st">为中国感统教育事业发展贡献力量</div>
      <div class="content">
        <div class="poster">
          <img v-for="(item, index) in newsList" :key="index" :src="item.pic" :class="{ active: sec5.active === index }">
        </div>
        <div class="list">
          <div v-for="(item, index) in newsList" :key="index" class="item" @mouseenter="sec5.active = index">
            <div class="date"><span>{{ ((new Date(item.create_time)).getDate()).toString().padStart(2, '0') }}</span> /{{ ((new Date(item.create_time)).getMonth() + 1).toString().padStart(2, '0') }}</div>
            <div class="title" @click="$router.push({ name: 'MediaArticle', params: { id: item.id }})">{{ item.title }}</div>
          </div>
        </div>
      </div>
      <div class="contentMo">
        <div v-for="(item, index) in newsList" :key="index" class="item">
          <div class="left">
            <div class="tag">公司动态</div>
            <div class="title" @click="$router.push({ name: 'MediaArticle', params: { id: item.id }})">{{ item.title | slice(26) }}</div>
            <div class="date">{{ ((new Date(item.create_time)).getMonth() + 1).toString().padStart(2, '0') }}月{{ ((new Date(item.create_time)).getDate()).toString().padStart(2, '0') }}，{{ (new Date(item.create_time)).getFullYear() }}</div>
          </div>
          <img :src="item.pic" class="poster">
        </div>
      </div>
    </div>
    <div class="split" />
    <div class="join-now">
      <img class="bg" src="@/assets/index/footer.jpg">
      <div class="title">与老岳一起，与感统教育同行，全国招募合作伙伴</div>
      <div class="join" @click="$d">立即报名</div>
    </div>
  </div>
</template>

<script>
import { api_index } from '@/api'
export default {
  name: 'Index',
  data() {
    return {
      newsList: [],
      sec2: {
        timer: null,
        active: 0,
        data: [
          { name: '过去', title: '过去·老岳 ', stitle: '十余年深耕感统教育一线，铸就行业王者风范', cont: '自2008年来，老岳讲感统和动漫火车始终坚持在儿童感统训练一线，每年帮助数以万计的儿童摆脱感统失调困扰，并总结研发出可作为行业执行标准的感统训练体系。同时，自主创办的老岳讲感统自媒体平台，无论感统训练课程数量、会员人数、媒体粉丝人数，均达到全国第一的成绩。在中国，提起感统训练，就离不开老岳讲感统！' },
          { name: '现在', title: '现在·老岳 ', stitle: '三驾马车并驾齐驱推动感统行业标准', cont: '动漫火车儿童感统训练中心，作为全国感统教育行业的标准旗舰店，迎来全国家长、同行的一致认可；老岳讲感统商学院，开设有针对感统机构不同岗位的学习培训课程，已为行业输送人才超6000余人；老岳讲感统自媒体平台，为家长和儿童提供可在家庭学习训练的不同训练课程十余种，累计粉丝超400万人，在训会员超过50万组家庭。覆盖了线上线下和行业培训的三驾马车，正在推动中国感统教育事业的标准化推广。' },
          { name: '未来', title: '未来·老岳 ', stitle: '用标准感统成就更多美好人生', cont: '成立党支部在党的领导下光荣前进；联合北京学前教育协会推动感统行业标准化；联合北京市慈善基金会推动公益感统事业；联合当地幼儿师范院校培养感统人才梯队……老岳已经做得事很多，正要做的事更多，在这条无尽的征程上，将有更多的人不断加入进来，也将不断的把感统智慧传递给更多家庭，用标准感统成就更多美好人生。' }
        ]
      },
      sec3: {
        active: 0,
        options: {
          pagination: false
        },
        data: [
          { name: '老岳讲感统' },
          { name: '动漫火车感统' }
        ]
      },
      sec4: {
        top: 0,
        left: 0,
        active: 0,
        options: {
          loop: true,
          pagination: false,
          centeredSlides: true
        },
        data: [
          { text: '《爱的守望》公益行 ', banner: require('@/assets/index/sec4-banner1.jpg'), to: '/duty/love' },
          { text: '老岳的1000场讲座 ', banner: require('@/assets/index/sec4-banner2.png'), to: '/duty/talk' },
          { text: '老岳的三尺讲台 ', banner: require('@/assets/index/sec4-banner3.png'), to: '/duty/tour' }
        ]
      },
      sec5: {
        active: 0,
        options: {
          freeze: true,
          effect: 'fade',
          pagination: false
        }
      }
    }
  },
  activated() {
    this.$refs.video.play()
  },
  mounted() {
    this.setInterval()
    api_index({ newsTypeId: 1, page: 1, limit: 4 }).then(res => {
      this.newsList = res.data.data.list
    })
  },
  methods: {
    setInterval() {
      this.sec2.timer = setInterval(() => {
        if (this.sec2.active === 2) {
          this.sec2.active = 0
        } else {
          this.sec2.active++
        }
      }, 3333)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./pc.scss";
@import "./mo.scss";
</style>
