import router from '@/routes/index'
import NProgress from 'nprogress'

import Cookies from 'js-cookie'

NProgress.configure({ showSpinner: false, minimum: 0.8 })

// Permission Verify
router.beforeEach((to, from, next) => {
  NProgress.start()

  const user = Cookies.get('user_id')
  // TODO: FIX '/' TO '/'

  if (user) {
    if (to.path === '/login') {
      next({path: '/index'})
    } else {
      next()
    }
  } else {
    // Notice: 无限循环
    if(to.name === 'Login') {
      next()
      return
    }

    next({path: '/login'})
  }

})

router.afterEach(() => {
  NProgress.done()
})
