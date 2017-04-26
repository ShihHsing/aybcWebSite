<template>
  <div id="basisFunction">
    <el-row>
      <template v-for="item in path">
        <el-col :xs="24" :sm="12" :md="12" :lg="8" class="img">
          <el-row type="flex" justify="center">
            <router-link :to="{ 'path': pathURL, query: { 'id': item.id }}">
              <img :src="item.img" :alt="item.title">
            </router-link>
          </el-row>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script>
  import '../assets/less/basisFunction.less'
  import * as PATH from '../router/aboutUs_serviceSupport_link.js'
  export default{
    name: 'basisFunction',
    data () {
      return {
        path: PATH.basisFunction,
        pathURL: '/aybcRobot/basisFunction/basisFunctionDetails'
      }
    }
  }
</script>
