<template>
  <div class="header" :class="{ mousein: navBG, hide: navHide, show: navShow }">
    <div class="bg" :class="{ mousein: navBG }" />
    <div class="header-content">
      <router-link to="/" replace>
        <img v-if="navBG" class="logo" src="@/assets/layout/logo2.png">
        <img v-else class="logo" src="@/assets/layout/logo1.png">
      </router-link>
      <div class="routes" @mouseleave="getHover(); mousein = false;">
        <div v-for="(item, index) in list" :key="index" class="route-wrapper" @mouseover="hover = index; mousein = true;" @mouseleave="leave">
          <div class="route">
            <router-link class="router-link" :class="{ activing: hover === index }" :to="item.to">{{ item.name }}</router-link>
            <span class="scalc">
              <span class="scalc-item" :class="[hover === index ? 'in' : 'out', mounted ? 'mounted' : '']" />
            </span>
          </div>
          <div v-if="item.view" class="route-view" :class="[(!clicked && mousein && (hover === index)) ? 'in' : 'out', mounted ? 'mounted' : '']">
            <router-link v-for="(itemm, indexx) in item.view.links" :key="indexx" :to="itemm.to" exact replace class="router-link" @click.native="clickLink">
              {{ itemm.name }}
              <span v-if="itemm.name === '启语慧声'">建设中</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="header-content-mo">
      <img src="@/assets/layout/logo2.png" @click="$router.replace('/')">
      <div class="button" @click="show = true">
        <img src="@/assets/layout/open-side.png">
        <span>展开</span>
      </div>
      <van-popup v-model="show" position="right" closeable :style="{ width: '60%', height: '100%', background: '#ffffff' }">
        <div class="side-content">
          <router-link class="link" to="/">网站首页</router-link>
          <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="公司简介" name="公司简介">
              <router-link class="router-link" to="/about/profile">企业简介</router-link>
              <router-link class="router-link" to="/about/history">发展历程</router-link>
              <router-link class="router-link" to="/about/honor">资质荣誉</router-link>
              <router-link class="router-link" to="/about/culture">品牌文化</router-link>
              <router-link class="router-link" to="/about/team">管理团队</router-link>
            </van-collapse-item>
            <van-collapse-item title="产品与服务" name="产品与服务">
              <router-link class="router-link" to="/service/lyjgt">老岳讲感统</router-link>
              <router-link class="router-link" to="/service/dmhc">动漫火车感统</router-link>
              <router-link class="router-link" to="/service/qyhs">启语慧声</router-link>
            </van-collapse-item>
            <van-collapse-item title="社会责任" name="社会责任">
              <router-link class="router-link" to="/duty/love">《爱的守望》公益行</router-link>
              <router-link class="router-link" to="/duty/talk">家长讲座</router-link>
              <router-link class="router-link" to="/duty/tour">全国巡讲</router-link>
            </van-collapse-item>
          </van-collapse>
          <router-link class="link" to="/join">商学院</router-link>
          <router-link class="link" to="/media">媒体中心</router-link>
        </div>
      </van-popup>
    </div>
    <div class="footer-content-mo">
      <div>
        <img src="@/assets/layout/mo-message.png">
        <span>问题留言</span>
      </div>
      <div>
        <img src="@/assets/layout/mo-call.png">
        <span>电话咨询</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      show: false,
      activeName: '',
      hover: 0, // active index
      clicked: false, // 是否点击了展开 nav 的 link 用于在点击 link 后收起 nav
      mounted: false, // 是否 mounted 用于首次打开时防止出现 out 动画
      mousein: false, // 鼠标是否位于 hover 区域 用于判断鼠标是否存在于 hover 区域
      list: [
        {
          to: '/',
          name: '网站首页'
        },
        {
          to: '/about',
          name: '公司简介',
          view: {
            links: [
              { to: '/about/profile', name: '企业简介' },
              { to: '/about/history', name: '发展历程' },
              { to: '/about/honor', name: '资质荣誉' },
              { to: '/about/culture', name: '品牌文化' },
              { to: '/about/team', name: '管理团队' }
            ]
          }
        },
        {
          to: '/service',
          name: '产品与服务',
          view: {
            links: [
              { to: '/service/lyjgt', name: '老岳讲感统' },
              { to: '/service/dmhc', name: '动漫火车感统' },
              { to: '/service/qyhs', name: '启语慧声' }
            ]
          }
        },
        {
          to: '/duty',
          name: '社会责任',
          view: {
            links: [
              { to: '/duty/love', name: '《爱的守望》公益行' },
              { to: '/duty/talk', name: '家长讲座' },
              { to: '/duty/tour', name: '全国巡讲' }
            ]
          }
        },
        {
          to: '/join',
          name: '商学院'
        },
        {
          to: '/media',
          name: '媒体中心',
          view: {
            title: '媒体中心',
            subTitle: '关于动漫火车的新闻资讯',
            links: [
              { to: '/media/news', name: '公司动态' },
              { to: '/media/media', name: '媒体报道' },
              { to: '/media/video', name: '视频专区' },
              { to: '/media/party', name: '党建专栏' }
            ]
          }
        }
      ]
    }
  },
  computed: {
    navBG() {
      return (this.mousein && this.list[this.hover].view) || this.$store.state.top >= 100
    },
    navHide() {
      return !this.mousein && this.$store.state.top >= 200 && this.$store.state.up
    },
    navShow() {
      return !this.mousein && this.$store.state.top >= 200 && !this.$store.state.up
    }
  },
  watch: {
    $route(n) {
      this.getHover()
      this.show = false
    }
  },
  created() {
    this.getHover()
  },
  mounted() {
    setTimeout(() => {
      this.mounted = true
    }, 666)
    window.addEventListener('scroll', e => {
      this.$store.commit('UP', e.target.documentElement.scrollTop > this.$store.state.top)
      this.$store.commit('TOP', e.target.documentElement.scrollTop)
    })
  },
  methods: {
    getHover() {
      this.hover = this.list.findIndex(({ to }) => {
        if (this.$route.path === '/' || this.$route.path.match(/\/how/)) {
          return to === '/'
        } else {
          return (to !== '/') && this.$route.path.startsWith(to)
        }
      })
    },
    leave({ target }) {
      if (target.getElementsByClassName('route-view').length) {
        const styleSheetsIndex = Array.from(document.styleSheets).findIndex(sheet => {
          return Array.from(sheet.cssRules).some(rule => rule.name && rule.name === 'view-out')
        })
        Array.from(document.styleSheets[styleSheetsIndex].cssRules).forEach((rule, index) => {
          if (rule.name === 'view-out') {
            document.styleSheets[styleSheetsIndex].deleteRule(index)
            document.styleSheets[styleSheetsIndex].insertRule(`@keyframes view-out { 0% { max-height: ${target.children[1].offsetHeight}PX; } 100% { max-height: 0px; } }`, index)
          }
        })
      }
    },
    clickLink() {
      this.clicked = true
      this.$emit('top')
      setTimeout(() => {
        this.clicked = false
      }, 666)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./pc.scss";
@import "./mo.scss";
</style>
