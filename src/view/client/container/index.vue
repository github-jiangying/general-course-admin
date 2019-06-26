<template>
  <div>
    <el-container>
      <el-header style="height: 294px;">
       <client-header></client-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer style="    height: 100px;background-color: #b81c21;color: #ffffff;font-size: 12px;">
        <client-footer></client-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import clientHeader from "../header/index.vue"
  import clientFooter from '../footer/index.vue'

  export default {
    name: "index",
    components: {
      clientHeader,
      clientFooter
    }
  }
</script>

<style scoped>
  .el-header, .el-footer {
    /*background-color: #B3C0D1;*/
    color: #333;
    text-align: center;
    padding: 0;
    /*line-height: 60px;*/
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    /*line-height: 200px;*/
  }

  .el-main {
    background-color: #F4F8FC;
    color: #333;
    /*text-align: center;*/
    /*line-height: 160px;*/
    width: 976px;
    margin: 0px auto;
    padding: 0 12px 0 12px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
