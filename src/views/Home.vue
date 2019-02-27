<template>
  <div class="home" :style="styleO">
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
        <el-input placeholder="请输入内容" class="sbottom" v-model="username">
          <template slot="prepend">
            <i class="el-icon-edit"></i>
            <span class="smargin">账号</span>
          </template>
        </el-input>
        <el-input placeholder="请输入内容" v-model="userPassword" type="password">
          <template slot="prepend">
            <i class="el-icon-edit"></i>
            <span class="smargin">密码</span>
          </template>
        </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          @click="handleLogin"
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
  username = "";
  userPassword = "";
  loading = false;
  timer: null | number = null;
  isLogin: boolean = true;

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
  get styleO() {
    return {
      backgroundImage: `url(${this.bgArray[this.bgNumber]})`
    };
  }

  get modalTitle() {
    return this.isLogin ? "欢迎你! 快来注册吧" : "欢迎你! 快来登录吧";
  }

  /* Methods */
  @Emit()
  handleLogin() {
    this.loading = true;
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

  .sbottom
    margin-bottom: 20px;

.dialogWrap >>> .el-dialog__header
  border-bottom: 1px solid #f2f2f2;
</style>