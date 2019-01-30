<template>
  <div class="index" :style="styleO">
    <Login class="login" v-show="false"/>
    <div class="logo"></div>
  </div>
</template>

<script>
const bg0 = require("@/assets/images/home/0.jpg");
const bg1 = require("@/assets/images/home/1.jpg");
const bg2 = require("@/assets/images/home/2.jpg");

import { Login } from "@/components";

const bgArray = [bg0, bg1, bg2];

export default {
  components: {
    Login
  },
  data() {
    return {
      bgNumber: 0,
      bgArray
    };
  },
  computed: {
    styleO() {
      return {
        backgroundImage: `url(${this.bgArray[this.bgNumber]})`
      };
    }
  },
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
  },

  destroyed() {
    this.timer && clearInterval(this.timer);
  }
};
</script>

<style scoped lang="stylus">
.index
  flex: 1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transform: scaleX(1);
  transition: background-image 0.8s ease-in-out;

.login
  top: 200px;
  left: 200px;

.logo
  background-image: url('../../assets/icon/icon2.png');
  width: 100px;
  height: 100px;
  background-size: 100% 100%;
  margin: 20px;
</style>