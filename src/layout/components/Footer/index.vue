<template>
  <div class="footer">
    <div class="content">
      <router-link to="/" replace>
        <img class="logo" src="@/assets/layout/logo2.png">
      </router-link>
      <div class="content-con">
        <div v-for="(item, index) in nav" :key="index" class="links">
          <div class="title">{{ item.name }}</div>
          <router-link v-for="(itemm, indexx) in item.route" :key="indexx" :to="itemm.to" exact replace class="router-link">
            {{ itemm.name }}
            <span v-if="itemm.name === '启语慧声'">建设中</span>
          </router-link>
        </div>
        <div class="links">
          <div class="title">客服咨询</div>
          <div class="router-link">Email：1298261552@qq.com</div>
          <div class="router-link">微信：400-088-0016</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-content">
        <div class="web">Copyright © 2008-2020 老岳讲感统 版权所有   豫ICP备16027150号-1</div>
        <div class="icon">
          <div class="item">
            <img class="icon" src="@/assets/layout/douyin.png">
            <div class="code">
              <img src="@/assets/layout/dy-code.png">
            </div>
          </div>
          <div class="item">
            <img class="icon" src="@/assets/layout/weixin.png">
            <div class="code">
              <img src="@/assets/layout/wx-code.png">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mo-footer">
      <div class="focus">
        <span>关注我们</span>
        <img class="icon" src="@/assets/layout/douyin.png" @click="type = 1; show = true">
        <img class="icon" src="@/assets/layout/weixin.png" @click="type = 2; show = true">
      </div>
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
          <router-link class="router-link" to="/duty/talk">老岳的1000场讲座</router-link>
          <router-link class="router-link" to="/duty/tour">老岳的三尺讲台</router-link>
        </van-collapse-item>
      </van-collapse>
      <div class="mo-bottom">豫ICP备16027150号-1   I   Copyright © 2008-2020 河南老岳讲感统教育科技有限公司 版权所有</div>
    </div>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <img class="close" src="@/assets/layout/mo-close.png" @click="show = false">
        <img v-if="type === 1" class="code" src="@/assets/layout/dy-code.png">
        <img v-if="type === 2" class="code" src="@/assets/layout/wx-code.png">
        <span v-if="type === 1" class="t">关注老岳官方微信号 </span>
        <span v-if="type === 2" class="t">关注老岳官方抖音号 </span>
        <span class="st">专家为您答疑，惊喜大礼活动！</span>
        <span class="save" @click="$download(type === 1 ? require('@/assets/layout/dy-code.png') : require('@/assets/layout/wx-code.png'))">
          <img src="@/assets/layout/mo-down.png">
          <span>保存至相册</span>
        </span>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      type: 0,
      show: false,
      activeName: '',
      nav: [
        {
          name: '关于我们',
          route: [
            { name: '公司简介', to: '/about/profile' },
            { name: '管理团队', to: '/about/team' },
            { name: '加盟合作', to: '/join' }
          ]
        },
        {
          name: '产品与服务',
          route: [
            { to: '/service/lyjgt', name: '老岳讲感统' },
            { to: '/service/dmhc', name: '动漫火车感统' },
            { to: '/service', name: '启语慧声' }
          ]
        },
        {
          name: '社会责任',
          route: [
            { to: '/duty/love', name: '《爱的守望》公益行' },
            { to: '/duty/talk', name: '老岳的1000场讲座' }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./pc.scss";
@import "./mo.scss";
</style>
