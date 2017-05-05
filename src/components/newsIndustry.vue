<template>
  <div id="newsIndustry">
    <template v-for="item in newsList">
      <el-row class="newsList">
          <router-link :to="{path: '/newsDetails', query: {id: item.id, type: 2}}">
            <el-col :xs="24" :sm="24" :md="12" :lg="9" class="newsImg" :style="'background: url(' + item.image + ') #2E3037 no-repeat center center'">
              <!-- <img :src="item.image" :alt="item.title"> -->
            </el-col>
          </router-link>
          <el-col :xs="24" :sm="24" :md="12" :lg="15" class="newsContent">
            <router-link :to="{path: '/newsDetails', query: {id: item.id, type: 2}}"><h3>{{ item.title }}</h3></router-link>
            <h4>{{ item.add_time }}</h4>
            <p>{{ item.content }}</p>
            <div class="newsParticulars">
              <router-link :to="{path: '/newsDetails', query: {id: item.id, type: 2}}">了解更多</router-link>
            </div>
          </el-col>
      </el-row>
    </template>

    <el-row>
      <el-col :xs="24" :sm="20" :md="16" :lg="12">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout="prev, pager, next, jumper"
          :total="pageSize*totalPages">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { listIndustryNews } from '../axios/api.js'
  import '../assets/less/newsIndustry.less'
  export default{
    name: 'newsIndustry',
    data () {
      return {
        newsList: [], // 新闻列表 后台获取
        // 当前页
        currentPage: 1,
        // 总页数
        totalPages: 1,
        // 每页条数
        pageSize: 3
      }
    },
    created: function () {
      /* --- 初始获取 公司新闻 ---- */
      this.getNewsList()
      /* -------------------------- */
    },
    methods: {
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        this.getNewsList(val)
      },
      /* ----------------- 获取数据 ----------------- */
      getNewsList (currentPage) {
        const _this = this
        this.$axios.post(listIndustryNews, {
          'current_page': currentPage
        })
        .then((msg) => {
          const data = msg.data
          switch (data.flag >> 0) {
            case 1000:
              // 当前页
              _this.currentPage = data.current_page >> 0
              // 总页数
              _this.totalPages = data.total_pages >> 0
              // 数据列表 根据不同选择 解析不同数据
              _this.newsList = data.industry_news_list
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
      /* ------------------------------------------- */
    }
  }
</script>
