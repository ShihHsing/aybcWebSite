<template>
  <div id="basisFunctionDetails">
    <div class="d_fitting wrap" id="d_fitting">
      <el-row class="text_wrap">
        <el-col :span="14" class="center">
          <!-- <img src="../assets/img/3d_fitting_picture-min.png" alt="3D试衣_详情"> -->
        </el-col>
        <el-col :offset="2" :span="8" class="center">
          <div>
            <h3 class="basisFunctionDetails_title">3D购</h3>
            <p>全球首款3D内衣试穿综合平台，通过自定义人物形象，选择场景、内衣，利用3D科技真实模拟试穿效果，与哎哟不错机器人同步使用，实现门店、大数据、云技术的高度融合，增加消费者购物的成交率和满意度。预约下单功能，打破实体门店的时间、空间限制，实现实体门店24小时不打烊。</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="ecg_heart_rate wrap" id="ecg_heart_rate">
      <el-row class="text_wrap">
        <el-col :span="8" class="center">
          <div>
            <h3 class="basisFunctionDetails_title">心电心率</h3>
            <p>优异的微感应处理能力，放大和提取人体电生理信号，转化成通俗易懂的分析导图，直观呈现身体状况。能够准确测出人体6项心脏健康指标和6项压力指标，功能十分强大。</p>
          </div>
        </el-col>
        <el-col :offset="2" :span="14" class="center">
          <!-- <img src="../assets/img/ecg_heart_rate_picture-min.png" alt="心电心率_详情"> -->
        </el-col>
      </el-row>
    </div>
    <div class="voice_interaction wrap" id="voice_interaction">
      <el-row class="text_wrap">
        <el-col :span="14" class="center">
          <!-- <img src="../assets/img/voice_interaction_picture-min.png" alt="语音互动_详情"> -->
        </el-col>
        <el-col :offset="2" :span="8" class="center">
          <div>
            <h3 class="basisFunctionDetails_title">语音互动</h3>
            <p>庞大的语音信息库，除商品知识智能应答外，聊天、讲笑话、讲故事、唱歌、导购等系列互动，可帮门店实现留客，同时提升顾客消费体验，加深顾客对门店印象，促进销售。</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="promotion wrap" id="promotion">
      <el-row class="text_wrap">
        <el-col :span="8" class="center">
          <div>
            <h3 class="basisFunctionDetails_title">推广平台</h3>
            <p>只需简单操作，将促销活动、新品推介等内容输入，吆喝引导、新品推广宣传交给哎哟不错机器人，让导购员有更多的时间专注销售环节。</p>
          </div>
        </el-col>
        <el-col :offset="2" :span="14" class="center">
          <!-- <img src="../assets/img/promotion_picture-min.png" alt="砸金蛋_详情"> -->
        </el-col>
      </el-row>
    </div>
    <div class="product wrap" id="product">
      <el-row class="text_wrap">
        <el-col :span="14" class="center">
          <!-- <img src="../assets/img/product_picture-min.png" alt="3D试衣_详情"> -->
        </el-col>
        <el-col :offset="2" :span="8" class="center">
          <div>
            <h3 class="basisFunctionDetails_title">商品平台</h3>
            <p>用互联网的思维，进行实体销售，语音搜索、商品一键搜索，让顾客购物体验更轻松简单。海量商品记忆库，精准介绍商品，避免被动式库存的产生。IPS液晶显示屏，178度超广角可视角度，高对比技术给商品一个栩栩如生的舞台。</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="advertising wrap" id="advertising">
      <el-row class="text_wrap">
        <el-col :span="8" class="center">
          <div>
            <h3 class="basisFunctionDetails_title">广告平台</h3>
            <p>人人都是自媒体，哎哟不错机器人集7.0大尺寸触摸屏和音响设备于一身，商品推广、视频广告宣传、会员优惠资讯、店面最新活动都能通过哎哟不错机器人进行宣传，广告更轻松，更灵活，更吸引。</p>
          </div>
        </el-col>
        <el-col :offset="2" :span="14" class="center">
          <!-- <img src="../assets/img/noAd_picture-min.png" alt="广告平台"> -->
        </el-col>
      </el-row>
    </div>
    <div class="music wrap" id="music">
      <el-row class="text_wrap">
        <el-col :span="14" class="center">
          <!-- <img src="../assets/img/music_picture-min.png" alt="音乐平台"> -->
        </el-col>
        <el-col :offset="2" :span="8" class="center">
          <div>
            <h3 class="basisFunctionDetails_title">音乐平台</h3>
            <p>在愉悦的音乐中进行购物，是一种享受。哎哟不错机器人音乐平台中，海量音乐库，可根据顾客喜好，随时切换音乐，提升购物体验。</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="hit_golden_eggs wrap" id="hit_golden_eggs">
      <el-row class="text_wrap">
        <el-col :span="8" class="center">
          <div>
            <h3 class="basisFunctionDetails_title">砸金蛋</h3>
            <p>操作简单，自定义游戏规则，激起顾客好奇心；增强实体门店与顾客间的互动性、娱乐性以及神秘感；活动独特给力，后续影响较大，提高销量，带来回头率。</p>
          </div>
        </el-col>
        <el-col :offset="2" :span="14" class="center">
          <!-- <img src="../assets/img/hit_golden_eggs_picture-min.png" alt="砸金蛋_详情"> -->
        </el-col>
      </el-row>
    </div>
    <div class="lucky_big_wheel wrap" id="lucky_big_wheel">
      <el-row class="text_wrap">
        <el-col :span="14" class="center">
          <!-- <img src="../assets/img/lucky_big_wheel_picture-min.png" alt="3D试衣_详情"> -->
        </el-col>
        <el-col :offset="2" :span="8" class="center">
          <div>
            <h3 class="basisFunctionDetails_title">幸运大转盘</h3>
            <p>创建过程简便、易操作；自定义抽奖规则，中奖概率轻松制定，可控性高；线上活动，线下核销，增强粉丝粘性。</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="preferential wrap" id="preferential">
      <el-row class="text_wrap">
        <el-col :span="8" class="center">
          <div>
            <h3 class="basisFunctionDetails_title">优惠福利</h3>
            <p>异业商家优惠券、福利礼品的集聚地，打造异业联盟互利的广告连锁，增加广告宣传渠道，达到合作共赢。</p>
          </div>
        </el-col>
        <el-col :offset="2" :span="14" class="center">
          <!-- <img src="../assets/img/preferential_picture-min.png" alt="砸金蛋_详情"> -->
        </el-col>
      </el-row>
    </div>
    <div class="care_project wrap" id="care_project">
      <el-row class="text_wrap">
        <el-col :span="14" class="center">
          <!-- <img src="../assets/img/care_project_picture-min.png" alt="关爱工程"> -->
        </el-col>
        <el-col :offset="2" :span="8" class="center">
          <div>
            <h3 class="basisFunctionDetails_title">关爱工程</h3>
            <p>我们的成功得益于社会的支持，因此我们常怀有感恩的心回馈社会。慈善事业的路上，有您一份爱的力量！关爱工程，一份心意，十分关爱。</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="live wrap" id="live">
      <el-row class="text_wrap">
        <el-col :span="8" class="center">
          <div>
            <h3 class="basisFunctionDetails_title">直播</h3>
            <p>受众广泛、互动性强，传播影响力大，通过直播普及商品专业知识，与顾客互动增强粘性，提高门店知名度和影响力。</p>
          </div>
        </el-col>
        <el-col :offset="2" :span="14" class="center">
          <!-- <img src="../assets/img/live_picture-min.png" alt="直播"> -->
        </el-col>
      </el-row>
    </div>


    <transition name="fade" mode="out-in">
      <ul class="floorNav">
        <li v-on:click="jump('d_fitting');"></li>
        <li v-on:click="jump('ecg_heart_rate');"></li>
        <li v-on:click="jump('voice_interaction');"></li>
        <li v-on:click="jump('promotion');"></li>
        <li v-on:click="jump('product');"></li>
        <li v-on:click="jump('advertising');"></li>
        <li v-on:click="jump('music');"></li>
        <li v-on:click="jump('hit_golden_eggs');"></li>
        <li v-on:click="jump('lucky_big_wheel');"></li>
        <li v-on:click="jump('preferential');"></li>
        <li v-on:click="jump('care_project');"></li>
        <li v-on:click="jump('live');"></li>
      </ul>
    </transition>
  </div>
