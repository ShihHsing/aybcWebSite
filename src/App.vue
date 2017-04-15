<template>
  <div id="app">
    <div class="topNavigationWrap">
      <topNavigation></topNavigation>
    </div>
    <!-- 路由出口 -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <router-view name="a"></router-view>
    <!-- link -->
    <links></links>
    <!-- foot-view -->
    <footView></footView>
    <transition name="fade">
      <div class="backTop" v-show="scrolled > 400" v-on:click="smoothness(0);"></div>
    </transition>
  </div>
</template>

<script>
import './assets/less/App.less';
import topNavigation from './components/top-navigation.vue';
import links from './components/links.vue';
import footView from './components/foot-view.vue';
export default {
  name: 'app',
  data () {
    return {
      scrolled: ''
    }
  },
  components: { topNavigation, links, footView },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY;
    },
    smoothness (num) {
      var scrolled = this.scrolled
      if (this.scrolled > num) {
        // statement
        var time = setInterval( () => {
          document.documentElement.scrollTop = document.body.scrollTop = scrolled-=50
          if (scrolled <= num) {
            // statement
            window.clearInterval(time);
            document.documentElement.scrollTop = document.body.scrollTop = num
          }
        },1)
      } else {
        var time = setInterval( () => {
          document.documentElement.scrollTop = document.body.scrollTop = scrolled+=50
          if (scrolled >= num) {
            // statement
            window.clearInterval(time);
            document.documentElement.scrollTop = document.body.scrollTop = num
          }
        },1)
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  }
}
</script>
