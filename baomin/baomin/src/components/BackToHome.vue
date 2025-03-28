<template>
  <div class="back-to-home">
    <el-button type="primary" size="small" icon="el-icon-back" @click="backToHome">返回首页</el-button>
  </div>
</template>

<script>
export default {
  name: 'BackToHome',
  methods: {
    backToHome() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.back-to-home {
  margin: 15px 0;
  text-align: right;
}
</style>