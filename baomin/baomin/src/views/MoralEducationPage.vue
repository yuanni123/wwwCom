<template>
  <div class="moral-education-container">
    <!-- 将学校logo和名称放在最上面 -->
    <el-header class="header">
      <div class="logo-container">
        <div class="school-logo">
          <img src="../assets/img/sy/fd343a2a5554bb33db411f6d23f6fb88.jpg" alt="学校校标" />
        </div>
        <div class="school-name">
          <h1>深圳市宝民技工学校</h1>
          <p>SHENZHEN BAOMIN VOCATIONAL TECHNICAL SCHOOL</p>
        </div>
      </div>
    </el-header>
    
    <!-- 使用导航栏组件 -->
    <main-navigation active-index="4"></main-navigation>
    
    <!-- 添加横幅图片 -->
    <div class="banner-container">
      <el-image 
        :src="require('@/assets/img/xxgk/fafa.png')" 
        fit="cover" 
        class="banner-image">
      </el-image>
      <div class="banner-overlay">
        <h1>德育之窗</h1>
        <p>培养学生良好品德，促进全面性发展</p>
      </div>
    </div>
    
    <el-container class="main-container">
      <el-main class="main-content">
        <el-tabs v-model="activeTab" type="card">
          <!-- 新增的标签页内容 -->
          <el-tab-pane label="德育活动" name="activities">
            <div class="section">
              <h2 class="section-title">德育活动展示</h2>
              <el-timeline>
                <el-timeline-item
                  v-for="activity in moralActivities"
                  :key="activity.id"
                  :color="activity.color"
                  :timestamp="activity.date">
                  <h3>{{ activity.title }}</h3>
                  <p>{{ activity.content }}</p>
                  <div class="activity-images">
                    <el-image
                      v-for="(image, index) in activity.images"
                      :key="index"
                      :src="image"
                      fit="cover"
                      class="activity-image"
                      @click="handleImageClick(image)">
                    </el-image>
                  </div>
                </el-timeline-item>
              </el-timeline>
            </div>
          </el-tab-pane>
  
          <el-tab-pane label="心理健康" name="mental-health">
            <div class="section">
              <h2 class="section-title">心理健康资源</h2>
              <el-row :gutter="20">
                <el-col :span="8" v-for="resource in mentalHealthResources" :key="resource.title">
                  <el-card class="resource-card" shadow="hover">
                    <h3 class="resource-title">{{ resource.title }}</h3>
                    <p class="resource-desc">{{ resource.description }}</p>
                    <el-button type="primary" size="small" @click="downloadResource(resource)">
                      下载资源
                    </el-button>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </el-tab-pane>
  
          <el-tab-pane label="优秀学生" name="excellent-students">
            <div class="section">
              <h2 class="section-title">优秀学生风采</h2>
              <el-row :gutter="20">
                <el-col :span="8" v-for="student in excellentStudents" :key="student.id">
                  <el-card class="student-card" shadow="hover">
                    <el-avatar :size="100" :src="student.avatar" class="student-avatar"></el-avatar>
                    <div class="student-info">
                      <h3>{{ student.name }}</h3>
                      <p class="student-class">{{ student.class }}</p>
                      <p class="student-title">{{ student.title }}</p>
                    </div>
                    <p class="student-story">{{ student.story }}</p>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </el-tab-pane>
  
          <el-tab-pane label="学生作品" name="student-works">
            <div class="section">
              <h2 class="section-title">学生优秀作品展示</h2>
              <el-row :gutter="20">
                <el-col :span="8" v-for="work in studentWorks" :key="work.title">
                  <el-card class="work-card" shadow="hover">
                    <img :src="work.image" class="work-image">
                    <div class="work-info">
                      <h3>{{ work.title }}</h3>
                      <p class="work-author">{{ work.author }} - {{ work.class }}</p>
                      <p class="work-desc">{{ work.description }}</p>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
    
    <!-- 修改页脚部分 -->
    <el-footer class="footer">
      <div class="footer-content">
        <p>地址：深圳市宝安区松白路7022号宝民技工学校</p>
        <div class="copyright">
          © 2025 深圳市宝民技工学校 版权所有
        </div>
      </div>
    </el-footer>
  </div>
