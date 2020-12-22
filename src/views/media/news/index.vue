<template>
  <div class="news-list">
    <div class="wrapper">
      <div v-for="(item, index) in list" :key="index" class="item" @click="detail(item)">
        <img :src="item.pic" class="poster">
        <div class="title">{{ item.title }}</div>
        <span>{{ (new Date(item.create_time)).getFullYear() }}.{{ (new Date(item.create_time)).getMonth() + 1 }}.{{ (new Date(item.create_time)).getDate() }}</span>
      </div>
      <div v-for="(item, index) in list" :key="index + 999999" class="itemMo" @click="detail(item)">
        <div class="left">
          <div class="title">{{ item.title }}</div>
          <span>{{ (new Date(item.create_time)).getFullYear() }}.{{ (new Date(item.create_time)).getMonth() + 1 }}.{{ (new Date(item.create_time)).getDate() }}</span>
        </div>
        <img :src="item.pic" class="poster">
      </div>
    </div>
    <el-pagination
      class="page"
      background
      layout="prev, pager, next"
      :page-size="6"
      :total="total"
      style="text-align: center"
      @current-change="e => page = e"
    />
    <div class="split" />
  </div>
</template>

<script>
import { api_mediaList } from '@/api'
export default {
  data() {
    return {
      page: 1,
      total: 0,
      list: []
    }
  },
  watch: {
    page(n) {
      if (document.body.offsetWidth >= 1200) {
        this.get()
      }
    }
  },
  mounted() {
    this.get()
  },
  methods: {
    get() {
      this._loading = this.$loading()
      api_mediaList({ newsTypeId: 1, limit: 6, page: this.page }).then(({ data: { data: { total, list }}}) => {
        this.list = list
        this.total = total
      }).finally(() => this._loading.close())
    },
    detail(item) {
      this.$router.push({ name: 'MediaArticle', params: { id: item.id }})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./pc.scss";
@import "./mo.scss";
</style>
