<template>
<div id="initialPsw">
    <div class="set-psw">
        <h1>Set Your Password !</h1>
        <input type="password" placeholder="请设置密码！" v-model="psw"><span v-if="verify">请输入密码</span><br>
        <input type="password" placeholder="请确认密码！" v-model="rpsw"><br>
        <router-link to="/home"><button @click="submitPsw">setting</button></router-link>
        <!-- <button @click="submitPsw">setting</button> -->
    </div>
</div>
</template>

<script>
import { fail } from 'assert'
export default {
  name: 'initial-page',
  data: function () {
    return {
      psw: '',
      rpsw: '',
      verify: false
    }
  },
  methods: {
    submitPsw: function () {
      if (this.psw == '' || this.rpsw == '') this.verify = true
      if (this.psw !== this.rpsw) {
        alert('Password set correct...')
        return false
      }
    }
  }
}
</script>


<style scoped>
#initialPsw{
    position: fixed;
    width: 100%;
    height: 100%;
    margin: 0;
    background-color: #292929;
    padding-top: 100px;
}
.set-psw {
    width: 400px;
    height: 400px;
    margin: 0 auto;
    text-align: center
}
.set-psw h1 {
    color: #ffffff;
    margin-bottom: 50px;
}
.set-psw input[type=password] {
    width: 250px;
    height: 35px;
    border-radius: 100px;
    background-color: #fff;
    border: none;
    margin: 10px 0;
    padding: 0 10px;
}
.set-psw input[type=password]:focus {
    border: 2px solid rgb(177, 0, 213);
    outline: 0 !important;
}
.set-psw button:focus {
    outline: 0;
}
.set-psw button {
    width: 250px;
    height: 35px;
    background-color: rgb(111, 0, 92);
    border-radius: 100px;
    border: none;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    margin-top: 10px;
}
.set-psw button:hover {
    background-color: #fff;
    color: rgb(68, 68, 68);
}
</style>

