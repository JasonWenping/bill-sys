<template>
  <div>
    <div class="title">系统信息</div>
    <div class="items">
      <table>
        <thead>
          <tr>
            <th>参数名</th>
            <th>参数值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Path</td>
            <td>{{ path }}</td>
          </tr>
          <tr>
            <td>Router Name</td>
            <td>{{ name }}</td>
          </tr>
          <tr>
            <td>Vue.js</td>
            <td>{{ vue }}</td>
          </tr>
          <tr>
            <td>Electron</td>
            <td>{{ electron }}</td>
          </tr>
          <tr>
            <td>Node</td>
            <td>{{ node }}</td>
          </tr>
          <tr>
            <td>Platform</td>
            <td>{{ platform }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        electron: process.versions.electron,
        name: this.$route.name,
        node: process.versions.node,
        path: this.$route.path,
        platform: require('os').platform(),
        vue: require('vue/package.json').version
      }
    }
  }
</script>

<style scoped>
  .title {
    color: #888;
    font-size: 18px;
    font-weight: initial;
    letter-spacing: .25px;
    margin-top: 10px;
  }

  .items { margin-top: 8px; }

  .item {
    display: flex;
    margin-bottom: 6px;
  }

  .item .name {
    color: #6a6a6a;
    margin-right: 6px;
  }

  .item .value {
    color: #35495e;
    font-weight: bold;
  }
  table {
    border-collapse: collapse;
    line-height: 30px;
    text-align: center;
  }
  table tr td,table tr th {
    width: 200px;
  }
  table thead tr {
    background-color: #6a6a6a;
    line-height: 40px;
    color: #ffffff;
  }
  table tbody tr:nth-child(even) {
    background-color: #e6e6e6;
  }
  table tbody tr:hover {
    background-color: #e6e6e6;
  }
  table tr td:nth-child(1) {
    font-weight: bold;
  }
  table tr td:nth-child(2) {
    width: 75%;
  }
</style>
