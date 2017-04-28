<template>
  <div id="app">
    <div class="topNavigationWrap">
      <topNavigation></topNavigation>
    </div>
    <!-- 路由出口 -->
    <transition name="fade" mode="out-in">
      <router-view class="body"></router-view>
    </transition>
    <router-view name="a"></router-view>
    <!-- link -->
    <links></links>
    <!-- foot-view -->
    <footView></footView>
    <transition name="fade" mode="out-in">
      <ul class="contact" v-if="contact">
        <li>
          <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2042234080&site=qq&menu=yes"></a>
        </li>
        <li @click="OfficialAccounts = true"></li>
        <li @click="wechatService = true"></li>
        <li v-on:click="smoothness(0)"></li>
      </ul>
    </transition>
    <el-dialog title="微信公众号" v-model="OfficialAccounts" size="tiny">
      <img style="width: 100%;" src="./assets/img/OfficialAccounts-min.jpg">
    </el-dialog>
    <el-dialog title="微信客服" v-model="wechatService" size="tiny">
      <img style="width: 100%;" src="./assets/img/wechatService-min.jpg">
    </el-dialog>
  </div>
</template>

<script>
import './assets/less/App.less'
import './assets/less/sx_style.less'
import topNavigation from './components/top-navigation.vue'
import links from './components/links.vue'
import footView from './components/foot-view.vue'
export default {
  name: 'app',
  data () {
    return {
      scrolled: '',
      OfficialAccounts: false,
      wechatService: false
    }
  },
  components: { topNavigation, links, footView },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY
    },
    smoothness (num) {
      var scrolled = this.scrolled
      var time = null
      if (this.scrolled > num) {
        // statement
        time = setInterval(() => {
          document.documentElement.scrollTop = document.body.scrollTop = scrolled -= 50
          if (scrolled <= num) {
            // statement
            window.clearInterval(time)
            document.documentElement.scrollTop = document.body.scrollTop = num
          }
        }, 1)
      } else {
        time = setInterval(() => {
          document.documentElement.scrollTop = document.body.scrollTop = scrolled += 50
          if (scrolled >= num) {
            // statement
            window.clearInterval(time)
            document.documentElement.scrollTop = document.body.scrollTop = num
          }
        }, 1)
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  computed: {
    contact () {
      if (this.$route.path === '/aybcRobot/basisFunction/basisFunctionDetails' || this.$route.path === '/aybcRobot/usingScenario/usingScenarioDetails') {
        return false
      } else {
        return true
      }
    }
  }
}
</script>
