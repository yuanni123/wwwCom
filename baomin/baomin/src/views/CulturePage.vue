<template>
  <div class="culture-page-container">
    <el-header class="header">
      <div class="logo-container">
        <!-- 添加学校logo -->
        <div class="school-logo">
          <img src="@/assets/img/sy/fd343a2a5554bb33db411f6d23f6fb88.jpg" alt="学校校标">
        </div>
        <div class="school-name">
          <h1>深圳市宝民职业技术学校</h1>
          <p>SHENZHEN BAOMIN VOCATIONAL TECHNICAL SCHOOL</p>
        </div>
      </div>
    </el-header>
    
    <!-- 使用导航栏组件 -->
    <main-navigation active-index="5"></main-navigation>
    
    <!-- 添加横幅图片 -->
    <div class="banner-container">
      <el-image 
        :src="require('@/assets/img/xxgk/11111.png')" 
        fit="cover" 
        class="banner-image">
      </el-image>
      <div class="banner-overlay">
        <h1>校园文化</h1>
        <p>弘扬校园精神，展现学生风采</p>
      </div>
    </div>
    
    <el-container class="main-container">
      <el-main class="main-content">
        
        <!-- 添加内容区域 -->
        <div class="content-area">
          <el-tabs v-model="activeTab" class="custom-tabs" @tab-click="handleTabChange">
            <!-- 校园活动标签页 -->
            <el-tab-pane label="校园活动" name="campus-activities">
              <div class="activity-grid">
                <el-card v-for="activity in campusActivities" :key="activity.id" class="activity-card" @click.native="showActivityDetail(activity)">
                  <div class="activity-image">
                    <el-image :src="activity.image" fit="cover"></el-image>
                    <div class="activity-date">{{ activity.date }}</div>
                  </div>
                  <div class="activity-info">
                    <h3 class="activity-title">{{ activity.title }}</h3>
                    <p class="activity-location"><i class="el-icon-location"></i> {{ activity.location }}</p>
                    <p class="activity-desc">{{ activity.description }}</p>
                  </div>
                </el-card>
              </div>
              
              <!-- 活动详情对话框 -->
              <el-dialog
                :title="currentDetail.title"
                :visible.sync="activityDialogVisible"
                width="70%">
                <div class="activity-detail">
                  <div class="activity-detail-info">
                    <p><strong>日期：</strong>{{ currentDetail.date }}</p>
                    <p><strong>地点：</strong>{{ currentDetail.location }}</p>
                    <p><strong>组织者：</strong>{{ currentDetail.organizer }}</p>
                  </div>
                  <div class="activity-detail-content" v-html="currentDetail.fullContent"></div>
                  <div class="activity-gallery">
                    <el-carousel :interval="4000" type="card" height="300px" v-if="currentDetail.gallery && currentDetail.gallery.length">
                      <el-carousel-item v-for="(img, index) in currentDetail.gallery" :key="index">
                        <el-image :src="img" fit="cover" style="width: 100%; height: 100%"></el-image>
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </div>
              </el-dialog>
            </el-tab-pane>
            
            <!-- 社团组织标签页 -->
            <el-tab-pane label="社团组织" name="clubs">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="8" v-for="club in clubs" :key="club.id" style="margin-bottom: 20px;">
                  <el-card class="club-card" @click.native="showClubDetail(club)">
                    <div class="club-header">
                      <el-avatar :size="60" :src="club.logo"></el-avatar>
                      <div class="club-title">
                        <h3>{{ club.name }}</h3>
                        <el-tag :type="club.type" size="small">{{ club.category }}</el-tag>
                      </div>
                    </div>
                    <div class="club-info">
                      <p><i class="el-icon-user"></i> 指导老师：{{ club.teacher }}</p>
                      <p><i class="el-icon-time"></i> 成立时间：{{ club.foundTime }}</p>
                      <p><i class="el-icon-location"></i> 活动地点：{{ club.location }}</p>
                      <p class="club-desc">{{ club.description }}</p>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
              
              <!-- 社团详情对话框 -->
              <el-dialog
                :title="currentClub.name"
                :visible.sync="clubDialogVisible"
                width="70%">
                <div class="club-detail">
                  <div class="club-detail-header">
                    <el-avatar :size="80" :src="currentClub.logo"></el-avatar>
                    <div class="club-detail-title">
                      <h2>{{ currentClub.name }}</h2>
                      <el-tag :type="currentClub.type">{{ currentClub.category }}</el-tag>
                    </div>
                  </div>
                  <div class="club-detail-info">
                    <p><strong>指导老师：</strong>{{ currentClub.teacher }}</p>
                    <p><strong>成立时间：</strong>{{ currentClub.foundTime }}</p>
                    <p><strong>活动地点：</strong>{{ currentClub.location }}</p>
                    <p><strong>社团介绍：</strong>{{ currentClub.fullDescription }}</p>
                    <p><strong>加入方式：</strong>{{ currentClub.joinMethod }}</p>
                  </div>
                  <div class="club-activities" v-if="currentClub.activities && currentClub.activities.length">
                    <h3>近期活动</h3>
                    <el-timeline>
                      <el-timeline-item
                        v-for="(activity, index) in currentClub.activities"
                        :key="index"
                        :timestamp="activity.date"
                        placement="top">
                        <el-card>
                          <h4>{{ activity.title }}</h4>
                          <p>{{ activity.description }}</p>
                          <div class="activity-images" v-if="activity.images && activity.images.length">
                            <el-image
                              v-for="(img, i) in activity.images"
                              :key="i"
                              :src="img"
                              :preview-src-list="activity.images"
                              style="width: 100px; height: 80px; margin-right: 10px;"
                              fit="cover">
                            </el-image>
                          </div>
                        </el-card>
                      </el-timeline-item>
                    </el-timeline>
                  </div>
                </div>
              </el-dialog>
            </el-tab-pane>
            
            <!-- 校史馆标签页 -->
            <el-tab-pane label="校史馆" name="history">
              <el-timeline>
                <el-timeline-item
                  v-for="(event, index) in historyEvents"
                  :key="index"
                  :timestamp="event.year"
                  :color="event.color"
                  placement="top">
                  <el-card>
                    <h3>{{ event.title }}</h3>
                    <p>{{ event.content }}</p>
                    <el-image
                      :src="event.image"
                      style="width: 100%; max-height: 300px; margin-top: 10px;"
                      fit="cover">
                    </el-image>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
              
              <!-- 移除校园风光部分 -->
            </el-tab-pane>
          </el-tabs>
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
  name: 'CulturePage',
  components: {
    MainNavigation
  },
  data() {
    return {
      activeTab: 'campus-activities',
      activityDialogVisible: false,
      clubDialogVisible: false,
      currentDetail: {},
      currentClub: {},
      campusActivities: [
        {
          id: 1,
          title: '2023年校园acee文化艺术节',
          date: '202x-0x-x',
          location: '学校体育馆',
          organizer: '学生会文艺部',
          description: '为丰富校园文化生活，展示学生才艺，学校举办了为期一周的校园acee文化节，包括歌唱比赛、舞蹈表演、书法展等多项活动。',
          image: require('@/assets/img/xxgk/1728446731.jpg'),
          fullContent: '<p>为丰富校园文化生活，展示学生才艺，学校举办了为期一周的校园acee文化节，包括歌唱比赛、舞蹈表演、书法展等多项活动。</p><p>本次艺术节以"青春飞扬，梦想起航"为主题，旨在为学生提供展示自我、发展特长的平台，促进校园文化建设，提升学生的艺术修养。</p><p>活动期间，各班级和社团积极参与，精心准备了丰富多彩的节目和作品。歌唱比赛中，选手们用嘹亮的歌声唱响青春旋律；舞蹈表演中，舞者们用优美的舞姿展现青春活力；书法展览中，学生们的书法作品展示了深深的文化底蕴。</p><p>校长在闭幕式上表示，校园文化艺术节是学校精神文明建设的重要组成部分，希望通过这样的活动，培养学生的艺术情操，促进学生全方位。</p>',
          gallery: [
            require('@/assets/img/xxgk/1728446731.jpg'),
            require('@/assets/img/xxgk/1728446731.jpg'),
            require('@/assets/img/sy/微信图片_20240411154527.jpg'),
          ]
        },
        {
          id: 2,
          title: '第十二届校园运动会',
          date: '202x',
          location: '学校运动场',
          organizer: '体育部',
          description: '学校成功举办了第十二届校园运动会，全校师生积极参与，比赛项目包括田径、球类、趣味运动等，展现了学生的体育风采和团队协作精神。',
          image: require('@/assets/img/xxgk/1728446731.jpg'),
          fullContent: '<p>学校成功举办了第十二届校园运动会，全校师生积极参与，比赛项目包括田径、球类、趣味运动等，展现了学生的体育风采和团队协作精神。</p><p>本届运动会为期两天，设置了100米、200米、400米、800米、跳高、跳远等田径项目，以及篮球、排球、足球等球类比赛，还有拔河、集体跳绳等趣味项目，满足了不同学生的参与需求。</p><p>开幕式上，各班级精心准备了入场表演，展示了青春风采。比赛中，运动员们奋力拼搏，赛出了水平，赛出了风格。观众席上，啦啦队员们热情助威，为运动员加油打气，整个校园洋溢着青春活力和运动激情。</p><p>此次运动会，不仅增强了学生的体质，也培养了学生的团队协作精神和拼搏意识，为构建和谐校园、促进学生全方位起到积极作用。</p>',
          gallery: [
          require('@/assets/img/xxgk/1728446731.jpg'),
          require('@/assets/img/xxgk/1728446731.jpg'),
          require('@/assets/img/xxgk/1728446731.jpg'),
          ]
        },
        {
          id: 3,
          title: '科技创新大赛',
          date: '202x-0x-x',
          location: '学校报告厅',
          organizer: '科技创新协会',
          description: '为激发学生的创新意识，学校举办科技大赛，学生们展示了自己设计的机器人、智能家居等创新作品，展现了扎实的专业技能和创新思维。',
          image: require('@/assets/img/xxgk/1728446731.jpg'),
          fullContent: '<p>为激发学生的创新意识，学校举办科技大赛，学生们展示了自己设计的机器人、智能家居等创新作品，展现了扎实的专业技能和创新思维。</p><p>本次大赛分为创意设计、实物制作、科技论文三个类别，吸引了来自各专业的100多名学生参赛。参赛作品涵盖了人工智能、物联网、新能源等多个领域，体现了学生们对前沿科技的关注和探索。</p><p>评委由学校专业教师和企业技术专家组成，从创新性、实用性、技术难度等多个维度对参赛作品进行了评审。最终，电子专业学生设计的"智能垃圾分类机器人"获得了一等奖。</p><p>校长在颁奖仪式 上表示，科技创新是时代发展的动力，希望通过此类活动，培养学生的创新精神和实践能力，为社会培养更多具有创新思维的技术技能人才。</p>',
          gallery: [
          require('@/assets/img/xxgk/1728446731.jpg'),
          require('@/assets/img/xxgk/1728446731.jpg'),
          require('@/assets/img/xxgk/1728446731.jpg'),
          ]
        },
        {
          id: 4,
          title: '职业技能竞赛周',
          date: '202x',
          location: '各专业实训室',
          organizer: '教务处',
          description: '学校举办了为期一周的职业技能竞赛，涵盖数控加工、电气自动化、计算机应用等多个专业领域，旨在提升学生专业技能和职业素养。',
          image: require('@/assets/img/xxgk/1728446731.jpg'),
          fullContent: '<p>学校举办了为期一周的职业技能竞赛，涵盖数控加工、电气自动化、计算机应用等多个专业领域，旨在提升学生专业技能和职业素养。</p><p>本次竞赛以"技能成就梦想，匠心铸就未来"为主题，共设置了10个专业赛项，吸引了全校800多名学生参与。竞赛采用理论知识与实际操作相结合的方式，全面考察学生的专业能力。</p><p>竞赛期间，各专业实训室灯火通明，参赛选手们专注操作，展示着扎实的专业功底。企业专家担任评委，从专业规范、操作技能、成品质量等方面进行了严格评判。</p><p>此次竞赛，不仅选拔出了一批技能优秀的学生代表学校参加市级、省级技能大赛，也为学生提供了展示自我、相互学习的平台，有效促进了教学质量的提升和学生职业能力的发展。</p>',
          gallery: [
            require('@/assets/img/xxgk/1728446731.jpg'),
            require('@/assets/img/xxgk/1728446731.jpg'),
            require('@/assets/img/xxgk/1728446731.jpg'),
          ]
        },
        {
          id: 5,
          title: '校园读书月活动',
          date: '202x',
          location: '图书馆及各教室',
          organizer: '学生会学习部',
          description: '为培养学生良好的阅读习惯，提升人文素养，学校举办了为期一个月的校园读书月活动，包括读书分享会、经典诵读、名著知识竞赛等多种形式。',
          image: require('@/assets/img/xxgk/1728446731.jpg'),
          fullContent: '<p>为培养学生良好的阅读习惯，提升人文素养，学校举办了为期一个月的校园读书月活动，包括读书分享会、经典诵读、名著知识竞赛等多种形式。</p><p>本次读书月以"书香校园，悦读人生"为主题，活动内容丰富多彩。图书馆举办了"我的阅读故事"分享会，邀请优秀学生讲述自己与书籍的故事；各班级展开了"一日一句"经典诵读活动，每天朗读一句名言警句；学校还组织了名著知识竞赛，检验学生的阅读成果。</p><p>活动期间，学校图书馆借阅量同比增长50%，学生们的阅读热情高涨。许多班级还自发组织了读书小组，定期交流读书心得。</p><p>校长表示，阅读是获取知识、开阔视野的重要途径，希望通过读书月活动，让阅读成为学生的习惯，让书香弥漫校园，为学生的全方位奠定坚实基础。</p>',
          gallery: [
            require('@/assets/img/xxgk/1728446731.jpg'),
            require('@/assets/img/xxgk/1728446731.jpg'),
            require('@/assets/img/xxgk/1728446731.jpg'),
          ]
        }
      ],
      clubs: [
        {
          id: 1,
          name: '科技创新协会',
          category: '学术科技',
          type: 'primary',
          logo:  require('@/assets/img/xxgk/1728446731.jpg'),
          teacher: '张教授',
          foundTime: '20xx年',
          location: '创新实验室',
          description: '致力于培养学生的科技创新能力，定期举办科技讲座、创新比赛等活动。',
          fullDescription: '科技创新协会成立于2015年，是学校重点支持的学生社团之一。协会致力于培养学生的科技创新能力，提高学生的实践动手能力和团队协作精神。协会定期举办科技讲座、创新比赛、参观交流等活动，为对科技创新感兴趣的学生提供了一个学习交流、共同进步的平台。',
          joinMethod: '每学期开学初进行公开招新，有意向的同学可填写申请表并参加面试。',
          activities: [
            {
              title: '3D打印技术讲座',
              date: '202x',
              description: '邀请行业专家介绍3D打印技术的发展与应用',
              images: [ require('@/assets/img/xxgk/1728446731.jpg')]
            },
            {
              title: '机器人制作工作坊',
              date: '202x',
              description: '组织学生动手制作简易机器人，学习机器人控制原理',
              images: [ require('@/assets/img/xxgk/1728446731.jpg')]
            }
          ]
        },
        {
          id: 2,
          name: '舞蹈社',
          category: '文艺体育',
          type: 'success',
          logo:  require('@/assets/img/xxgk/1728446731.jpg'),
          teacher: '李老师',
          foundTime: '20xx年',
          location: '舞蹈室',
          description: '培养学生舞蹈interest，提高舞蹈技能，定期举办舞蹈表演和比赛。',
          fullDescription: '舞蹈社成立于2016年，是学校最具活力的文艺社团之一。社团以培养学生舞蹈interest，提高舞蹈技能为宗旨，涵盖现代舞、街舞、民族舞等多种舞蹈类型。社团定期举办舞蹈培训、表演和比赛，为热爱舞蹈的学生提供了展示自我的舞台。',
          joinMethod: '每学期初进行公开招新，不限专业，对舞蹈有兴趣的同学均可报名参加面试。',
          activities: [
            {
              title: '校园舞蹈大赛',
              date: '202x-x-x',
              description: '举办校园舞蹈大赛，展示社员风采',
              images: [ require('@/assets/img/xxgk/1728446731.jpg')]
            },
            {
              title: '街舞培训课程',
              date: '202x',
              description: '邀请专业街舞老师进行培训，提高社员舞蹈水平',
              images: [ require('@/assets/img/xxgk/1728446731.jpg')]
            }
          ]
        },
        {
          id: 3,
          name: '读书会',
          category: '文学艺术',
          type: 'warning',
          logo:  require('@/assets/img/xxgk/1728446731.jpg'),
          teacher: '王老师',
          foundTime: '20xx年',
          location: '图书馆讨论室',
          description: '通过读书分享、文学讨论等活动，培养学生的阅读兴趣和文学素养。',
          fullDescription: '读书会成立于2017年，是一个以培养学生阅读兴趣和文学素养为宗旨的社团。社团定期组织读书分享、文学讨论、作家讲座等活动，为热爱阅读的学生提供了一个交流思想、分享感悟的平台。社团还与学校图书馆合作，推荐优秀书籍，举办读书月活动，营造良好的校园阅读氛围。',
          joinMethod: '对阅读有兴趣的同学可随时向社团负责人提出申请，参加一次读书分享活动后即可成为正式成员。',
          activities: [
            {
              title: '经典名著读书分享会',
              date: '202x',
              description: '分享讨论《红楼梦》的艺术魅力',
              images: [ require('@/assets/img/xxgk/1728446731.jpg')]
            },
            {
              title: '校园诗歌朗诵比赛',
              date: '202x',
              description: '举办诗歌朗诵比赛，弘扬诗歌艺术',
              images: [ require('@/assets/img/xxgk/1728446731.jpg')]
            }
          ]
        }
      ],
      historyEvents: [
        {
          year: 'xxxx年',
          title: '学校创建',
          content: '深圳市宝民职业技术学校正式创建，开设机械加工、电子技术两个专业，首届招收学生120人。',
          color: '#0bbd87',
          image:  require('@/assets/img/xxgk/1728446731.jpg')
        },
        {
          year: 'xxx年',
          title: '扩建校区',
          content: '学校进行扩建，新增教学楼、实训楼、学生宿舍等设施，办学规模扩大到xx人。',
          color: '#409EFF',
          image: require('@/assets/img/xxgk/1728446731.jpg')
        },
        {
          year: 'xxxx年',
          title: '评为市级重点职业学校',
          content: '学校被判为深圳市重点职业学校，教育教学质量得到社会广泛认可。',
          color: '#E6A23C',
          image:  require('@/assets/img/xxgk/1728446731.jpg')
        },
        {
          year: '2xx年',
          title: '校企合作模式创新',
          content: '学校创新校企合作模式，与多家知名企业建立深度合作关系，共建实训基地，推行"工学结合"人才培养模式。',
          color: '#F56C6C',
          image:  require('@/assets/img/xxgk/1728446731.jpg')
        },
        {
          year: 'xx年',
          title: '二十周年校庆',
          content: '学校举行建校二十周年庆典，总结办学成果，规划未来发展。',
          color: '#909399',
          image:  require('@/assets/img/xxgk/1728446731.jpg')
        },
        {
          year: 'xx年',
          title: '数字化校园建设',
          content: '学校全方位数字化校园建设，升级教学设施，引入智慧教育平台，提升教育教学质量。',
          color: '#67C23A',
          image:  require('@/assets/img/xxgk/1728446731.jpg')
        }
      ],
      schoolImages: [
        {
          url:  require('@/assets/img/xxgk/1728446731.jpg'),
          title: '校园正门'
        },
        {
          url: require('@/assets/img/xxgk/1728446731.jpg'),
          title: '教学楼'
        },
        {
          url:  require('@/assets/img/xxgk/1728446731.jpg'),
          title: '图书馆'
        },
        {
          url:  require('@/assets/img/xxgk/1728446731.jpg'),
          title: '实训中心'
        },
        {
          url:  require('@/assets/img/xxgk/1728446731.jpg'),
          title: '体育场'
        },
        {
          url:  require('@/assets/img/xxgk/1728446731.jpg'),
          title: '学生宿舍'
        }
      ]
    }
  },
  methods: {
    backToHome() {
      this.$router.push('/');
    },
    showActivityDetail(activity) {
      this.currentDetail = activity;
      this.activityDialogVisible = true;
    },
    showClubDetail(club) {
      this.currentClub = club;
      this.clubDialogVisible = true;
    },
    
    // 添加标签页切换处理方法
    handleTabChange(tab) {
      // 更新路由参数，保持URL与当前标签页同步
      this.$router.push({
        path: '/culture',
        query: { tab: tab.name }
      });
    }
  },
  created() {
    // 从路由参数获取当前激活的tab
    const tabParam = this.$route.query.tab;
    if (tabParam && ['campus-activities', 'clubs', 'history'].includes(tabParam)) {
      this.activeTab = tabParam;
    }
  },
  // 添加watch来监听路由变化
  watch: {
    '$route.query.tab': function(newTab) {
      if (newTab && ['campus-activities', 'clubs', 'history'].includes(newTab)) {
        this.activeTab = newTab;
      }
    }
  }
}
</script>

