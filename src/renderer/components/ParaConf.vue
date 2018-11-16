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
                        <h3>公共请求参数</h3>
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
                            <label for="id">-</label>
                            <input type="button" value="保存">
                        </div>
                        
                    </form>
                    <form id="unionpayForm" class="form-list" :class="{'hide': !isTrue.isUnionpay}">
                        <h3>银联请求参数</h3>
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
                            <label for="id">-</label>
                            <input type="button" value="保存">
                        </div>
                        
                    </form>
                    <form id="ICBCForm" class="form-list" :class="{'hide': !isTrue.isICBC}">
                        <h3>工商银行请求参数</h3>
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
                            <label for="id">-</label>
                            <input type="button" value="保存">
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LeftBar from './LandingPage/LeftBar'
import { fail } from 'assert';
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
</style>


