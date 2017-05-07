<template>
<!-- ((winWidth / originalScale) > winHeight ? winHeight : (winWidth / originalScale)) -->
	<div id="home" v-bind:style="{ height: (winWidth / originalScale) + 'px' }">
		<div class="banner">
      <template>
        <div class="block">
          <el-carousel height="100%;" :autoplay="false" arrow="never" @change="changeCarousel" ref="carousel" trigger="click">

            <!-- 第一页 -->
            <el-carousel-item>
              <router-link to="/aybcRobot/basisFunction">
                <div class="oneBanner home_banner_picture_1">
                  <!-- 机器人 -->
                  <transition
                    name="animated"
                    enter-active-class="animated fadeIn">
                    <img
                      v-if="one.img1"
                      src="../assets/img/1_0.png"
                      class="one"
                      v-bind:style="{ width: 463 * scale + 'px', top: 370 * scale + 'px' }">
                  </transition>
                  <transition
                    name="animated"
                    enter-active-class="animated bounceInLeft">
                    <img
                      v-if="one.img2"
                      src="../assets/img/1_1.png"
                      v-bind:style="{ width: 309 * scale + 'px', top: 280 * scale + 'px', left: 530 * scale + 'px' }">
                  </transition>
                  <transition
                    name="animated"
                    enter-active-class="animated bounceInRight">
                    <img
                      v-if="one.img3"
                      src="../assets/img/1_2.png"
                      v-bind:style="{ width: 244 * scale + 'px', top: 190 * scale + 'px', right: 650 * scale + 'px' }">
                  </transition>
                  <transition
                    name="animated"
                    enter-active-class="animated bounceInRight">
                    <img
                      v-if="one.img4"
                      src="../assets/img/1_3.png"
                      v-bind:style="{ width: 416 * scale + 'px', top: 480 * scale + 'px', right: 380 * scale + 'px' }">
                  </transition>
                  <transition
                    name="animated"
                    enter-active-class="animated bounceInLeft">
                    <img
                      v-if="one.img5"
                      src="../assets/img/1_4.png"
                      v-bind:style="{ width: 405 * scale + 'px', top: 480 * scale + 'px', left: 400 * scale + 'px' }">
                  </transition>
                  <transition
                    name="animated"
                    enter-active-class="animated bounceInRight">
                    <img
                      v-if="one.img6"
                      src="../assets/img/1_5.png"
                      v-bind:style="{ width: 417 * scale + 'px', top: 280 * scale + 'px', right: 500 * scale + 'px' }">
                  </transition>
                  <transition
                    name="animated"
                    enter-active-class="animated bounceInRight">
                    <img
                      v-if="one.img7"
                      src="../assets/img/1_6.png"
                      v-bind:style="{ width: 466 * scale + 'px', top: 700 * scale + 'px', right: 320 * scale + 'px' }">
                  </transition>
                  <transition
                    name="animated"
                    enter-active-class="animated bounceInDown">
                    <img
                      v-if="one.img8"
                      src="../assets/img/1_7.png"
                      v-bind:style="{ width: 234 * scale + 'px', top: 160 * scale + 'px', left: 750 * scale + 'px' }">
                  </transition>
                  <transition
                    name="animated"
                    enter-active-class="animated bounceInLeft">
                    <img
                      v-if="one.img9"
                      src="../assets/img/1_9.png"
                      v-bind:style="{ width: 451 * scale + 'px', top: 700 * scale + 'px', left: 320 * scale + 'px' }">
                  </transition>
                </div>
              </router-link>
            </el-carousel-item>
            <!--  -->

            <!-- 第二页 -->
            <el-carousel-item>
              <router-link to="/hardware">
                <div class="oneBanner home_banner_picture_2">
                  <transition
                    name="animated"
                    enter-active-class="animated bounceIn">
                    <img
                      v-if="two.img1"
                      src="../assets/img/2_1.png"
                      style="margin: auto" 
                      v-bind:style="{ width: 1067 * scale + 'px', top: 135 * scale + 'px', left: 0, right: 0 }">
                  </transition>
                  <transition
                    name="animated"
                    enter-active-class="animated pulse">
                    <img
                      v-if="two.img2"
                      src="../assets/img/2_2.png"
                      style="margin: auto" 
                      v-bind:style="{ width: 1200 * scale + 'px', top: 230 * scale + 'px', left: 0, right: 0 }">
                  </transition>
                  <transition
                    name="animated"
                    enter-active-class="animated fadeIn">
                    <img
                      v-if="two.img3"
                      src="../assets/img/2_3.png"
                      style="margin: auto" 
                      v-bind:style="{ width: 976 * scale + 'px', top: 400 * scale + 'px', left: 0, right: 0 }">
                  </transition>
                </div>
              </router-link>
            </el-carousel-item>
            <!--  -->

            <!-- 第三页 -->
            <el-carousel-item>
              <router-link to="/aybcRobot/usingScenario">
                <div class="oneBanner home_banner_picture_3">
                  <transition
                    name="animated"
                    enter-active-class="animated bounceIn">
                    <img
                      v-if="three.img1"
                      src="../assets/img/3_6.png"
                      style="margin: auto"
                      v-bind:style="{ width: 1337 * scale + 'px', top: 140 * scale + 'px', left: 0, right: 0 }">
                  </transition>
                  <transition
                    name="animated"
                    enter-active-class="animated fadeIn">
                    <img 
                      v-if="three.img2"
                      src="../assets/img/3_3.png"
                      style="margin: auto"
                      v-bind:style="{ width: 424 * scale + 'px', top: 550 * scale + 'px', left: 0, right: 0 }">
                  </transition>
                  <transition
                    name="animated"
                    enter-active-class="animated bounceInLeft">
                    <img 
                      v-if="three.img3"
                      src="../assets/img/3_4.png"
                      v-bind:style="{ width: 455 * scale + 'px', top: 650 * scale + 'px', left: 310 * scale + 'px' }">
                  </transition>
                  <transition
                    name="animated"
                    enter-active-class="animated bounceInLeft">
                    <img
                      v-if="three.img6"
                      src="../assets/img/3_5.png"
                      v-bind:style="{ width: 496 * scale + 'px', top: 280 * scale + 'px', left: 380 * scale + 'px' }">
                  </transition>
                  <transition
                    name="animated"
                    enter-active-class="animated bounceInRight">
                    <img 
                      v-if="three.img4"
                      src="../assets/img/3_1.png"
                      v-bind:style="{ width: 408 * scale + 'px', top: 280 * scale + 'px', right: 420 * scale + 'px' }">
                  </transition>
                  <transition
                    name="animated"
                    enter-active-class="animated bounceInRight">
                    <img 
                      v-if="three.img5"
                      src="../assets/img/3_2.png"
                      v-bind:style="{ width: 434 * scale + 'px', top: 650 * scale + 'px', right: 330 * scale + 'px' }">
                  </transition>
                </div>
              </router-link>
            </el-carousel-item>
            <!--  -->

            <!-- 第四页 -->
            <el-carousel-item>
              <router-link to="/aybcRobot/order">
                <div class="oneBanner home_banner_picture_4">
                  <transition
                    name="animated"
                    enter-active-class="animated fadeIn">
                    <img
                      v-if="four.img1"
                      src="../assets/img/4_2.png"
                      style="margin: auto"
                      v-bind:style="{ width: 1920 * scale + 'px', top: 0, left: 0, right: 0 }">
                  </transition>
                  <transition
                    name="animated"
                    enter-active-class="animated rotateIn bounceIn">
                    <img 
                      v-if="four.img2"
                      src="../assets/img/4_1.png"
                      style="margin: auto"
                      v-bind:style="{ width: 784 * scale + 'px', top: 275 * scale + 'px', left: 0, right: 0 }">
                  </transition>
                </div>
              </router-link>
            </el-carousel-item>
            <!--  -->

          </el-carousel>
        </div>
      </template>
    </div>
	</div>
