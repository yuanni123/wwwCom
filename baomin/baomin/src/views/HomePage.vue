<template>
  <div class="home-page">
    <!-- 头部 -->
    <el-header class="header" height="120px">
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
    
    <!-- 导航栏 -->
    <el-menu
      mode="horizontal"
      background-color="#ffffff"
      text-color="#333333"
      active-text-color="#0d47a1"
      class="main-nav"
      :default-active="activeIndex"
      router>
      <!-- 其余导航内容保持不变 -->
      <el-menu-item index="0" route="/">首页</el-menu-item>
      
      <el-submenu index="1">
        <template slot="title">学校概况</template>
        <el-menu-item index="/school-overview">学校简介</el-menu-item>
        <el-menu-item index="/school-overview?tab=leadership">领导团队</el-menu-item>
        <el-menu-item index="/school-overview?tab=honors">荣誉资质</el-menu-item>
        <el-menu-item index="/school-overview?tab=campus">校园风光</el-menu-item>
      </el-submenu>
      
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
        <el-menu-item index="/recruitment">招聘信息</el-menu-item>
      </el-submenu>
      
      <el-submenu index="8">
        <template slot="title">联系我们</template>
        <el-menu-item index="/contact">联系方式</el-menu-item>
      </el-submenu>
    </el-menu>
    
    <!-- 修改内容容器，移除轮播图部分的内边距 -->
    <div class="content-container">
      <!-- 轮播图 - 修改为全宽度 -->
      <div class="carousel-section full-width">
        <el-carousel height="500px">
          <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
            <img :src="item.imgUrl" :alt="item.title" class="carousel-img">
            <div class="carousel-caption">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      
      <!-- 快捷入口 -->
      <div class="quick-access">
        <h2 class="section-title">快捷入口</h2>
        <el-row :gutter="20">
          <el-col :span="6" v-for="(item, index) in quickAccessItems" :key="index">
            <el-card shadow="hover" class="quick-access-card" @click.native="navigateTo(item.link)">
              <div class="icon-container">
                <i :class="item.icon"></i>
              </div>
              <div class="quick-access-title">{{ item.title }}</div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      
      <!-- 最美宝民 -->
      <div class="most-beautiful-section">
        <div class="most-beautiful-title">
          <h2>——最美宝民——</h2>
          <p>Most beautiful Baomin</p>
        </div>
        <div class="most-beautiful-content">
          <el-carousel :interval="4000" type="card" height="380px">
            <el-carousel-item v-for="(item, index) in beautifulItems" :key="index">
              <el-card class="beautiful-card" shadow="hover">
                <img :src="item.image" class="beautiful-image">
                <div class="beautiful-info">
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.description }}</p>
                </div>
              </el-card>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      
      <!-- 新闻动态和通知公告 -->
      <div class="news-section">
        <h2 class="section-title">新闻动态</h2>
        <el-row :gutter="20">
          <el-col :span="16">
            <div class="news-list">
              <div v-for="(news, index) in newsItems" :key="index" class="news-item" @click="viewNewsDetail(news.id)">
                <div class="news-date">
                  <div class="day">{{ formatDay(news.date) }}</div>
                  <div class="month-year">{{ formatMonthYear(news.date) }}</div>
                </div>
                <div class="news-content">
                  <h3 class="news-title">{{ news.title }}</h3>
                  <p class="news-summary">{{ news.summary }}</p>
                </div>
              </div>
              <div class="more-news">
                <el-button type="text" @click="navigateTo('/news-center')">查看更多 <i class="el-icon-arrow-right"></i></el-button>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="announcements">
              <div class="announcement-header">
                <h3>通知公告</h3>
              </div>
              <div class="announcement-list">
                <div v-for="(announcement, index) in announcements" :key="index" class="announcement-item" @click="viewAnnouncementDetail(announcement.id)">
                  <div class="announcement-title">{{ announcement.title }}</div>
                  <div class="announcement-date">{{ formatDate(announcement.date) }}</div>
                </div>
              </div>
              <div class="more-announcements">
                <el-button type="text" @click="navigateTo('/announcements')">更多公告 <i class="el-icon-arrow-right"></i></el-button>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      
      <!-- 友情链接 -->
      <div class="friend-links">
        <el-row :gutter="20" type="flex" justify="center">
          <el-col :span="4" v-for="(link, index) in friendLinks" :key="index">
            <a :href="link.url" target="_blank" class="friend-link">
              <el-card shadow="hover" class="friend-link-card">
                {{ link.name }}
              </el-card>
            </a>
          </el-col>
        </el-row>
      </div>
    </div>
    
    <!-- 页脚 -->
    <el-footer class="footer">
      <div class="footer-content">
        <div class="footer-info">
          <p>地址：深圳市宝安区松白路7022号宝民技工学校</p>
        </div>
        <div class="copyright">
          © 2025 深圳市宝民技工学校 版权所有
        </div>
      </div>
    </el-footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      activeIndex: '0', // 修改默认激活为首页
      carouselItems: [
        {
          imgUrl: require('../assets/img/sy/carousel1.jpg'),
          title: '2025年秋季招生火热进行中',
          description: '欢迎初中毕业生报考我校各专业'
        },
        {
          imgUrl: require('../assets/img/sy/carousel2.jpg'),
          title: '校企合作签约仪式',
          description: '我校与多家知名企业达成深度合作'
        },
        {
          imgUrl: require('../assets/img/sy/carousel3.jpg'),
          title: '学校荣获"优质民办学校"称号',
          description: '深圳市教育局表彰大会隆重举行'
        }
      ],
      quickAccessItems: [
        { title: '校园公告', icon: 'el-icon-bell', link: '/announcements' },
        { title: '在线报名', icon: 'el-icon-edit-outline', link: '/registration' },
        { title: '成绩查询', icon: 'el-icon-search', link: '/grades' },
        { title: '招生问答', icon: 'el-icon-question', link: '/faq' }
      ],
      beautifulItems: [
        {
          title: '"五段式"教学环节下的课堂教学',
          description: '我校教师团队展示专业教学成果',
          image: require('../assets/img/xxgk/微信图片_20240521201545.jpg')
        },
        {
          title: '校企合作交流会',
          description: '深化产教融合，促进学生就业',
          image: require('../assets/img/sy/微信图片_20250321121626.png')
        },
        {
          title: '学生技能大赛',
          description: '展示学生专业技能和职业素养',
          image: require('../assets/img/xxgk/jineng.png')
        },
        {
          title: '校园文化建设',
          description: '营造良好的校园文化氛围',
          image: require('../assets/img/xxgk/wenhua.png')
        }
      ],
      newsItems: [
        {
          id: 1,
          title: '我校举办2023年技能大赛',
          summary: '为提高学生专业技能水平，展示职业教育教学成果，我校于上周成功举办了2023年校内技能大赛...',
          date: '2023-05-15'
        },
        {
          id: 2,
          title: '校企合作新进展：与华为签署人才培养协议',
          summary: '近日，我校与华为技术有限公司签署了校企合作协议，共同推进ICT人才培养计划...',
          date: '2023-05-10'
        },
        {
          id: 3,
          title: '我校学生在省职业技能大赛中获佳绩',
          summary: '在刚刚结束的广东省职业院校技能大赛中，我校学生表现优异，共获得一等奖2项、二等奖3项...',
          date: '2023-04-28'
        },
        // 添加新的新闻动态
        {
          id: 4,
          title: '学校举办2024届毕业典礼',
          summary: '6月20日，我校隆重举行2024届毕业典礼，校领导、教师代表与全体毕业生共同见证这一重要时刻，祝愿毕业生前程似锦...',
          date: '2023-06-20'
        }
      ],
      announcements: [
        {
          id: 1,
          title: '关于2025年秋季招生简章发布的通知',
          date: '2023-05-20'
        },
        {
          id: 2,
          title: '2025年暑假放假安排',
          date: '2023-05-18'
        },
        {
          id: 3,
          title: '关于举办校园acee文化节的通知',
          date: '2023-05-15'
        },
        {
          id: 4,
          title: '教师招聘面试通知',
          date: '2023-05-12'
        },
        {
          id: 5,
          title: '关于组织学生参加职业技能鉴定的通知',
          date: '2023-05-08'
        }
      ],
      friendLinks: [
        { name: '深圳市教育局', url: 'http://edu.sz.gov.cn/' },
        { name: '广东省教育厅', url: 'http://edu.gd.gov.cn/' },
        { name: '中国职业教育网', url: 'http://www.chinazy.org/' },
        { name: '深圳市人力资源局', url: 'http://hrss.sz.gov.cn/' },
        { name: '宝安区教育局', url: 'http://ba.sz.gov.cn/jyj/' },
      ]
    }
  },
  methods: {
    navigateTo(path) {
      this.$router.push(path);
    },
    viewNewsDetail(id) {
      this.$router.push(`/news/detail/${id}`);
    },
    viewAnnouncementDetail(id) {
      this.$router.push(`/announcement/detail/${id}`);
    },
    formatDay(dateString) {
      const date = new Date(dateString);
      return date.getDate();
    },
    formatMonthYear(dateString) {
      const date = new Date(dateString);
      const month = date.getMonth() + 1;
      return `${month}月`;
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
  }
}
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  min-height: 150vh;
}

