<template>
  <div class="home">
    <XHeader title="我是vux header组件"/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { XHeader } from 'vux'

export default {
  name: 'home',
  components: {
    HelloWorld, 
    XHeader,
  }
}
</script>

<style lang="less" scoped>
  .home {
    .vux-header {
      background: aquamarine;
    }
  }
</style>

