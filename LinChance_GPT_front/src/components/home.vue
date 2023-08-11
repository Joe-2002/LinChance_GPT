<template>
  <div id="backcont">
    <div class="header">
      <div class="logo">
        <img src="../assets/logo.png" alt="" />

      </div>
      <div class="banner">
        <div class="banner-title">LinChance GPT</div>
        <div class="ing"></div>
        <div class="banner-desc">专注于提供全面知识管理和培训解决方案的领先企业。通过整合行业顶尖的资源和最佳实践，我们致力于帮助企业实现持续创新、高效决策和团队协作的目标</div>
      </div>

    </div>
    <router-link to="/chat">
      <div class="button">
        <a-button type="primary">欢迎加入体验</a-button>
      </div>
    </router-link>



  </div>
</template>

  
<script setup lang="ts">


</script>
  
<style scoped>
#backcont {
  background-image: url(../assets/beijing.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  min-height: 100vh;
}

.header img {
  width: 20%;
}

.banner-title {
  font-weight: bold;
  font-size: 60px;
  color: #fff;
  padding-left: 30%;
  padding-right: 20%;
  text-align: center;
}

.banner-desc {
  font-size: 20px;
  color: #fff;
  padding-left: 30%;
  padding-right: 20%;
}

.banner-tag {
  border: 1px solid #fff;
}

.button {
  width: 100%;
  text-align: center;
  margin-top: 20px;
}</style>
