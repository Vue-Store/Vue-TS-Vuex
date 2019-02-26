<template>
  <div class="index" :style="styleO">
    <div class="logo"></div>
    <el-button type="primary" class="start" @click="showStart">Start</el-button>
    <el-dialog
      title="提示"
      :visible.sync="showStartModal"
      width="30%"
      :before-close="handleClose"
      :append-to-body="true"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showStartModal = false">取 消</el-button>
        <el-button type="primary" @click="showStartModal = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
const bg0 = require("@/assets/images/home/0.jpg");
const bg1 = require("@/assets/images/home/1.jpg");
const bg2 = require("@/assets/images/home/2.jpg");

const bgArray = [bg0, bg1, bg2];

export default {
  components: {},
  data() {
    return {
      bgNumber: 0,
      bgArray,
      showStartModal: false
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

  methods: {
    handleClose() {},
    showStart() {
      this.showStartModal = true;
    }
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
  display: flex;
  justify-content: space-between;

.logo
  background-image: url('../../assets/icon/icon2.png');
  width: 100px;
  height: 100px;
  background-size: 100% 100%;
  margin: 20px;

.start
  margin: 30px;
  height: 40px;
</style>