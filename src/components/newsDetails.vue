<template>
  <div id="newsDetails">
    <div class="topBackground"></div>
      <div class="newsDetailsBodyWrap">
        <el-row class="newsDetailsBody">
          <el-col :xs="22" :sm="22" :md="18" :lg="18" style="box-sizing: border-box;padding: 0 10px;">
            <!-- <h1 style="text-align: center;margin-bottom: 30px;color: #ccc;">{{ title }}</h1> -->
            <transition name="fade" mode="out-in">
              <div v-html="details"></div>
            </transition>
          </el-col>
          <el-col :xs="8" :sm="8" :md="6" :lg="6" class="choicenessNews">
            <h3 class="newListTitle">新闻精选</h3>
            <ul class="newList">
              <li><router-link to="#">李克强为何向金融业人士推荐这本书?</router-link></li>
              <li><router-link to="#">青年请留步 总理有话跟你说</router-link></li>
              <li><router-link to="#">委内瑞拉多地华人商铺遭哄抢</router-link></li>
              <li><router-link to="#">朝媒警告日本:若开战日本将首当其冲</router-link></li>
              <li><router-link to="#">亿万富豪被表姐夫分尸 嫌犯:他要娶我女儿</router-link></li>
            </ul>
          </el-col>
          <el-col class="newsNav">
            <div style="margin-bottom: 15px;">
              <template v-if="next">
                <span>上一篇 : </span><span class="clickA" @click="getNewsDetail(next.id, 1)">{{ next.title }}</span>
              </template>
              <template v-else>
                <span>没有了!  </span><router-link to="/aboutUs/newsIndustry">要不去看看行业新闻</router-link>
              </template>
              </div>
              <div>
                <template v-if="previous">
                  <span>下一篇 : </span><span class="clickA" @click="getNewsDetail(previous.id, 1)">{{ previous.title }}</span>
                </template>
                <template v-else>
                  <span>没有了!  </span><router-link to="/aboutUs/newsIndustry">要不去看看行业新闻</router-link>
              </template>
            </div>
          </el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
  import '../assets/less/newsDetails.less'
  import { getNewsDetail } from '../axios/api.js'
  export default{
    name: 'newsDetails',
    data () {
      return {
        id: this.$route.query.id,
        type: this.$route.query.type,
        title: null,
        details: null,
        next: null,
        previous: null
      }
    },
    created: function () {
      /* --- 初始获取 公司新闻 ---- */
      this.getNewsDetail()
      /* -------------------------- */
    },
    methods: {
      getNewsDetail (id, type) {
        const _this = this
        this.$axios.post(getNewsDetail, {
          'news_id': id || _this.id,
          'news_type': _this.type
        })
        .then((msg) => {
          const data = msg.data
          switch (data.flag >> 0) {
            case 1000:
              _this.title = data.news_detail.title
              _this.details = data.news_detail.details
              _this.next = data.next
              _this.previous = data.previous
              document.documentElement.scrollTop = document.body.scrollTop = 0
              break
            default:
              console.log(`服务器错误: ${data.return_code}`)
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
