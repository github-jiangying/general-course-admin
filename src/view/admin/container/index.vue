<template>
  <div style="width: 100%;height: 100%">

    <el-header>
      <div style="float: left;color: deepskyblue;line-height: 60px">
        通用课程设计后台管理系统
      </div>
      <AdminHeader style="float: right"></AdminHeader>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>

</template>

<script>
  import AdminHeader from './adminHeader/index'
  export default {
    name: "index.vue",
    components: {
      AdminHeader
    }
  }
</script>

<style scoped>
  .el-header{
    background-color: #FFFFFF;
    color: #333;
    text-align: center;
    height: 76px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 518px;
  }

  .el-main {
    background-color: #efefef;
    color: #333;
    text-align: center;
    line-height: 160px;
  }


</style>
