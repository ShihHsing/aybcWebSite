<template>
	<div id="home" v-bind:style="{ height: ((winWidth / originalScale) > winHeight ? winHeight : (winWidth / originalScale)) + 'px' }">
		<div class="banner">
      <template>
        <div class="block">
          <el-carousel height="100%;" :autoplay="false">

            <!-- 第一页 -->
            <el-carousel-item>
              <router-link to="/aybcRobot/basisFunction">
                <div class="oneBanner home_banner_picture_1">
                  <!-- 机器人 -->
                  <img 
                    src="../assets/img/1_0.png"
                    class="one"
                    v-bind:style="{ width: 463 * scale + 'px', top: 370 * scale + 'px' }">
                  <img 
                    src="../assets/img/1_9.png"
                    v-bind:style="{ width: 451 * scale + 'px', top: 700 * scale + 'px', left: 320 * scale + 'px' }">
                  <img 
                    src="../assets/img/1_4.png"
                    v-bind:style="{ width: 405 * scale + 'px', top: 480 * scale + 'px', left: 400 * scale + 'px' }">
                  <img 
                    src="../assets/img/1_1.png"
                    v-bind:style="{ width: 309 * scale + 'px', top: 260 * scale + 'px', left: 530 * scale + 'px' }">
                  <img 
                    src="../assets/img/1_7.png"
                    v-bind:style="{ width: 234 * scale + 'px', top: 160 * scale + 'px', left: 750 * scale + 'px' }">
                  <img 
                    src="../assets/img/1_2.png"
                    v-bind:style="{ width: 244 * scale + 'px', top: 170 * scale + 'px', right: 650 * scale + 'px' }">
                  <img 
                    src="../assets/img/1_5.png"
                    v-bind:style="{ width: 417 * scale + 'px', top: 260 * scale + 'px', right: 500 * scale + 'px' }">
                  <img 
                    src="../assets/img/1_3.png"
                    v-bind:style="{ width: 416 * scale + 'px', top: 480 * scale + 'px', right: 380 * scale + 'px' }">
                  <img 
                    src="../assets/img/1_6.png"
                    v-bind:style="{ width: 466 * scale + 'px', top: 700 * scale + 'px', right: 320 * scale + 'px' }">
                </div>
              </router-link>
            </el-carousel-item>
            <!--  -->

            <!-- 第二页 -->
            <el-carousel-item>
              <router-link to="/hardware">
                <div class="oneBanner home_banner_picture_2">
                  <img 
                    src="../assets/img/2_1.png"
                    style="margin: auto" 
                    v-bind:style="{ width: 1067 * scale + 'px', top: 135 * scale + 'px', left: 0, right: 0 }">
                  <img 
                    src="../assets/img/2_2.png"
                    style="margin: auto" 
                    v-bind:style="{ width: 1273 * scale + 'px', top: 230 * scale + 'px', left: 0, right: 0 }">
                  <img 
                    src="../assets/img/2_3.png"
                    style="margin: auto" 
                    v-bind:style="{ width: 976 * scale + 'px', top: 400 * scale + 'px', left: 0, right: 0 }">
                </div>
              </router-link>
            </el-carousel-item>
            <!--  -->

            <!-- 第三页 -->
            <el-carousel-item>
              <router-link to="/aybcRobot/basisFunction">
                <div class="oneBanner home_banner_picture_3">
                  <img 
                    src="../assets/img/3_6.png"
                    style="margin: auto"
                    v-bind:style="{ width: 1337 * scale + 'px', top: 140 * scale + 'px', left: 0, right: 0 }">
                  <img 
                    src="../assets/img/3_3.png"
                    style="margin: auto"
                    v-bind:style="{ width: 424 * scale + 'px', top: 550 * scale + 'px', left: 0, right: 0 }">
                  <img 
                    src="../assets/img/3_4.png"
                    v-bind:style="{ width: 455 * scale + 'px', top: 650 * scale + 'px', left: 310 * scale + 'px' }">
                  <img 
                    src="../assets/img/3_5.png"
                    v-bind:style="{ width: 496 * scale + 'px', top: 280 * scale + 'px', left: 380 * scale + 'px' }">
                  <img 
                    src="../assets/img/3_1.png"
                    v-bind:style="{ width: 408 * scale + 'px', top: 280 * scale + 'px', right: 420 * scale + 'px' }">
                  <img 
                    src="../assets/img/3_2.png"
                    v-bind:style="{ width: 434 * scale + 'px', top: 650 * scale + 'px', right: 330 * scale + 'px' }">
                </div>
              </router-link>
            </el-carousel-item>
            <!--  -->

            <!-- 第四页 -->
            <el-carousel-item>
              <router-link to="/aybcRobot/basisFunction">
                <div class="oneBanner home_banner_picture_4">
                  <img 
                    src="../assets/img/4_2.png"
                    style="margin: auto"
                    v-bind:style="{ width: 1920 * scale + 'px', top: 0, left: 0, right: 0 }">
                  <img 
                    src="../assets/img/4_1.png"
                    style="margin: auto"
                    v-bind:style="{ width: 784 * scale + 'px', top: 275 * scale + 'px', left: 0, right: 0 }">
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
        oneStyle: {
          width: '',
          height: ''
        }
      }
    },
    computed: {
      scale () {
        return this.winWidth / 1920
      }
    },
    created () {
      console.log(this.initScale())
    },
    methods: {
      initScale () {
        const winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

        const winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

        const winScale = winWidth / winHeight

        const originalScale = 1920 / 1080

        return winScale / originalScale
      }
    }
  }
</script>
