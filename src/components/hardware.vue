<template>
  <div id="hardware">
    <div class="topBackground"></div>
    <div class="trumpetWrap">
      <el-row>
        <el-col :span="8">
          <div class="text">
            <h3>喇叭</h3>
            <p>喇叭使用了D类功放芯片，抗干扰能力强，音质纯美悦耳。加上圆柱体腔体，将声波回荡形成共鸣音腔，将声波二次放大，360度全向扩散，最终能得到响亮悦耳的音质。</p>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="intelligentIdentification">
      <el-row>
        <el-col :offset="16" :span="8">
          <div class="text">
            <h3>智能识别</h3>
            <p>机器固然可以通过视觉，听觉识别人的存在，而红外线则是一种更快的识别方式。人体的散热方式之一就是热辐射，也就是红外线。我们将红外线感应技术创新并应用到哎哟不错导购机器人身上，令机器人能够感应人身上散发的红外线，从而通过我们的一套算法测量出距离。当有人靠近，哎哟不错机器人便能利用该特制感应芯片感应来客并迅速做出回应。</p>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="panel">
      <el-row>
        <el-col :span="8">
          <div class="text">
            <h3>触屏面板</h3>
            <p>现代人离不开手机，每个都是触屏的资深行家，好不好，用了就知道。为了满足他们的触感，我们选择了液晶面板中技术最为出色的IPS屏幕，其色彩失真度最低，同时还具备178度的广角可视角度。使用高对比度技术，对比度高达1400：1，这意味着屏幕亮白的部分是黑暗部分的1400倍，白色更显雪白，黑色更显纯黑，画面更加锐利醒目。超过80%NTSC色域的饱和度，百分比越高表明屏幕越鲜艳，饱和度高色彩的屏幕能给商品展示一个栩栩如生的舞台。</p>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="detector">
      <el-row>
        <el-col :offset="16" :span="8">
          <div class="text">
            <h3>心电心率检测仪</h3>
            <p>具有优异的微感应处理能力，放大和提取人体心脏活动的电生理信号，处理后转化成通俗易懂的分析导图，直观呈现您的身体状况。目前，心电心率检测仪能够准确测出人体6项心脏健康指标与6项压力指标，功能十分强大。</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import '../assets/less/hardware.less';
  export default{
    name: 'hardware',
    data () {
      return {
        
      }
    }
  }
</script>
  