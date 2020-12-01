<template>
  <div class="service">
    <img src="@/assets/service/banner.png" class="banner">
    <div class="content overflow">
      <div class="sec-t">产品与服务 赋能中国早幼教</div>
      <div class="sec-st">结合中国传统家庭教育习惯，推出符合中国国情感统教育体系</div>
      <div class="item">
        <img src="@/assets/service/1.png">
        <div>
          <div>老岳讲感统</div>
          <p>线上多平台感统知识传播与训练，通过网络渠道，传播专业感统知识，指导家庭感统训练，目前网内粉丝超过400万，网外粉丝超过5000万！</p>
          <span @click="$router.replace('/service/lyjgt')">查看服务</span>
        </div>
      </div>
      <div class="item">
        <div>
          <div>动漫火车感统</div>
          <p>郑州动漫火车儿童感统训练中心，国内首家全能化感统训练机构，成立于2008年，中心目前拥有室内实训场地2000余平，户外阳光训练场300平…</p>
          <span @click="$router.replace('/service/dmhc')">查看服务</span>
        </div>
        <img src="@/assets/service/1.png">
      </div>
      <div class="item">
        <img src="@/assets/service/1.png">
        <div>
          <div>启语慧声</div>
          <p>线上+线下探索打造儿童发音训练规范体系课程，目前正在稳步筹建开发中，近期上线尽情期待！</p>
          <span class="no">建设中</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Service'
}
</script>

<style lang="scss" scoped>
@import "./pc.scss";
@import "./mo.scss";
</style>
