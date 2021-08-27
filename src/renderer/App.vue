<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  const ipcRenderer = require('electron').ipcRenderer;
  
  export default {
    name: 'electron-chat-vue',
    mounted() {
      
      ipcRenderer.on('asynchronous-reply',(event,arg)=>{
        console.log(' /App.vue [20]--1--',arg);
        // if(arg) {
        //   this.$router.push('/info')
        // }
      })
      
    },
    watch:{
      '$router'(n,o) {
        console.log('/App.vue [20]--1---router',n,o);
      }
    }
  }
</script>

<style lang="scss">
  #app {
    height: 100%;
  }
  /* CSS */
</style>
