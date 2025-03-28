<template>
  <div class="teaching-page">
    <!-- 添加学校表头 -->
    <el-header class="header">
      <div class="logo-container" >
        <div class="school-logo">
          <img src="../assets/img/sy/fd343a2a5554bb33db411f6d23f6fb88.jpg" alt="学校校标" />
        </div>
        <div class="school-name">
          <h1>深圳市宝民技工学校</h1>
          <p>SHENZHEN BAOMIN VOCATIONAL TECHNICAL SCHOOL</p>
        </div>
      </div>
    </el-header>
    
    <main-navigation active-index="3"></main-navigation>
  
    
    <div class="banner-container">
      <el-image 
        :src="require('@/assets/img/xxgk/jiaojiao.png')" 
        fit="cover" 
        class="banner-image">
      </el-image>
      <div class="banner-overlay">
        <h1>教学教研</h1>
        <p>Teaching and Research</p>
      </div>
    </div>
    
    <el-container class="main-container">
      <el-aside width="220px" class="sidebar">
        <div class="custom-menu">
          <div class="menu-header">
            <h2>教学教研</h2>
          </div>
          <div class="menu-items">
            <div 
              v-for="item in menuItems" 
              :key="item.key"
              class="menu-item" 
              :class="{ 'active': activeTab === item.key }"
              @click="handleSelect(item.key)">
              {{ item.label }}
              <div v-if="activeTab === item.key" class="active-indicator"></div>
            </div>
          </div>
        </div>
      </el-aside>
      
      <el-main class="main-content">
        <!-- 专业设置 -->
        <div v-show="activeTab === 'majors'" class="content-section">
          <div class="section-title">
            <h2>专业设置</h2>
          </div>
          <el-row :gutter="30">
            <el-col :span="8" v-for="major in majors" :key="major.id">
              <el-card class="major-card" shadow="hover">
                <div class="major-icon">
                  <el-image :src="major.icon" fit="cover"></el-image>
                </div>
                <h3>{{ major.name }}</h3>
                <p>{{ major.description }}</p>
              </el-card>
            </el-col>
          </el-row>
        </div>

        <!-- 教学成果 -->
        <div v-show="activeTab === 'achievements'" class="content-section">
          <div class="section-title">
            <h2>教学成果</h2>
          </div>
          <el-timeline>
            <el-timeline-item
              v-for="achievement in achievements"
              :key="achievement.id"
              :timestamp="achievement.date"
              placement="top">
              <el-card>
                <h3>{{ achievement.title }}</h3>
                <p>{{ achievement.description }}</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>

        <!-- 实训基地 -->
        <div v-show="activeTab === 'training'" class="content-section">
          <div class="section-title">
            <h2>实训基地</h2>
          </div>
          <el-row :gutter="20">
            <el-col :span="8" v-for="base in trainingBases" :key="base.id">
              <el-card class="training-card" shadow="hover">
                <el-image :src="base.image" fit="cover"></el-image>
                <div class="training-info">
                  <h3>{{ base.name }}</h3>
                  <p>{{ base.description }}</p>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>

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
  name: 'TeachingPage',
  components: {
    MainNavigation
  },
  data() {
    return {
      activeTab: 'majors',
      menuItems: [
        { key: 'majors', label: '专业设置' },
        { key: 'achievements', label: '教学成果' },
        { key: 'training', label: '实训基地' }
      ],
      majors: [
        {
          id: 1,
          name: '数控技术',
          description: '培养数控机床操作、编程及维护的技术技能人才',
          icon: require('@/assets/img/xxgk/1728446731.jpg')
        },
        {
          id: 2,
          name: '电气自动化',
          description: '培养电气设备安装、调试及维护的技术技能人才',
          icon: require('@/assets/img/xxgk/1728446731.jpg')
        },
        {
          id: 3,
          name: '模具设计',
          description: '培养模具设计、制造及维护的技术技能人才',
          icon: require('@/assets/img/xxgk/1728446731.jpg')
        }
      ],
      achievements: [
        {
          id: 1,
          title: '省级教学成果奖',
          date: '2023-06',
          description: '我校"工学结合"教学模式改革获得省级教学成果一等奖'
        },
        {
          id: 2,
          title: '技能大赛优秀组织奖',
          date: '2023-05',
          description: '在2023年全国职业院校技能大赛中获得优秀组织奖'
        }
      ],
      trainingBases: [
        {
          id: 1,
          name: '数控加工中心',
          description: '配备先进数控设备，为学生提供实际操作环境',
          image: require('@/assets/img/xxgk/1728446731.jpg')
        },
        {
          id: 2,
          name: '电气实训室',
          description: '配备完整的电气自动化实训设备',
          image: require('@/assets/img/xxgk/1728446731.jpg')
        },
        {
          id: 3,
          name: '模具制造中心',
          description: '配备专业模具加工设备和3D打印设备',
          image: require('@/assets/img/xxgk/1728446731.jpg')
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
        this.activeTab = 'majors';
      }
    }
  },
  methods: {
    handleSelect(key) {
      this.activeTab = key;
      // 更新URL查询参数
      this.$router.push({ 
        path: '/teaching', 
        query: { tab: key } 
      }).catch(err => {
        if (err.name !== 'NavigationDuplicated') {
          throw err;
        }
      });
    }
  }
}
</script>

