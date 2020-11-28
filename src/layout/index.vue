<template>
  <div class="layout">
    <el-dialog class="input" :visible.sync="dialog" top="30vh" width="23%" :close-on-click-modal="false">
      <img class="colse" src="@/assets/layout/close.png" @click="dialog = false">
      <div class="ladel">您的姓名</div>
      <input v-model.trim="name" type="text" maxlength="20" placeholder="请输入您的姓名" autofocus>
      <div class="ladel">您的联系方式</div>
      <input v-model.trim="tel" type="tel" maxlength="11" placeholder="请输入您的联系方式">
      <div class="sub" @click="sub">提交信息</div>
      <div class="text">我们的老师会第一时间与您取得联系～</div>
    </el-dialog>
    <Header />
    <keep-alive>
      <router-view />
    </keep-alive>
    <Footer />
  </div>
</template>

<script>
import { api_message } from '@/api'
import Header from './components/Header/index'
import Footer from './components/Footer/index'

export default {
  name: 'Layout',
  components: { Header, Footer },
  data() {
    return {
      tel: '',
      name: '',
      dialog: false
    }
  },
  watch: {},
  mounted() {
    this.$event.$on('dialog', join => {
      if (document.body.offsetWidth >= 1200) {
        this.dialog = true
      } else {
        if (join === true) {
          this.join_bottom_sheet = true
        } else {
          this.join_bottom_sheet = false
        }
        this.bottom_sheet = true
      }
    })
  },
  methods: {
    sub() {
      if (!this.name) {
        if (document.body.offsetWidth >= 1200) {
          this.$message({ type: 'warning', message: '请输入您的姓名', center: true, offset: 240 })
        } else {
          this.$toast('请输入您的姓名')
        }
        return
      }
      if (this.tel.length < 8) {
        if (document.body.offsetWidth >= 1200) {
          this.$message({ type: 'warning', message: '请输入您的联系方式', center: true, offset: 240 })
        } else {
          this.$toast('请输入您的联系方式')
        }
        return
      }
      this._loading = this.$loading()
      this.$nextTick(() => {
        this.tel = this.name = ''
        this.dialog = this.bottom_sheet = false
      })
      api_message({ name: this.name, phone: this.tel, type: '1' }).then(({ data: { code, msg }}) => {
        if (+code === 200) {
          if (document.body.offsetWidth >= 1200) {
            this.$alert('我们的老师会第一时间与您取得联系～', '提交成功', { type: 'success' })
          } else {
            this.$dialog.alert({ title: '提交成功', message: '我们的老师会第一时间与您取得联系～' })
          }
        } else {
          if (document.body.offsetWidth >= 1200) {
            this.$alert(msg, '', { type: 'error' })
          } else {
            this.$dialog.alert({ title: '', message: msg })
          }
        }
      }).finally(() => {
        this._loading.close()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./pc.scss";
@import "./mo.scss";
</style>
