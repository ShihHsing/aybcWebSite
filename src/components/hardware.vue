<template>
  <div id="hardware">
    <div class="topBackground"></div>
    <div class="trumpetWrap">
      <el-row>
        <el-col :span="8">
          <div class="text">
            <h3>{{ hardware.trumpet.title }}</h3>
            <p>{{ hardware.trumpet.describe }}</p>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="intelligentIdentification">
      <el-row>
        <el-col :offset="16" :span="8">
          <div class="text">
            <h3>{{ hardware.intelligentIdentification.title }}</h3>
            <p>{{ hardware.intelligentIdentification.describe }}</p>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="panel">
      <el-row>
        <el-col :span="8">
          <div class="text">
            <h3>{{ hardware.panel.title }}</h3>
            <p>{{ hardware.panel.describe }}</p>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="detector">
      <el-row>
        <el-col :offset="16" :span="8">
          <div class="text">
            <h3>{{ hardware.detector.title }}</h3>
            <p>{{ hardware.detector.describe }}</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import { hardware } from '../router/aboutUs_serviceSupport_link.js'
  import '../assets/less/hardware.less'
  export default{
    name: 'hardware',
    data () {
      return {
        hardware
      }
    }
  }
</script>
  