</template>

<script>
import MainNavigation from '../components/MainNavigation.vue'

export default {
  name: 'MoralEducationPage',
  components: {
    MainNavigation
  },
  data() {
    return {
      activeTab: 'activities',
      moralActivities: [
        {
          id: 1,
          title: '爱国主义教育主题班会',
          date: '2023-09-30',
          content: '为庆祝国庆节，学校组织了爱国主义教育主题班会，通过观看爱国主义教育影片、讲述革命先烈故事等形式，激发学生的爱国热情。',
          color: '#409EFF',
          images: [
          require('@/assets/img/xxgk/1728446731.jpg'),
          require('@/assets/img/xxgk/1728446731.jpg')
          ]
        },
        {
          id: 2,
          title: '诚信教育活动',
          date: '2023-09-15',
          content: '学校开展了以"诚信做人，诚信做事"为主题的诚信教育活动，通过诚信讲座、诚信承诺签名等形式，引导学生树立诚信意识。',
          color: '#67C23A',
          images: [
          require('@/assets/img/xxgk/1728446731.jpg')
          ]
        },
        {
          id: 3,
          title: '感恩教育活动',
          date: '2023-05-12',
          content: '在母亲节来临之际，学校组织了"感恩母亲，感恩师长"主题活动，学生通过写感恩信、制作感恩卡片等方式表达对母亲和老师的感恩之情。',
          color: '#E6A23C',
          images: [
            require('@/assets/img/xxgk/1728446731.jpg'),
            require('@/assets/img/xxgk/1728446731.jpg'),
            require('@/assets/img/xxgk/1728446731.jpg'),
          ]
        }
      ],
      mentalHealthResources: [
        {
          title: '青少年心理健康手册',
          description: '介绍青少年常见心理问题及应对方法',
          url: '#'
        },
        {
          title: '压力管理与情绪调节',
          description: '学习如何管理压力和调节情绪的实用指南',
          url: '#'
        },
        {
          title: '人际关系与沟通技巧',
          description: '提升人际交往能力和沟通技巧的方法',
          url: '#'
        }
      ],
      excellentStudents: [
        {
          id: 1,
          name: '张明',
          class: '计算机应用2101班',
          title: '校三好学生',
          avatar: require('@/assets/img/xxgk/1728446731.jpg'),  // 将import改为avatar
          story: '张明同学学习刻苦认真，成绩优异，多次获得学校奖学金。同时积极参加社会实践活动，担任班级学习委员，热心帮助同学，是同学们学习的榜样。'
        },
        {
          id: 2,
          name: '李华',
          class: '电子商务2102班',
          title: '优秀学生干部',
          avatar: require('@/assets/img/xxgk/1728446731.jpg'),  // 将import改为avatar
          story: '李华同学担任学生会主席，组织策划了多项校园文化活动，工作认真负责，具有较强的组织能力和领导才能，深受师生好评。'
        },
        {
          id: 3,
          name: '王芳',
          class: '会计2103班',
          title: '技能大赛一等奖获得者',
          avatar: require('@/assets/img/xxgk/1728446731.jpg'),  // 将import改为avatar
          story: '王芳同学在2023年全国职业院校技能大赛会计项目中获得一等奖，专业技能突出，学习态度端正，是专业学习的标兵。'
        }
      ],
      studentWorks: [
        {
          title: '《春天的畅想》',
          author: '刘晓',
          class: '艺术设计2101班',
          image: require('@/assets/img/xxgk/1728446731.jpg'),
          description: '这幅作品表达了作者对春天的美好向往，色彩明快，构图和谐。'
        },
        {
          title: '《科技与未来》',
          author: '张伟',
          class: '计算机应用2102班',
          image: require('@/assets/img/xxgk/1728446731.jpg'),
          description: '这是一个3D打印作品，展示了作者对未来科技发展的畅想。'
        },
        {
          title: '《我的家乡》',
          author: '李梅',
          class: '旅游管理2103班',
          image: require('@/assets/img/xxgk/1728446731.jpg'),
          description: '这篇散文描绘了作者家乡的美丽风景和风土人情，字里行间流露出对家乡的深厚感情。'
        }
      ]
    }
  },
  created() {
    // 根据URL查询参数设置当前活动的标签页
    const tab = this.$route.query.tab;
    if (tab) {
      this.activeTab = tab;
    }
  },
  watch: {
    // 监听路由变化，更新活动标签页
    '$route.query.tab': function(newTab) {
      if (newTab) {
        this.activeTab = newTab;
      } else {
        this.activeTab = 'activities';
      }
    }
  },
  methods: {
    backToHome() {
      this.$router.push('/');
    },
    downloadResource(resource) {
      this.$message({
        message: `正在下载资源：${resource.title}`,
        type: 'success'
      });
      // 实际下载逻辑
    },
    handleImageClick(image) {
      // 处理图片点击事件
      // 可以在这里添加图片预览功能
    }
  }
}
</script>

