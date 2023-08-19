<template>
    <div class="layout">
       <div class="sider">
          <div class="logo">
             <img src="../assets/logo.png" alt="" />
          </div>
          <div class="history-item">
             <a-input-search :style="{ width: '220px' }" placeholder="在此处搜索历史记录" search-button />
          </div>
          <div class="history-list">
             <div class="history-list-item" v-for="item in history" :key="item.timeStamp" @click="clickHistory(item.timeStamp)">
             <div class="history-icon"><icon-message size="30" /></div>
             <div class="item-title">
                {{ item.chat_name }}
             </div>
             <!-- <div class="item-time">
                {{ item.timeStamp }}
             </div> -->
          </div>
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
                    <a-button type="text" >LinSpark</a-button>
                    <template #content>
                        <a-doption @click="goTospark">LinSpark</a-doption>
                        <a-doption @click="goTogpt">LinGPT</a-doption>
                        <a-doption @click="goToshuju">向量数据库</a-doption>
                     </template>
                 </a-dropdown>
 
             </div>
             
            <div class="new_chat">
                <a-button type="primary" @click="newChat">
                 + 新建会话
                </a-button>
             </div>
 
 
          </div>
 
 
          <div class="content">
             <div v-for="message in messages" :key="message.id" :class="{ 'message': true, 'zoomed': isZoomed }">
                <icon-robot size="30" /> <span> : {{ message.content }}</span>
             </div>
 
          </div>
 
          <div class="footer">
             <div class="shuru">
                <div class="input-container">
                   <a-textarea placeholder="请输入你的问题" :max-length="300" allow-clear show-word-limit v-model="user_input"
                      @keydown.enter="sendMessage" />
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
 import { defineComponent, ref } from 'vue';
 import { IconSend, IconDelete } from '@arco-design/web-vue/es/icon';
 import { useRouter } from 'vue-router';
 import axios from 'axios';
 
 
 export default defineComponent({
    name: 'MessageDisplay',
 
    components: { IconSend },
    data() {
   return {
     
     isZoomed: false
   }
 },
    setup() {
       const router = useRouter() // 使用useRouter获取router实例
 
       const goToshuju = () => {
         router.push('/shuju') // 使用router实例进行页面跳转
      }
      const goTogpt = () => {
         router.push('/chat') // 使用router实例进行页面跳转
      }
      const goTospark = () => {
         router.push('/spark') // 使用router实例进行页面跳转
      }
       const messages = ref([
          {
             id: 1,
             content: '欢迎使用LinChanceSpark！请问有什么可以帮助你的？',
          }
       ]);
       // console.log("以下是messages")
       // console.log(messages.value)
       const user_input = ref('');
      const chat_name = ref('newchat');
      const new_chat = ref('False'); 
      
      
      const newChat = async () => {
         const new_chat_= "True";
         const chat_name_ ="新建对话";
         const user_input_ ='';
         const postdata={
               user_input:user_input_,
               chat_name:chat_name_,
               new_chat:new_chat_,
            }
         try{
            console.log("以下是新建会话返回的东西")
            console.log(new_chat)
            axios.post('http://127.0.0.1:8000/LinChanceGPT/chat_with_Spark/', { postdata });
         }
         catch (error) {
               console.error('新建对话失败', error);
            }

      }
      const sendMessage = async () => {
         //检查user_input的值是否存在,如果存在，那么就会执行if块内的代码。
         if (user_input.value) {
            const newMessage = {
               //创建了一个名为newMessage的常量，它是一个对象。该对象有两个属性：id和content。
               id: messages.value.length + 1,
               //给newMessage对象的id属性赋值，值为messages.value.length + 1。
               //这个值是messages数组的长度加1，用于表示新消息的唯一标识符。
               content: user_input.value,
               //值为user_input的值。这个值是用户输入的内容
            };
            console.log(user_input.value)
            //打印出用户输入的内容
            messages.value.push(newMessage);
            console.log("以下是messages")
            console.log(messages.value)
            //这行代码将newMessage对象添加到messages数组中，表示新消息
            const question = user_input.value;
            //将user_input的值赋给question常量，用于存储用户的问题。
            console.log("这是需要观察的")
            const chat_name = "新建对话"
            const new_chat = "False"
            console.log(new_chat);
            const postdata={
               user_input:question,
               chat_name:chat_name,
               new_chat:new_chat,
            }
            try {
               const gpt_response = await axios.post('http://127.0.0.1:8000/LinChanceGPT/chat_with_Spark/', {postdata});

               const answer = gpt_response.data[0];
               console.log(gpt_response.data[0])
               //将响应的数据赋给answer常量，用于存储从服务器返回的答案

               const newMessage = {
                  //这行代码给newMessage对象的id属性赋值，值为messages.value.length + 1。
               //这个值是messages数组的长度加1，用于表示新消息的唯一标识符。
                  content: answer,
                  id: messages.value.length + 1,
               };


               messages.value.push(newMessage);
               console.log(messages.value)
            } 
            catch (error) {
               console.error('发送问题失败', error);
            }

         }
      };

 
       const history = ref([
          {
             timeStamp: '2021-10-10 10:10:10',
             chat_name: 'ChatGPT',
          },
           {
             timeStamp: '2021-10-10 10:10:10',
             chat_name: 'Spark',
          },
          {
             timeStamp: '2021-10-10 10:10:10',
             chat_name: '向量数据库',
          }
 
       ]);
 
       const formattedTime = ref('');
 
       const messageCount = ref(2)
 
       const pad = (number: number) => {
          return number < 10 ? '0' + number : number;
       };
 
       const clickHistory = async (timeStamp: string) => {
          console.log('clickHistory', timeStamp);
          const timestamp = timeStamp;
          // const messsage = await axios.get('http://127.0.0.1:8000/LinChanceGPT/chat_history', { timestamp });
          alert(timestamp);
 
       };
 
       // const deleteHistory = (timeStamp:string) => {
       //    console.log('deleteHistory',timeStamp);
       // };
 
       const getHistory = async () => {
          const res = await axios.get('http://127.0.0.1:8000/LinChanceGPT/chat_history');
          history.value = res.data;
       };
 
       const createMessage = async () => {
          getCurrentTime();
          history.value.push({
             timeStamp: formattedTime.value,
             chat_name: '这是一个会话' + messageCount.value++,
          })
          try {
             const res = await axios.post('http://http://127.0.0.1:8000/LinChanceGPT/chat_history', { timeStamp: formattedTime.value });
             console.log(res);
          }
          catch(error) {
             console.error('新建问题失败', error);
          }
 
       };
 
       const getCurrentTime = () => {
          const current = new Date();
          const year = current.getFullYear();
          const month = pad(current.getMonth() + 1);
          const day = pad(current.getDate());
          const hours = pad(current.getHours());
          const minutes = pad(current.getMinutes());
          const seconds = pad(current.getSeconds());
          formattedTime.value = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
       };
 
       return {
          newChat,
          messages,
          user_input,
          history,
          messageCount,
          sendMessage,
          goToshuju,
          goTogpt,
          goTospark,
          clickHistory,
          getHistory,
          createMessage,
          getCurrentTime,
          chat_name,
          new_chat,
       };
    },
 });
 
 </script>
 
 <style scoped>
