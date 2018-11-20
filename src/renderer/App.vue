<template>
  <div id="app">
    <left-bar>
      <router-view></router-view></left-bar>
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
  body { font-family: 'Source Sans Pro', sans-serif;}
  input:focus {
      outline: none;
  }
</style>
