<template>
    <div id="paraConfPage">
        <h5>参数配置</h5>
        <div class="middle">
            <div class="tag">
                <ul>
                    <li :class="{'active':isTrue.isAlipay}" @click="selectAlipay">支付宝</li>
                    <li :class="{'active':isTrue.isUnionpay}" @click="slelectUnionpay">银联</li>
                    <li :class="{'active':isTrue.isICBC}" @click="slelectICBC">工商银行</li>
                </ul>
                <div class="clearfix"></div>
            </div>
            <div class="content">
                <div class="alipay-form">
                    <form id="alipayForm" class="form-list" :class="{'hide': !isTrue.isAlipay}">
                        <h3>公共参数</h3>
                        <div class="form-group">
                            <label for="id">ID</label>
                            <input type="text" placeholder="平台中应用ID" id="id">
                        </div>
                        <div class="form-group">
                            <label for="key">私钥</label>
                            <input type="text" placeholder="应用配置的公私钥对（私钥）" id="key">
                        </div>
                        <div class="form-group">
                            <label for="port">接口名称</label>
                            <input type="text" placeholder="接口名称" id="prot">
                        </div>
                        <div class="form-group">
                            <label for="formate">格式</label>
                            <select name="formate" id="formate">
                                <option value="JSON">JSON</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="encoding">编码</label>
                            <select name="encoding" id="encoding">
                                <option value="utf-8">UTF-8</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="rsa">签名算法</label>
                            <input type="text" placeholder="目前支持RSA2和RSA，推荐使用RSA2" id="rsa">
                        </div>
                        <div class="form-group">
                            <label for="id">签名串</label>
                            <input type="text" placeholder="商户请求参数的签名串">
                        </div>
                        <div class="form-group">
                            <label for="id">时间</label>
                            <input type="date" placeholder="发送请求的时间">
                        </div>
                        <div class="form-group">
                            <label for="id">接口版本</label>
                            <input type="text" value="1.0" disabled>
                        </div>
                        <h3>业务参数</h3>
                        <div class="form-group">
                            <label for="id">token</label>
                            <input type="text" placeholder="鉴权token">
                        </div>
                        <div class="form-group">
                            <label for="category">账单类型</label>
                            <select name="category" id="category">
                                <option value="trade">trade</option>
                                <option value="signcustomer">signcustomer</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-submit">保 存</button>
                        </div>
                        
                    </form>
                    <form id="unionpayForm" class="form-list" :class="{'hide': !isTrue.isUnionpay}">
                        <h3>公共参数</h3>
                        <div class="form-group">
                            <label for="id">ID</label>
                            <input type="text" placeholder="应用ID" id="id">
                        </div>
                        <div class="form-group">
                            <label for="key">应用秘钥</label>
                            <input type="text" placeholder="应用配置的公私钥对（私钥）" id="key">
                        </div>
                        <div class="form-group">
                            <label for="port">签名</label>
                            <input type="text" placeholder="SHA-256算法【signature（秘钥）+body（参数）+ts（时间戳）】签名" id="prot">
                        </div>
                        <h3>业务参数</h3>
                        <div class="form-group">
                            <label for="version">版本号</label>
                            <input type="text" placeholder="版本号">
                        </div>
                        <div class="form-group">
                            <label for="encoding">编码</label>
                            <select name="encoding" id="encoding">
                                <option value="utf-8">UTF-8</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="rsa">产品类型</label>
                            <input type="text" placeholder="" id="rsa">
                        </div>
                        <div class="form-group">
                            <label for="id">签名串</label>
                            <input type="text" placeholder="商户请求参数的签名串">
                        </div>
                        <div class="form-group">
                            <label for="id">订单发送时间</label>
                            <input type="date" placeholder="发送请求的时间">
                        </div>
                        <div class="form-group">
                            <label for="id">交易类型</label>
                            <input type="text">
                        </div>
                        <div class="form-group">
                            <label for="id">交易子类</label>
                            <input type="text" placeholder="">
                        </div>
                        <div class="form-group">
                            <label for="id">签名</label>
                            <input type="text" placeholder="">
                        </div>
                        <div class="form-group">
                            <label for="id">签名方法</label>
                            <input type="text" placeholder="">
                        </div>
                        <div class="form-group">
                            <label for="id">清算日期</label>
                            <input type="date" placeholder="">
                        </div>
                        <div class="form-group">
                            <label for="id">商户代码</label>
                            <input type="text" placeholder="">
                        </div>
                        <div class="form-group">
                            <label for="id">文件类型</label>
                            <input type="text" placeholder="">
                        </div>
                        <div class="form-group">
                            <label for="id">证书ID</label>
                            <input type="text" placeholder="">
                        </div>
                        <div class="form-group">
                            <label for="id">其他</label>
                            <input type="text" placeholder="请求方保留域">
                        </div>
                        <div class="form-group">
                            <button class="btn btn-submit">保 存</button>
                        </div>
                    </form>
                    <form id="ICBCForm" class="form-list" :class="{'hide': !isTrue.isICBC}">
                        <h3>公共请求参数</h3>
                        <div class="form-group">
                            <label for="id">ID</label>
                            <input type="text" placeholder="在工行开放平台中的应用id" id="id">
                        </div>
                        <div class="form-group">
                            <label for="key">私钥</label>
                            <input type="text" placeholder="应用配置的公私钥对（私钥）" id="key">
                        </div>
                        <div class="form-group">
                            <label for="port">消息编号</label>
                            <input type="text" placeholder="消息通讯唯一编号" id="prot">
                        </div>
                        <div class="form-group">
                            <label for="formate">格式</label>
                            <select name="formate" id="formate">
                                <option value="JSON">JSON</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="encoding">编码</label>
                            <select name="encoding" id="encoding">
                                <option value="utf-8">UTF-8</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="rsa">签名算法</label>
                            <input type="text" placeholder="目前支持AES" id="rsa">
                        </div>
                        <div class="form-group">
                            <label for="encoding">签名类型</label>
                            <select name="encoding" id="encoding">
                                <option value="utf-8">UTF-8</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="id">签名</label>
                            <input type="text" placeholder="报文签名">
                        </div>
                        <div class="form-group">
                            <label for="id">时间</label>
                            <input type="date" placeholder="发送请求的时间">
                        </div>
                        <h3>业务参数</h3>
                        <div class="form-group">
                            <label for="id">交易代码</label>
                            <input type="text" value="1.0">
                        </div>
                        <div class="form-group">
                            <label for="id">集团CIS号</label>
                            <input type="text" placeholder="客户注册时的归属编码">
                        </div>
                        <div class="form-group">
                            <label for="id">证书ID</label>
                            <input type="text" placeholder="无证书客户可上送空">
                        </div>
                        <div class="form-group">
                            <label for="id">开始时间</label>
                            <input type="date" placeholder="yyyyMMdd">
                        </div>
                        <div class="form-group">
                            <label for="id">结束时间</label>
                            <input type="date" placeholder="yyyyMMdd">
                        </div>
                        <div class="form-group">
                            <label for="id">发生额下限</label>
                            <input type="number" placeholder="若输入则为正数">
                        </div>
                        <div class="form-group">
                            <button class="btn btn-submit">提交</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LeftBar from './LandingPage/LeftBar'
