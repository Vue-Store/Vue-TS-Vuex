<template>
  <el-container>
    <el-aside width="200px" class="app-aside">Aside</el-aside>
    <el-container>
      <el-header class="app-header">
        <Header/>
      </el-header>
      <el-main class="app-main">
        <Main/>
      </el-main>
      <el-footer>
        <Footer class="app-header"/>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import Main from './Main.vue'
  import Header from './Header.vue'
  import Footer from './Footer.vue'

  @Component({
    components: {
      Main,
      Header,
      Footer
    }
  })
  export default class extends Vue {}
</script>

<style scoped lang="scss">

.app-main,
.app-header,
.app-aside,
.app-footer{
  display: flex;
}
</style>
