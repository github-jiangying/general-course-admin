<template>
  <div>
    <div class="main-top">
      <div class="course-intro">
        <div style="padding: 20px 0px 0px 18px;">
          <span class="title">课程简介</span>
          <span class="title-english">Introduce</span>
        </div>
        <el-divider></el-divider>
        <p class="course-intro-text">
          数据结构是软件工程专业的基石。数据结构是计算机存储、组织数据的存储方式。数据结构是指相互
          之间存在一种或多种特定关系的数据元素的集合。通常情况下，精心选择的数据结构可以带来更高的
          运行或者存储效率。数据结构往往同高效的的检索算法和索引技术有关。Sartaj Sahni在他的《数据结构、算法与应用》
          一书中称：“数据结构是数据对象，以及存在于该对象的实例和组成实例的数据元素之间的各种联系。这些联系可以通过定
          义相关的函数来绘出。"他将数据对象（data object)定义为“一个数据对象是...
        </p>
      </div>


      <div class="course-manager">
        <div style="padding: 20px 0px 0px 18px;">
          <span class="title">课程负责人</span>
          <span class="title-english">Principal</span>
        </div>
        <el-divider></el-divider>
        <p class="course-intro-text">
          马化腾（1971年10月29日——）男，广东潮阳人，腾讯公司执行董事、董事会主席兼本公司首席执行官（CEO），全面负责本集团的策略规划、定位和管理。
          是主要创办人之一，自1999年起受雇于本集团。出任现职前， 在中国电信服务和产品供应商深圳润迅通讯发展有限公司主管互联网传呼系统的研究开发工作。
          2009年12月出版的英国《星期日泰晤士报》发布“未来十年世界最家喻户晓十大中国人”榜单，其中包括腾讯公司CEO马化腾。
        </p>
      </div>
    </div>
    <div class="main-center">
      <div class="course-dynamics">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span class="title">课程动态</span>
            <span class="title-english">Dynamics State</span>
            <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
      <div class="teaching-resource">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span class="title">课程动态</span>
            <span class="title-english">Dynamics State</span>
            <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
          </div>
          <!--<div v-for="o in 4" :key="o" class="text item">-->
            <!--{{'列表内容 ' + o }}-->
          <!--</div>-->
          <div>
            <img src="../../../assets/courseware.png" width="151px" alt="图片未加载">
            <img src="../../../assets/teaching-video.png" width="152px" alt="图片未加载">
          </div>
        </el-card>
      </div>
    </div>
    <div class="main-bottom">
      <div style="padding: 20px 0px 0px 18px;">
        <span class="title">课程组成员</span>
        <span class="title-english">Members</span>
      </div>
      <el-divider></el-divider>
      <div class="members-content">
        <el-carousel :interval="10000" height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <!--<h3 class="small">{{ item }}</h3>-->
            <img src="../../../assets/member1.png" width="145px"alt="图片未加载">
            <img v-for="o in 4" width="142px" src="../../../assets/noimage.png" alt="图片未加载">
            <img src="../../../assets/memeber2.png" width="145px" alt="他图片未加载">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home"
  }
</script>

<style >
  .main-top {
    height: 240px;
    display: flex;
  }

  .course-intro {
    width: 500px;
    flex-direction: column;
  }

  .title {
    font-size: 15px;
  }

  .title-english {
    font-size: 12px;
    color: #a6a2a2;
  }

  .course-intro-text {
    text-indent: 2em;
    font-size: 12px;
  }

  .course-manager {
    width: 350px;
    flex-direction: column;
    margin-left: 18px;
  }

  .main-center {
    height: 300px;
  }
  .course-dynamics{
    width: 482px;
    display: inline-block;
  }
  .teaching-resource{
    width: 350px;
    display: inline-block;
    margin-left: 30px;
  }

  .main-bottom {
    height: 300px;
  }

  .el-divider--horizontal {
    display: block;
    height: 1px;
    width: 100%;
    margin: 14px 0;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {

    border: 1px solid #FADFDF;
    border-radius: 8px;
  }

  .el-card__header {
    padding: 18px 20px;
    border-bottom: 1px solid #EBEEF5;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: linear-gradient(#FDD4c4, #ffffff);
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #ffffff;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #ffffff;
  }
</style>
