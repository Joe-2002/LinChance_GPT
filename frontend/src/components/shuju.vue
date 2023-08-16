<template>
    <div class="layout">
       <div class="sider">
             <div class="logo">
                <img src="../assets/logo.png" alt="" />
              </div>
              <div class="history-item">
                <a-input-search :style="{width:'220px'}" placeholder="在此处搜索历史记录" search-button/>
                
             </div>

             <div class="user">
                <div class="tou">
                   <a-avatar :style="{ backgroundColor: '#3370ff' }">
                      <IconUser />
                    </a-avatar>
                </div>
            

             </div>

       </div>
       <div class="diplay_page">

       
          <div class="header">
             <div class="header_btn">
                <a-dropdown>
                   <a-button type="text">向量数据库</a-button>
                   <template #content>
                     <a-doption @click="goTogpt">GPT 3.5</a-doption>
                     <a-doption>向量数据库</a-doption>
                   </template>
                 </a-dropdown>
    
             </div>

          </div>
       

       <div class="content">
          <a-card v-for="(message, index) in messages" :key="index" class="message-card" width="200px" :style="{position: 'absolute',top:'180px',left:'30%'}">
             <p>{{ message }}</p>
           </a-card>

       </div>

       <div class="footer">
          <div class="shuru">
             <div class="input-container">
                <a-textarea placeholder="请输入你的问题" :max-length="300" allow-clear show-word-limit v-model="inputText" />
              </div>
              <a-button type="primary" @click="handleSendClick">
                发送
                <icon-send />
              </a-button>
       </div>

       </div>

    </div>

    </div>
 
 
 


</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';
import { IconSend,} from '@arco-design/web-vue/es/icon';
import { useRouter } from 'vue-router'
export default defineComponent({
name: 'MessageDisplay',
components: { IconSend },
setup() {
    const router = useRouter() // 使用useRouter获取router实例

    const goTogpt = () => {
  router.push('/chat') // 使用router实例进行页面跳转
}
  const messages = ref<string[]>([]);
  const inputText = ref('');

  const handleSendClick = () => {
    if (inputText.value) {
      messages.value.push(inputText.value);
      inputText.value = '';
    }
  };

  return {
    messages,
    inputText,
    handleSendClick,
    goTogpt
  };
},
});

</script>

<style scoped>
.layout{
 width:100%;
 height:100vh;
 display: flex;
 
}
.sider{
background-color: rgba(24, 27, 28);;

 width:20%;
 height:100vh;
 position: relative;
}
.header{
 background-color: #181B3A;
 flex: 1;
 width:100%;
 height:95px;
 display: flex;
 align-items: center;

}
.header_btn{
 padding-left:5%;

}
.content{
 background-color: #0a0a0a;
 flex: 1;
 width:100%;
 height:80%;
 display: flex;

}
.diplay_page{
 width:80%;
 height:100vh;
}

.logo img{
 width:100%;

 margin-top:-35%;
 margin-left:0%;
}
.history-item {
 height: 30px;
 margin-top: -30%;
 margin-left:8px;
 margin-right:8px;
 text-align: center;
 font-size: 10px;
 border-radius: 5px;
 
}

.user{
 margin-top:100%;
 width:90%;
 height:10%;
 position: absolute;
 bottom: 0;
 align-items: center;
 display: flex;
 padding-left:10%;
}

.footer{
 background-color: #181B3A;
 flex: 1;
 width:100%;
 height:80px;
 display: flex;

}
.shuru{
 width:85%;
 display: flex;
 align-items: center;
 margin:10px;
 padding-left:5%;
 background-color: #181B3A;
 
}

.input-container {
 flex: 1;
 margin-right: 30px;
}




</style>
