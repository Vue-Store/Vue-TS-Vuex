<template>
  <div class="home">
  这个是首页了
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {

  name = "Home"
}
</script>

<style lang="scss" scoped>

.home {
  flex: 1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transform: scaleX(1);
  transition: background-image 0.8s ease-in-out;
  display: flex;
  justify-content: space-between;
}
</style>
