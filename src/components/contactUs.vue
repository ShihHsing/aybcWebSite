<template>
  <div id="contactUs">
    <baidu-map class="map" :center="{lng: 113.95564, lat: 22.5465}" :zoom="18">
      <bm-info-window :position="{lng: 113.95562, lat: 22.54652}" :show="true">
        <h3>{{ company.name }}</h3>
        <p>{{ company.address }}</p>
        <p>{{ company.phone }}</p>
        <p>{{ company.email }}</p>
      </bm-info-window>
    </baidu-map>
    <el-row class="contactUsText">
      <template v-for="item in contact">
        <el-col :xs="24" :sm="24" :md="12" :lg="12">
          <el-row type="flex" justify="center" class="padding-left">
            <div class="address">
              <h3>{{ item.title }}</h3>
              <p>{{ item.sub_title }}</p>
              <p>{{ item.end_title }}</p>
            </div>
          </el-row>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script>
  import '../assets/less/contactUs.less'
  import * as MESSAGE from '../router/aboutUs_serviceSupport_link.js'
  export default{
    name: 'contactUs',
    data () {
      return {
        contact: MESSAGE.contact,
        company: MESSAGE.company
      }
    },
    methods: {}
  }
</script>
