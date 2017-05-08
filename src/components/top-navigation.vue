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
          <el-dropdown menu-align="start" trigger="click" v-if="qrcodeList">
            <span class="el-dropdown-link">
              <h2>&nbsp;&nbsp;&nbsp;APP下载</h2>
            </span>
            <el-dropdown-menu slot="dropdown">
              <template v-for="item in qrcodeList">
                <el-dropdown-item>
                  <h3 @click="appQrcode(item.id)">{{ item.name }}</h3>
                </el-dropdown-item>
              </template>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
    </el-row>
    <el-dialog :title="dialogTitle" v-model="qrcode" size="tiny">
      <img style="width: 100%;" :src="dialogImg" :alt="dialogTitle" v-if="dialogImg">
    </el-dialog>
  </div>
</template>

<script>
  import '.././assets/less/top-navigation.less'
  import { listQrcode } from '../axios/api.js'
  export default{
    name: 'top-navigation',
    data () {
      return {
        qrcode: false,
        qrcodeList: [], // App列表,
        dialogTitle: '',
        dialogImg: ''
      }
    },
    created: function () {
      /* ===== 获取招聘列表 ===== */
      this.getListQrcode()
      /* ======================== */
    },
    methods: {
      appQrcode (id) {
        for (let i = this.qrcodeList.length - 1; i >= 0; i--) {
          if (this.qrcodeList[i].id >> 0 === id >> 0) {
            this.dialogTitle = this.qrcodeList[i].name
            this.dialogImg = this.qrcodeList[i].url
            this.qrcode = true
          }
        }
      },
      // 获取招聘
      getListQrcode () {
        this.$axios.post(listQrcode)
        .then((msg) => {
          const data = msg.data
          switch (data.flag) {
            case 1000:
              this.qrcodeList = data.qrcode_list
              break
            case 9001:
              /* 不做处理 */
              break
            default:
              console.log(data.return_code)
              break
          }
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>
