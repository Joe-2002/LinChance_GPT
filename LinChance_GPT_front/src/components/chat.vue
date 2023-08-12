<template>
   <div class="layout">
      <a-layout style="height: 100vh;">
         <a-layout-header>Header</a-layout-header>
         <a-layout>
            <a-layout-sider>
               <div class="history-item">
                  <div class="item-title">
                     title
                  </div>
                  <span><icon-delete /></span>
               </div>
            </a-layout-sider>
            <a-layout-content>
               Content
            </a-layout-content>
         </a-layout>
         <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
   </div>
</template>
   
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>
   
   
<style scoped>
.layout :deep(.arco-layout-header),
.layout :deep(.arco-layout-content),
.layout :deep(.arco-layout-sider),
.layout :deep(.arco-layout-footer) {
display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}

.layout :deep(.arco-layout-header) {
   background: #050404;
   height: 60px;
}

.layout :deep(.arco-layout-content) {
   width: 70%;
   background: #c95353;
}

.layout :deep(.arco-layout-sider) {
  width: 20vw;
  background-color: var(--color-primary-light-3);
}

.layout :deep(.arco-layout-footer) {
   background: #2c8659;
}

.history-item {
   height: 30px;
   line-height: 60px;
   margin: 8px;
   padding-left: 10px;
   padding-right: 10px;
   text-align: center;
   font-size: 10px;
   line-height: 30px;
   cursor: pointer;
   background: #7e7c7c;
   border-radius: 5px;
}

/* .item-title {
   display: flex;
   flex-direction: column;
   width: 60%;
} */

</style>