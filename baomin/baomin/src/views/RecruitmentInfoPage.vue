<template>
  <div class="recruitment-info-page">
    <el-header class="header">
      <div class="logo-container">
        <div class="school-name">
          <h1>深圳市宝民职业技术学校</h1>
          <p>SHENZHEN BAOMIN VOCATIONAL TECHNICAL SCHOOL</p>
        </div>
      </div>
    </el-header>
    
    <!-- 使用导航栏组件 -->
    <main-navigation active-index="7"></main-navigation>
    
    <!-- 移除返回首页链接和侧边栏 -->
    
    <el-container class="main-container">
      <el-main class="main-content">
        <recruitment-info></recruitment-info>
      </el-main>
    </el-container>
    
    <el-footer class="footer">
      <!-- 页脚内容保持不变 -->
    </el-footer>
  </div>
</template>

<script>
import MainNavigation from '../components/MainNavigation.vue'
import RecruitmentInfo from '../components/RecruitmentInfo.vue'

export default {
  name: 'RecruitmentInfoPage',
  components: {
    MainNavigation,
    RecruitmentInfo
  },
  mounted() {
    console.log('RecruitmentInfoPage 组件已加载')
  }
}
</script>