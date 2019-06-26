<template>
  <div class="course-intro-container">
    <div class="course-intro-menu">
      <div class="search" v-if="this.$route.path == '/courseIntroduction/courseDynamics'">
        <el-input  style="width: 133px;" v-model="inputTitle" placeholder="请输入搜索标题"></el-input>
        <el-button style="background-color: #E53c3E;text-align: center">搜索</el-button>
      </div>
      <div class="title">
        课程介绍
      </div>
      <el-menu
        :default-active="router1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :router="true"
      >
        <el-menu-item @click="jump(item.label)" v-for="(item,index) in courseIntroMenu" :index="item.to" :key="index">
          <span slot="title">{{item.label}}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="course-intro-content">
      <div class="content-top">
        <img height="20px" src="../../../assets/tv.png" alt="图片未加载">
        <span style="color: #F10009">{{label}}</span>

        <div style="float: right">
          <el-breadcrumb separator=">" style="line-height: 42px;">
            <el-breadcrumb-item>课程介绍</el-breadcrumb-item>
            <el-breadcrumb-item>{{label}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <span style=" color: #d83638;float: right">您当前的位置：</span>
      </div>
      <el-divider></el-divider>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  import menu from '../../../config/menu'

  export default {
    name: "index.vue",
    data() {
      return {
        courseIntroMenu: [],
        label: '课程简介',
        inputTitle: ''
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      jump(label) {
        this.label = label;
        // console.log(this.router1)
      }
    },
    mounted() {
      this.courseIntroMenu = menu.menu.clientCourseIntro;
      console.log(this.$route.path)
      // console.log(this.$router)

      console.log(this.courseIntroMenu)
    }
  }
</script>

<style scoped>
  .el-button{
    width: 55px;
    height: 37px;
    color: #ffffff;
    text-align: center;
    padding: 0;
    border: 1px solid #e53c3e;
  }



  .course-intro-container {
    margin: 10px 0 0 10px;
  }

  .course-intro-menu {
    width: 205px;
    float: left;

  }

  .course-intro-content {
    width: 716px;
    height: 100%;
    /* display: inline-block; */
    float: right;
    padding: 0 0 0 10px;
  }

  .content-top {
    height: 30px;
    line-height: 42px;
  }

  .title {
    height: 48px;
    color: #ffffff;
    font-size: 15px;
    background: #F45F5F;
    text-align: center;
    line-height: 48px;
  }

  .search{
    height: 43px;
    padding: 5px 5px 2px 6px;
    background-color: #ebebeb;
    margin-bottom: 6px;
  }

  .el-menu {
    background-color: #EBEBEB;
    text-align: center;
  }

  .el-divider--horizontal {
    margin: 16px 0 9px 0;
    border-top: 1px solid #d83638;
  }

</style>
