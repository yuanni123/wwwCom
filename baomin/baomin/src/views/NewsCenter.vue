<template>
  <div class="news-center-page">
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
    <main-navigation active-index="2"></main-navigation>
    
    <!-- 添加横幅图片 -->
    <div class="banner-container">
      <el-image 
        :src="require('@/assets/img/sy/carousel2.jpg')" 
        fit="cover" 
        class="banner-image">
      </el-image>
      <div class="banner-overlay">
        <h1>新闻中心</h1>
        <p>了解学校最新动态与公告</p>
      </div>
    </div>
    
    <el-container class="main-container">
      <el-aside width="220px" class="sidebar">
        <!-- 自定义菜单 -->
        <div class="custom-menu">
          <div class="menu-header">
            <h2>新闻中心</h2>
          </div>
          <div class="menu-items">
            <div 
              class="menu-item" 
              :class="{ 'active': activeTab === 'news' }"
              @click="handleSelect('news')">
              校园新闻
              <div v-if="activeTab === 'news'" class="active-indicator"></div>
            </div>
            <div 
              class="menu-item" 
              :class="{ 'active': activeTab === 'notice' }"
              @click="handleSelect('notice')">
              通知公告
              <div v-if="activeTab === 'notice'" class="active-indicator"></div>
            </div>
            <div 
              class="menu-item" 
              :class="{ 'active': activeTab === 'media' }"
              @click="handleSelect('media')">
              媒体报道
              <div v-if="activeTab === 'media'" class="active-indicator"></div>
            </div>
          </div>
        </div>
      </el-aside>
      
      <el-main class="main-content">
        <!-- 校园新闻 -->
        <div v-show="activeTab === 'news'" class="content-section">
          <section class="section news">
            <div class="section-title">
              <h2>校园新闻</h2>
            </div>
            <div class="news-content">
              <el-timeline>
                <el-timeline-item
                  v-for="news in newsList"
                  :key="news.id"
                  :timestamp="news.date"
                  placement="top"
                >
                  <el-card class="news-card">
                    <h3>{{ news.title }}</h3>
                    <p>{{ news.summary }}</p>
                    <div class="news-image" v-if="news.image">
                      <el-image :src="news.image" fit="cover"></el-image>
                    </div>
                    <el-button type="text" @click="viewNewsDetail(news.id)">阅读更多</el-button>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
            </div>
          </section>
        </div>

        <!-- 通知公告 -->
        <div v-show="activeTab === 'notice'" class="content-section">
          <section class="section notice">
            <div class="section-title">
              <h2>通知公告</h2>
            </div>
            <div class="notice-content">
              <el-table
                :data="noticeList"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="发布日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="title"
                  label="标题">
                </el-table-column>
                <el-table-column
                  fixed="right"
                  label="操作"
                  width="120">
                  <template slot-scope="scope">
                    <el-button @click="viewNoticeDetail(scope.row.id)" type="text" size="small">查看</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </section>
        </div>

        <!-- 媒体报道 -->
        <div v-show="activeTab === 'media'" class="content-section">
          <section class="section media">
            <div class="section-title">
              <h2>媒体报道</h2>
            </div>
            <div class="media-content">
              <el-row :gutter="30">
                <el-col :xs="24" :sm="12" :md="8" v-for="media in mediaList" :key="media.id" class="media-col">
                  <el-card class="media-card" shadow="hover">
                    <div class="media-image">
                      <el-image :src="media.image" fit="cover"></el-image>
                    </div>
                    <div class="media-info">
                      <h3>{{ media.title }}</h3>
                      <p class="media-source">来源: {{ media.source }}</p>
                      <p class="media-date">{{ media.date }}</p>
                      <p class="media-summary">{{ media.summary }}</p>
                      <el-button type="text" @click="viewMediaDetail(media.id)">阅读全文</el-button>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </section>
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
  name: 'NewsCenter',
  components: {
    MainNavigation
  },
  data() {
    return {
      activeTab: 'news',
      newsList: [
        {
          id: 1,
          title: '我校举行2024年秋季开学典礼',
          date: '2023-09-01',
          summary: '9月1日上午，我校在操场隆重举行2024年秋季开学典礼。校领导、全体教师及学生参加了此次典礼。',
          image: require('@/assets/img/xxgk/1728446731.jpg')
        },
        {
          id: 2,
          title: '我校学生在全国技能大赛中获得佳绩',
          date: '2024-08-15',
          summary: '在近日举行的全国职业院校技能大赛中，我校学生表现优异，共获得金牌2枚、银牌3枚、铜牌5枚的好成绩。',
          image: require('@/assets/img/xxgk/1728446731.jpg')
        },
        {
          id: 3,
          title: '校企合作签约仪式顺利举行',
          date: '2024-07-20',
          summary: '我校与多家知名企业举行校企合作签约仪式，为学生提供更多实习和就业机会。',
          image: require('@/assets/img/xxgk/1728446731.jpg')
        },
      ],
      noticeList: [
        {
          id: 1,
          title: '关于2024年国庆节放假安排的通知',
          date: '2024-09-25',
          content: '根据国家法定节假日安排，结合学校实际情况，现将2024年国庆节放假安排通知如下...'
        },
        {
          id: 2,
          title: '2024年秋季学期教材领取通知',
          date: '2024-08-28',
          content: '各班级请于开学第一周内安排学生到教材科领取本学期教材...'
        },
        {
          id: 3,
          title: '关于开展校园安全隐患排查工作的通知',
          date: '2024-08-20',
          content: '为确保新学期校园安全，学校将于8月25日至8月30日开展校园安全隐患排查工作...'
        }
      ],
      mediaList: [
        {
          id: 1,
          title: '深圳日报：宝民技工学校培养技能人才的创新之路',
          source: '深圳日报',
          date: '2024-09-10',
          summary: '近日，深圳日报记者走进宝民技工学校，探访该校在技能人才培养方面的创新举措...',
          image: require('@/assets/img/xxgk/1728446731.jpg')
        },
        {
          id: 2,
          title: '南方都市报：校企合作新模式，宝民技工学校的实践与探索',
          source: '南方都市报',
          date: '2024-08-05',
          summary: '宝民技工学校近年来nexplores校企合作新模式，为学生提供更好的实践机会和就业渠道...',
          image: require('@/assets/img/xxgk/1728446731.jpg')
        },
        {
          id: 3,
          title: '深圳特区报：职业教育改革排头兵——宝民技工学校',
          source: '深圳特区报',
          date: '2024-07-15',
          summary: '作为深圳职业教育改革排头兵，宝民技工学校在课程设置、教学方法等方面进行了一系列创新...',
          image:require('@/assets/img/xxgk/1728446731.jpg')
        },
      ]
    }
  },
  created() {
    // 根据URL查询参数设置当前活动的标签页
    const tab = this.$route.query.tab;
    if (tab) {
      this.activeTab = tab;
    } else {
      this.activeTab = 'news';
    }
  },
  watch: {
    // 监听路由变化，更新活动标签页
    '$route.query.tab': function(newTab) {
      if (newTab) {
        this.activeTab = newTab;
      } else {
        this.activeTab = 'news';
      }
    }
  },
  methods: {
    handleSelect(key) {
      this.activeTab = key;
      
      // 修复路由导航错误
      const currentQuery = this.$route.query.tab;
      
      try {
        if (key === 'news') {
          if (currentQuery) {
            // 只有当需要移除查询参数时才导航
            this.$router.push({ path: '/news-center', query: {} }).catch(err => {
              if (err.name !== 'NavigationDuplicated') {
                throw err;
              }
            });
          }
        } else if (key !== currentQuery) {
          // 只有当切换到不同的标签页时才导航
          this.$router.push({ path: '/news-center', query: { tab: key } }).catch(err => {
            if (err.name !== 'NavigationDuplicated') {
              throw err;
            }
          });
        }
      } catch (err) {
        // 忽略导航重复错误
        if (err.name !== 'NavigationDuplicated') {
          console.error(err);
        }
      }
    },
    viewNewsDetail(id) {
      console.log('查看新闻详情:', id);
      // 这里可以跳转到新闻详情页
      // this.$router.push({ path: `/news-detail/${id}` });
    },
    viewNoticeDetail(id) {
      console.log('查看通知详情:', id);
      // 这里可以跳转到通知详情页或显示弹窗
    },
    viewMediaDetail(id) {
      console.log('查看媒体报道详情:', id);
      // 这里可以跳转到媒体报道详情页
    }
  }
}
</script>

