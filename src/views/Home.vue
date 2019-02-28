<template>
  <div class="home" :style="style">
    <div class="logo"></div>
    <div class="button-wrap">
      <el-button type="primary" class="start" @click="handleToLogin">登录</el-button>
      <el-button type="primary" class="start" @click="handleToRegister">注册</el-button>
    </div>
    <el-dialog
      :title="modalTitle"
      :visible.sync="showStartModal"
      width="400px"
      :append-to-body="true"
      :center="true"
      class="dialogWrap"
      top="25vh"
      @close="handleClose"
    >
      <div class="body">
        <el-form :model="user" :rules="rules" ref="ruleForm">
          <el-form-item prop="userName">
            <el-input placeholder="请输入内容" class="sbottom" v-model="user.userName">
              <template slot="prepend">
                <i class="el-icon-edit"></i>
                <span class="smargin">用户</span>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input placeholder="请输入内容" v-model="user.email">
              <template slot="prepend">
                <i class="el-icon-edit"></i>
                <span class="smargin">邮箱</span>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input placeholder="请输入内容" class="sbottom" v-model="user.password" type="password">
              <template slot="prepend">
                <i class="el-icon-edit"></i>
                <span class="smargin">密码</span>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="confirmPassword">
            <el-input placeholder="请输入内容" v-model="user.confirmPassword" type="password">
              <template slot="prepend">
                <i class="el-icon-edit"></i>
                <span class="smargin">确认</span>
              </template>
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          @click="handleLogin('ruleForm')"
          :style="{width: '100%'}"
          :loading="loading"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts">
const bg0 = require("@/assets/images/home/0.jpg");
const bg1 = require("@/assets/images/home/1.jpg");
const bg2 = require("@/assets/images/home/2.jpg");

const bgArray = [bg0, bg1, bg2];
import { Component, Vue, Emit } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  /* Data */
  bgNumber = 0;
  bgArray = bgArray;
  showStartModal = false;
  user = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  loading = false;
  timer: null | number = null;
  isLogin: boolean = true;

  rules = {
    userName: [
      {
        required: true,
        min: 3,
        max: 20,
        message: "请输入正确的用户名!",
        trigger: "blur"
      }
    ],
    email: [
      {
        required: true,
        min: 3,
        max: 20,
        message: "请输入正确邮箱!",
        trigger: "blur"
      }
    ],
    password: [
      {
        required: true,
        min: 3,
        max: 20,
        message: "请输入正确的密码!",
        trigger: "blur"
      }
    ],
    confirmPassword: [
      {
        required: true,
        min: 3,
        max: 20,
        message: "请确认密码!",
        trigger: "blur"
      }
    ]
  };

  /* LifeCircle */
  mounted() {
    let bgNumber = this.bgNumber;
    this.timer = setInterval(() => {
      if (this.bgNumber === 2) {
        bgNumber = 0;
      } else {
        bgNumber++;
      }
      this.bgNumber = bgNumber;
    }, 3000);
  }

  destroyed() {
    this.timer && clearInterval(this.timer);
  }

  /* Computed */
  get style() {
    return {
      backgroundImage: `url(${this.bgArray[this.bgNumber]})`
    };
  }

  get modalTitle() {
    return this.isLogin ? "欢迎你! 快来注册吧" : "欢迎你! 快来登录吧";
  }

  /* Methods */
  @Emit()
  handleLogin(name: string) {
    (this.$refs[name] as any).validate((valid: boolean) => {
      if (valid) {
        this.loading = true;

        this.$axios
          .post("http://localhost:3000/api/user/signUp", this.user)
          .then(res => {
            this.loading = false;
            this.showStartModal = false;
            this.$notify({
              message: "登录成功!",
              type: "success",
              title: "提示!"
            });
          })
          .catch(err => {
            this.loading = false;
            this.$notify({
              message: "登录失败!",
              type: "error",
              title: "提示!"
            });
            console.info("error: ", err);
          });
      }
    });
  }
  @Emit()
  handleClose() {
    this.loading = false;
    this.showStartModal = false;
  }

  @Emit()
  handleToRegister() {
    this.isLogin = false;
    this.showStartModal = true;
  }

  @Emit()
  handleToLogin() {
    this.isLogin = true;
    this.showStartModal = true;
  }
}
</script>

<style scoped lang="stylus">
.home
  flex: 1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transform: scaleX(1);
  transition: background-image 0.8s ease-in-out;
  display: flex;
  justify-content: space-between;

  .logo
    background-image: url('../assets/icon/icon2.png');
    width: 100px;
    height: 100px;
    background-size: 100% 100%;
    margin: 20px;

  .start
    margin: 15px;
    height: 40px;

.dialogWrap
  .smargin
    margin-left: 10px;

.dialogWrap >>> .el-dialog__header
  border-bottom: 1px solid #f2f2f2;
</style>