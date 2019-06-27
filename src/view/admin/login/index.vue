<template>
  <div class="login">
    <div class="login-container">
      <div class="login-bg">
        <div class="login-title">
          <p>Welcome</p>
          <p>通用课程后台管理系统</p>
        </div>
      </div>
      <div class="login-content">
        <el-form :model="userData" status-icon :rules="rules" ref="userData" label-width="0px" class="demo-ruleForm">
          <el-form-item class="login-input" label="" prop="userName">
            <el-input  type="text" v-model="userData.userName" autocomplete="off" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item class="login-input" label="" prop="password">
            <el-input type="password" v-model="userData.password" autocomplete="off" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item class="login-input login-input1 input-code" label="" prop="code">
            <el-input v-model="userData.code" autocomplete="off" placeholder="请输入验证码"></el-input>
            <div class="code" @click="refreshCode">
              <verification-code :identifyCode="identifyCode" :contentHeight="contentHeight"></verification-code>
            </div>
          </el-form-item>
          <!--<el-form-item>-->
            <!--<el-checkbox v-model="checked">记住密码</el-checkbox>-->
          <!--</el-form-item>-->

          <el-form-item class="button-submit">
            <el-button  type="primary" @click="submitUser('userData')">提交</el-button>
            <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
          </el-form-item>
        </el-form>

      </div>

    </div>
  </div>


</template>

<script>
  import verificationCode from '../../../components/pages/verificationCode'
  import {LoginApi} from './login-api'
  export default {
    name: "index.vue",
    data() {
      // var validateCode = (rule, value, callback) => {
      //   if (value != this.identifyCode) {
      //     callback(new Error('验证码有误'));
      //   }
      // };
      return {
        identifyCodes: "1234567890",
        identifyCode: "",
        contentHeight: 40,
        userData: {
          userName: '',
          password: '',
          code: ''
        },
        checked: false,
        rules: {
          userName: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
          code: [
            // { validator: validateCode, trigger: 'submit' },
            { required: true, message: '请输入验证码', trigger: 'blur' },
            { min: 4, max: 4, message: '长度是4个字符', trigger: 'blur' }
          ],
        }
      };
    },
    components: {
      verificationCode
    },
    mounted() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
      this.reset('userData');


      LoginApi.test1().then((res) =>{
        console.log("信息")
        console.log(res)
      })

    },
    methods: {
      randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      },
      refreshCode() {
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
      },
      makeCode(o, l) {
        for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[
            this.randomNum(0, this.identifyCodes.length)
            ];
        }
        console.log(this.identifyCode);
      },
      // 登录
      submitUser(userData){
        if(this.userData.code !== this.identifyCode) {
          this.$message.error('验证码错误')
        }else {
          this.$refs[userData].validate((valid) => {
            if (valid) {
              // this.$message("jjj");
              console.log('hello')
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        }

      },
      // 重置
      reset(userData) {
        this.$refs[userData].resetFields();
      }
    }
  }
</script>


<style scoped>
  .login {
    width: 100%;
    height: 100%;
    background: #40aaf4;
  }

  .login-container {
    width: 50%;
    height: 350px;
    position: absolute;
    top: 20%;
    left: 25%;
  }

  .login-bg {
    width: 40%;
    height: 100%;
    float: left;
    position: relative;
    background: linear-gradient(to bottom right, #BFE0F9, #5AA0E5);
  }

  .login-title {
    position: absolute;
    top: 35%;
    left: 25%;
    color: #ffffff;
  }

  .login-content {
    width: 46%;
     height: 100%;
    background: #FFFFFF;
    float: right;
    padding: 0 7%;
    /*margin: 10% 0;*/

  }
  .demo-ruleForm{
    padding: 49px 0px;
  }

  .code {
    /*margin: 400px auto;*/
    width: 114px;
    height: 40px;
    border: 1px solid red;
    float: right;
  }
  .login-input >>> .el-input__inner{
    border-color: #b9bedc;
    border-top: none;
    border-left: none;
    border-right: none;
    padding: 0 10px;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    width: 290px;
  }

  .login-input1 >>> .el-input__inner{
    width: 150px;
  }

  .input-code >>> .el-input{
    width: 150px;
  }
  .button-submit >>> .el-button{
    width: 291px;
    border-radius: 20px;
    height: 35px;
    line-height: 11px;
  }

  /*.login-content .demo-ruleForm .el-form-item .el-form-item__content .el-input__inner {*/
    /*border-color: #b9bedc;*/
    /*border-top: none;*/
    /*border-left: none;*/
    /*border-right: none;*/
    /*padding: 0 10px;*/
  /*}*/
</style>
