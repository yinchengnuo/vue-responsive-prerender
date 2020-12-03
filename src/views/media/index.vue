<template>
  <div class="media">
    <div class="layout">
      <img v-if="$route.path === '/media/news'" src="@/assets/media/1.png" class="banner">
      <img v-if="$route.path === '/media/media'" src="@/assets/media/1.png" class="banner">
      <img v-if="$route.path === '/media/video'" src="@/assets/media/1.png" class="banner">
      <img v-if="$route.path === '/media/party'" src="@/assets/media/1.png" class="banner">
      <div class="navbar-wrapper" :class="{ fixed: this.$store.state.top >= (document.body.offsetWidth >= 1200 ? 600 : (document.body.offsetWidth / 750 * 375)) }">
        <div class="navbar">
          <router-link class="router-link" to="/media/news">公司动态</router-link>
          <router-link class="router-link" to="/media/media">媒体报道</router-link>
          <router-link class="router-link" to="/media/video">视频专区</router-link>
          <router-link class="router-link" to="/media/party">党建专栏</router-link>
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
  }
}
</script>

<style lang="scss" scoped>
@import "./pc.scss";
@import "./mo.scss";
</style>
