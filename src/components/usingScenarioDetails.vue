<template>
  <div id="usingScenarioDetails">
    <ul class="usingScenarioDetailsImg">
      <li id="clothing_store"></li>
      <li id="shoe_store"></li>
      <li id="luggage_shop"></li>
      <li id="lingerie_store"></li>
    </ul>
    <transition name="fade" mode="out-in">
      <ul class="floorNav">
        <li @click="jump('clothing_store')"></li>
        <li @click="jump('shoe_store')"></li>
        <li @click="jump('luggage_shop')"></li>
        <li @click="jump('lingerie_store')"></li>
      </ul>
    </transition>
  </div>
</template>

<script>
  import '../assets/less/usingScenarioDetails.less'
  export default{
    name: 'usingScenarioDetails',
    data () {
      return {}
    },
    methods: {
      jump (selector) {
        const jump = document.getElementById(selector)
        const total = jump.offsetTop
        let distance = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
         // 平滑滚动，时长500ms，每10ms一跳，共50跳
        let step = total / 50
        if (total > distance) {
          smoothDown()
        } else {
          const newTotal = distance - total
          step = newTotal / 50
          smoothUp()
        }
        function smoothDown () {
          if (distance < total) {
            distance += step
            document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            window.pageYOffset = distance
            setTimeout(smoothDown, 10)
          } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
            window.pageYOffset = total
          }
        }
        function smoothUp () {
          if (distance > total) {
            distance -= step
            document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            window.pageYOffset = distance
            setTimeout(smoothUp, 10)
          } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
            window.pageYOffset = total
          }
        }
      },
      init () {
        console.log(this.$route.query.id)
        switch (this.$route.query.id) {
          case 'clothing_store':
            this.jump('clothing_store')
            break
          case 'shoe_store':
            this.jump('shoe_store')
            break
          case 'luggage_shop':
            this.jump('luggage_shop')
            break
          case 'lingerie_store':
            this.jump('lingerie_store')
            break
          default:
            this.jump('clothing_store')
            break
        }
      }
    },
    created: function () {
      setTimeout(() => {
        this.init()
      }, 800)
    }
  }
</script>
