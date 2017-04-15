<template>
	<div id="home">
		<div class="banner">
      <template>
        <div class="block">
          <el-carousel height="100%;">
            <el-carousel-item>
              
              <div class="oneBanner">
                <img class="debugBackground" src=".././assets/img/logo.png" alt="哎哟不错机器人,为智能门店代言,门店智能新宠,开启智能管理--了解详情">
              </div>


            </el-carousel-item>
            <!-- <el-carousel-item>
            </el-carousel-item> -->
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
    },
  }
</script>
