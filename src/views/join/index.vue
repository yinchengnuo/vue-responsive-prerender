<template>
  <div class="join">
    <img src="@/assets/join/1.png" class="banner">
    <div class="content">
      <div class="sec1">
        <div class="title move-in">携手老岳讲感统   共掘早教万亿市场</div>
        <div class="subtitle move-in">—————    market expectation   —————</div>
        <div class="content">
          <video ref="bgVideo" class="move-in" src="@/assets/join/wave.mp4" muted autoplay loop />
          <div class="text move-in">目前中国2~10岁儿童约有1.54亿，每年新出生人口2000万，随着二胎政策的开放，新生人口的数量还将增加。超过80%的儿童存在不同程度的感统失调，50%的儿童存在专注力弱的问题，40%的儿童存在重度感统失调。</div>
        </div>
      </div>
      <div class="sec2">
        <div class="title move-in">加盟课程·我们的优势</div>
        <div class="subtitle move-in">—————    Our advantage   —————</div>
        <div class="info move-in">
          <div v-for="(item, index) in sec2List" :key="index" class="info-item move-in">
            <img :src="item.icon">
            <div class="texts">
              <div class="title move-in">{{ item.title }}</div>
              <div class="subtitle move-in">{{ item.subtitle }}</div>
            </div>
          </div>
        </div>
        <div class="join" @click="$d">立即加入</div>
      </div>
      <div class="sec3">
        <div class="title move-in">加盟课程·丰富的合作模块</div>
        <div class="subtitle move-in">—————    Course joining   —————</div>
        <div class="content">
          <div class="tab-wrapper move-in">
            <el-tabs v-model="sec3ListIndex">
              <el-tab-pane v-for="(item, index) in sec3List" :key="index" :label="item.title" :name="index.toString()">
                <div slot="label" class="tab-item move-in">
                  <img v-if="+sec3ListIndex === index" :src="item.iconAct" class="move-in">
                  <img v-else :src="item.icon" class="move-in">
                  <span class="title move-in">{{ item.title }}</span>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div class="tab-line move-in" />
          <div class="tab-content">
            <img src="@/assets/join/mou-pre.png" @click="$refs.sec3Swiper.$emit('slidePre')">
            <slider ref="sec3Swiper" class="swiper move-in" :options="{ pagination: false, freeze: true, speed: 1000 }" @slide="({ currentPage }) => sec3ListIndex = currentPage.toString()">
              <slideritem v-for="(item, index) in sec3List" :key="index" class="swiper-slide">
                <div class="info">
                  <div class="img">
                    <img :src="item.iconAct">
                  </div>
                  <div class="titles">
                    <span class="title">{{ item.title }}</span>
                    <span class="subtitle">{{ item.subtitle }}</span>
                  </div>
                </div>
                <div class="contents">
                  <div class="left">
                    <div v-for="(itemm, indexx) in item.list" :key="indexx" class="left-item">
                      <div class="title">{{ itemm.title }}</div>
                      <div class="subtitle">{{ itemm.subtitle }}</div>
                    </div>
                  </div>
                  <img :src="item.img">
                </div>
              </slideritem>
            </slider>
            <img src="@/assets/join/mou-next.png" @click="$refs.sec3Swiper.$emit('slideNext')">
          </div>
        </div>
      </div>
      <div class="sec4">
        <div class="title move-in">加盟课程·合作条件</div>
        <div class="subtitle move-in">—————    Cooperation conditions   —————</div>
        <div class="sec4-content">
          <img src="@/assets/join/mou-pre.png" @click="() => (+sec4ListIndex > 0) && $refs.sec4Swiper.$emit('slideTo', sec4ListIndex - 1)">
          <slider ref="sec4Swiper" class="swiper move-in" :options="{ pagination: false, freeze: true }" @slide="({ currentPage }) => sec4ListIndex = currentPage.toString()">
            <slideritem v-for="(item, index) in sec4List" :key="index" class="swiper-slide">
              <img class="move-in" :src="item.img">
              <span class="move-in">{{ item.text }}</span>
            </slideritem>
          </slider>
          <img src="@/assets/join/mou-next.png" @click="() => (+sec4ListIndex < (sec4List.length - 4)) && $refs.sec4Swiper.$emit('slideTo', +sec4ListIndex + 1)">
        </div>
      </div>
      <div class="sec5">
        <div class="title move-in">加盟课程·加盟流程</div>
        <div class="subtitle move-in">—————    Joining process   —————</div>
        <img class="move-in" src="@/assets/join/progress.png">
      </div>
      <div class="sec6">
        <div class="title move-in">加盟课程·全方位的支持</div>
        <div class="subtitle move-in">—————    Full support   —————</div>
        <div class="content">
          <div class="tab-wrapper move-in">
            <el-tabs v-model="sec6ListIndex">
              <el-tab-pane v-for="(item, index) in sec6List" :key="index" :label="item.title" :name="index.toString()">
                <div slot="label" class="tab-item move-in">
                  <img v-if="+sec6ListIndex === index" :src="item.iconAct" class="move-in">
                  <img v-else :src="item.icon" class="move-in">
                  <span class="title move-in">{{ item.title }}</span>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div class="tab-line move-in" />
          <div class="tab-content move-in">
            <div v-for="(item, index) in sec6List" :key="index" class="tab-content-item">
              <transition name="fade" mode="in-out">
                <div v-if="index == sec6ListIndex" class="tab-content-item-wrapper">
                  <slider ref="sec6Swiper" class="swiper" :options="{ pagination: false, loopedSlides: 24, centeredSlides: true, thresholdTime: '999999', loop: true, autoplay: 2000 }">
                    <slideritem v-for="(itemm, indexx) in item.list" :key="indexx" class="swiper-slide" :class="{ logo: index === 2 }">
                      <img :src="itemm.img" :class="{ logo: index === 2 }">
                      <span v-if="index !== 2" class="text">{{ itemm.text }}</span>
                      <!-- <span class="date">{{ itemm.date }}</span> -->
                    </slideritem>
                  </slider>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sec3List from './mou'
