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
                     <a-button type="text">GPT 3.5</a-button>
                     <template #content>
                       <a-doption>GPT 3.5</a-doption>
                       <a-doption @click="goToshuju">向量数据库</a-doption>
                     </template>
                   </a-dropdown>
      
               </div>

            </div>
         

         <div class="content">
            <div v-for="message in messages" :key="message.id" class="message">
               <icon-robot size="30"/> <span> : {{ message.content }}</span>
             </div>

         </div>

         <div class="footer">
            <div class="shuru">
               <div class="input-container">
                  <a-textarea placeholder="请输入你的问题" :max-length="300" allow-clear show-word-limit v-model="user_input" @keydown.enter="sendMessage"/>
                </div>
                <a-button type="primary" @click="sendMessage">
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
import { IconSend,IconDelete } from '@arco-design/web-vue/es/icon';
import { useRouter } from 'vue-router';
import axios from 'axios';


export default defineComponent({
  name: 'MessageDisplay',
  components: { IconSend },
  setup() {
    const router = useRouter() // 使用useRouter获取router实例

    const goToshuju = () => {
      router.push('/shuju') // 使用router实例进行页面跳转
    }
    const messages = ref([
        {
          id: 1,
          content: '欢迎使用LinChanceGPT！请问有什么可以帮助你的？',
        }
      ]);
      const user_input = ref('');
  
      const sendMessage = async () => {
        if (user_input.value) {
          const newMessage = {
            id: messages.value.length + 1,
            content: user_input.value,
          };
          messages.value.push(newMessage);
          user_input.value = '';
         const question = user_input.value;
         try {
            const gpt_response = await axios.post('http://127.0.0.1:8000/LinChanceGPT/chat_with_Spark/'&&'http://127.0.0.1:8000/LinChanceGPT/chat_with_gpt/', { question });
            const answer = gpt_response.data.answer;

            const newMessage = {
             content: answer,
             id: messages.value.length + 1,
             };
             messages.value.push(newMessage);
          } catch (error) {
            console.error('发送问题失败', error);
          }
         
        }
      };
    return {
      messages,
      user_input,
      sendMessage,
      goToshuju
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
.message{
   direction: ltr;
   color: #fff;
   background: #165cff67;
   border-radius:20px;
   height:80px;
   display: flex;
   margin-top:10px;
   margin-left:20px;
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
