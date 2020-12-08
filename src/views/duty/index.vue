<template>
  <div class="duty">
    <div class="layout">
      <img v-if="$route.path === '/duty/love'" src="@/assets/duty/1.jpg" class="banner">
      <img v-if="$route.path === '/duty/talk'" src="@/assets/duty/2.jpg" class="banner">
      <img v-if="$route.path === '/duty/tour'" src="@/assets/duty/3.jpg" class="banner">
      <div class="navbar-wrapper" :class="{ fixed: this.$store.state.top >= 600 }">
        <div class="navbar">
          <router-link class="router-link" to="/duty/love">《爱的守望》公益行</router-link>
          <router-link class="router-link" to="/duty/talk">老岳的1000场讲座</router-link>
          <router-link class="router-link" to="/duty/tour">老岳的三尺讲台</router-link>
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
  name: 'Duty',
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
