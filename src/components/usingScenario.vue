<template>
  <div id="usingScenario">
    <el-row>
      <el-col :xs="12" :sm="6" :md="6" :lg="6">
        <router-link :to="{ path: '/aybcRobot/usingScenario/usingScenarioDetails', query: { id: 'clothing_store' }}">
          <img src="../assets/img/clothing_store_1.png" alt="服装店_应用场景">
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="6">
        <router-link :to="{ path: '/aybcRobot/usingScenario/usingScenarioDetails', query: { id: 'shoe_store' }}">
          <img src="../assets/img/shoe_store_1.png" alt="鞋垫_应用场景">
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="6">
        <router-link :to="{ path: '/aybcRobot/usingScenario/usingScenarioDetails', query: { id: 'luggage_shop' }}">
          <img src="../assets/img/luggage_shop_1.png" alt="箱包店_应用场景">
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="6">
        <router-link :to="{ path: '/aybcRobot/usingScenario/usingScenarioDetails', query: { id: 'lingerie_store' }}">
          <img src="../assets/img/lingerie_store_1.png" alt="内衣店_应用场景">
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import '../assets/less/usingScenario.less';
  export default{
    name: 'usingScenario',
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