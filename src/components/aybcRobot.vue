<template>
  <div id="aybcRobot">
    <div class="topBackground" v-if="aybcRobotTop"></div>
    <div class="aybcRobotBody">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import '../assets/less/aybcRobot.less'
  export default{
    name: 'aybcRobot',
    data () {
      return {}
    },
    computed: {
      aybcRobotTop () {
        if (this.$route.path === '/aybcRobot/basisFunction/basisFunctionDetails' || this.$route.path === '/aybcRobot/usingScenario/usingScenarioDetails') {
          return false
        } else {
          return true
        }
      }
    }
  }
</script>
