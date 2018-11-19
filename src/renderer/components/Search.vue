<template>
    <div id="searchPage">
        <h5>账单获取</h5>
        <div class="form-data">
            <div class="form-group">
                <label for="start">开始时间</label>
                <input type="date" name="start" placeholder="账单开始时间">
                <label for="end">结束时间</label>
                <input type="date" name="end" placeholder="账单开始时间">
            </div>
            <div class="form-group">
                <label for="">查询范围：</label>
                <input type="radio" name="alipay" value="alipay">支付宝
                <input type="radio" name="unionpay" value="unionpay">银联
                <input type="radio" name="icbc" value="icbc">工商银行
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
*{
    background-color: rgb(36, 36, 36);
    color: #fff;
}
#searchPage {
    position: fixed;
    height: 100%;
    width: 100%;
    color: #292929;
    font-family: "Microsoft YaHei";
    color: rgb(56, 56, 56);
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
    border-bottom: 1px solid #e6e6e6;
    font-size: 14px;
    line-height: 40px;
    margin-top: 20px;
}
.form-data .form-group input[type=radio] {
}
</style>


