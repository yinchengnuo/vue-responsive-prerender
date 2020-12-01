<template>
  <div class="team overflow">
    <div class="content">
      <div class="left">
        <div v-for="(item, index) in list" :key="index" class="item" :class="{ active: active === index }" @mouseenter="active = index">— {{ item.name }}</div>
      </div>
      <div class="right">
        <img :src="list[active].img">
        <div class="cont">
          <p>{{ list[active].name }}</p>
          <p>{{ list[active].level }}</p>
          <p v-for="(item, index) in list[active].cont" :key="index">{{ item }}</p>
        </div>
      </div>
    </div>

    <div class="contentMo">
      <img class="prev" src="@/assets/about/team/prev.png" @click="$refs.swiper.$emit('slidePre')">
      <img class="next" src="@/assets/about/team/next.png" @click="$refs.swiper.$emit('slideNext')">
      <slider ref="swiper" class="swiper" :options="options">
        <slideritem v-for="(item, index) in list" :key="index">
          <img class="right" :src="item.img">
          <div class="text">
            <div class="name">{{ item.name }}</div>
            <div class="level">{{ item.level }}</div>
            <div class="line" />
            <p v-for="(itemm, indexx) in list[active].cont" :key="indexx">{{ itemm }}</p>
          </div>
        </slideritem>
      </slider>
      <div class="split" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutTeam',
  data() {
    return {
      active: 0,
      options: {
        loop: true,
        loopedSlides: 8,
        pagination: false,
        centeredSlides: true,
        thresholdDistance: '1',
        thresholdTime: '666666'
      },
      list: [
        {
          name: '老岳',
          level: '老岳讲感统创始人、动漫火车感统训练中心创始人',
          img: require('@/assets/about/team/1.png'),
          cont: [
            '老岳（岳明途）当今国内感统行业领军人物，潜心研究儿童早期教育相关课题，带领动漫火车儿童感统训练中心专业师资队伍100余名，在12年时间里帮助10000余名儿童获得专业、科学的感统训练！',
            '目前共走遍中国东西南北中30余省市，开展千人大型感统知识讲座近500场，普惠万千家庭。开设老岳讲感统商学院，累计培养优秀感统教育精英5000余人次。',
            '2016年创办老岳讲感统线上知识平台，通过腾讯、优酷、爱奇艺、喜马拉雅、千聊、抖音短视频等网络渠道，传播专业感统知识，指导家庭感统训练，目前网内粉丝超过400万，网外粉丝超过5000万！',
            '老岳，中国感统教育终身推动者！'
          ]
        },
        {
          name: '孔艳萍',
          level: '早教专家、中国人生科学学会婴幼儿专业委员会特聘专家',
          img: require('@/assets/about/team/2.png'),
          cont: [
            '朱建新作为中国人生科学学会婴幼儿专业委员会特聘专家，从事民办学前教育管理与研究工作多年，是中国民办教育协会学前教育专业委员会常务理事，全国多家高等院校特聘教授，北京红缨幼教集团特聘顾问，多年来，多次担任北师大老教协园长培训中心，人社部园长培训中心授课导师，长期关注中国幼教行业发展，并多次考察中西方托育机构差异，致力于早幼教行业政策研究。'
          ]
        },
        {
          name: '孔艳萍',
          level: '资深早期教育专家、中国人生科学学前教育分会常务副会长',
          img: require('@/assets/about/team/3.png'),
          cont: [
            '资深早期教育专家、中国人生科学学会学前教育分会常务副会长，北京少儿京昆艺术教育协会副会长，中国儿基会安康计划专家委员会早教专家，2012年被北京市教委聘为“幼儿园质量动态管理”特约巡视员，至今，在教育事业上已干了50多年，30多年幼教，近20年早教，也是北京第一批0-3岁亲子教育活动开创者之一。'
          ]
        },
        {
          name: '赵培芳',
          level: '动漫火车中心主任、早幼教公社特聘讲师',
          img: require('@/assets/about/team/4.png'),
          cont: [
            ' 河南大学教育学毕业，从事感统教育近10年，担任中心主任到老岳讲感统执行CEO，在感统中心运营管理、儿童心理学、团队建设方面积累了丰富的运营及团队管理经验。从事感统教育事业期间，带领团队数次完成中心100万业绩目标，并一次次创造百万业绩新高，创造百万业绩中心，成功打造中原最大感统师资队伍、最强顾问销售团队、最具凝聚力团队。'
          ]
        },
        {
          name: '岳宏亮',
          level: '老岳讲感统品牌运营总监、动漫火车儿童感统训练中心 测评主管',
          img: require('@/assets/about/team/5.png'),
          cont: [
            '北京学前教育协会感统专业委员会副主任、动漫火车儿童感统训练中心测评总监、老岳讲感统首席感统测评讲师。从事感统测评多年来，对超过5000名儿童做出感统测评并出具针对性训练方案，其视频课程在线上帮助超过10万组家庭学习儿童感统测评。老岳讲感统测评场次最多的老师，在针对超过5000名儿童的实际观察评估并作出训练方案后，宏亮老师已经成为感统教育领域的顶级感统评估师，他和老岳共同领导研发的标准感统测评系统正在全国乃至更多国家服务超过100W名儿童。'
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
