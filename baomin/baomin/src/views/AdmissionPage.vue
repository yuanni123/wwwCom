<template>
  <div class="admission-container">
    <el-header class="header">
      <div class="logo-container">
        <!-- 添加学校logo -->
        <div class="school-logo">
          <img src="@/assets/img/sy/fd343a2a5554bb33db411f6d23f6fb88.jpg" alt="学校校标">
        </div>
        <div class="school-name">
          <h1>深圳市宝民技工学校</h1>
          <p>SHENZHEN BAOMIN VOCATIONAL TECHNICAL SCHOOL</p>
        </div>
      </div>
    </el-header>
    
    <!-- 使用导航栏组件 -->
    <main-navigation active-index="6"></main-navigation>
    
    <el-container class="main-container">
      <el-main class="main-content">
        <el-tabs v-model="activeTab" type="card">
          <el-tab-pane label="招生信息" name="info">
            <admission-info></admission-info>
          </el-tab-pane>
          <el-tab-pane label="在线报名" name="registration">
            <online-registration></online-registration>
          </el-tab-pane>
        </el-tabs>
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
import AdmissionInfo from '../components/AdmissionInfo.vue'
import OnlineRegistration from '../components/OnlineRegistration.vue'

export default {
  name: 'AdmissionPage',
  components: {
    MainNavigation,
    AdmissionInfo,
    OnlineRegistration,
  },
  data() {
    return {
      activeTab: 'info'
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
      }
    }
  },
  methods: {
    // 添加返回首页方法
    backToHome() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.admission-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

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
  border-radius: 50%; /* 可选：如果想要圆形logo */
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

.main-container {
  flex: 1;
}

.main-content {
  padding: 20px;
  background-color: #f5f5f5;
}

.footer {
  background-color: #535353;
  color: white;
  padding: 40px 0;
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

.copyright p {
  font-size: 12px;
  margin: 3px 0;
}
</style>