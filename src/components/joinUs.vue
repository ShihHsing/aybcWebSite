<template>
  <div id="joinUs">
    <h3>我们不看面试技巧;我们看实力,我们不看外表身材;我们看人心。</br>
    你来,团队就在这欢迎你!</h3>
    <el-table
      :data="tableData5"
      style="width: 100%">
      <el-table-column
        label="职位"
        prop="post"
        align="center">
      </el-table-column>
      <el-table-column
        label="时间"
        prop="time"
        align="right">
      </el-table-column>
      <el-table-column type="expand">
        <template scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="部门:">
              <span>{{ props.row.department }}</span>
            </el-form-item>
            <el-form-item label="人数:">
              <span>{{ props.row.numberPeople }}</span>
            </el-form-item>
            <el-form-item label="岗位职责:">
              <span>{{ props.row.positionStatement }}</span>
            </el-form-item>
            <el-form-item label="任职需求:">
              <span>{{ props.row.asDemand }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import '../assets/less/joinUs.less'
  export default{
    name: '',
    data () {
      return {
        tableData5: [{
          post: '全栈工程师',
          time: '2017-03-13',
          department: '研发部',
          numberPeople: '1',
          positionStatement: '1、负责公司产品的后端服务开发 优化和搭建后端框架，并不断完善<br />2、负责将需求转化为文档，文档转化为产品，并持续分析',
          asDemand: '1、本科以上学历，计算机、软件工程等相关专业</br>2、 精通任意一门适合后端的语言，如Java，Python，Ruby等，至少熟悉一门其他语言'
        }]
      }
    }
  }
</script>
