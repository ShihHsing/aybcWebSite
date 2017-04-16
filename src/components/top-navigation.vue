<template>
  <div id="top-navigation">
    <el-row :gutter="10">
      <el-col :xs="4" :sm="4" :md="3" :lg="2">
        <el-row type="flex" justify="center">
          <router-link to="/首页"><img src=".././assets/img/logo-min.png" alt="logo"></router-link>
        </el-row>
      </el-col>
      <el-col :xs="1" :sm="7" :md="11" :lg="15">&nbsp;</el-col>
      <el-col :xs="9" :sm="5" :md="4" :lg="3">
        <el-row type="flex" justify="center">
          <el-dropdown menu-align="start" trigger="click">
            <span class="el-dropdown-link">
              <h1>哎哟不错机器人</h1>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/aybcRobot/basisFunction">
                  <h3>基础功能</h3>
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/aybcRobot/usingScenario">
                  <h3>场景运用</h3>
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/hardware">
                  <h3>硬件</h3>
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/aybcRobot/parameter">
                  <h3>参数</h3>
                </router-link>
              </el-dropdown-item>
             <!--  <el-dropdown-item>
                <router-link to="/aybcRobot/publicityVideo">
                  <h3>产品宣传视频</h3>
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/aybcRobot/installVideo">
                  <h3>产品安装视频</h3>
                </router-link>
              </el-dropdown-item> -->
              <el-dropdown-item>
                <router-link to="/aybcRobot/order">
                  <h3>招商政策</h3>
                </router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
      <el-col :xs="4" :sm="4" :md="3" :lg="2">
        <el-row type="flex" justify="center">
          <el-dropdown menu-align="start" trigger="click">
            <span class="el-dropdown-link">
              <h2>&nbsp;&nbsp;&nbsp;&nbsp;配件</h2>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/aybcRobot/diagnostic">
                  <h3>心电心率</h3>
                </router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
      <el-col :xs="6" :sm="4" :md="3" :lg="2">
        <el-row type="flex" justify="center">
          <el-dropdown menu-align="start" trigger="click">
            <span class="el-dropdown-link">
              <h2>&nbsp;&nbsp;&nbsp;APP下载</h2>
            </span>
            <!-- <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>心电设备</el-dropdown-item>
            </el-dropdown-menu> -->
          </el-dropdown>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import '.././assets/less/top-navigation.less'
  export default{
    name: 'top-navigation',
    data () {
      return {}
    }
  }
</script>