.header {
  background-color: #004098; /* 深蓝色背景 */
  color: white;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 120px;
}

.logo-container {
  display: flex;
  align-items: center;
}

/* 修改校标样式，使其与图片一致 */
.school-logo {
  display: flex;
  align-items: center;
  margin-right: 20px;
  background-color: #004098; /* 与头部背景色一致 */
  border-radius: 50%; /* 圆形 */
  padding: 2px; /* 内边距 */
  border: 2px solid white; /* 白色边框 */
  overflow: hidden; /* 确保内容不超出圆形边界 */
}

.school-logo img {
  width: 70px; /* 调整大小 */
  height: 70px;
  border-radius: 50%; /* 确保图片也是圆形 */
  object-fit: contain; /* 保持图片比例 */
  background-color: white; /* 图片背景为白色 */
  padding: 5px; /* 图片内边距 */
}

.school-name h1 {
  margin: 0;
  font-size: 34px;
  font-weight: bold;
  letter-spacing: 1px;
}

.school-name p {
  margin: 5px 0 0 0;
  font-size: 16px;
  letter-spacing: 0.5px;
}

.main-nav {
  display: flex;
  justify-content: center;
}

/* 添加下拉菜单样式 */
.el-submenu .el-menu {
  min-width: 150px;
}

.el-submenu .el-menu-item {
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
}

