<template>
  <div id="parameter">
    <h3>产品详情</h3>
    <div class="parameter">
      <img src="../assets/img/parameter-min.png" alt="产品参数详情图">
    </div>
    <el-row>
      <h3>哎哟不错机器人参数</h3>
      <el-col :span="10"  style="padding-top: 50px;">
        <h4>机器人尺寸</h4>
      </el-col>
      <el-col :span="12"  style="padding-top: 50px;">
        <ul>
          <li>
            <h5 style="padding-top: 10px;">长度:50cm</h5>
          </li>
          <li>
            <h5>长度:50cm</h5>
          </li>
          <li>
            <h5>长度:50cm</h5>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
        <h4>输出电压</h4>
      </el-col>
      <el-col :span="12">
        <ul>
          <li>
            <h5 style="padding-top: 10px;">12V DC</h5>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
        <h4>输出电流</h4>
      </el-col>
      <el-col :span="12">
        <ul>
          <li>
            <h5 style="padding-top: 10px;">2A</h5>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
        <h4>胸口屏幕</h4>
      </el-col>
      <el-col :span="12">
        <ul>
          <li>
            <h5 style="padding-top: 10px;">7.0寸高清IPS触摸屏</h5>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
        <h4>分辨率</h4>
      </el-col>
      <el-col :span="12">
        <ul>
          <li>
            <h5 style="padding-top: 10px;">1027*600</h5>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
        <h4>喇叭</h4>
      </el-col>
      <el-col :span="12">
        <ul>
          <li>
            <h5 style="padding-top: 10px;">三英寸立体声独立音腔喇叭</h5>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
        <h4>机器人系统</h4>
      </el-col>
      <el-col :span="12">
        <ul>
          <li>
            <h5 style="padding-top: 10px;">Andriod 5.1</h5>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
        <h4>主频</h4>
      </el-col>
      <el-col :span="12">
        <ul>
          <li>
            <h5 style="padding-top: 10px;">Cortx-A17 四核7.8GHz</h5>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
        <h4>RAM</h4>
      </el-col>
      <el-col :span="12">
        <ul>
          <li>
            <h5 style="padding-top: 10px;">1G</h5>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
        <h4>FLASH</h4>
      </el-col>
      <el-col :span="12">
        <ul>
          <li>
            <h5 style="padding-top: 10px;">8G</h5>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
        <h4>控制方式</h4>
      </el-col>
      <el-col :span="12">
        <ul>
          <li>
            <h5 style="padding-top: 10px;padding-bottom: 0;">蓝牙、WIFI</h5>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import '../assets/less/parameter.less'
  export default{
    name: 'parameter',
    data () {
      return {}
    }
  }
</script>
