<template>
  <div id="usingScenario">
    <el-row>
      <template v-for="item in usingScenario">
        <el-col :xs="12" :sm="6" :md="6" :lg="6">
          <router-link :to="{ 'path': path, 'query': { 'id': item.id }}">
            <img :src="item.img" :alt="item.name">
          </router-link>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script>
  import { usingScenario } from '../router/aboutUs_serviceSupport_link.js'
  import '../assets/less/usingScenario.less'
  export default{
    name: 'usingScenario',
    data () {
      return {
        path: usingScenario.path,
        usingScenario: usingScenario.list
      }
    }
  }
</script>
