<template>
  <div id="service-support">
    <div class="topBackground"></div>
    <div class="serviceSupportBodyWrap">
      <el-row class="serviceSupportBody">
        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-row>
            <ul>
              <li class="serverTitle"><router-link :to="{ path: '/serviceSupport/purchaseNotes' }"><h2>服务与支持</h2></router-link></li>
              <div class="serverHr"></div>
              <el-col :xs="8" :sm="8" :md="24" :lg="24">
                <li><router-link :to="{ path: '/serviceSupport/purchaseNotes', activeClass: 'active'}"><h3>购买须知</h3></router-link></li>
              </el-col>
              <el-col :xs="8" :sm="8" :md="24" :lg="24">
                <li><router-link :to="{ path: '/serviceSupport/warranty', activeClass: 'active'}"><h3>保修承诺</h3></router-link></li>
              </el-col>
              <el-col :xs="8" :sm="8" :md="24" :lg="24">
                <li><router-link :to="{ path: '/serviceSupport/commonProblems', activeClass: 'active'}"><h3>常见问题与解决方案</h3></router-link></li>
              </el-col>
            </ul>
          </el-row>  
        </el-col>
        <el-col :xs="24" :sm="24" :md="20" :lg="20">
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import '../assets/less/ServiceSupport.less';
  export default{
    name: 'service-support',
    data () {
      return {
        
      }
    }
  }
</script>

<style lang="less">

</style>