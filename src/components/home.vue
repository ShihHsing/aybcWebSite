<template>
	<div id="home">
		<div class="banner">
      <template>
        <div class="block">
          <el-carousel height="100%;">
            <el-carousel-item>
              <router-link to="/aybcRobot/basisFunction">
                <div class="oneBanner home_banner_picture_1">
                  <img class="debugBackground" src="../assets/img/home_banner_picture_1-min.jpg" alt="哎哟不错机器人,为智能门店代言,门店智能新宠,开启智能管理--了解详情">
                </div>
              </router-link>
            </el-carousel-item>
            <el-carousel-item>
              <router-link to="/hardware">
                <div class="oneBanner home_banner_picture_2">
                  <img class="debugBackground" src="../assets/img/home_banner_picture_2-min.png" alt="哎哟不错机器人,为智能门店代言,门店智能新宠,开启智能管理--了解详情">
                </div>
              </router-link>
            </el-carousel-item>
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
        msg: '这是首页'
      }
    }
  }
</script>
