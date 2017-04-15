// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
// 首页
import Home from '.././components/home.vue';
import HomeVideo from '.././components/homeVideo.vue';
// 服务与支持
import ServiceSupport from '.././components/ServiceSupport.vue';
// 购买须知
import PurchaseNotes from '.././components/PurchaseNotes.vue';
// 保修承诺
import Warranty from '.././components/warranty.vue';
// 常见问题与解决方案
import CommonProblems from '.././components/commonProblems.vue';
// 关于我们
import AboutUs from '.././components/aboutUs.vue';
// 公司简介
import CompanyProfile from '.././components/companyProfile.vue';
// 新闻动态
import NewsTrends from '.././components/newsTrends.vue';
// 加入我们
import JoinUs from '.././components/joinUs.vue';
// 联系我们
import ContactUs from '.././components/contactUs.vue';
// 专利证书
import PatentCertificate from '.././components/patentCertificate.vue';
// aybc机器人
import AybcRobot from '.././components/aybcRobot.vue';
// 基础功能
import BasisFunction from '.././components/basisFunction.vue';
// 基础功能详情
import BasisFunctionDetails from '.././components/basisFunctionDetails.vue';
// 场景运用
import UsingScenario from '.././components/usingScenario.vue';
// 场景运用_详情
import UsingScenarioDetails from '.././components/usingScenarioDetails.vue';
// 硬件 
import Hardware from '.././components/hardware.vue';
// 参数
import Parameter from '.././components/parameter.vue';
// 安装视频
import InstallVideo from '.././components/installVideo.vue';
// 宣传视频
import PublicityVideo from '.././components/publicityVideo.vue';
// 心电心率
import Diagnostic from '.././components/diagnostic.vue';
// 预约招商
import Order from '.././components/order.vue';
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
//  alias: '/'
const routes = [
  { path: '/home', components: { default: Home, a: HomeVideo }},
  { path: '/serviceSupport', component: ServiceSupport,
    children: [
      { path: '/serviceSupport/purchaseNotes', component: PurchaseNotes },
      { path: '/serviceSupport/warranty', component: Warranty },
      { path: '/serviceSupport/commonProblems', component: CommonProblems }
    ]
  },
  { path: '/aboutUs', component: AboutUs,
    children: [
      { path: '/aboutUs/companyProfile', component: CompanyProfile },
      { path: '/aboutUs/newsTrends', component: NewsTrends },
      { path: '/aboutUs/joinUs', component: JoinUs },
      { path: '/aboutUs/contactUs', component: ContactUs },
      { path: '/aboutUs/patentCertificate', component: PatentCertificate },
    ]
  },
  { path: '/aybcRobot', component: AybcRobot,
    children: [
      { path: '/aybcRobot/basisFunction', component: BasisFunction },
      { path: '/aybcRobot/basisFunction/basisFunctionDetails', component: BasisFunctionDetails },
      { path: '/aybcRobot/usingScenario', component: UsingScenario },
      { path: '/aybcRobot/usingScenario/usingScenarioDetails', component: UsingScenarioDetails },
      { path: '/aybcRobot/parameter', component: Parameter },
      { path: '/aybcRobot/installVideo', component: InstallVideo },
      { path: '/aybcRobot/publicityVideo', component: PublicityVideo },
      { path: '/aybcRobot/diagnostic', component: Diagnostic },
      { path: '/aybcRobot/order', component: Order },
    ]
  },
  { path: '/hardware', component: Hardware},
  { path: '*', redirect: '/home' }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

router.afterEach(route => {
  // ...
  // 返回页面头部!
  document.documentElement.scrollTop = document.body.scrollTop = 0;
})
// 4. 开放输出。
export default router;
// 现在，应用已经启动了！