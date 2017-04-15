<template>
  <div id="usingScenarioDetails">
    <ul class="usingScenarioDetailsImg">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <transition name="fade">
      <ul class="floorNav" v-show="scrolled > 400">
        <li v-on:click="smoothness(850);"></li>
        <li v-on:click="smoothness(1600);"></li>
        <li v-on:click="smoothness(2400);"></li>
        <li v-on:click="smoothness(3200);"></li>
      </ul>
    </transition>
  </div>
</template>

<script>
  import '../assets/less/usingScenarioDetails.less';
  export default{
    name: 'usingScenarioDetails',
    data () {
      return {
        scrolled: '',
        width: '',
        clothing_store_default: false
      }
    },
    methods: {
      handleScroll () {
        this.scrolled = window.scrollY;
        this.width = window.screen.width;
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
      },

      anchor (num) {
        console.log(this.$route.query.id);
        switch (this.$route.query.id) {
          case 'clothing_store':
            // statements_1
            this.smoothness(850/num);
            break;
          case 'shoe_store':
            this.smoothness(1600/num);
            break;
          case 'luggage_shop':
            this.smoothness(2400/num);
            break;
          case 'lingerie_store':
            this.smoothness(3200/num);
            break;
          default:
            // statements_def
            this.smoothness(0);
            break;
        }
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
      setTimeout( () => {
        console.log('开始')
        if (this.width < 767) {
          // statement
          console.log(2)
          this.anchor(3.5);
        } else if (this.width < 993) {
          // statement
          console.log(3)
          this.anchor(1.9)
        } else{
          this.anchor(1)
        }
      },800);
    }
  }
</script>