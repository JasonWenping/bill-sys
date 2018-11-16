<template>
    <div id="leftBar">
        <div class="left-bar">
            <div class="logo"></div>
            <ul>
                <a href="javascript:void(0)"><li :class="{'activeMenu': active[4]}"></li></a>
                <router-link  v-for="(i,index) in list" :key="index" :to="i"><li @click="isActive(index)" :class="{'activeMenu': active[index]}"></li></router-link>
            </ul>
        </div>
        <!--
        <div class="content-panel">
            <slot>
                Here put your own page-content……
            </slot>
        </div>
        -->
    </div>
</template>

<script>
export default {
    name: 'left-bar',
    data: function () {
        return {
            list: ['/home','/search','/config','/setting'],
            active: [true, false, false, false]
        }
    },
    methods: {
        isActive: function (index) {
            this.active = [index == 0, index == 1, index == 2, index == 3]
        }
    }
}
</script>

<style scoped>
.left-bar{
    position: fixed;
    width: 60px;
    height: 100%;
    background-color: rgb(0, 94, 123);
}
.left-bar .logo{
    width: 60px;
    height: 60px;
    display: block;
    background-image: url(../../assets/webwxgetmsgimg.png);
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 10px;
}
.left-bar ul{
    margin: 0;
    padding: 0;
}
.left-bar ul li{
    display: block;
    width: 60px;
    height: 60px;
    background-position: center;
}
.left-bar ul li:hover{
    background-color: rgb(35, 147, 208);
}
.activeMenu{
    background-color: rgb(35, 147, 208);
}
.left-bar ul a:nth-child(1) li{
    background-image: url(../../assets/menu.png);
}
.left-bar ul a:nth-child(2) li{
    background-image: url(../../assets/home.png);
}
.left-bar ul a:nth-child(3) li{
    background-image: url(../../assets/search.png);
}
.left-bar ul a:nth-child(4) li{
    background-image: url(../../assets/setting.png);
}
.left-bar ul a:nth-child(5) li{
    background-image: url(../../assets/setting.png);
    position: absolute;
    bottom: 10px;
}
.content-panel {
    margin-left: 70px;
    padding-top: 10px;
}
</style>


