// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// import HomeVideo from '.././components/homeVideo.vue'

const routes = [
  {
    path: '/home',
    component: resolve => require(['../components/home.vue'],
      resolve)
  },
  {
    path: '/serviceSupport', // 服务与支持
    component: resolve => require(['../components/ServiceSupport.vue'],
      resolve),
    children: [
      {
        path: '/serviceSupport/purchaseNotes', // 购买须知
        component: resolve => require(['../components/purchaseNotes.vue'],
      resolve)
      },
      {
        path: '/serviceSupport/warranty', // 保修承诺
        component: resolve => require(['../components/warranty.vue'],
      resolve)
      },
      {
        path: '/serviceSupport/commonProblems', // 常见问题与解决方案
        component: resolve => require(['../components/commonProblems.vue'],
      resolve)
      }
    ]
  },
  {
    path: '/aboutUs', // 关于我们
    component: resolve => require(['../components/aboutUs.vue'],
      resolve),
    children: [
      {
        path: '/aboutUs/companyProfile', // 公司简介
        component: resolve => require(['../components/companyProfile.vue'],
      resolve)
      },
      {
        path: '/aboutUs/newsTrends', // 公司动态
        component: resolve => require(['../components/newsTrends.vue'],
      resolve)
      },
      {
        path: '/aboutUs/newsIndustry', // 行业动态
        component: resolve => require(['../components/newsIndustry.vue'],
      resolve)
      },
      {
        path: '/aboutUs/joinUs', // 加入我们
        component: resolve => require(['../components/joinUs.vue'],
      resolve)
      },
      {
        path: '/aboutUs/contactUs', // 联系我们
        component: resolve => require(['../components/contactUs.vue'],
      resolve)
      },
      {
        path: '/aboutUs/patentCertificate', // 专利证书
        component: resolve => require(['../components/patentCertificate.vue'],
      resolve)
      }
    ]
  },
  {
    path: '/aybcRobot', // aybc机器人
    component: resolve => require(['../components/aybcRobot.vue'],
      resolve),
    children: [
      {
        path: '/aybcRobot/basisFunction', // 基础功能
        component: resolve => require(['../components/basisFunction.vue'],
      resolve)
      },
      {
        path: '/aybcRobot/basisFunction/basisFunctionDetails', // 基础功能详情
        component: resolve => require(['../components/basisFunctionDetails.vue'],
      resolve)
      },
      {
        path: '/aybcRobot/usingScenario', // 场景运用
        component: resolve => require(['../components/usingScenario.vue'],
      resolve)
      },
      {
        path: '/aybcRobot/usingScenario/usingScenarioDetails', // 场景运用_详情
        component: resolve => require(['../components/usingScenarioDetails.vue'],
      resolve)
      },
      {
        path: '/aybcRobot/parameter', // 参数
        component: resolve => require(['../components/parameter.vue'],
      resolve)
      },
      // {
      //   path: '/aybcRobot/installVideo', // 安装视频
      //   component: resolve => require(['../components/installVideo.vue'],
      // resolve),
      // },
      // {
      //   path: '/aybcRobot/publicityVideo', // 宣传视频
      //   component: resolve => require(['../components/publicityVideo.vue'],
      // resolve),
      // },
      {
        path: '/aybcRobot/diagnostic', // 心电心率
        component: resolve => require(['../components/diagnostic.vue'],
      resolve)
      },
      {
        path: '/aybcRobot/order', // 预约招商
        component: resolve => require(['../components/order.vue'],
      resolve)
      }
    ]
  },
  {
    path: '/hardware', // 硬件
    component: resolve => require(['../components/hardware.vue'],
      resolve)
  },
  {
    path: '*', // 首页
    redirect: '/home'
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

router.afterEach(route => {
  // ...
  // 返回页面头部!
  document.documentElement.scrollTop = document.body.scrollTop = 0
})
// 4. 开放输出。
export default router
// 现在，应用已经启动了！
