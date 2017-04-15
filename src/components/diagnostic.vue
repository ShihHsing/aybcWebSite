<template>
  <div id="diagnostic">
    <el-row>
      <el-col :span="24" class="diagnostic_one"></el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="diagnostic_two">
        <el-row class="diagnostic_two_text">
          <el-col :span="8" :offset="16" class="textWrap">
            <!-- <div> -->
              <h3 class="text">以物寓意的心形结构</br>盈盈一握的精致手感</br>走进自己的内心健康</br>懂得关心,才会理解</h3>
            <!-- </div> -->
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import '../assets/less/diagnostic.less';
  export default{
    name: 'diagnostic',
    data () {
      return {
        
      }
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