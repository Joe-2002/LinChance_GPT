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
      <div class="btn">
        <a-button type="primary" shape="round" size="large" @click="chat">加入体验</a-button>
      </div>
      
    </div>
  </template>

  
  <script setup lang="ts">
  import { useRouter } from 'vue-router'
  const router = useRouter()
 
  const chat = () => {
  router.push('/chat')
}
  
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
    margin-top: -6%;
   
  }
   
  

  .banner-title {
    font-family: 'KoHo';
    font-style: normal;
    text-align: center;
    font-weight: 600;
    font-size: 88px;
    line-height: 155.52%;
    color:#fff;
    padding-top:95px;
    padding-left:328px;
    padding-right:20%;
  }
  .banner-desc {
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 48px;
    text-align: center;
/* identical to box height, or 157% */
    display: flex;
    align-items: center;
    color:#fff;
    padding-left:328px;
    padding-right:20%;
  }
  .banner-tag {
    border: 1px solid #fff;
  }

  .btn{
    width:100%;
    margin: auto;
    margin-top: 30px;
    text-align: center;
  }
  </style>
