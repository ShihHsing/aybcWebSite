<template>
  <div id="aboutUs">
    <div class="topBackground"></div>
    <div class="serviceSupportBodyWrap">
      <el-row class="serviceSupportBody">
        <el-col :xs="24" :sm="24" :md="5" :lg="5">
          <el-row>
            <ul>
              <li class="serverTitle"><router-link :to="{ path: '/aboutUs/companyProfile' }"><h2>关于我们</h2></router-link></li>
              <div class="serverHr"></div>
              <el-col :xs="5" :sm="5" :md="24" :lg="24">
                <li><router-link :to="{ path: '/aboutUs/companyProfile', activeClass: 'active'}"><h3>公司简介</h3></router-link></li>
              </el-col>
              <el-col :xs="5" :sm="5" :md="24" :lg="24">
                <li><router-link :to="{ path: '/aboutUs/newsTrends', activeClass: 'active'}"><h3>新闻动态</h3></router-link></li>
              </el-col>
              <el-col :xs="5" :sm="5" :md="24" :lg="24">
                <li><router-link :to="{ path: '/aboutUs/joinUs', activeClass: 'active'}"><h3>加入我们</h3></router-link></li>
              </el-col>
              <el-col :xs="5" :sm="5" :md="24" :lg="24">
                <li><router-link :to="{ path: '/aboutUs/contactUs', activeClass: 'active'}"><h3>联系我们</h3></router-link></li>
              </el-col>
              <el-col :xs="4" :sm="4" :md="24" :lg="24">
                <li><router-link :to="{ path: '/aboutUs/patentCertificate', activeClass: 'active'}"><h3>专利证书</h3></router-link></li>
              </el-col>
            </ul>
          </el-row>  
        </el-col>
        <el-col :xs="24" :sm="24" :md="19" :lg="19">
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import '../assets/less/aboutUs.less';
  export default{
    name: 'aboutUs',
    data () {
      return {
        
      }
    }
  }
</script>
