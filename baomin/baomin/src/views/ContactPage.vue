<template>
  <div class="contact-page-container">
    <el-header class="header">
      <div class="logo-container">
        <div class="school-name">
          <h1>深圳市宝民技工学校</h1>
          <p>SHENZHEN BAOMIN VOCATIONAL TECHNICAL SCHOOL</p>
        </div>
      </div>
    </el-header>
    
    <!-- 使用导航栏组件 -->
    <main-navigation active-index="8"></main-navigation>
    
    <!-- 移除返回首页按钮 -->
    
    <!-- 添加主要内容区域，直接使用ContactUs组件，不添加左侧菜单栏 -->
    <el-container class="main-container">
      <el-main class="main-content">
        <contact-us></contact-us>
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
import ContactUs from '../components/ContactUs.vue'

export default {
  name: 'ContactPage',
  components: {
    MainNavigation,
    ContactUs
  },
  methods: {
    backToHome() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.contact-page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: #0d47a1;
  color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
}

.school-name h1 {
  margin: 0;
  font-size: 24px;
}

.school-name p {
  margin: 0;
  font-size: 12px;
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

.copyright p {
  font-size: 12px;
  margin: 3px 0;
}

.back-to-home {
  margin: 15px;
  text-align: right;
  padding-right: 20px;
}
</style>