.el-submenu__title {
  font-size: 16px;
}

.el-submenu .el-menu-item:hover {
  background-color: #e6f1ff !important;
  color: #0d47a1 !important;
}

.content-container {
  flex: 1;
  padding: 0; /* 移除整体内边距 */
  background-color: #f5f5f5;
}

/* 添加内部内容的内边距 */
.content-container > div:not(.carousel-section) {
  padding: 0 20px;
  margin-top: 30px;
}

.carousel-section {
  margin-bottom: 0; /* 移除底部间距 */
  width: 100%;
}

.carousel-section .el-carousel {
  width: 100%;
}

.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 20px; /* 增加内边距 */
}

.carousel-caption h3 {
  margin: 0 0 10px 0; /* 增加底部间距 */
  font-size: 28px; /* 增大标题字体 */
}

.carousel-caption p {
  font-size: 16px; /* 增大描述字体 */
  margin: 0;
}
.section-title {
  color: #0d47a1;
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

.section-title:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: #0d47a1;
}

.quick-access {
  margin-bottom: 30px;
}

.quick-access-card {
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.quick-access-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.icon-container {
  font-size: 36px;
  color: #0d47a1;
  margin-bottom: 10px;
}

.quick-access-title {
  font-size: 16px;
  font-weight: bold;
}

/* 最美宝民样式 */
.most-beautiful-section {
  margin-bottom: 30px;
  background-color: #0d47a1;
  padding: 30px 0;
  color: white;
}

.most-beautiful-title {
  text-align: center;
  margin-bottom: 30px;
  height: 150px;
}

.most-beautiful-title h2 {
  font-size: 28px;
  margin: 0 0 5px 0;
  font-weight: normal;
}

.most-beautiful-title p {
  font-size: 16px;
  margin: 0;
  opacity: 0.8;
}

.most-beautiful-content {
  padding: 0;
  max-width: 1200px;
  margin: 0 auto;
}

/* 修改轮播图样式 */
.most-beautiful-content .el-carousel {
  margin: 0 auto;
}

.most-beautiful-content .el-carousel__container {
  display: flex;
  justify-content: center;
}

.beautiful-card {
  height: 100%;
  border: none;
  overflow: hidden;
  max-width: 800px;
  margin: 0 auto;
}

.beautiful-image {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
  margin: 0 auto;
}

.beautiful-info {
  padding: 15px;
  background-color: white;
  color: #333;
  text-align: center;
}

.beautiful-info h3 {
  margin: 0 0 10px 0;
  font-size: 18px;
  color: #0d47a1;
}

.beautiful-info p {
  margin: 0;
  font-size: 14px;
  color: #666;
}

.news-section {
  margin-bottom: 30px;
}

.news-item {
  display: flex;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s;
}

.news-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.news-date {
  background-color: #0d47a1;
  color: white;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 80px;
}

.day {
  font-size: 24px;
  font-weight: bold;
}

.month-year {
  font-size: 14px;
}

.news-content {
  padding: 15px;
  flex: 1;
}

.news-title {
  margin-top: 0;
  margin-bottom: 10px;
  color: #333;
}

.news-summary {
  color: #666;
  margin: 0;
  line-height: 1.6;
}

.more-news {
  text-align: right;
  margin-top: 10px;
}

.announcements {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  height: 100%;
}

.announcement-header {
  background-color: #0d47a1;
  color: white;
  padding: 15px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.announcement-header h3 {
  margin: 0;
}

.announcement-list {
  padding: 15px;
}

.announcement-item {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

.announcement-item:last-child {
  border-bottom: none;
}

.announcement-title {
  color: #333;
  margin-bottom: 5px;
}

.announcement-date {
  color: #999;
  font-size: 12px;
}

.more-announcements {
  text-align: right;
  padding: 0 15px 15px;
}

.friend-links {
  margin-bottom: 30px;
}

.friend-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.friend-link-card {
  text-align: center;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
}

.friend-link-card:hover {
  color: #0d47a1;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.footer {
  background-color: #535353;
  color: white;
  padding: 40px 0;
  height: 160% !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px; /* 添加整体文字大小 */
}

.footer-info {
  margin-bottom: 15px;
  text-align: center;
}

.footer-info p {
  margin: 5px 0;
  font-size: 13px; /* 调小信息文字 */
}

.copyright {
  text-align: center;
  font-size: 12px; /* 调小版权文字 */
}

.copyright p {
  font-size: 11px; /* 技术支持文字更小 */
  margin: 3px 0;
}

@media (max-width: 768px) {
  .news-item {
    flex-direction: column;
  }
  
  .news-date {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
  }
  
  .day {
    margin-right: 5px;
  }
}
</style>