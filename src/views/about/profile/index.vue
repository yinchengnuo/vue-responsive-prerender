<template>
  <div class="profile">
    <div class="sec1 overflow">
      <div class="sec-pc-t">老岳讲感统</div>
      <div class="sec-pc-st">中国感统教育终身推动者</div>
      <div class="content">
        <p>老岳讲感统始终坚持着，用标准感统赋能中国早幼教。引进国际先进的感统教育理念和训练方法，也是老岳的重点工作。在十余年的感统教育研发过程中，老岳远赴美、德、芬、日等国家游学考察，和多位感统教育的国际顶尖专家教授学习交流，并结合中国传统的家庭教育习惯，推出一系列符合中国国情的感统教育体系。</p>
        <p>为了推动中国感统教育行业的科学发展，为了让更多孩子接受专业标准的感统训练，为了让感统能够真正地给中国家庭带来幸福和美好的未来。老岳讲感统开展大型父母课堂，并进行全国巡回演讲。截止2020年3月，共开展全国巡讲532场，走进全国100多个省市，近30万组家庭直接受益。</p>
      </div>
      <div class="data">
        <div class="item">
          <div class="num">
            <countTo class="count-to" :start-val="0" :end-val="100" :duration="5000" />名
          </div>
          <div class="text">专业师资队伍</div>
        </div>
        <div class="item">
          <div class="num">
            <countTo class="count-to" :start-val="0" :end-val="500" :duration="5000" />场
          </div>
          <div class="text">大型感统知识讲座</div>
        </div>
        <div class="item">
          <div class="num">
            <countTo class="count-to" :start-val="0" :end-val="5000" :duration="5000" />名
          </div>
          <div class="text">培养优秀感统精英</div>
        </div>
        <div class="item">
          <div class="num">
            <countTo class="count-to" :start-val="0" :end-val="10000" :duration="5000" />名
          </div>
          <div class="text">帮助儿童获得专业训练</div>
        </div>
      </div>
    </div>
    <div class="sec2 overflow">
      <div class="sec-pc-t">传播媒介</div>
      <div class="sec-pc-st">为更多家庭带去感统智慧的润泽</div>
      <div class="content">
        <div class="left">
          <p>经过多年累积和发展，“老岳讲感统”输出的多项知识内容已在各平台取得斐然成绩，教学视频点击过亿、抖音等短视频粉丝超百万、科普文章接连获奖……影响家庭超过五百万户，帮助无数儿童因感统训练而拥抱更加精彩人生。</p>
          <p>早教领域的下一个时代属于感统，教育事业的下一个阵地属于互联网。老岳讲感统将继续在互联网战线稳步推进，彰显出感统教育线上第一品牌的王者风范，为更多家庭带去感统智慧的润泽。</p>
        </div>
        <div class="right">
          <img src="@/assets/about/profile/1.png">
          <img src="@/assets/about/profile/2.png">
          <img src="@/assets/about/profile/3.png">
          <img src="@/assets/about/profile/4.png">
          <img src="@/assets/about/profile/5.png">
          <img src="@/assets/about/profile/6.png">
          <img src="@/assets/about/profile/7.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to'
export default {
  name: 'AboutProfile',
  components: { countTo }
}
</script>

<style lang="scss" scoped>
@import "./pc.scss";
@import "./mo.scss";
</style>
