<template>
  <div class="side">
    <div class="bar">
      <div class="top" @mouseenter="hover = 0" @mouseleave="hover = -1">
        <div v-if="hover === 0" class="text">免费<br>测评</div>
        <img v-else src="@/assets/layout/test.png">
        <transition name="fade">
          <div v-if="hover === 0" class="code-wrapper">
            <div class="code-content">
              <img src="@/assets/layout/mpcode.jpg">
              <div class="bottom" style="flex-direction: column;">
                <div>微信小程序</div>
                <span>扫码免费测评</span>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <span class="line" />
      <div class="mid" @mouseenter="hover = 1" @mouseleave="hover = -1">
        <div v-if="hover === 1" class="text">客服<br>电话</div>
        <img v-else src="@/assets/layout/tel.png">
        <transition name="fade">
          <div v-if="hover === 1" class="tel-wrapper">
            <div class="tel-content">
              <img src="@/assets/layout/tel-banner.png">
              <div class="t">— 客服咨询热线 —</div>
              <div class="tel">
                <img src="@/assets/layout/float-call.png">
                <span>400-088-0016</span>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <span class="line" />
      <div class="bot" @mouseenter="hover = 2" @mouseleave="hover = -1">
        <div v-if="hover === 2" class="text">扫码<br>关注</div>
        <img v-else src="@/assets/layout/code.png">
        <transition name="fade">
          <div v-if="hover === 2" class="code-wrapper">
            <div class="code-content">
              <img src="@/assets/layout/side-erweima.png">
              <div class="bottom">
                <img src="@/assets/layout/weixin.png">
                <span>官方服务号</span>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Side',
  data() {
    return {
      hover: -1
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./pc.scss";
@import "./mo.scss";
</style>