<style scoped>
/* 复用之前的基础样式 */
.teaching-page {
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

/* 其余样式保持不变 */
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

/* 其余样式保持不变 */
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

.main-container {
  flex: 1;
  background-color: #f5f5f5;
  padding: 30px;
  display: flex;
}

.sidebar {
  background-color: #f5f5f5;
  padding: 0;
  width: 220px;
  margin-right: 30px;
}

.custom-menu {
  width: 100%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px 8px 0 0;
  overflow: hidden;
}

.menu-header {
  background-color: #0d47a1;
  color: white;
  padding: 15px 0;
  text-align: center;
  border-radius: 8px 8px 0 0;
}

.menu-header h2 {
  margin: 0;
  font-size: 24px;
}

.menu-items {
  background-color: white;
}

.menu-item {
  padding: 15px 20px;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.3s;
}

.menu-item:hover {
  background-color: #f9f9f9;
}

.menu-item.active {
  font-weight: bold;
  color: #333;
}

.active-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #E6A23C;
}

.main-content {
  padding: 0;
  flex: 1;
}

.content-section {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.section-title {
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid #0d47a1;
}

.section-title h2 {
  color: #0d47a1;
  font-size: 28px;
  margin: 0;
}

/* 专业卡片样式 */
.major-card {
  margin-bottom: 20px;
  text-align: center;
  transition: all 0.3s;
}

.major-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.major-icon {
  margin: 20px auto;
  width: 80px;
  height: 80px;
}

.major-card h3 {
  color: #0d47a1;
  margin: 15px 0;
}

.major-card p {
  color: #606266;
  line-height: 1.6;
}

/* 实训基地卡片样式 */
.training-card {
  margin-bottom: 20px;
  transition: all 0.3s;
}

.training-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.training-card .el-image {
  width: 100%;
  height: 200px;
}

.training-info {
  padding: 15px;
}

.training-info h3 {
  color: #0d47a1;
  margin: 0 0 10px 0;
}

.training-info p {
  color: #606266;
  line-height: 1.6;
  margin: 0;
}

.footer {
  background-color: #535353;
  color: white;
  padding: 20px 0;
  height: auto !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
}

.footer-content p {
  margin: 5px 0;
  font-size: 14px;
}

.copyright {
  margin-top: 5px;
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  .main-container {
    flex-direction: column;
    padding: 15px;
  }
  
  .sidebar {
    width: 100% !important;
    margin-right: 0;
    margin-bottom: 20px;
  }
  
  .content-section {
    padding: 20px;
  }
}
</style>