<template>
  <div id="wrapper">
    <sys-info></sys-info>
  </div>
</template>

<script>
  import SystemInfo from './LandingPage/SystemInformation'
  export default {
    name: 'home-page',
    components: { 'sys-info': SystemInfo },
    methods: {
    }
  }
</script>

<style scoped>
#wrapper{
    font-family: "Microsoft YaHei";
    color: rgb(56, 56, 56);
    margin-left: 70px;
    padding: 10px 0;
}
</style>
