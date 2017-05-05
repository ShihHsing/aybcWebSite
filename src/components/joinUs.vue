<template>
  <div id="joinUs">
    <h3>我们不看面试技巧，我们看实力；我们不看外表身材，我们看人心。</br>你来，团队就在这欢迎你！</h3>

    <el-collapse v-model="activeName">
      <template v-for="(item,index) in employList">
        <el-collapse-item :title="item.position" :name="index">
          <el-row class="border_bottom" style="margin-top: 5px;">
            <el-col :xs="6" :sm="6" :md="4" :lg="2">部门:</el-col>
            <el-col :xs="18" :sm="18" :md="20" :lg="22">{{ item.department }}</el-col>
          </el-row>
          <el-row class="border_bottom">
            <el-col :xs="6" :sm="6" :md="4" :lg="2">招聘人数:</el-col>
            <el-col :xs="18" :sm="18" :md="20" :lg="22">{{ item.employ_count }}</el-col>
          </el-row>
          <el-row class="border_bottom">
            <el-col :xs="6" :sm="6" :md="4" :lg="2">岗位职责:</el-col>
            <el-col :xs="18" :sm="18" :md="20" :lg="22" v-html="item.duty"></el-col>
          </el-row>
          <el-row class="border_bottom">
            <el-col :xs="6" :sm="6" :md="4" :lg="2">任职需求:</el-col>
            <el-col :xs="18" :sm="18" :md="20" :lg="22" v-html="item.demand"></el-col>
          </el-row>
        </el-collapse-item>
      </template>
    </el-collapse>
  </div>
</template>

<style lang="less">
  .border_bottom{
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
  }
</style>

<script>
  import { getWebsiteJoinUsInfo } from '../axios/api.js'
  import { joinUs } from '../router/aboutUs_serviceSupport_link.js'
  import '../assets/less/joinUs.less'
  export default{
    name: '',
    data () {
      return {
        joinUs,
        activeNames: ['1'],
        employList: []
      }
    },
    created: function () {
      /* ===== 获取招聘列表 ===== */
      this.getWebsiteJoinUsInfo()
      /* ======================== */
    },
    methods: {
      // 获取招聘
      getWebsiteJoinUsInfo () {
        this.$axios.post(getWebsiteJoinUsInfo)
        .then((msg) => {
          const data = msg.data
          this.employList = data.data
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>
