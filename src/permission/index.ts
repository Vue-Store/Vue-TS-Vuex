import router from '@/routes/index'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false, minimum: 0.8 })

// Permission Verify
router.beforeEach((to, from, next) => {

  if (to.path === from.path) {
    next(false)
    return
  }

  NProgress.start()
  next()

  NProgress.done()
})

router.afterEach(() => {
  NProgress.done()
})
