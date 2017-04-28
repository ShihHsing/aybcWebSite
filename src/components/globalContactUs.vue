<template>
  <div id="globalContactUs">
    <transition name="fade" mode="out-in">
      <ul class="floorNav">
        <li v-on:click="contactUs(650)"></li>
        <li v-on:click="contactUs(1400)"></li>
        <li v-on:click="contactUs(2200)"></li>
        <li v-on:click="smoothness(0)"></li>
      </ul>
    </transition>
  </div>
</template>

<style lang="less">
  .floorNav{
    position: fixed;
    right: 0;
    top: 70%;
    z-index: 9999999;
    li{
      width: 50px;
      height: 50px;
      cursor: pointer;
      &:nth-of-type(1){
        background: url(../assets/img/QQ_default-min.jpg) no-repeat center center;
        &:hover{
          background: url(../assets/img/QQ_selected-min.jpg) no-repeat center center;
        }
      }
      &:nth-of-type(2){
        background: url(../assets/img/OfficialAccounts_default-min.jpg) no-repeat center center;
        &:hover{
          background: url(../assets/img/OfficialAccounts_selected-min.jpg) no-repeat center center;
        }
      }
      &:nth-of-type(3){
        background: url(../assets/img/wechatService_default-min.jpg) no-repeat center center;
        &:hover{
          background: url(../assets/img/wechatService_selected-min.jpg) no-repeat center center;
        }
      }
      &:nth-of-type(4){
        background: url(../assets/img/top_icon_default-min.jpg) no-repeat center center;
        margin-top: 25px;
        &:hover{
          background: url(../assets/img/top_icon_selected-min.jpg) no-repeat center center;
        }
      }
    }
  }
  @media (max-width: 1200px){}
  @media (max-width: 992px){
    #usingScenarioDetails{
      .floorNav{
        display: none;
      }
    }
  }
  @media (max-width: 768px){}
</style>

<script>
  export default{
    name: 'globalContactUs',
    data () {
      return {
        msg: '全局侧边栏联系我们',
        scrolled: ''
      }
    },
    methods: {
      contactUs (data) {
        console.log(data)
      }
    }
  }
</script>
