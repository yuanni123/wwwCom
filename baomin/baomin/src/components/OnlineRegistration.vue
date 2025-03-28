<template>
  <div class="registration-container">
    <h2>在线报名</h2>
    
    <el-form :model="registrationForm" :rules="rules" ref="registrationForm" label-width="100px" class="registration-form">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="registrationForm.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      
      <el-form-item label="性别" prop="gender">
        <el-select v-model="registrationForm.gender" placeholder="请选择">
          <el-option label="男" value="male"></el-option>
          <el-option label="女" value="female"></el-option>
        </el-select>
      </el-form-item>
      
      <el-form-item label="出生年月" prop="birthdate">
        <el-date-picker
          v-model="registrationForm.birthdate"
          type="date"
          placeholder="请选择日期"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd">
        </el-date-picker>
      </el-form-item>
      
      <el-form-item label="联系电话" prop="phone">
        <el-input v-model="registrationForm.phone" placeholder="请输入联系电话"></el-input>
      </el-form-item>
      
      <el-form-item label="联系地址" prop="address">
        <el-cascader
          v-model="registrationForm.addressRegion"
          :options="addressOptions"
          placeholder="请选择省/市/区"
        ></el-cascader>
      </el-form-item>
      
      <el-form-item label="详细地址" prop="detailAddress">
        <el-input v-model="registrationForm.detailAddress" placeholder="请输入详细地址"></el-input>
      </el-form-item>
      
      <el-form-item label="毕业学校" prop="graduateSchool">
        <el-input v-model="registrationForm.graduateSchool" placeholder="请输入毕业学校"></el-input>
      </el-form-item>
      
      <el-form-item label="选择类型" prop="applicationType">
        <el-select v-model="registrationForm.applicationType" placeholder="请选择">
          <el-option label="中专" value="vocational"></el-option>
          <el-option label="高中" value="highSchool"></el-option>
          <el-option label="职业培训" value="training"></el-option>
        </el-select>
      </el-form-item>
      
      <el-form-item label="申请专业" prop="major">
        <el-select v-model="registrationForm.major" placeholder="请选择">
          <el-option label="计算机应用" value="computerApplication"></el-option>
          <el-option label="电子商务" value="eCommerce"></el-option>
          <el-option label="会计" value="accounting"></el-option>
          <el-option label="机电一体化" value="mechatronics"></el-option>
          <el-option label="汽车维修" value="autoRepair"></el-option>
        </el-select>
      </el-form-item>
      
      <el-form-item label="验证码" prop="captcha">
        <div class="captcha-container">
          <el-input v-model="registrationForm.captcha" placeholder="请输入验证码"></el-input>
          <div class="captcha-placeholder">验证码</div>
          <el-button type="text" @click="refreshCaptcha">换一张</el-button>
        </div>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="submitForm('registrationForm')" class="submit-btn">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'OnlineRegistration',
  data() {
    // 手机号验证规则
    const validatePhone = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) {
        callback(new Error('请输入正确的手机号码'));
      } else {
        callback();
      }
    };
    
    return {
      registrationForm: {
        name: '',
        gender: '',
        birthdate: '',
        phone: '',
        addressRegion: [],
        detailAddress: '',
        graduateSchool: '',
        applicationType: '',
        major: '',
        captcha: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        birthdate: [
          { required: true, message: '请选择出生日期', trigger: 'change' }
        ],
        phone: [
          { required: true, message: '请输入联系电话', trigger: 'blur' },
          { validator: validatePhone, trigger: 'blur' }
        ],
        addressRegion: [
          { required: true, message: '请选择地区', trigger: 'change' }
        ],
        detailAddress: [
          { required: true, message: '请输入详细地址', trigger: 'blur' }
        ],
        graduateSchool: [
          { required: true, message: '请输入毕业学校', trigger: 'blur' }
        ],
        applicationType: [
          { required: true, message: '请选择申请类型', trigger: 'change' }
        ],
        major: [
          { required: true, message: '请选择申请专业', trigger: 'change' }
        ],
        captcha: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      },
      addressOptions: [
        {
          value: 'guangdong',
          label: '广东省',
          children: [
            {
              value: 'shenzhen',
              label: '深圳市',
              children: [
                { value: 'futian', label: '福田区' },
                { value: 'nanshan', label: '南山区' },
                { value: 'luohu', label: '罗湖区' },
                { value: 'baoan', label: '宝安区' },
                { value: 'longgang', label: '龙岗区' },
                { value: 'longhua', label: '龙华区' }
              ]
            },
            {
              value: 'guangzhou',
              label: '广州市',
              children: [
                { value: 'tianhe', label: '天河区' },
                { value: 'yuexiu', label: '越秀区' },
                { value: 'haizhu', label: '海珠区' },
                { value: 'panyu', label: '番禺区' }
              ]
            }
          ]
        },
        // 可以添加更多省份数据
      ]
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '报名信息提交成功！',
            type: 'success'
          });
          // 这里可以添加提交表单的逻辑
        } else {
          this.$message.error('请完善表单信息');
          return false;
        }
      });
    },
    refreshCaptcha() {
      // 刷新验证码的逻辑
      this.$message({
        message: '验证码已刷新',
        type: 'success'
      });
    }
  }
}
</script>

<style scoped>
.registration-container {
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

.registration-form {
  max-width: 800px;
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
  /* 删除了这里的重复行 dcdfe6; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f7fa;
}

.submit-btn {
  width: 100%;
  background-color: #f56c6c;
  border-color: #f56c6c;
}

.submit-btn:hover {
  background-color: #f78989;
  border-color: #f78989;
}
</style>