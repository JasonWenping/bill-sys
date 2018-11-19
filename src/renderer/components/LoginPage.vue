<template>
<div id="loginPage">
    <div class="logo"></div>
    <h3>Bill-System</h3>
    <div class="input-psw">
        <input type="password" name="psw" id="psw" placeholder="enter your password" v-focus="true">
        <router-link to="/home">>></router-link>
    </div>
</div>
</template>

<script>
import LeftBar from './LandingPage/LeftBar'
export default {
  name: 'login-page',
  components: {
    'left-bar': LeftBar
  },
  // 注册一个focus组件，便于元素自动获取focus，用法 v-focus
  directives: {
    focus: {inserted: function (el) { el.focus() }}
  },
  mounted: function () {

  }
}
</script>

<style scoped>
*{
    background-color: rgb(36, 36, 36);
    color: #fff;
}
#loginPage {
    position: fixed;
    height: 100%;
    width: 100%;
    color: #292929;
}
.logo {
    width: 129px;
    height: 129px;
    margin: 100px auto 0px auto;
    background-image: url(../assets/webwxgetmsgimg.png);
}
h3 {
    text-align: center;
    color: #fff;
    margin-bottom: 40px;
}
.input-psw {
    width: 300px;
    height: 40px;
    background-color: #fff;
    border-radius: 100px;
    margin: 0 auto;
}
.input-psw input {
    border: none;
    background-color: #ffffff;
    height: 40px;
    width: 240px;
    margin-left: 20px;
    padding-left: 10px;
    color: #292929;
}
.input-psw input:focus {
    outline: 0;
}
.input-psw a {
    background-color: #fff;
    color: #292929;
    text-decoration: none;
    font-weight: bold;
}
.input-psw a:hover {
    color: #0385ff;
}
</style>


