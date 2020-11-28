<template>
  <div class="article">
    <div class="back base" @click="$router.back()">&lt;返回上一级</div>
    <div v-if="data" class="content">
      <div class="left">
        <div class="title">{{ data.title }}</div>
        <div class="html" v-html="data.content" />
      </div>
      <div v-if="data" class="right">
        <div class="title">相关阅读</div>
        <div v-if="data.recommend && data.recommend[0]" class="article" @click="detail(data.recommend[0])">
          <img :src="data.recommend[0].pic">
          <div class="title">{{ data.recommend[0].title }}</div>
          <div class="date">{{ (new Date( data.recommend[0].create_time)).getFullYear() }}.{{ (new Date( data.recommend[0].create_time)).getMonth() }}.{{ (new Date( data.recommend[0].create_time)).getDate() }}</div>
        </div>
        <div v-if="data.recommend && data.recommend[1]" class="article" @click="detail(data.recommend[1])">
          <img :src="data.recommend[1].pic">
          <div class="title">{{ data.recommend[1].title }}</div>
          <div class="date">{{ (new Date(data.recommend[1].create_time)).getFullYear() }}.{{ (new Date(data.recommend[1].create_time)).getMonth() }}.{{ (new Date(data.recommend[1].create_time)).getDate() }}</div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div v-else :class="$store.state.device">
    <div v-if="data" class="title">{{ data.title }}</div>
    <div v-if="data" class="stitle">{{ data.stitle }}</div>
    <div v-if="data" class="html" v-html="data.content" />
  </div> -->
</template>

<script>
import { api_mediaDetail } from '@/api'
export default {
  name: 'MediaArticle',
  data() {
    return {
      data: null
    }
  },
  mounted() {
    this.get()
  },
  beforeRouteUpdate(to, from, next) {
    next()
    this.$nextTick(this.get)
  },
  deactivated() {
    this.$destroy()
  },
  methods: {
    get() {
      this._loading = this.$loading()
      api_mediaDetail({ id: this.$route.params.id }).then(({ data: { data }}) => {
        this.data = data
        document.title = data.title
      }).finally(() => this._loading.close())
    },
    detail(item) {
      this.$router.replace({ name: 'MediaArticle', params: { id: item.id }})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./pc.scss";
@import "./mo.scss";
</style>
