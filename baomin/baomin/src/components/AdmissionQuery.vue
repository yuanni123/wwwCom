<template>
  <div class="query-container">
    <h2>录取结果查询</h2>
    
    <el-form :model="queryForm" :rules="queryRules" ref="queryForm" label-width="100px" class="query-form">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="queryForm.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      
      <el-form-item label="身份证号" prop="idCard">
        <el-input v-model="queryForm.idCard" placeholder="请输入身份证号"></el-input>
      </el-form-item>
      
      <el-form-item label="验证码" prop="captcha">
        <div class="captcha-container">
          <el-input v-model="queryForm.captcha" placeholder="请输入验证码"></el-input>
          <div class="captcha-placeholder">验证码</div>
          <el-button type="text" @click="refreshCaptcha">换一张</el-button>
        </div>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="queryResult">查询</el-button>
        <el-button @click="resetForm('queryForm')">重置</el-button>
      </el-form-item>
    </el-form>
    
    <div v-if="showResult" class="result-container">
      <el-result
        icon="success"
        title="恭喜您已被录取！"
        subTitle="请按照通知要求在规定时间内完成缴费注册。">
        <template slot="extra">
          <el-button type="primary" size="medium" @click="downloadAdmission">下载录取通知书</el-button>
          <el-button type="success" size="medium" @click="goToRegistration">立即缴费注册</el-button>
        </template>
      </el-result>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdmissionQuery',
  data() {
    return {
      queryForm: {
        name: '',
        idCard: '',
        captcha: ''
      },
      queryRules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        idCard: [
          { required: true, message: '请输入身份证号', trigger: 'blur' },
          { pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, message: '请输入正确的身份证号', trigger: 'blur' }
        ],
        captcha: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      },
      showResult: false
    };
  },
  methods: {
    refreshCaptcha() {
      this.$message({
        message: '验证码已刷新',
        type: 'success'
      });
    },
    queryResult() {
      this.$refs.queryForm.validate((valid) => {
        if (valid) {
          // 模拟查询过程
          setTimeout(() => {
            this.showResult = true;
          }, 1000);
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.showResult = false;
    },
    downloadAdmission() {
      this.$message({
        message: '录取通知书下载中...',
        type: 'success'
      });
      // 这里可以添加下载文件的逻辑
    },
    goToRegistration() {
      this.$message({
        message: '正在跳转到缴费页面...',
        type: 'success'
      });
      // 跳转到缴费页面的逻辑
    }
  }
}
</script>

<style scoped>
.query-container {
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

h2 {
  color: #0d47a1;
  margin-bottom: 20px;
  text-align: center;
}

.query-form {
  max-width: 500px;
  margin: 0 auto;
}

.captcha-container {
  display: flex;
  align-items: center;
}

.captcha-placeholder {
  margin: 0 10px;
  height: 40px;
  width: 120px;
  border: 1px solid #dcdfe6;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f7fa;
}

.result-container {
  margin-top: 30px;
}
</style>