<template>
  <div class="join">
    <div class="banner-wrapper">
      <img src="@/assets/join/banner.png">
      <div class="content">
        <div class="title">老岳讲感统合作伙伴，全国招募中</div>
        <div class="btns">
          <div class="cont" @mouseenter="enter = true" @mouseleave="enter = false" @click="$router.push('/about')">关于我们</div>
          <div class="get" :class="{ enter: !enter }" @click="$d">立即申请</div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="sec1">
        <div class="title">携手老岳讲感统   共掘早教万亿市场</div>
        <div class="subtitle">—————    market expectation   —————</div>
        <div class="content">
          <img ref="bgVideo" class=" data" src="@/assets/join/data.png">
          <img ref="dataBG" class=" dataBG" src="@/assets/join/dataBG.png">
          <div class="text">目前中国2~10岁儿童约有1.54亿，每年新出生人口2000万，随着二胎政策的开放，新生人口的数量还将增加。超过80%的儿童存在不同程度的感统失调，50%的儿童存在专注力弱的问题，40%的儿童存在重度感统失调。</div>
        </div>
      </div>
      <div class="sec2">
        <div class="title">加盟课程·我们的优势</div>
        <div class="subtitle">—————    Our advantage   —————</div>
        <div class="info">
          <div v-for="(item, index) in sec2List" :key="index" class="info-item">
            <img :src="item.icon">
            <div class="texts">
              <div class="title">{{ item.title }}</div>
              <div class="subtitle">{{ item.subtitle }}</div>
            </div>
          </div>
        </div>
        <div class="join" @click="$d">立即加入</div>
      </div>
      <div class="sec3">
        <div class="title">加盟课程·丰富的合作模块</div>
        <div class="subtitle">—————    Course joining   —————</div>
        <div class="content">
          <div class="tab-wrapper">
            <el-tabs v-model="sec3ListIndex">
              <el-tab-pane v-for="(item, index) in sec3List" :key="index" :label="item.title" :name="index.toString()">
                <div slot="label" class="tab-item">
                  <img v-if="+sec3ListIndex === index" :src="item.iconAct">
                  <img v-else :src="item.icon">
                  <span class="title">{{ item.title }}</span>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div class="tab-line" />
          <div class="tab-content">
            <img src="@/assets/join/mou-pre.png" @click="$refs.sec3Swiper.$emit('slidePre')">
            <slider ref="sec3Swiper" class="swiper" :options="{ pagination: false, freeze: true, speed: 1000 }" @slide="({ currentPage }) => sec3ListIndex = currentPage.toString()">
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
        <div class="title">加盟课程·合作条件</div>
        <div class="subtitle">—————    Cooperation conditions   —————</div>
        <div class="sec4-content">
          <img src="@/assets/join/mou-pre.png" @click="() => (+sec4ListIndex > 0) && $refs.sec4Swiper.$emit('slideTo', sec4ListIndex - 1)">
          <slider ref="sec4Swiper" class="swiper" :options="{ pagination: false, freeze: true }" @slide="({ currentPage }) => sec4ListIndex = currentPage.toString()">
            <slideritem v-for="(item, index) in sec4List" :key="index" class="swiper-slide">
              <img :src="item.img">
              <span>{{ item.text }}</span>
            </slideritem>
          </slider>
          <img src="@/assets/join/mou-next.png" @click="() => (+sec4ListIndex < (sec4List.length - 4)) && $refs.sec4Swiper.$emit('slideTo', +sec4ListIndex + 1)">
        </div>
      </div>
      <div class="sec5">
        <div class="title">加盟课程·加盟流程</div>
        <div class="subtitle">—————    Joining process   —————</div>
        <img src="@/assets/join/progress.png">
      </div>
      <div class="sec6">
        <div class="title">加盟课程·全方位的支持</div>
        <div class="subtitle">—————    Full support   —————</div>
        <div class="content">
          <div class="tab-wrapper">
            <el-tabs v-model="sec6ListIndex">
              <el-tab-pane v-for="(item, index) in sec6List" :key="index" :label="item.title" :name="index.toString()">
                <div slot="label" class="tab-item">
                  <img v-if="+sec6ListIndex === index" :src="item.iconAct">
                  <img v-else :src="item.icon">
                  <span class="title">{{ item.title }}</span>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div class="tab-line" />
          <div class="tab-content">
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

    <div class="contentMo">
      <div class="index"><img class="banner-ani" src="@/assets/join/banner.png">
        <div class="content">
          <div class="title">老岳讲感统合作<br>伙伴，全国招募中</div>
          <div class="btns">
            <div class="cont" :class="{ enter: !enter }" @click="$router.push('/about')">关于我们</div>
            <div class="get" @mouseenter="enter = true" @mouseleave="enter = false" @click="$d(true)">立即申请</div>
          </div>
        </div>
      </div>
      <div class="sec1">
        <div class="title">携手老岳讲感统   共掘早教万亿市场</div>
        <div class="subtitle">—————    market expectation   —————</div>
        <div class="content">
          <img src="@/assets/join/moData.png">
          <div class="text">目前中国2~10岁儿童约有1.54亿，每年新出生人口2000万，随着二胎政策的开放，新生人口的数量还将增加。超过80%的儿童存在不同程度的感统失调，50%的儿童存在专注力弱的问题，40%的儿童存在重度感统失调。</div>
          <div class="more" @click="$d(true)">了解更多</div>
        </div>
      </div>
      <div class="split" />
      <div class="sec2">
        <div class="title">加盟课程·我们的优势</div>
        <div class="subtitle">—————    Our advantage   —————</div>
        <div class="info">
          <div v-for="(item, index) in mosec2List" :key="index" class="info-item">
            <img :src="item.icon">
            <div class="texts">
              <div class="title">{{ item.title }}</div>
              <div class="subtitle">{{ item.subtitle }}</div>
            </div>
          </div>
        </div>
        <div class="more" @click="$d(true)">了解更多</div>
      </div>
      <div class="split" />
      <div class="sec3">
        <div class="title">加盟课程·丰富的合作模块</div>
        <div class="subtitle">—————    Course joining   —————</div>
        <div class="content">
          <el-collapse v-model="openIndex" accordion>
            <el-collapse-item v-for="(item, index) in sec3List" :key="index" :title="item.title" :name="index">
              <img :src="item.img">
              <div v-for="(itemm, indexx) in item.list" :key="indexx" class="item-item">
                <div class="t">{{ itemm.title }}</div>
                <div class="st">{{ itemm.subtitle }}</div>
              </div>
            </el-collapse-item>
          </el-collapse>
          <div class="more" @click="$d(true)">了解更多</div>
        </div>
      </div>
      <div class="split" />
      <div class="sec4">
        <div class="title">加盟课程·合作条件</div>
        <div class="subtitle">—————    Cooperation conditions   —————</div>
        <div class="content">
          <div v-for="(item, index) in sec4List" :key="index" class="item">
            <img :src="item.img">
            <span>{{ item.text }}</span>
          </div>
        </div>
        <div class="more" @click="$d(true)">了解更多</div>
      </div>
      <div class="split" />
      <div class="sec5">
        <div class="title">加盟课程·合作条件</div>
        <div class="subtitle">—————    Cooperation conditions   —————</div>
        <img src="@/assets/join/mo-progress.png">
        <div class="more" @click="$d(true)">了解更多</div>
      </div>
      <div class="split" />
      <div class="sec6">
        <div class="title">加盟课程·全方位的支持</div>
        <div class="subtitle">—————    Full support   —————</div>
        <div class="content">
          <div class="tab-wrapper">
            <el-tabs v-model="sec6ListIndex">
              <el-tab-pane v-for="(item, index) in sec6List" :key="index" :label="item.title" :name="index.toString()">
                <div slot="label" class="tab-item">
                  <img v-if="+sec6ListIndex === index" :src="item.iconAct">
                  <img v-else :src="item.icon">
                  <span class="title">{{ item.title }}</span>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div class="tab-line" />
          <div class="tab-content">
            <div v-for="(item, index) in sec6List" :key="index" class="tab-content-item">
              <transition name="fade" mode="in-out">
                <div v-if="index == sec6ListIndex" class="tab-content-item-wrapper">
                  <slider ref="sec6Swiper" class="swiper" :options="{ pagination: false, loopedSlides: 24, centeredSlides: true, thresholdDistance: '1', thresholdTime: '999999', loop: true, autoplay: 2000 }">
                    <slideritem v-for="(itemm, indexx) in item.list" :key="indexx" class="swiper-slide">
                      <img :src="itemm.img">
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
@import"./pc.scss";
@import"./mo.scss";
</style>