<style scoped>
.moral-education-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* 添加表头样式 */
.header {
  background-color: #004098; /* 修改为与图片一致的蓝色 */
  color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* 确保内容左对齐 */
  height: 80px; /* 调整高度 */
}

.logo-container {
  display: flex;
  align-items: center;
}

/* 添加学校logo样式 */
.school-logo {
  display: flex;
  align-items: center;
  margin-right: 15px;
}

.school-logo img {
  width: 60px;
  height: 60px;
  border-radius: 50%; /* 圆形logo */
}

.school-name h1 {
  margin: 0;
  font-size: 28px; /* 增大字体 */
  font-weight: bold;
  letter-spacing: 1px;
}

.school-name p {
  margin: 0;
  font-size: 14px; /* 调整字体大小 */
  letter-spacing: 0.5px;
}

/* 添加横幅样式 */
.banner-container {
  position: relative;
  width: 100%;
  height: 300px; /* 增加横幅高度 */
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(13, 71, 161, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

/* 其他样式保持不变 */
.banner-overlay h1 {
  font-size: 36px;
  margin: 0 0 10px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.banner-overlay p {
  font-size: 18px;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* 其他现有样式保持不变 */
.page-header {
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
}

.page-title {
  font-size: 28px;
  color: #0d47a1;
  margin: 0;
}

.page-subtitle {
  font-size: 16px;
  color: #666;
  margin-top: 5px;
}

.main-container {
  flex: 1;
}

/* 其余样式保持不变 */
.main-content {
  padding: 20px;
  background-color: #f5f5f5;
}

.section {
  margin-bottom: 30px;
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.section-title {
  margin-bottom: 20px;
  padding-left: 10px;
  border-left: 4px solid #409EFF;
  color: #0d47a1;
}

.activity-images {
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
}

.activity-image {
  width: 150px;
  height: 100px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  cursor: pointer;
}

.mental-health-intro, .mental-health-services {
  margin-bottom: 20px;
}

.service-card, .resource-card {
  margin-bottom: 15px;
}

.resource-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.resource-desc {
  color: #666;
  font-size: 14px;
  margin-bottom: 10px;
}

.student-card {
  margin-bottom: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.student-avatar {
  margin-bottom: 15px;
}

.student-info {
  text-align: center;
  margin-bottom: 10px;
}

.student-class, .student-title {
  color: #666;
  margin: 5px 0;
}

.student-story {
  color: #333;
  font-size: 14px;
  text-align: justify;
}

.work-card {
  margin-bottom: 20px;
  height: 100%;
}

.work-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.work-info {
  padding: 10px 0;
}

.work-author {
  color: #666;
  font-size: 14px;
  margin: 5px 0;
}

.work-desc {
  color: #333;
  font-size: 14px;
  margin-top: 10px;
}

/* 修改页脚样式，与图片一致 */
.footer {
  background-color: #535353;
  color: white;
  padding: 20px 0;
  height: auto !important;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.footer-content p {
  margin: 5px 0;
  font-size: 14px;
}

.copyright {
  margin-top: 5px;
  font-size: 14px;
}

/* 移除不需要的页脚样式 */
</style>