import sec4List from './cond'
import sec6List from './sup'
export default {
  name: 'Join',
  data() {
    return {
      enter: false,
      openIndex: 2,
      mosec2List: [
        { icon: require('@/assets/join/molong1.png'), title: '品牌优势', subtitle: '500万次测评案例,1000万业绩创收,3000平实训基地,5000名幼儿教学特例。' },
        { icon: require('@/assets/join/molong2.png'), title: '课程优势', subtitle: '感统七大核心能力、感统训练师必备八大理论系统、幼儿八大问题训练纲要。' },
        { icon: require('@/assets/join/molong3.png'), title: '体系优势', subtitle: '评估-训练-再评估-再训练，一流的课程反馈效果，定期升级。' },
        { icon: require('@/assets/join/molong4.png'), title: '团队优势', subtitle: '由岳明途领衔包含教学、运营、顾问成立的专家团队，负责感统训练师的常规培训和业务指导。' },
        { icon: require('@/assets/join/molong5.png'), title: '服务优势', subtitle: '周期性感统基础理论培训，实战式教学特训模拟，落地式运营校区实习，保姆式运营手册执行。' }
      ],
      sec2List: [
        { icon: require('@/assets/join/long1.png'), title: '品牌优势', subtitle: '500万次测评案例,1000万业绩创收,3000平实训基地,5000名幼儿教学特例。' },
        { icon: require('@/assets/join/long2.png'), title: '课程优势', subtitle: '感统七大核心能力、感统训练师必备八大理论系统、幼儿八大问题训练纲要。' },
        { icon: require('@/assets/join/long3.png'), title: '体系优势', subtitle: '评估-训练-再评估-再训练，一流的课程反馈效果，定期升级。' },
        { icon: require('@/assets/join/long4.png'), title: '团队优势', subtitle: '由岳明途领衔包含教学、运营、顾问成立的专家团队，负责感统训练师的常规培训和业务指导。' },
        { icon: require('@/assets/join/long5.png'), title: '服务优势', subtitle: '周期性感统基础理论培训，实战式教学特训模拟，落地式运营校区实习，保姆式运营手册执行。' }
      ],
      sec3ListIndex: '0',
      sec3List,
      sec4ListIndex: 0,
      sec4List,
      sec6ListIndex: '0',
      sec6List
    }
  },
  watch: {
    sec3ListIndex(n) {
      this.$refs.sec3Swiper.$emit('slideTo', +n)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./pc.scss";
@import "./mo.scss";
</style>
