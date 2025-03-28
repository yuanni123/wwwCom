<template>
  <div class="school-overview-page">
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
    <main-navigation active-index="1"></main-navigation>
    
    <div class="banner-container">
      <el-image 
        :src="require('@/assets/img/sy/微信图片_20240411154527.jpg')" 
        fit="cover" 
        class="banner-image">
      </el-image>
      <div class="banner-overlay">
        <h1>学校概况</h1>
        <p>了解我们的历史、使命和愿景</p>
      </div>
    </div>
    
    <el-container class="main-container">
      <el-aside width="220px" class="sidebar">
        <!-- 自定义菜单替代原有菜单 -->
        <div class="custom-menu">
          <div class="menu-header">
            <h2>学校概况</h2>
          </div>
          <div class="menu-items">
            <div 
              class="menu-item" 
              :class="{ 'active': activeTab === 'intro' }"
              @click="handleSelect('intro')">
              学校简介
              <div v-if="activeTab === 'intro'" class="active-indicator"></div>
            </div>
            <div 
              class="menu-item" 
              :class="{ 'active': activeTab === 'leadership' }"
              @click="handleSelect('leadership')">
              领导团队
              <div v-if="activeTab === 'leadership'" class="active-indicator"></div>
            </div>
            <div 
              class="menu-item" 
              :class="{ 'active': activeTab === 'honors' }"
              @click="handleSelect('honors')">
              荣誉资质
              <div v-if="activeTab === 'honors'" class="active-indicator"></div>
            </div>
            <div 
              class="menu-item" 
              :class="{ 'active': activeTab === 'campus' }"
              @click="handleSelect('campus')">
              校园风光
              <div v-if="activeTab === 'campus'" class="active-indicator"></div>
            </div>
          </div>
        </div>
      </el-aside>
      
      <el-main class="main-content">
        <!-- 学校简介 -->
        <div v-show="activeTab === 'intro'" class="content-section">
          <section class="section school-intro">
            <div class="section-title">
              <h2>学校简介</h2>
            </div>
            <div class="school-intro-content">
              <p>深圳市宝民技工学校成立于2015年5月，是经深圳市人力资源和社会保障局批准成立的一所全日制技工学校。学校占地面种16000平方米，在校生800多人，一路走来，学校不断总结、对标先进，总
                结出一套特有的“快乐六个一”育人模式和“特色五四”教学模式，为社会、家长、孩子分忧造福，为深圳企业和社会培养德才兼备的优秀学子。
</p>
              
              <p>一路走来，学校始终不忘“成就学生梦想，实现自我价值”的教育初心；始终牢记“让学生成才、让家长放心、让社会满意”的教育使命；始终坚持“以学生
                习为中心”的办学宗旨；始终秉承“先成人、再成才”的办学理念；坚持立德树人、注重养成教育，关注每一个学生，因才施教，努力实现人人皆可成才，人人尽展其才。
                ，
              其中计算机应用与维修、电子商务、幼儿教育、新媒体与互联网应用、网络营销与直播技术等5个专业为常设专业。</p>

              <p> 学校现目前有九个专业，其中主要开设有新媒体、直播技术、计算机应用及维修、电子商务、幼儿教育、汽车维修四个精品专业。加强校企合作，推进工学融合、模拟实训，致
                力于为社会培养既有专业理论水平，又有动手能力的高素质技术技能型人才。逐步形成“产教联动、校企融合，企业环境、工学一体，素养为本、技能为用”的办学模式。</p>
              
              <div class="school-images">
                <el-carousel :interval="4000" type="card" height="300px">
                  <el-carousel-item v-for="(image, index) in schoolImages" :key="index">
                    <el-image :src="image" fit="cover" class="carousel-image"></el-image>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </section>
        </div>

        <!-- 领导团队 -->
        <div v-show="activeTab === 'leadership'" class="content-section">
          <section class="section leadership">
            <div class="section-title">
              <h2>领导团队</h2>
            </div>
            <div class="leadership-content">
              <el-row :gutter="30">
                <el-col :xs="24" :sm="24" :md="8" v-for="leader in leadershipTeam" :key="leader.id" class="leader-col">
                  <el-card class="leader-card" shadow="hover">
                    <div class="leader-avatar">
                      <el-avatar :size="120" :src="leader.avatar"></el-avatar>
                    </div>
                    <div class="leader-info">
                      <h3>{{ leader.name }}</h3>
                      <p class="leader-title">{{ leader.title }}</p>
                      <p class="leader-description">{{ leader.description }}</p>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </section>
        </div>

        <!-- 荣誉资质 -->
        <div v-show="activeTab === 'honors'" class="content-section">
          <section class="section honors">
            <div class="section-title">
              <h2>荣誉资质</h2>
            </div>
            <div class="honors-content">
              <el-row :gutter="30">
                <el-col :xs="24" :sm="12" :md="8" :lg="8" v-for="honor in honors" :key="honor.id" class="honor-col">
                  <el-card class="honor-card" shadow="hover">
                    <div class="honor-image-wrapper">
                      <el-image 
                        :src="honor.image" 
                        fit="cover" 
                        :preview-src-list="honors.map(h => h.image)"
                        class="honor-image"
                      ></el-image>
                    </div>
                    <div class="honor-info">
                      <div class="honor-title">{{ honor.title }}</div>
                      <div class="honor-year">{{ honor.year }}</div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </section>
        </div>

        <!-- 校园风光 -->
        <div v-show="activeTab === 'campus'" class="content-section">
          <section class="section campus">
            <div class="section-title">
              <h2>校园风光</h2>
            </div>
            <div class="campus-content">
              <el-row :gutter="30">
                <el-col :xs="24" :sm="12" :md="8" :lg="8" v-for="(image, index) in campusImages" :key="index" class="campus-col">
                  <el-card class="campus-card" shadow="hover">
                    <el-image 
                      :src="image.url" 
                      fit="cover" 
                      :preview-src-list="campusImages.map(img => img.url)"
                      class="campus-image"
                    ></el-image>
                    <div class="campus-image-title">{{ image.title }}</div>
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
          © 2025 深圳市宝民学校 版权所有
        </div>
      </div>
    </el-footer>
  </div>
