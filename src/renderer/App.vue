<template>
  <div id="app">
    <left-bar></left-bar>
    <div class="content-panel">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import LeftBar from '@/components/LandingPage/LeftBar'
  export default {
    name: 'bill-sys',
    components: {
      'left-bar': LeftBar
    }
  }
</script>

<style>
  /* CSS */

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  /*
  .content-panel {
    margin-left: 80px;
    padding-top: 10px;
  }
  */
  body { font-family: 'Source Sans Pro', sans-serif; }
</style>
