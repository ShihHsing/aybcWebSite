<template>
  <div id="homeVideo">
    <div class="videoWrap">
      <div class="video">
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="12" :lg="12">
            <div class="oneVideo">
              <img src=".././assets/img/home_ad_background.png" alt="哎哟不错机器人产品宣传视频">
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12">
            <div class="twoVideo">
              <img src=".././assets/img/home_instructions_background.png" alt="哎哟不错机器人产品安装视频">
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'homeVideo',
    data () {
      return {

      }
    }
  }
</script>

<style lang="less">
.videoWrap{
  width: 100%;
  margin: 50px 0;
  .video{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    .el-row{
      width:100%;
      margin-left: 0!important;
      .oneVideo,.twoVideo{
        width: 100%;
        img{
          width: 100%;
          height: auto;
        }
      }
    }
  }
}
@media (max-width: 992px){
  .videoWrap{
    margin: 35px 0;
    .oneVideo,.twoVideo{
      box-sizing: border-box!important;
      padding: 5px 30px!important;
    }
  }
}
@media (max-width: 768px){
  .videoWrap{
    margin: 20px 0;
  }
}
</style>