import { fail } from 'assert'
export default {
  name: 'para-conf',
  data: function () {
    return {
      isTrue: {
        isAlipay: true,
        isUnionpay: false,
        isICBC: false
      }
    }
  },
  methods: {
    selectAlipay: function () {
      this.isTrue = {
        isAlipay: true,
        isUnionpay: false,
        isICBC: false
      }
    },
    slelectUnionpay: function () {
      this.isTrue = {
        isAlipay: false,
        isUnionpay: true,
        isICBC: false
      }
    },
    slelectICBC: function () {
      this.isTrue = {
        isAlipay: false,
        isUnionpay: false,
        isICBC: true
      }
    }
  },
  components: {
    'left-bar': LeftBar
  }
}
</script>

<style scoped>
#paraConfPage {
    font-family: "Microsoft YaHei";
    color: rgb(56, 56, 56);
    margin-left: 70px;
    padding: 10px 0;
}
#paraConfPage h5::before {
    content: '\00BB';
    height: 45px;
    width: 30px;
    font-size: 20px;
    margin-right: 10px;
}
.middle{
    margin-top: 20px;
    font-size: 14px;
}
.middle .tag ul li {
    float: left;
    display: block;
    width: 80px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border-bottom: 1px solid #e6e6e6;
    cursor: pointer;
}
.middle .tag ul .active {
    border: 1px solid #eeeeee;
    border-top: 3px solid rgb(0, 124, 169);
    border-bottom: none;
}
.clearfix {
    display: block;
    content: '\0020';
    line-height: 0;
    clear: both;
}
.content {
    margin-top: 10px;
}
.content h3 {
    margin: 20px 10px;
    background-color: rgb(245, 245, 245);
    padding: 5px;
}
.content h3:before {
    content: '\25C6';
    color: rgb(0, 124, 169);
    margin-right: 10px;
}
.content .form-group {
    height: 42px;
    line-height: 42px;
}
.content .form-group label {
    width: 100px;
    display: block;
    float: left;
    text-align: right;
    margin-right: 10px;
}
.content .form-group input,.content .form-group select {
    width: 600px;
    height: 30px;
    border-radius: 3px;
    border: 1px solid #e6e6e6;
}
.hide {
    display: none;
}
.content .form-group button{
    width: 200px;
    height: 40px;
    display: block;
    border-radius: 5px;
    border: none;
    color: #ffffff;
    background-color: rgb(0, 124, 169);
    margin: 20px auto;
}
.content .form-group button:hover{
    background-color: rgb(0, 94, 123);
}
</style>


