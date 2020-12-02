<template>
  <div class="about">
    <div class="layout">
      <img v-if="$route.path === '/about/profile'" src="@/assets/about/1.png" class="banner">
      <img v-if="$route.path === '/about/history'" src="@/assets/about/2.png" class="banner">
      <img v-if="$route.path === '/about/honor'" src="@/assets/about/3.png" class="banner">
      <img v-if="$route.path === '/about/culture'" src="@/assets/about/4.jpg" class="banner">
      <img v-if="$route.path === '/about/team'" src="@/assets/about/5.png" class="banner">
      <div class="navbar-wrapper" :class="{ fixed: this.$store.state.top >= (document.body.offsetWidth >= 1200 ? 600 : (document.body.offsetWidth / 750 * 375)) }">
        <div class="navbar">
          <router-link class="router-link" to="/about/profile">公司概况</router-link>
          <router-link class="router-link" to="/about/history">发展历程</router-link>
          <router-link class="router-link" to="/about/honor">资质荣誉</router-link>
          <router-link class="router-link" to="/about/culture">品牌文化</router-link>
          <router-link class="router-link" to="/about/team">师资团队</router-link>
        </div>
      </div>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {

    }
  },
  mounted() {
    console.log(document.body.offsetWidth / 750 * 375)
  }
}
</script>

<style lang="scss" scoped>
@import "./pc.scss";
@import "./mo.scss";
</style>