</template>

<script>
  import '../assets/less/basisFunctionDetails.less'
  export default{
    name: 'basisFunctionDetails',
    data () {
      return {}
    },
    methods: {
      jump (selector) {
        const jump = document.getElementById(selector)
        const total = jump.offsetTop
        let distance = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
         // 平滑滚动，时长500ms，每10ms一跳，共50跳
        let step = total / 50
        if (total > distance) {
          smoothDown()
        } else {
          const newTotal = distance - total
          step = newTotal / 50
          smoothUp()
        }
        function smoothDown () {
          if (distance < total) {
            distance += step
            document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            window.pageYOffset = distance
            setTimeout(smoothDown, 10)
          } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
            window.pageYOffset = total
          }
        }
        function smoothUp () {
          if (distance > total) {
            distance -= step
            document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            window.pageYOffset = distance
            setTimeout(smoothUp, 10)
          } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
            window.pageYOffset = total
          }
        }
      },
      init (num) {
        console.log(this.$route.query.id)
        switch (this.$route.query.id) {
          case 'd_fitting':
            this.jump('d_fitting')
            break
          case 'voice_interaction':
            this.jump('voice_interaction')
            break
          case 'ecg_heart_rate':
            this.jump('ecg_heart_rate')
            break
          case 'preferential':
            this.jump('preferential')
            break
          case 'product':
            this.jump('product')
            break
          case 'promotion':
            this.jump('promotion')
            break
          case 'hit_golden_eggs':
            this.jump('hit_golden_eggs')
            break
          case 'lucky_big_wheel':
            this.jump('lucky_big_wheel')
            break
          case 'music':
            this.jump('music')
            break
          case 'care_project':
            this.jump('care_project')
            break
          case 'live':
            this.jump('live')
            break
          case 'advertising':
            this.jump('advertising')
            break
          default:
            this.jump('d_fitting')
            break
        }
      }
    },
    created () {
      setTimeout(() => {
        this.init()
      }, 800)
    }
  }
</script>
