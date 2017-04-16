<template>
  <div id="links">
    <div class="links">
      <el-row :gutter="10">
        <el-col :xs="6" :sm="4" :md="3" :lg="3">
          <el-row type="flex" justify="center">
            <a href="javascript;" style="color: #ccc;">友情链接</a>
          </el-row>
        </el-col>
        <template v-for="link in links">
          <el-col :xs="6" :sm="4" :md="3" :lg="3">
            <el-row type="flex" justify="center">
              <a :href="link.url">{{ link.name }}</a>
            </el-row>
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