.layout {
   width: 100%;
   height: 100vh;
   display: flex;

}

.sider {
   background-color: rgba(24, 27, 28);
   width: 20%;
   height: 100vh;
   position: relative;
}

.header {
   background-color: #181B3A;
   flex: 1;
   width: 100%;
   height:30px;
   display: flex;
   align-items: center;
   padding: 10px;

}

.history-list {
   display: flex;
   flex-direction: column-reverse;
}
.new_chat{
   padding-left:73%;
}

.history-list-item {
   height: 60px;
   margin: 8px;
   padding-left: 10px;
   padding-right: 10px;
   text-align: left;
   font-size: 10px;
   line-height: 30px;
   cursor: pointer;
   background: #555555;
   border-radius: 5px;

   display: flex;
   flex-direction: row;
}

.history-icon {
   width: 10%;
   text-align: center;
   line-height: 60px;
   justify-items: center;
   display: flex;
   align-items: center;
   color: #fff;
}

.item-title {
   width: 80%;
   line-height: 60px;
   color: #fff;
   padding-left: 10px;
}

/* .item-button {
width: 10%;
display: flex;
justify-content: right;
align-items: center;
} */
.message {
   display: flex;
   align-items: center;
   margin-bottom: 10px;
   color:#fff;
 }

 .Initial{
   color:#fff;
   display: flex;
   align-items: center;
   margin-bottom: 10px;
}

 .zoomed {
   transform: scale(1.2);
 }

 .header_btn {
   padding-left: 5%;
   display: flex;
   justify-content: flex-end;

}

.content {
   background-color: #0a0a0a;
   flex-grow: 1;
    width: 100%;
   height: 75%;
   overflow-y: auto;
   padding: 10px;
}



.diplay_page {
   width: 80%;
   display: flex;
   flex-direction: column;
   height: 100vh;
}

.logo img {
   width: 100%;

   margin-top: -35%;
   margin-left: 0%;
}

.history-item {
   height: 30px;
   margin-top: -30%;
   margin-left: 8px;
   margin-right: 8px;
   margin-bottom: 20px;
   text-align: left;
   font-size: 10px;
   border-radius: 5px;

}

.user {
   margin-top: 100%;
   width: 90%;
   height: 10%;
   position: absolute;
   bottom: 0;
   align-items: center;
   display: flex;
   padding-left: 10%;
}

.footer {
   background-color: #181B3A;
   flex: 1;
   width: 100%;
   height: 80px;
   padding-left:2%;
   display: flex;

}

.shuru {
   width: 85%;
   display: flex;
   align-items: center;
   margin: 10px;
   padding-left: 5%;
   background-color: #181B3A;

}

.input-container {
   flex: 1;
   margin-right: 30px;
}
</style>