<style scoped>
/* 复用学校概况页面的样式，确保一致性 */
.news-center-page {
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

/* 其他现有样式保持不变 */
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
  padding: 50px; /* 增加内边距 */
  display: flex;
}

.sidebar {
  background-color: #f5f5f5;
  padding: 0;
  width: 240px; /* 增加侧边栏宽度 */
  margin-right: 50px; /* 增加右侧间距 */
}

/* 自定义菜单样式 */
.custom-menu {
  width: 100%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px 8px 0 0;
  overflow: hidden;
}

.menu-header {
  background-color: #0d47a1;
  color: white;
  padding: 20px 0; /* 增加内边距 */
  text-align: center;
  border-radius: 8px 8px 0 0;
}

.menu-header h2 {
  margin: 0;
  font-size: 26px; /* 增大字体 */
}

.menu-items {
  background-color: white;
}

.menu-item {
  padding: 18px 25px; /* 增加内边距 */
  font-size: 18px; /* 增大字体 */
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
  padding: 50px; /* 增加内边距 */
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.section-title {
  margin-bottom: 50px; /* 增加下方间距 */
  padding-bottom: 20px;
  border-bottom: 2px solid #0d47a1;
}

.section-title h2 {
  color: #0d47a1;
  font-size: 32px; /* 增大标题字体 */
  margin: 0;
}

/* 新闻卡片样式 */
.news-card {
  margin-bottom: 40px; /* 增加卡片间距 */
  padding: 25px; /* 增加卡片内边距 */
  transition: all 0.3s ease;
}

.news-card h3 {
  color: #0d47a1;
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 24px; /* 增大标题字体 */
}

.news-card p {
  line-height: 1.8;
  margin-bottom: 25px; /* 增加段落下方间距 */
  font-size: 16px; /* 调整正文字体大小 */
  color: #606266;
}

.news-image {
  margin-top: 20px;
  margin-bottom: 20px;
}

.news-image .el-image {
  width: 100%;
  max-height: 280px; /* 增加图片高度 */
  border-radius: 6px; /* 增加圆角 */
}

/* 媒体报道样式 */
.media-col {
  margin-bottom: 40px; /* 增加列间距 */
}

.media-card {
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* 增加阴影 */
}

.media-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.media-image .el-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.media-info {
  padding: 20px; /* 增加内边距 */
}

.media-info h3 {
  margin: 0 0 12px 0;
  font-size: 20px; /* 增大标题字体 */
  color: #0d47a1;
  line-height: 1.4;
}

.media-source, .media-date {
  color: #909399;
  font-size: 14px;
  margin: 5px 0;
}

.media-summary {
  margin: 10px 0;
  line-height: 1.6;
  color: #606266;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
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

/* 响应式布局 */
@media screen and (max-width: 768px) {
  .main-content {
    padding: 15px;
  }
  
  .content-section {
    padding: 20px;
  }
  
  .sidebar {
    width: 100% !important;
  }
}
</style>