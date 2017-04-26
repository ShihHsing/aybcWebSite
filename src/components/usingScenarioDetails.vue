<template>
  <div id="usingScenarioDetails">
    <ul class="usingScenarioDetailsImg">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <transition name="fade" mode="out-in">
      <ul class="floorNav" v-show="scrolled > 400">
        <li v-on:click="smoothness(650)"></li>
        <li v-on:click="smoothness(1400)"></li>
        <li v-on:click="smoothness(2200)"></li>
        <li v-on:click="smoothness(3000)"></li>
      </ul>
    </transition>
  </div>
</template>

<script>
  import '../assets/less/usingScenarioDetails.less'
  export default{
    name: 'usingScenarioDetails',
    data () {
      return {
        scrolled: '',
        width: ''
      }
    },
    methods: {
      handleScroll () {
        this.scrolled = window.scrollY
        this.width = window.screen.width
      },
      smoothness (num) {
        var scrolled = this.scrolled
        var time = null
        if (this.scrolled > num) {
          time = setInterval(() => {
            document.documentElement.scrollTop = document.body.scrollTop = scrolled -= 50
            if (scrolled <= num) {
              window.clearInterval(time)
              document.documentElement.scrollTop = document.body.scrollTop = num
            }
          }, 1)
        } else {
          time = setInterval(() => {
            document.documentElement.scrollTop = document.body.scrollTop = scrolled += 50
            if (scrolled >= num) {
              window.clearInterval(time)
              document.documentElement.scrollTop = document.body.scrollTop = num
            }
          }, 1)
        }
      },
      anchor (num) {
        console.log(this.$route.query.id)
        switch (this.$route.query.id) {
          case 'clothing_store':
            this.smoothness(650 / num)
            break
          case 'shoe_store':
            this.smoothness(1400 / num)
            break
          case 'luggage_shop':
            this.smoothness(2200 / num)
            break
          case 'lingerie_store':
            this.smoothness(3000 / num)
            break
          default:
            this.smoothness(0)
            break
        }
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
      setTimeout(() => {
        console.log('开始')
        if (this.width < 767) {
          console.log(2)
          this.anchor(3.5)
        } else if (this.width < 993) {
          console.log(3)
          this.anchor(1.9)
        } else {
          this.anchor(1)
        }
      }, 800)
    }
  }
</script>
