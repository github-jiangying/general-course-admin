<template>
    <div>
      <el-menu
        class="el-menu-vertical-demo"
        default-active="0-0"
        @select='handSelect'
        unique-opened
        width="220px"
        :collapse="isCollapse">
        <el-submenu v-for="(submenu, index) in menuList" :index="index.toString()" :key="index">
          <template slot="title">
            <span slot="title">{{submenu.label}}</span>
          </template>
          <el-menu-item-group v-for="(menu, v) in submenu.menuGroup" :key="'-' + v" style="background-color: #eaecf5; " >
            <router-link class="head-link" :to="menu.to">
              <el-menu-item :index="index+ '-' + v" style="border:1px solid #d7dbec">
                <span slot="title">{{menu.label}}</span>
              </el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 245px;
    min-height: 400px;
  }

  .el-submenu__title {
    /* height: 56px; */
    /*line-height: 36px;*/
    font-size: 15px;
    color: #303133;
    padding: 0 20px;
    list-style: none;
    cursor: pointer;
    position: relative;
    -webkit-transition: border-color .3s, background-color .3s, color .3s;
    transition: border-color .3s, background-color .3s, color .3s;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    white-space: nowrap;
  }

  .el-menu-vertical-demo /deep/.el-submenu__title:hover {
    background-color: #3448a1;
    color: #ffffff;
  }

  .el-menu-vertical-demo /deep/.el-submenu .el-menu-item {
    height: 40px;
    line-height: 40px;
    padding: 0 45px;
    min-width: 200px;
  }

  .side_trgger {
    position: fixed;
    text-align: center;
    bottom: 0;
    cursor: pointer;
    height: 48px;
    line-height: 48px;
    color: #fff;
    background: #002140;
    z-index: 1;
    -webkit-transition: all .3s ease-in-out;
    transition: 0.3s width ease-in-out, 0.3s padding-left ease-in-out, 0.3s padding-right ease-in-out;
    width: 200px;
  }

  .topDivStyle {
    width: 245px;
    height: 10%;
    background-color: #3448a1;
  }

  .el-menu-item {
  a {
    color: rgb(191, 203, 217);
  }
  font-size: 14px;
  }

  .el-menu {
    height: 90%;
  }

  .el-menu-item.is-active > a {
    color: #1890ff;
  }

  .el-menu-item-group a {
    text-decoration: none;
  }

  .el-menu-item a {
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
  }

  .head-link {
  &:active {
     text-decoration: none;
   }
  }

  .el-menu-vertical-demo /deep/ .el-menu-item:hover, .el-menu-item:focus {
    outline: none;
    background-color: #3448a1;
    color: #ffffff;
  }

  .el-menu-vertical-demo /deep/.el-menu-item-group__title {
    padding: 0px ;
    font-size: 15px;
  }

  .el-submenu__title {
    padding-left: 30px;
  }
</style>
