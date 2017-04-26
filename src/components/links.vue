<template>
  <div id="links">
    <div class="links">
      <el-row type="flex" justify="space-between">
        <el-col :xs="6" :sm="4" :md="3" :lg="3">
          <a href="javascript;" style="color: #ccc;">友情链接</a>
        </el-col>
        <template v-for="link in links">
          <el-col :xs="6" :sm="4" :md="3" :lg="3">
            <a :href="link.url">{{ link.name }}</a>
          </el-col>
        </template>
      </el-row>
    </div>
  </div>
</template>

<script>
  import { links } from '../router/aboutUs_serviceSupport_link.js'
  import '.././assets/less/links.less'
  export default{
    name: 'links',
    data () {
      return {
        links
      }
    }
  }
</script>

