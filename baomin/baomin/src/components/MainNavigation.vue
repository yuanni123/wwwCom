<template>
  <el-menu
    mode="horizontal"
    background-color="#ffffff"
    text-color="#333333"
    active-text-color="#0d47a1"
    class="main-nav"
    router
    :default-active="activeIndex">
    <!-- 添加首页菜单项 -->
    <el-menu-item index="/">首页</el-menu-item>
    
    <el-submenu index="1">
      <template slot="title">学校概况</template>
      <el-menu-item index="/school-overview">学校简介</el-menu-item>
      <el-menu-item index="/school-overview?tab=leadership">领导团队</el-menu-item>
      <el-menu-item index="/school-overview?tab=honors">荣誉资质</el-menu-item>
      <el-menu-item index="/school-overview?tab=campus">校园风光</el-menu-item>
    </el-submenu>
    
    <!-- 其他菜单项保持不变 -->
    <el-submenu index="2">
      <template slot="title">新闻中心</template>
      <el-menu-item index="/news-center">校园新闻</el-menu-item>
      <el-menu-item index="/news-center?tab=notice">通知公告</el-menu-item>
      <el-menu-item index="/news-center?tab=media">媒体报道</el-menu-item>
    </el-submenu>
    
    <el-submenu index="3">
      <template slot="title">教学教研</template>
      <el-menu-item index="/teaching?tab=majors">专业设置</el-menu-item>
      <el-menu-item index="/teaching?tab=achievements">教学成果</el-menu-item>
      <el-menu-item index="/teaching?tab=training">实训基地</el-menu-item>
    </el-submenu>
    
    <el-submenu index="4">
      <template slot="title">德育之窗</template>
      <el-menu-item index="/moral-education">德育活动</el-menu-item>
      <el-menu-item index="/moral-education?tab=mental-health">心理健康</el-menu-item>
      <el-menu-item index="/moral-education?tab=excellent-students">优秀学生</el-menu-item>
      <el-menu-item index="/moral-education?tab=student-works">学生作品</el-menu-item>
    </el-submenu>
    
    <el-submenu index="5">
      <template slot="title">校园文化</template>
      <el-menu-item index="/culture?tab=campus-activities">校园活动</el-menu-item>
      <el-menu-item index="/culture?tab=clubs">社团组织</el-menu-item>
      <el-menu-item index="/culture?tab=history">校史馆</el-menu-item>
    </el-submenu>
    
    <el-submenu index="6">
      <template slot="title">招生专栏</template>
      <el-menu-item index="/admission?tab=info">招生信息</el-menu-item>
      <el-menu-item index="/admission?tab=registration">在线报名</el-menu-item>
    </el-submenu>
    
    <el-submenu index="7">
      <template slot="title">教师招聘</template>
      <!-- 修改为与其他下拉菜单一致的结构 -->
      <el-menu-item index="/recruitment">招聘信息</el-menu-item>
    </el-submenu>
    
    <el-submenu index="8">
      <template slot="title">联系我们</template>
      <el-menu-item index="8" route="/contact">联系我们</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'MainNavigation',
  props: {
    activeIndex: {
      type: String,
      default: '1'
    }
  }
}
</script>

<style scoped>
.main-nav {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.el-submenu .el-menu {
  min-width: 150px;
  background-color: #ffffff !important;
  border: 1px solid #e6e6e6;
}

.el-submenu .el-menu-item {
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  color: #333333 !important;
}

.el-submenu__title {
  font-size: 16px;
  color: #333333 !important;
}

.el-submenu .el-menu-item:hover {
  background-color: #f2f2f2 !important;
  color: #0d47a1 !important;
}

.el-menu-item:hover, .el-menu-item:focus {
  background-color: #f2f2f2 !important;
}

.el-menu-item.is-active {
  color: #0d47a1 !important;
  border-bottom: 2px solid #0d47a1;
}

/* 添加下拉菜单中选中项的灰色背景 */
.el-submenu .el-menu-item.is-active {
  background-color: #e6e6e6 !important;
  color: #333333 !important;
  border-bottom: none;
}

/* 确保下拉菜单有正确的阴影和边框 */
.el-menu--popup {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
</style>