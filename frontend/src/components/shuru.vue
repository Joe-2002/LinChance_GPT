<template>
         <div class="footer">
            <div class="shuru">
               <div class="input-container">

                  <a-textarea
                     v-model="user_input"
                     :auto-size="{ minRows: 2, maxRows: 3 }"
                     :max-length="300" allow-clear show-word-limit 
                     style="margin-top: 5px"
                  placeholder="请输入你的问题"

               />
               </div>
               <a-button type="primary" @click="sendMessage">
                  发送
                  <icon-send />
               </a-button>
            </div>
         </div>



</template>
<script>
</script>
<style>
.footer {
   background-color: #181B3A;
   flex: 1;
   width: 100%;
   height: 100%;
   padding-left:2%;
   display: flex;

}
.shuru {
   width: 88%;
   display: flex;
   align-items: center;
   margin: 10px;
   padding-left: 4%;
   background-color: #181B3A;

}
.input-container {
   flex: 1;
   align-items: center;
   margin-right: 50px;
}
</style>