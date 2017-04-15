<template>
	<div id="foot-view">
		<div class="subnavigation-wrap">
      <el-row class="subnavigation">
        <el-col :xs="8" :sm="8" :md="8" :lg="8">
          <el-row type="flex" justify="start">
            <ul>
              <li><router-link to="/aboutUs/companyProfile"><h2>关于我们</h2></router-link></li>
              <li><router-link to="/aboutUs/companyProfile"><h3>公司简介</h3></router-link></li>
              <li><router-link to="/aboutUs/newsTrends"><h3>新闻动态</h3></router-link></li>
              <li><router-link to="/aboutUs/joinUs"><h3>加入我们</h3></router-link></li>
              <li><router-link to="/aboutUs/contactUs"><h3>联系我们</h3></router-link></li>
              <li><router-link to="/aboutUs/patentCertificate"><h3>专利证书</h3></router-link></li>
            </ul>
          </el-row>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8">
          <el-row type="flex" justify="center">
            <ul>
              <li><router-link to="/serviceSupport/purchaseNotes"><h2>服务与支持</h2></router-link></li>
              <li><router-link to="/serviceSupport/purchaseNotes"><h3>购买须知</h3></router-link></li>
              <li><router-link to="/serviceSupport/warranty"><h3>保修承诺</h3></router-link></li>
              <li><router-link to="/serviceSupport/commonProblems"><h3>常见问题与解决方案</h3></router-link></li>
            </ul>
          </el-row>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8">
          <el-row type="flex" justify="end">
            <ul>
              <li><router-link to="/aybcRobot/basisFunction"><h2>了解产品</h2></router-link></li>
              <li><router-link to="/aybcRobot/basisFunction"><h3>哎哟不错机器人</h3></router-link></li>
            </ul>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="copyright-wrap">
      <el-row class="copyright" type="flex" justify="start">
        <el-col>
          Copyright&copy;2017深圳市哎哟不错机器人科研有限公司All rights reserved 粤ICP备16038767号
        </el-col>
      </el-row>
    </div>
	</div>
</template>

<script>
  import '.././assets/less/foot-view.less';
	export default{
    name: 'foot-view',
    data () {
      return {
        msg: '这是页面脚部试图'
      }
    },
  }
</script>