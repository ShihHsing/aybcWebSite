<template>
  <div id="aboutUs">
    <div class="topBackground"></div>
    <div class="serviceSupportBodyWrap">
      <el-row class="serviceSupportBody">
        <el-col :xs="24" :sm="24" :md="5" :lg="5">
          <el-row>
            <ul>
              <li class="serverTitle">
                <router-link :to="{ path: '/aboutUs/companyProfile' }">
                  <h2>关于我们</h2>
                </router-link>
              </li>
              <div class="serverHr"></div>
              <template v-for="item in path">
                <el-col :xs="4" :sm="4" :md="24" :lg="24">
                  <li>
                    <router-link :to="{ 'path': item.path, activeClass: 'active'}">
                      <h3>{{ item.title }}</h3>
                    </router-link>
                  </li>
                </el-col>
              </template>
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
  import '../assets/less/aboutUs.less'
  import * as PATH from '../router/aboutUs_serviceSupport_link.js'
  export default{
    name: 'aboutUs',
    data () {
      return {
        path: PATH.aboutUs
      }
    }
  }
</script>
