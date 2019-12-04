<template>
    <div class="layout-header">
      <div></div>
      <el-popover
        placement="bottom"
        width="200"
        trigger="click"
        popper-class="layout-header-user-popover-wrap"
      >
        <div class="layout-header-user-popover">
            <el-row>
              用户名: {{ this.user.name || '-' }}
            </el-row>
            <el-row>
              电话: {{ this.user.phone || '-' }}
            </el-row>
            <el-row>
              邮箱: {{ this.user.email || '-' }}
            </el-row>

           <el-button type="danger" @click="handleLogout" round size="medium">退出</el-button>
        </div>
        <el-avatar slot="reference" shape="square" :size="50" fit="fill" :src="avatar" class="layout-header-avatar"></el-avatar>
      </el-popover>
    </div>

</template>
<script lang='ts'>
  import { Component, Vue, Emit } from 'vue-property-decorator'
  const defaultAvatar = require('../../assets/images/avatar.jpeg')

  @Component({
    components: {}
  })
  export default class Header extends Vue {
    /* Data */
    name = 'Header'

    user = {
      name: '',
      avatar: '',
      email: '',
      phone: ''
    }

    /* LifeCircle */
    mounted() {
      this.getUserInfo()
    }

    /* Computed */
    get style() {
      return {}
    }

    get avatar() {
      return this.user.avatar ? this.user.avatar : defaultAvatar
    }

    /* Methods */
    @Emit()
    handleLogin(name: string) {

    }

    @Emit()
    getUserInfo() {
     this.$axios({
        method: 'get',
        url: '/api/user/profile'
      })
       .then(res => {
         this.user = res.data
       })
       .catch(err => {
         console.warn('Error: ', err)
        })

    }

    @Emit()
    handleLogout() {
      this.$axios({
        url: '/api/user/logout',
        method: 'post'
      })
       .then(res => {
         this.$notify({
          type: 'success',
          title: '提示',
          message: '登出成功',
          duration: 2 * 1000

         })
         this.$router.push({
           name: 'Login'
         })
       })
       .catch((err:any) => {
         console.warn('Error: ', err)
      })
    }
  }
</script>
<style scoped lang='stylus'>

.layout-header {
  flex:1;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .layout-header-avatar {
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>

<style lang='stylus' global>

.layout-header-user-popover-wrap {
  .el-row {
    padding: 10px;
    width: 100%;
  }
  .layout-header-user-popover {
    flex-direction: column;
    display: flex;
    align-items: center;
  }
}
</style>
