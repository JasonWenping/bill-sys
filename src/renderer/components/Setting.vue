<template>
    <div id="Setting">
        <h5>系统设置</h5>
        <router-link to="/logout"><p>logout</p></router-link>
    </div>
</template>

<script>
export default {
  name: 'setting'
}
</script>

<style scoped>
#Setting{
    font-family: "Microsoft YaHei";
    color: rgb(56, 56, 56);
    margin-left: 70px;
    padding: 10px 0;
}
#Setting h5::before {
    content: '\00BB';
    height: 45px;
    width: 30px;
    font-size: 20px;
    margin-right: 10px;
}
</style>


