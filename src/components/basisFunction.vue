<template>
  <div id="basisFunction">
    <el-row>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" class="img">
        <el-row type="flex" justify="center">
          <router-link :to="{ path: '/aybcRobot/basisFunction/basisFunctionDetails', query: { id: 'voice_interaction' }}">
            <img src="../assets/img/voice_interaction.png" alt="语音互动">
          </router-link>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" class="img">
        <el-row type="flex" justify="center">
          <router-link :to="{ path: '/aybcRobot/basisFunction/basisFunctionDetails', query: { id: 'ecg_heart_rate' }}">
            <img src="../assets/img/ecg_heart_rate.png" alt="心电心率">
          </router-link>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" class="img">
        <el-row type="flex" justify="center">
          <router-link :to="{ path: '/aybcRobot/basisFunction/basisFunctionDetails', query: { id: 'd_fitting' }}">
            <img src="../assets/img/3d_fitting.png" alt="3D试衣">
          </router-link>
        </el-row>
      </el-col>
    <!-- </el-row>
    <el-row> -->
      <el-col :xs="24" :sm="12" :md="12" :lg="8" class="img">
        <el-row type="flex" justify="center">
          <router-link :to="{ path: '/aybcRobot/basisFunction/basisFunctionDetails', query: { id: 'hit_golden_eggs' }}">
            <img src="../assets/img/hit_golden_eggs.png" alt="砸金蛋">
          </router-link>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" class="img">
        <el-row type="flex" justify="center">
          <router-link :to="{ path: '/aybcRobot/basisFunction/basisFunctionDetails', query: { id: 'lucky_big_wheel' }}">
            <img src="../assets/img/lucky_big_whee.png" alt="幸运大转盘">
          </router-link>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" class="img">
        <el-row type="flex" justify="center">
          <router-link :to="{ path: '/aybcRobot/basisFunction/basisFunctionDetails', query: { id: 'preferential' }}">
            <img src="../assets/img/preferential.png" alt="优惠福利">
          </router-link>
        </el-row>
      </el-col>
    <!-- </el-row>
    <el-row> -->
      <el-col :xs="24" :sm="12" :md="12" :lg="8" class="img">
        <el-row type="flex" justify="center">
          <router-link :to="{ path: '/aybcRobot/basisFunction/basisFunctionDetails', query: { id: 'product' }}">
            <img src="../assets/img/product.png" alt="商品平台">
          </router-link>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" class="img">
        <el-row type="flex" justify="center">
          <router-link :to="{ path: '/aybcRobot/basisFunction/basisFunctionDetails', query: { id: 'promotion' }}">
            <img src="../assets/img/promotion.png" alt="推广平台">
          </router-link>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" class="img">
        <el-row type="flex" justify="center">
          <router-link :to="{ path: '/aybcRobot/basisFunction/basisFunctionDetails', query: { id: 'music' }}">
            <img src="../assets/img/music.png" alt="音乐平台">
          </router-link>
        </el-row>
      </el-col>
    <!-- </el-row>
    <el-row> -->
      <el-col :xs="24" :sm="12" :md="12" :lg="8" class="img">
        <el-row type="flex" justify="center">
          <router-link :to="{ path: '/aybcRobot/basisFunction/basisFunctionDetails', query: { id: 'advertising' }}">
            <img src="../assets/img/advertising.png" alt="广告平台">
          </router-link>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" class="img">
        <el-row type="flex" justify="center">
          <router-link :to="{ path: '/aybcRobot/basisFunction/basisFunctionDetails', query: { id: 'care_project' }}">
            <img src="../assets/img/care_project.png" alt="关爱工程">
          </router-link>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" class="img">
        <el-row type="flex" justify="center">
          <router-link :to="{ path: '/aybcRobot/basisFunction/basisFunctionDetails', query: { id: 'live' }}">
            <img src="../assets/img/live.png" alt="直播平台">
          </router-link>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import '../assets/less/basisFunction.less';
  export default{
    name: 'basisFunction',
    data () {
      return {
        
      }
    }
  }
</script>

<style lang="less">

</style>