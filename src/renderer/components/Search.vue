<template>
    <div id="searchPage">
        <h5>账单获取</h5>
        <div class="form-data">
            <div class="form-group">
                <label for="start">开始时间：</label>
                <input type="date" name="start" placeholder="账单开始时间">
                <label for="end">结束时间：</label>
                <input type="date" name="end" placeholder="账单开始时间">
            </div>
            <div class="form-group">
                <label for="">查询范围：</label>
                <input type="checkbox" name="alipay" value="alipay">支付宝
                <input type="checkbox" name="unionpay" value="unionpay">银联
                <input type="checkbox" name="icbc" value="icbc">工商银行
            </div>
            <div class="form-group">
                <input type="text" name="keywords" id="Key" placeholder="键入关键字搜索">
            </div>
            <div class="form-group">
                <button class="btn btn-search">一键获取</button>
            </div>
        </div>
    </div>
</template>

<script>
import LeftBar from './LandingPage/LeftBar'
export default {
  name: 'search',
  components: {
    'left-bar': LeftBar
  }
}
</script>

<style scoped>
#searchPage {
    color: #292929;
    font-family: "Microsoft YaHei";
    color: rgb(56, 56, 56);
    padding: 10px 0;
}
#searchPage h5::before {
    content: '\00BB';
    height: 45px;
    width: 30px;
    font-size: 20px;
    margin-right: 10px;
}
.form-data {
    height: 100px;
    font-size: 14px;
    line-height: 40px;
    margin-top: 20px;
}
.form-data .form-group input {
    border: 1px solid #e6e6e6;
    border-radius: 3px;
}
.form-data .form-group input[type=checkbox] {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    vertical-align: middle;
}
.form-data .form-group input[type=checkbox]:checked {
    background-color: #3190e8;
}
.form-data .form-group input[type=checkbox]:checked::after {
     content: '';
     position: absolute;
     background: transparent; 
     border: #fff solid 2px; 
     border-top: none; 
     border-right: none; 
     height: 6px; 
     width: 10px; 
     margin: 3px;
     -moz-transform: rotate(-45deg); 
     -ms-transform: rotate(-45deg); 
     -webkit-transform: rotate(-45deg); 
     transform: rotate(-45deg);
}
.form-data .form-group input[type=text] {
    width: 500px;
    height: 35px;
}
.btn-search {
    width: 400px;
    height: 60px;
    background-color: rgb(13, 81, 126);
    color: #fff;
    border: none;
    display: block;
    margin: 160px auto;
    border-radius: 10px;
    font-size: 20px;
}
</style>


