<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style lang="stylus" global>

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  flex 1;
  display: flex;

* {
  margin: 0;
  padding: 0;
}

body,html {
  width: 100%
  height 100%
  display flex;
  flex 1;
}

#nav
  padding: 30px;

  a
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active
      color: #42b983;
</style>
