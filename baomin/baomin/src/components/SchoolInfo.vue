<template>
  <div class="school-info-container">
    <h2 class="section-title">学校概况</h2>
    
    <div class="section">
      <h3>学校简介</h3>
      <div class="content">
        <p>深圳市宝民技工学校创建于2005年，是一所经深圳市教育局批准成立的全日制中等职业学校。学校位于深圳市宝安区松白路7022号，占地面积约xxx平方米，建筑面积xx平方米。</p>
        <p>学校秉承"以人为本，德技并修"的办学理念，致力于培养具有良好职业道德、扎实专业技能和创新精神的高素质技能型人才。多年来，学校坚持产教融合、校企合作的办学模式，为深圳地区的经济建设和社会发展输送了大量优秀毕业生。</p>
      </div>
    </div>
    
    <div class="section">
      <h3>办学特色</h3>
      <div class="content">
        <div class="feature-item">
          <h4>产教融合</h4>
          <p>学校与xx多家企业建立了稳定的合作关系，开展订单培养、实习就业、师资培训等多种形式的校企合作。</p>
        </div>
        <div class="feature-item">
          <h4>双师型教师队伍</h4>
          <p>学校拥有一支专业素质高、实践能力强的"双师型"教师队伍，90%以上的专业教师具有企业工作经验。</p>
        </div>
        <div class="feature-item">
          <h4>现代化实训设施</h4>
          <p>学校建有xx多个专业实训室，配备先进的教学设备和软件，为学生提供良好的实践环境。</p>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h3>专业设置</h3>
      <div class="content">
        <el-row :gutter="20">
          <el-col :span="8" v-for="(major, index) in majors" :key="index">
            <el-card class="major-card" shadow="hover">
              <div class="major-name">{{ major.name }}</div>
              <div class="major-desc">{{ major.description }}</div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    
    <div class="section">
      <h3>校园环境</h3>
      <div class="content">
        <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item v-for="(item, index) in campusImages" :key="index">
            <img :src="item.url" :alt="item.desc" class="campus-img">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SchoolInfo',
  data() {
    return {
      majors: [
        {
          name: '计算机应用技术',
          description: '培养具备计算机应用基础知识和专业技能的技术人才'
        },
        {
          name: '电子商务',
          description: '培养能够从事电子商务运营、网络营销的专业人才'
        },
        {
          name: '会计',
          description: '培养掌握现代会计理论与实务的专业人才'
        },
        {
          name: '机电一体化技术',
          description: '培养具备机电设备操作维护能力的技术人才'
        },
        {
          name: '汽车运用与维修',
          description: '培养从事汽车检测、维修与服务的专业人才'
        },
        {
          name: '幼儿教育',
          description: '培养具备学前教育专业知识与能力的师资人才'
        }
      ],
      campusImages: [
        { url: require('../assets/img/sy/carousel1.jpg'), desc: '校园环境1' },
        { url: require('../assets/img/sy/carousel2.jpg'), desc: '校园环境2' },
        { url: require('../assets/img/sy/carousel3.jpg'), desc: '校园环境3' }
      ]
    }
  }
}
</script>

<style scoped>
.school-info-container {
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.section-title {
  color: #0d47a1;
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
}

.section {
  margin-bottom: 40px;
}

h3 {
  color: #0d47a1;
  border-left: 4px solid #0d47a1;
  padding-left: 10px;
  margin-bottom: 20px;
}

.content {
  line-height: 1.8;
  color: #333;
}

.feature-item {
  margin-bottom: 20px;
}

h4 {
  color: #0d47a1;
  margin-bottom: 10px;
}

.major-card {
  height: 150px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.major-name {
  font-size: 18px;
  font-weight: bold;
  color: #0d47a1;
  margin-bottom: 10px;
}

.major-desc {
  color: #666;
  line-height: 1.5;
}

.campus-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>