<style scoped>
.culture-page-container {
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

.page-title {
  text-align: center;
  margin-bottom: 30px;
}

.page-title h2 {
  font-size: 28px;
  color: #0d47a1;
  margin-bottom: 10px;
}

.title-underline {
  width: 80px;
  height: 3px;
  background-color: #0d47a1;
  margin: 0 auto;
}

.custom-tabs {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: #fff;
  padding: 20px;
}

/* 校园活动样式 */
.activity-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.activity-card {
  height: 100%;
  transition: transform 0.3s;
  cursor: pointer;
}

.activity-card:hover {
  transform: translateY(-5px);
}

.activity-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.activity-image .el-image {
  width: 100%;
  height: 100%;
}

.activity-date {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px 10px;
  font-size: 12px;
}

.activity-info {
  padding: 15px 0;
}

.activity-title {
  margin: 0 0 10px 0;
  font-size: 18px;
  color: #303133;
}

.activity-location {
  color: #909399;
  font-size: 14px;
  margin: 5px 0;
}

.activity-desc {
  color: #606266;
  font-size: 14px;
  margin: 10px 0;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.activity-detail-info {
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.activity-detail-content {
  line-height: 1.8;
  margin-bottom: 20px;
}

.activity-gallery {
  margin-top: 20px;
}

/* 社团组织样式 */
.club-card {
  margin-bottom: 20px;
  height: 100%;
  transition: all 0.3s;
  cursor: pointer;
}

.club-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.club-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.club-title {
  margin-left: 15px;
}

.club-title h3 {
  margin: 0 0 5px 0;
}

.club-info p {
  margin: 5px 0;
  font-size: 14px;
}

.club-desc {
  margin-top: 10px;
  color: #606266;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.club-detail-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.club-detail-title {
  margin-left: 20px;
}

.club-detail-title h2 {
  margin: 0 0 10px 0;
}

.club-detail-info {
  margin-bottom: 20px;
  line-height: 1.8;
}

.club-activities h3 {
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.activity-images {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
}

/* 校史馆样式 */
.section-title {
  text-align: center;
  margin: 30px 0 20px;
  color: #0d47a1;
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

.image-title {
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #606266;
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

@media (max-width: 768px) {
  .activity-grid {
    grid-template-columns: 1fr;
  }
  
  .club-header {
    flex-direction: column;
    text-align: center;
  }
  
  .club-title {
    margin-left: 0;
    margin-top: 10px;
  }
  
  .club-detail-header {
    flex-direction: column;
    text-align: center;
  }
  
  .club-detail-title {
    margin-left: 0;
    margin-top: 15px;
  }
}
</style>