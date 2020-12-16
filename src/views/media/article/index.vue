<template>
  <div class="article">
    <div class="back base" @click="$router.back()">&lt;返回上一级</div>
    <div v-if="data" class="content">
      <div class="left">
        <div class="title">{{ data.title }}</div>
        <div class="html" v-html="data.content" />
      </div>
      <div v-if="data" class="right" :style="{ top: top + 'px' }">
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
</template>

<script>
import { api_mediaDetail } from '@/api'
export default {
  name: 'MediaArticle',
  data() {
    return {
      top: 0,
      data: null
    }
  },
  mounted() {
    this.get()
    window.addEventListener('scroll', e => {
      const top = e.target.documentElement.scrollTop
      const height = document.getElementsByClassName('article')[0] ? document.getElementsByClassName('article')[0].offsetHeight : 0
      if (top >= 100 && top <= (height - 666)) {
        this.top = e.target.documentElement.scrollTop - 100
      }
    })
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

        setTimeout(() => {
          [...Array.from(document.getElementsByClassName('html')[0].getElementsByTagName('p')), ...Array.from(document.getElementsByClassName('html')[0].getElementsByTagName('section'))].forEach(e => {
            if (!Array.from(e.children).some(ee => ee.tagName === 'IMG' || ee.tagName === 'VIDEO')) {
              e.style.textIndent = '2em'
            }
          })
          Array.from(document.getElementsByTagName('strong')).forEach(e => {
            if (e.innerText.includes('End')) {
              e.style.textIndent = '0'
              e.style.display = 'block'
              e.style.textAlign = 'center'
            }
          })
        })
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
