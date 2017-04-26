<template>
  <div id="patentCertificate">
    <el-row>
      <template v-for="item in patentCertificate">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" class="img">
          <h3>{{ item.title }}</h3>
          <img :src="item.url" :alt="item.title">
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script>
  import { patentCertificate } from '../router/aboutUs_serviceSupport_link.js'
  import '../assets/less/patentCertificate.less'
  export default{
    name: 'patentCertificate',
    data () {
      return {
        patentCertificate
      }
    }
  }
</script>
