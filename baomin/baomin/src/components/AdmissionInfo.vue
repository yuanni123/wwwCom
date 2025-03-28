<template>
  <div class="admission-container">
    <h2>招生信息</h2>
    
    <el-tabs v-model="activeTab" type="border-card">
      <el-tab-pane label="招生政策" name="policy">
        <div class="content-section">
          <h3>2025年招生政策</h3>
          <p>深圳市宝民技工学校是经深圳市教育局批准成立的全日制职业学校，面向全国招收初中毕业生。</p>
          
          <el-divider></el-divider>
          
          <h4>招生对象</h4>
          <p>应、往届初中毕业生，年龄在14-18周岁之间，身体健康。</p>
          
          <h4>招生专业</h4>
          <el-table :data="majorData" style="width: 100%">
            <el-table-column prop="name" label="专业名称" width="180"></el-table-column>
            <el-table-column prop="duration" label="学制" width="100"></el-table-column>
            <el-table-column prop="quota" label="招生人数" width="120"></el-table-column>
            <el-table-column prop="description" label="专业介绍"></el-table-column>
          </el-table>
          
          <h4>收费标准</h4>
          <p>学费：xxxx元/年</p>
          <p>住宿费：xxxx元/年（四人间）</p>
          <p>书本费：xxx元/年（根据实际情况收取）</p>
          
          <h4>奖助学金</h4>
          <p>学校设置有国家助学金、学校奖学金、企业奖学金等多种奖助学金，帮助家庭经济困难学生完成学业。</p>
        </div>
      </el-tab-pane>
      
      <el-tab-pane label="报名流程" name="process">
        <div class="content-section">s
          <h3>报名流程</h3>
          <el-steps :active="5" align-center>
            <el-step title="网上报名" description="填写在线报名表"></el-step>
            <el-step title="资料审核" description="学校审核报名资料"></el-step>
            <el-step title="通知入学" description="通过短信通知入学时间"></el-step>
            <el-step title="入学录取" description="入学合格即可录取"></el-step>
            <el-step title="缴费注册" description="缴纳学费完成注册"></el-step>
          </el-steps>
          
          <el-divider></el-divider>
          
          <h4>报名所需材料</h4>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>必备材料</span>
            </div>
            <div class="text item">
              <p>1. 本人身份证原件及复印件</p>
              <p>2. 户口本原件及复印件</p>
              <p>3. 初中毕业证原件及复印件</p>
              <p>4. 近期免冠照片4张（2寸蓝底）</p>
            </div>
          </el-card>
          
          <h4>报名方式</h4>
          <el-card class="box-card">
            <div class="text item">
              <p><strong>在线报名：</strong>通过学校官网在线报名系统填写报名信息</p>
              <p><strong>现场报名：</strong>直接到学校招生办公室报名</p>
              <p><strong>电话报名：</strong>拨打招生热线xxxx-xxxxx进行报名</p>
            </div>
          </el-card>
        </div>
      </el-tab-pane>
      
      <el-tab-pane label="录取结果" name="results">
        <div class="content-section">
          <h3>录取结果查询</h3>
          
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
              </template>
            </el-result>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'AdmissionInfo',
  data() {
    return {
      activeTab: 'policy',
      majorData: [
        {
          name: '计算机应用',
          duration: '3年',
          quota: '120人',
          description: '培养具备计算机应用能力的技术人才，就业方向包括软件开发、网站建设、IT支持等。'
        },
        {
          name: '电子商务',
          duration: '3年',
          quota: '100人',
          description: '培养电子商务运营、网络营销等方面的专业人才，就业方向包括电商平台运营、网店客服等。'
        },
        {
          name: '会计',
          duration: '3年',
          quota: '80人',
          description: '培养具备会计核算、财务管理能力的专业人才，就业方向包括企事业单位会计、出纳等。'
        },
        {
          name: '机电一体化',
          duration: '3年',
          quota: '90人',
          description: '培养机电设备操作、维护、安装调试等方面的技术人才，就业方向包括制造业、自动化企业等。'
        },
        {
          name: '汽车维修',
          duration: '3年',
          quota: '80人',
          description: '培养汽车检测、维修、服务等方面的技术人才，就业方向包括汽车4S店、维修厂等。'
        }
      ],
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
    }
  }
}
</script>

<style scoped>
.admission-container {
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

.content-section {
  padding: 20px;
}

h3 {
  color: #0d47a1;
  margin-bottom: 15px;
}

h4 {
  margin-top: 20px;
  margin-bottom: 10px;
  color: #303133;
}

.box-card {
  margin-bottom: 20px;
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