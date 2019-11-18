<template>
  <div class="home" :style="style">
  </div>
</template>

<script>
  export default {
    name: 'Home',

    get style() {
      return {
        backgroundImage: `url(${require("@/assets/images/home/0.jpg")})`
      };
    }
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