</template>

<script>
  import '.././assets/less/home.less'
  export default{
    name: 'home',
    data () {
      return {
        msg: '这是首页',
        winWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, // 页面宽度
        winHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, // 页面可用高度
        originalScale: 1920 / 1080, // 原始画布比例
        one: {
          img1: false,
          img2: false,
          img3: false,
          img4: false,
          img5: false,
          img6: false,
          img7: false,
          img8: false,
          img9: false
        },
        two: {
          img1: false,
          img2: false,
          img3: false
        },
        three: {
          img1: false,
          img2: false,
          img3: false,
          img4: false,
          img5: false,
          img6: false
        },
        four: {
          img1: false,
          img2: false
        }
      }
    },
    computed: {
      scale () {
        return this.winWidth / 1920
      }
    },
    methods: {
      oneCarousel () {
        setTimeout(() => {
          this.one.img1 = true
          setTimeout(() => {
            this.one.img2 = true
            setTimeout(() => {
              this.one.img3 = true
              setTimeout(() => {
                this.one.img4 = true
                setTimeout(() => {
                  this.one.img5 = true
                  setTimeout(() => {
                    this.one.img9 = true
                    setTimeout(() => {
                      this.one.img7 = true
                      setTimeout(() => {
                        this.one.img6 = true
                        setTimeout(() => {
                          this.one.img8 = true
                          setTimeout(() => {
                            this.$refs.carousel.next()
                          }, 2300)
                        }, 300)
                      }, 600)
                    }, 300)
                  }, 600)
                }, 300)
              }, 600)
            }, 300)
          }, 300)
        }, 1000)
      },
      twoCarousel () {
        setTimeout(() => {
          this.two.img3 = true
          setTimeout(() => {
            this.two.img2 = true
            setTimeout(() => {
              this.two.img1 = true
              setTimeout(() => {
                this.$refs.carousel.next()
              }, 2800)
            }, 800)
          }, 600)
        }, 600)
      },
      threeCarousel () {
        setTimeout(() => {
          this.three.img2 = true
          setTimeout(() => {
            this.three.img6 = true
            setTimeout(() => {
              this.three.img4 = true
              setTimeout(() => {
                this.three.img5 = true
                setTimeout(() => {
                  this.three.img3 = true
                  setTimeout(() => {
                    this.three.img1 = true
                    setTimeout(() => {
                      this.$refs.carousel.next()
                    }, 3000)
                  }, 1000)
                }, 300)
              }, 300)
            }, 300)
          }, 300)
        }, 600)
      },
      fourCarousel () {
        setTimeout(() => {
          this.four.img1 = true
          setTimeout(() => {
            this.four.img2 = true
            setTimeout(() => {
              this.$refs.carousel.next()
            }, 2600)
          }, 600)
        }, 600)
      },
      changeCarousel (number) {
        switch (number >> 0) {
          case 0:
            this.oneCarousel()
            break
          case 1:
            this.twoCarousel()
            break
          case 2:
            this.threeCarousel()
            break
          case 3:
            this.fourCarousel()
            break
          default:
            this.oneCarousel()
            break
        }
      },
      initScale () {
        const winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

        const winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

        const winScale = winWidth / winHeight

        const originalScale = 1920 / 1080

        return winScale / originalScale
      },
      // --------
      // 进入中
      // --------
      // 进入前 1
      beforeEnter: function (el) {
        // ...
        console.log('beforeEnter')
      },
      // 进入 2
      afterEnter: function (el) {
        // ...
        console.log('afterEnter')
      },
      // 此回调函数是可选项的设置
      // 与 CSS 结合时使用
      // 进入 3
      enter: function (el, done) {
        // ...
        done()
        console.log('enter')
      },
      // 取消进入时执行
      enterCancelled: function (el) {
        // ...
        console.log('enterCancelled')
      },
      // --------
      // 离开时
      // --------
      beforeLeave: function (el) {
        // ...
        console.log('beforeLeave')
      },
      afterLeave: function (el) {
        // ...
        console.log('afterLeave')
      },
      // 此回调函数是可选项的设置
      // 与 CSS 结合时使用
      leave: function (el, done) {
        // ...
        done()
        console.log('leave')
      },
      // leaveCancelled 只用于 v-show 中
      leaveCancelled: function (el) {
        // ...
        console.log('leaveCancelled')
      }
    }
  }
</script>
