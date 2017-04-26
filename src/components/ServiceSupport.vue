<template>
  <div id="service-support">
    <div class="topBackground"></div>
    <div class="serviceSupportBodyWrap">
      <el-row class="serviceSupportBody">
        <el-col :xs="24" :sm="24" :md="4" :lg="4">
          <el-row>
            <ul>
              <li class="serverTitle">
                <router-link :to="{ path: '/serviceSupport/purchaseNotes' }">
                  <h2>服务与支持</h2>
                </router-link>
              </li>
              <div class="serverHr"></div>
              <template v-for="item in path">
                <el-col :xs="8" :sm="8" :md="24" :lg="24">
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
        <el-col :xs="24" :sm="24" :md="20" :lg="20">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import '../assets/less/ServiceSupport.less'
  import * as PATH from '../router/aboutUs_serviceSupport_link.js'
  export default{
    name: 'service-support',
    data () {
      return {
        path: PATH.serviceSupport
      }
    }
  }
</script>
