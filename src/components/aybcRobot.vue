<template>
  <div id="aybcRobot">
    <div class="topBackground"></div>
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
    }
  }
</script>
