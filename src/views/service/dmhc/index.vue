<template>
  <div class="dmhc">
    <img src="@/assets/service/dmhc/banner.png" class="banner">
    <div class="sec1 overflow">
      <div class="content">
        <img src="@/assets/service/dmhc/banner1.png">
        <div class="cont">
          <p>郑州动漫火车儿童感统训练中心</p>
          <p>郑州动漫火车儿童感统训练中心，国内首家全能化感统训练机构，成立于2008年，是老岳讲感统实训基地，全国感统训练师资培训基地、北京学前教育协会会员单位。中心目前拥有室内实训场地2000余平，户外阳光训练场300平，平均100平超大国际标准感统训练教室7个，国际一流感统训练教具300多种，专业感统训练师70余名，在训儿童1500名左右。</p>
          <p @click="window.open('https://laoyueedu.com/#/')">点击访问：动漫火车感统 ></p>
        </div>
      </div>
      <div class="contentMo">
        <img src="@/assets/service/dmhc/banner1.png">
        <div class="sec-t">郑州动漫火车儿童感统训练中心</div>
        <div class="sec-st">全渠道传播感统知识</div>
        <p>郑州动漫火车儿童感统训练中心，国内首家全能化感统训练机构，成立于2008年，是老岳讲感统实训基地，全国感统训练师资培训基地、北京学前教育协会会员单位。中心目前拥有室内实训场地2000余平，户外阳光训练场300平，平均100平超大国际标准感统训练教室7个，国际一流感统训练教具300多种，专业感统训练师70余名，在训儿童1500名左右。</p>
      </div>
    </div>
    <div class="split" />
    <div class="sec2 overflow">
      <div class="sec-t">来动漫火车学感统，提升孩子7大能力</div>
      <div class="content">
        <div class="left">
          <div><img src="@/assets/service/dmhc/1.png">注意力</div>
          <div><img src="@/assets/service/dmhc/2.png">学习力</div>
          <div><img src="@/assets/service/dmhc/3.png">大动作</div>
          <div><img src="@/assets/service/dmhc/4.png">自信心</div>
          <div><img src="@/assets/service/dmhc/5.png">精细动作</div>
          <div><img src="@/assets/service/dmhc/6.png">人际关系</div>
          <div><img src="@/assets/service/dmhc/7.png">语言能力</div>
        </div>
        <div class="right">
          <video autoplay muted controls src="https://dmhc-admin.oss-cn-beijing.aliyuncs.com/website/9867576994161028.%E8%80%81%E5%B2%B3%E8%AE%B2%E6%84%9F%E7%BB%9F%E5%AE%A3%E4%BC%A0%E7%89%87(%E6%97%A0LOGO3%E5%88%86%E9%92%9F%E7%89%88).mp4" />
        </div>
      </div>
      <div class="contentMo">
        <video autoplay muted controls src="https://dmhc-admin.oss-cn-beijing.aliyuncs.com/website/9867576994161028.%E8%80%81%E5%B2%B3%E8%AE%B2%E6%84%9F%E7%BB%9F%E5%AE%A3%E4%BC%A0%E7%89%87(%E6%97%A0LOGO3%E5%88%86%E9%92%9F%E7%89%88).mp4" />
        <div class="icons">
          <div><img src="@/assets/service/dmhc/1.png">注意力</div>
          <div><img src="@/assets/service/dmhc/2.png">学习力</div>
          <div><img src="@/assets/service/dmhc/3.png">大动作</div>
          <div><img src="@/assets/service/dmhc/4.png">自信心</div>
          <div><img src="@/assets/service/dmhc/5.png">精细动作</div>
          <div><img src="@/assets/service/dmhc/6.png">人际关系</div>
          <div><img src="@/assets/service/dmhc/7.png">语言能力</div>
        </div>
      </div>
    </div>
    <div class="split" />
    <div class="sec3 overflow">
      <div class="sec-t">六大核心优势</div>
      <div class="content">
        <div v-for="(item, index) in longs" :key="index" class="item">
          <img :src="item.img">
          <p>{{ item.t1 }}</p>
          <span>{{ item.t2 }}</span>
        </div>
      </div>
    </div>
    <div class="split" />
    <div class="join-now">
      <img class="bg" src="@/assets/index/footer.jpg">
      <div class="title">与老岳一起，与感统教育同行，全国招募合作伙伴</div>
      <div class="join" @click="$d">立即报名</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceDmhc',
  data() {
    return {
      longs: [
        { img: require('@/assets/service/dmhc/11.png'), t1: '12年教育经验积累', t2: '依照感统训练的五个阶段，遵从儿童能力发展七个层次，涉及感统训练十八项指标。' },
        { img: require('@/assets/service/dmhc/22.png'), t1: '100名专业感统训练师', t2: '拥有教师资格证，训练师经过6+1培训正式上岗，经过专业感统训练师资培训。' },
        { img: require('@/assets/service/dmhc/33.png'), t1: '20个国际标准感统训练室', t2: '目前中心拥有实训场地3000余平，在训儿童1500名左右，用标准感统成就孩子美好人生。' },
        { img: require('@/assets/service/dmhc/44.png'), t1: '十万份测评案例', t2: '5000多名教学样本，让我们有能力帮助你的孩子；10万份测评案例，让我们的训练具有针对性。' },
        { img: require('@/assets/service/dmhc/55.png'), t1: '每月专家答疑', t2: '每月定期老岳与家长面对面答疑，有什么问题，直接问老岳。' },
        { img: require('@/assets/service/dmhc/66.png'), t1: '课程自主研发', t2: '引进“感统之父”艾尔斯博士感觉统合理论，并自主研发课程体系，使其更适合中国儿童。' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./pc.scss";
@import "./mo.scss";
</style>
