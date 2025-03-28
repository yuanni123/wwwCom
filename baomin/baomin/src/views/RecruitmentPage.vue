<template>
  <div class="recruitment-page">
    <!-- 添加表头 -->
    <el-header class="header">
      <div class="logo-container">
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
    <main-navigation active-index="7"></main-navigation>
    
    <!-- 添加横幅图片 -->
    <div class="banner-container">
      <el-image 
        :src="require('@/assets/img/xxgk/微信图片_20240521201545.jpg')" 
        fit="cover" 
        class="banner-image">
      </el-image>
      <div class="banner-overlay">
        <h1>招聘信息</h1>
        <p>加入我们，共创未来</p>
      </div>
    </div>
    
    <el-container class="main-container">
      <el-main class="main-content">
        <!-- 使用招聘信息组件 -->
        <recruitment-info></recruitment-info>
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
import RecruitmentInfo from '../components/RecruitmentInfo.vue'

export default {
  name: 'RecruitmentPage',
  components: {
    MainNavigation,
    RecruitmentInfo
  }
}
</script>

<style scoped>
.recruitment-page {
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

/* 横幅样式 */
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

/* 其余样式保持不变 */
</style>