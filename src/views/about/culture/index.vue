<template>
  <div class="culture">
    <div class="sec1 overflow">
      <div class="content">
        <img src="@/assets/about/culture/culture.png">
        <div>
          <p>老岳讲感统</p>
          <p>我们是儿童教育领域的专家</p>
          <p>老岳（岳明途）当今国内感统行业领军人物，潜心研究儿童早期教育相关课题，带领动漫火车儿童感统训练中心专业师资队伍130余名，在12年时间里帮助500000余名儿童获得专业、科学的感统训练！</p>
          <p>目前共走遍中国东西南北中30余座省市，开展千人大型感统知识讲座近500余场，普惠挖万千家庭。开设老岳讲感统商学院，累计培养优秀感统精英6500余人次。</p>
        </div>
      </div>

      <div class="contentMo">
        <div class="sec-t">老岳讲感统</div>
        <div class="sec-st">我们是儿童教育领域的专家</div>
        <div class="cont">老岳（岳明途）当今国内感统行业领军人物，潜心研究儿童早期教育相关课题，带领动漫火车儿童感统训练中心专业师资队伍130余名，在12年时间里帮助500000余名儿童获得专业、科学的感统训练！目前共走遍中国东西南北中30余座省市，开展千人大型感统知识讲座近500余场，普惠挖万千家庭。开设老岳讲感统商学院，累计培养优秀感统精英5000余人次。2016年创办老岳讲感统线上知识平台，通过腾讯、优酷、爱奇艺、喜马拉雅、千聊、抖音短视频等网络渠道，传播专业感统知识，指导家庭感统训练，目前网内粉丝超过400万，网外粉丝超过5000万！老岳，中国感统教育终身推动者</div>
        <img src="@/assets/about/culture/culture.png">
      </div>
    </div>
    <div class="split" />
    <div class="sec2 overflow">
      <div class="sec-t">企业文化</div>
      <div class="sec-st">爱是一切问题的答案</div>
      <div class="content">
        <div v-for="(item, index) in list" :key="index" class="item" @mouseenter="active = index" @mouseleave="active = -1">
          <img v-if="index === active" :src="item.img1">
          <img v-else :src="item.img2">
          <span :class="{ base: index === active }">{{ item.name }}</span>
          <div class="hover">
            <span>︿</span>
            <div>{{ item.val }}</div>
            <img :src="item.banner">
          </div>
        </div>
      </div>

      <div class="contentMo">
        <div v-for="(item, index) in list" :key="index" class="item">
          <p>
            <img :src="item.img1">
            <span>{{ item.name }}</span>
          </p>
          <div>{{ item.val }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutCulture',
  data() {
    return {
      active: -1,
      list: [
        { name: '公司愿景', val: '成为感统行业最值得尊敬的教育机构', img1: require('@/assets/about/culture/1.png'), img2: require('@/assets/about/culture/11.png'), banner: require('@/assets/about/culture/c1.png') },
        { name: '公司使命', val: '用标准感统成就美好人生', img1: require('@/assets/about/culture/2.png'), img2: require('@/assets/about/culture/22.png'), banner: require('@/assets/about/culture/c2.png') },
        { name: '经营理念', val: '用标准感统感动人心', img1: require('@/assets/about/culture/3.png'), img2: require('@/assets/about/culture/33.png'), banner: require('@/assets/about/culture/c3.png') },
        { name: '价值观', val: '成就孩子 提升自己 务实创新 合作感恩', img1: require('@/assets/about/culture/4.png'), img2: require('@/assets/about/culture/44.png'), banner: require('@/assets/about/culture/c4.png') },
        { name: '教育理念', val: '爱是一切问题的答案', img1: require('@/assets/about/culture/5.png'), img2: require('@/assets/about/culture/55.png'), banner: require('@/assets/about/culture/c5.png') }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./pc.scss";
@import "./mo.scss";
</style>
