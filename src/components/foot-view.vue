<template>
	<div id="foot-view">
		<div class="subnavigation-wrap">
      <el-row class="subnavigation">
        <el-col :xs="8" :sm="8" :md="8" :lg="8">
          <el-row type="flex" justify="start">
            <ul>
              <li><router-link to="/aboutUs/companyProfile"><h2>关于我们</h2></router-link></li>
              <template v-for="item in aboutUs">
                <li>
                  <router-link :to="item.path">
                    <h3>{{ item.title }}</h3>
                  </router-link>
                </li>
              </template>
            </ul>
          </el-row>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8">
          <el-row type="flex" justify="center">
            <ul>
              <li><router-link to="/serviceSupport/purchaseNotes"><h2>服务与支持</h2></router-link></li>
              <template v-for="item in serviceSupport">
                <li>
                  <router-link :to="item.path">
                    <h3>{{ item.title }}</h3>
                  </router-link>
                </li>
              </template>
            </ul>
          </el-row>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8">
          <el-row type="flex" justify="end">
            <ul>
              <li><router-link :to="aybcRobot.path"><h2>了解产品</h2></router-link></li>
              <li><router-link :to="aybcRobot.path"><h3>{{ aybcRobot.title }}</h3></router-link></li>
            </ul>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="copyright-wrap">
      <el-row class="copyright" type="flex" justify="start">
        <el-col v-html="copyright"></el-col>
      </el-row>
    </div>
	</div>
</template>

<script>
  import * as PATH from '../router/aboutUs_serviceSupport_link.js'
  import '.././assets/less/foot-view.less'
  export default{
    name: 'foot-view',
    data () {
      return {
        aboutUs: PATH.aboutUs,
        serviceSupport: PATH.serviceSupport,
        aybcRobot: PATH.aybcRobot,
        copyright: PATH.copyright
      }
    }
  }
</script>
