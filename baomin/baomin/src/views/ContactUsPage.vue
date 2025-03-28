<template>
  <div class="contact-us-page">
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
    <main-navigation active-index="8"></main-navigation>
    
    <!-- 添加横幅图片 -->
    <div class="banner-container">
      <el-image 
        :src="require('@/assets/img/xxgk/1728446731.jpg')" 
        fit="cover" 
        class="banner-image">
      </el-image>
      <div class="banner-overlay">
        <h1>联系我们</h1>
        <p>Contact Us</p>
      </div>
    </div>
    
    <el-container class="main-container">
      <el-main class="main-content">
        <div class="contact-us-container">
          <div class="contact-info">
            <h2>联系我们</h2>
            <div class="info-item">
              <div class="label">电话：</div>
              <div class="value">1801877xxx</div>
            </div>
            <div class="info-item">
              <div class="label">QQ：</div>
              <div class="value">146479xxx</div>
            </div>
            <div class="info-item">
              <div class="label">邮箱：</div>
              <div class="value">14xxxxx7518@qq.com</div>
            </div>
            <div class="info-item">
              <div class="label">地址：</div>
              <div class="value">深圳市宝安区松白路7022号宝民技工学校</div>
            </div>
          </div>

          <div class="contact-form">
            <h2>发表您的留言：</h2>
            <el-form :model="form" ref="form" :rules="rules" label-position="top">
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-form-item label="姓名：" prop="name">
                    <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="电话：" prop="phone">
                    <el-input v-model="form.phone" placeholder="请输入电话"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item label="就读学校：" prop="school">
                <el-input v-model="form.school" placeholder="请输入就读学校"></el-input>
              </el-form-item>
              <el-form-item label="内容：" prop="content">
                <el-input 
                  type="textarea" 
                  v-model="form.content" 
                  placeholder="请输入留言内容" 
                  :rows="5">
                </el-input>
              </el-form-item>
              <el-form-item class="submit-btn-container">
                <el-button type="primary" @click="submitForm('form')" class="submit-btn">提交留言</el-button>
              </el-form-item>
            </el-form>
          </div>

          <!-- 添加地图组件 -->
          <div class="map-container">
            <h2>学校位置</h2>
            <!-- 使用百度地图 -->
            <iframe 
              src="https://map.baidu.com/poi/%E6%B7%B1%E5%9C%B3%E5%B8%82%E5%AE%9D%E6%B0%91%E6%8A%80%E5%B7%A5%E5%AD%A6%E6%A0%A1/@12683949.565,2560220.71,18z?uid=a3e1a9d8b8bac7b0a367b4f3&ugc_type=3&ugc_ver=1&device_ratio=2&compat=1&pcevaname=pc4.1&querytype=detailConInfo&da_src=shareurl"
              class="map" 
              frameborder="0" 
              scrolling="no"
              allow="geolocation">
            </iframe>
          </div>
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
  name: 'ContactUsPage',
  components: {
    MainNavigation
  },
  data() {
    return {
      form: {
        name: '',
        phone: '',
        school: '',
        content: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入电话', trigger: 'blur' }
        ],
        school: [
          { required: true, message: '请输入就读学校', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入留言内容', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '留言提交成功！',
            type: 'success'
          });
          this.$refs[formName].resetFields();
        } else {
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
.contact-us-page {
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
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
}

/* 联系我们容器样式 */
.contact-us-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.contact-info {
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 4px;
}

.contact-info h2 {
  color: #0d47a1;
  margin-top: 0;
  margin-bottom: 20px;
  border-bottom: 2px solid #0d47a1;
  padding-bottom: 10px;
}

.info-item {
  display: flex;
  margin-bottom: 15px;
}

.label {
  font-weight: bold;
  width: 60px;
}

.value {
  flex: 1;
}

.contact-form h2 {
  color: #0d47a1;
  margin-top: 0;
  margin-bottom: 20px;
  border-bottom: 2px solid #0d47a1;
  padding-bottom: 10px;
}

.submit-btn {
  width: 120px;
  background-color: #1890ff;
  border-color: #1890ff;
}

.submit-btn-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.el-form-item__label {
  font-weight: bold;
}

/* 地图容器样式 */
.map-container {
  margin-top: 20px;
}

.map-container h2 {
  color: #0d47a1;
  margin-top: 0;
  margin-bottom: 20px;
  border-bottom: 2px solid #0d47a1;
  padding-bottom: 10px;
}

.map {
  width: 100%;
  height: 400px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

/* 页脚样式 */
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
</style>