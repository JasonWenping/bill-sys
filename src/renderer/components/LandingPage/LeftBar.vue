<template>
    <div id="leftBar">
        <div class="left-bar" :class="{'close': isOpen,'open': !isOpen}">
            <div class="logo"></div>
            <ul>
                <a href="javascript:void(0)"><li @click="openToggle" :class="{'activeMenu': !isOpen}"></li></a>
                <router-link  v-for="(i,index) in list" :key="index" :to="i">
                    <li @click="isActive(index)" :class="{'activeMenu': active[index]}">
                        <span v-if="!isOpen">{{ title[index] }}</span>
                    </li>
                </router-link>
            </ul>
        </div>
        <div :class="{'content-panel': isOpen,'content-panel-open':!isOpen}">
            <slot>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'left-bar',
  data: function () {
    return {
      list: ['/home', '/search', '/config', '/setting'],
      title: ['Home','Search','Config','Setting'],
      active: [true, false, false, false],
      isOpen: true
    }
  },
  methods: {
    isActive: function (index) {
      this.active = [index == 0, index == 1, index == 2, index == 3]
    },
    openToggle: function () {
        this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style scoped>
#leftBar {
    position: relative;
}
.left-bar{
    position: fixed;
    width: 60px;
    height: 100%;
    transition: width 0.5s;
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
.close ul li{
    display: block;
    width: 60px;
    height: 60px;
    transition: width 0.5s;
    background-position: left;
    background-repeat: no-repeat;
}
.left-bar ul li:hover{
    background-color: rgb(35, 147, 208);
}
.left-bar ul li span{
    color: #ffffff;
    line-height: 60px;
    margin-left: 60px;
}
.activeMenu{
    background-color: rgb(35, 147, 208);
}
.left-bar ul a {
    text-decoration: none;
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
    transition: margin-left 0.5s;
}
.content-panel-open {
    margin-left: 160px;
    transition: margin-left 0.5s;
}
.open {
    width: 150px;
    transition: width 0.5s;
}
.open ul li {
    display: block;
    width: 150px;
    height: 60px;
    transition: width 0.5s; 
    background-position: left;
    background-repeat: no-repeat;
}
</style>


