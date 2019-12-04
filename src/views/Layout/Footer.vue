
<template>
  <div>
    footer22
  </div>
</template>
<script lang='ts'>
  // https://github.com/kaorun343/vue-property-decorator
  import { Component, Vue, Emit } from 'vue-property-decorator'
  @Component({
    components: {}
  })
  export default class Home extends Vue {
    /* Data */
    name = ''

    /* LifeCircle */
    mounted() {

    }
    /* Computed */
    get style() {
      return {}
    }
    /* Methods */
    @Emit()
    handleLogin(name: string) {

    }
  }
</script>
<style scoped lang='stylus'>

</style>
