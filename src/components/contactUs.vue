<template>
  <div id="contactUs">
    <baidu-map class="map" :center="{lng: 113.95564, lat: 22.5465}" :zoom="18">

      <bm-info-window :position="{lng: 113.95562, lat: 22.54652}" :show="true">
        <h3>深圳市哎哟不错机器人科研有限公司</h3>
        <p>地址:深圳市南山区科技一路桑达科技大厦 F301</p>
        <p>电话:0755-83667791</p>
        <p>传真:0755-83667791</p>
      </bm-info-window>

    </baidu-map>
    <el-row class="contactUsText">
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <el-row type="flex" justify="center" class="padding-left">
          <div class="address">
            <h3>公司地址:</h3>
            <p>深圳市南山区科技一路桑达科技大厦 F301</p>
            <p>邮编:518000</p>
          </div>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <el-row type="flex" justify="center" class="padding-left">
          <div class="connection">
            <h3>联系方式:</h3>
            <p>联系电话:0755-83667791</p>
            <p>邮箱:szaybc@126.com</p>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import '../assets/less/contactUs.less';
  export default{
    name: 'contactUs',
    data () {
      return {
      }
    },
    methods: {

    }
  }
</script>

<style lang="less">
@media (max-width: 1200px){

}
@media (max-width: 992px){
  
}
@media (max-width: 768px){
  
}
</style>