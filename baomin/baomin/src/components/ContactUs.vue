<template>
  <div class="contact-us-container">
    <!-- 移除内部的学校表头 -->
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
      <!-- 使用百度地图替换高德地图 -->
      <iframe 
        src="https://map.baidu.com/poi/%E6%B7%B1%E5%9C%B3%E5%B8%82%E5%AE%9D%E6%B0%91%E6%8A%80%E5%B7%A5%E5%AD%A6%E6%A0%A1/@12683949.565,2560220.71,18z?uid=a3e1a9d8b8bac7b0a367b4f3&ugc_type=3&ugc_ver=1&device_ratio=2&compat=1&pcevaname=pc4.1&querytype=detailConInfo&da_src=shareurl"
        class="map" 
        frameborder="0" 
        scrolling="no"
        allow="geolocation">
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
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
      },
      // 百度地图嵌入URL - 锁定宝民技工学校位置
      mapUrl: 'https://map.baidu.com/poi/%E6%B7%B1%E5%9C%B3%E5%B8%82%E5%AE%9D%E6%B0%91%E6%8A%80%E5%B7%A5%E5%AD%A6%E6%A0%A1/@12683949.565,2560220.71,18z?uid=a3e1a9d8b8bac7b0a367b4f3&ugc_type=3&ugc_ver=1&device_ratio=2&compat=1&pcevaname=pc4.1&querytype=detailConInfo&da_src=shareurl&qt=ext'
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
/* 移除学校表头相关样式 */

/* 原有样式保持不变 */
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
</style>