</template>

<script>
import MainNavigation from '../components/MainNavigation.vue'

export default {
  name: 'SchoolOverview',
  components: {
    MainNavigation
  },
  data() {
    return {
      activeTab: 'intro',
      // 更新学校图片资源，使用正确的路径格式
      schoolImages: [
      // 使用@符号表示src目录
      require('@/assets/img/xxgk/微信图片_20240223164552.jpg'),
      require('@/assets/img/xxgk/微信图片_20240828102128.jpg'),
      require('@/assets/img/xxgk/微信图片_20240818170855.jpg'),
      require('@/assets/img/xxgk/微信图片_20240521201519.jpg'),
      require('@/assets/img/sy/kkkk.jpg')
      ],
      leadershipTeam: [
        {
          id: 1,
          name: '赵校长',
          title: '校长',
          description: '从事教育工作xx余年，曾获"优秀教育工作者"称号，致力于职业教育改革与创新。',
          // 使用@符号表示src目录
          avatar: require('@/assets/img/xxgk/20241009114919_47226.jpg')
        },
        {
          id: 2,
          name: 'x副校长',
          title: '副校长',
          description: '负责教学工作，推动校企合作，提升学校教学质量和学生就业率。',
          avatar: require('@/assets/img/xxgk/微信图片_20240828102128.jpg')
        },
        {
          id: 3,
          name: 'x副校长',
          title: '副校长',
          description: '负责学校行政和后勤工作，确保学校各项工作有序进行。',
          avatar: require('@/assets/img/xxgk/微信图片_20240828102128.jpg')
        }
      ],
      honors: [
        {
          id: 1,
          year: '2010年十一月',
          title: '松岗街道第三届青少年校外教育文化艺术节',
          color: '#409EFF',
          image: require('@/assets/img/xxgk/1591499936.jpg')
        },
        {
          id: 2,
          year: '2009年',
          title: '优秀义工组织',
          color: '#67C23A',
          image: require('@/assets/img/xxgk/1591499959.jpg')
        },
        {
          id: 3,
          year: '2012年五月',
          title: '先进团委',
          color: '#E6A23C',
          image: require('@/assets/img/xxgk/1591499974.jpg')
        },
        {
          id: 4,
          year: '',
          title: '支部委员会',
          color: '#F56C6C',
          image: require('@/assets/img/xxgk/1728446780.jpg')
        },
        {
          id: 5,
          year: '2023年九月',
          title: '深圳市宝民技工学校名师工作室',
          color: '#909399',
          image: require('@/assets/img/xxgk/1728446799.jpg')
        },
        {
          id: 6,
          year: '2015年十月四日',
          title: '捐赠证书',
          color: '#409EFF',
          image: require('@/assets/img/xxgk/1728446685.jpg')
        },
        {
          id: 7,
          year: '2012年五月',
          title: '先进团(总)支部', 
          color: '#67C23A',
          image: require('@/assets/img/xxgk/1728446672.jpg')
        },
        {
          id: 8,
          year: '2020年九月',
          title: '先进办学单位',
          color: '#E6A23C',
          image: require('@/assets/img/xxgk/1728446621.jpg')
        },
        {
          id: 9,
          year: '2011年九月',
          title: '先进单位',
          color: '#F56C6C',
          image: require('@/assets/img/xxgk/1728446447.jpg')
        }
      ],
      campusImages: [
        {
          url: require('@/assets/img/xxgk/jxl.jpg'),
          title: '教学楼'
        },
        {
          url: require('@/assets/img/xxgk/电脑.png'),
          title: '电脑室'
        },
        {
          url: require('@/assets/img/xxgk/wenhua.png'),
          title: '文化中心'
        },
        {
          url: require('@/assets/img/xxgk/lanqiu.png'),
          title: '篮球比赛'
        },
        {
          url: require('@/assets/img/xxgk/sushe.png'),
          title: '学生宿舍'
        },
        {
          url: require('@/assets/img/xxgk/dating.png'),
          title: '招生大厅'
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
        this.activeTab = 'intro';
      }
    }
  },
  methods: {
    handleSelect(key) {
      this.activeTab = key;
      
      // 修复路由导航错误
      const currentQuery = this.$route.query.tab;
      
      try {
        if (key === 'intro') {
          if (currentQuery) {
            // 只有当需要移除查询参数时才导航
            this.$router.push({ path: '/school-overview', query: {} }).catch(err => {
              if (err.name !== 'NavigationDuplicated') {
                throw err;
              }
            });
          }
        } else if (key !== currentQuery) {
          // 只有当切换到不同的标签页时才导航
          this.$router.push({ path: '/school-overview', query: { tab: key } }).catch(err => {
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
    }
  }
}
</script>

<style scoped>
.school-overview-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* 添加横幅样式 */
.banner-container {
  position: relative;
  width: 100%;
  height: 250px;
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

.school-intro-content {
  line-height: 2;
  font-size: 16px;
  letter-spacing: 0.5px;
}

.school-intro-content p {
  margin-bottom: 20px;
  text-indent: 2em;
}

.school-images {
  margin-top: 30px;
}

.carousel-image {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.leader-col {
  margin-bottom: 30px;
}

.leader-card {
  height: 100%;
  margin-bottom: 20px;
  text-align: center;
  transition: transform 0.3s;
  border-radius: 8px;
  overflow: hidden;
}

.leader-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.leader-avatar {
  margin: 20px 0;
}

.leader-info {
  padding: 0 20px 20px;
}

.leader-info h3 {
  margin: 0;
  font-size: 20px;
  color: #0d47a1;
}

.leader-title {
  color: #606266;
  margin: 10px 0;
  font-weight: bold;
}

.leader-description {
  text-align: left;
  line-height: 1.8;
  color: #606266;
}

.honor-card {
  padding: 20px;
  margin-bottom: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.honor-image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin-bottom: 15px;
  border-radius: 4px;
}

.honor-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.honor-title {
  font-size: 18px;
  font-weight: bold;
  color: #0d47a1;
  margin-bottom: 5px;
}

.honor-year {
  color: #606266;
  font-size: 14px;
  margin-bottom: 10px;
}

.honor-description {
  color: #606266;
  line-height: 1.6;
  flex-grow: 1;
}

/* 完全重写荣誉资质相关样式 */
.honor-col {
  margin-bottom: 30px;
}

.honor-card {
  height: 100%;
  padding: 0;
  overflow: hidden;
  border-radius: 8px;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
}

.honor-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.honor-image-wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 75%; /* 固定宽高比 4:3 */
  position: relative;
  overflow: hidden;
}

.honor-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
}

.honor-info {
  padding: 15px;
}

.honor-title {
  font-size: 18px;
  font-weight: bold;
  color: #0d47a1;
  margin-bottom: 5px;
}

.honor-year {
  color: #606266;
  font-size: 14px;
}

/* 删除冲突的旧样式 */
.honor-description {
  color: #606266;
  line-height: 1.6;
  flex-grow: 1;
}

/* 移除原有的honor-image相关样式 */
.honor-image {
  margin-top: 15px;
}

.honor-image .el-image {
  width: 100%;
  max-height: 250px;
  border-radius: 4px;
}

.campus-col {
  margin-bottom: 30px;
}

.campus-card {
  height: 100%;
  margin-bottom: 20px;
  overflow: hidden;
  border-radius: 8px;
  transition: all 0.3s;
}

.campus-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.campus-image {
  width: 100%;
  height: 220px;
  transition: transform 0.5s;
}

.campus-image:hover {
  transform: scale(1.05);
}

.campus-image-title {
  text-align: center;
  padding: 15px 0;
  font-size: 18px;
  color: #0d47a1;
  font-weight: bold;
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

/* 添加响应式布局调整 */
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
  
  .leader-col {
    margin-bottom: 20px;
  }
}
</style>