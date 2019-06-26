<template>
  <div>
    <!--<img src="../../../assets/header.png" alt="图片未加载">-->
    <div class="header-bg">

    </div>
    <div class="search-all">
      <el-form :inline="true" :rules="rules" ref="searchForm" :model="searchForm" class="demo-form-inline">
        <el-form-item label="全站搜索"  prop="content">
          <el-input v-model="searchForm.content" placeholder="请输入搜索内容"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="background-color: gold" @click="search('searchForm')">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div style=" background-color: #DB383B;">
      <div style="  width: 976px;margin: 0 auto;    border: 1px solid #afa6a6;">
        <el-menu
          :default-active="this.$route.path"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#D83638"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true"
        >
          <el-menu-item v-for="(menu1,index) in clientMenu" :index="menu1.to" :key="index">
            <sapn>{{menu1.label}}</sapn>
          </el-menu-item>
        </el-menu>
      </div>

    </div>



  </div>
</template>

<script>
  import menu from '../../../config/menu'

  export default {
    name: "header",
    data() {
      return {
        activeIndex2: '1',
        clientMenu: {},
        searchForm: {
         content: ''
        },
        rules: {
          content: [
            { required: true, message: '请输入搜索内容', trigger: 'blur' }
          ]
        }

      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      search(formName) {
        this.$refs[formName].validate((valid) => {
          if(valid) {
            console.log(this.searchForm.content)
          }
        })
        // this.$refs[formName].resetFields();
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted() {
      this.clientMenu = menu.menu.client;
      console.log(this.clientMenu);
    }
  }
</script>

<style scoped>
  .link {
    text-decoration: none;
  }

  .header-bg {
    width: 1280px;
    height: 170px;
    background: url("../../../assets/header.png");
  }

  .search-all{
    background-color: #DB383B;

  }
</style>
