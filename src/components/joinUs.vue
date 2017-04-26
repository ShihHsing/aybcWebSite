<template>
  <div id="joinUs">
    <h3>我们不看面试技巧;我们看实力,我们不看外表身材;我们看人心。</br>
    你来,团队就在这欢迎你!</h3>
    <el-table
      :data="joinUs"
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
            <!-- <el-form-item label="部门:">
              <span v-html="props.row.department"></span>
            </el-form-item>
            <el-form-item label="人数:">
              <span v-html="props.row.numberPeople"></span>
            </el-form-item> -->
            <el-form-item label="岗位职责:">
              <span v-html="props.row.positionStatement"></span>
            </el-form-item>
            <el-form-item label="任职需求:">
              <span v-html="props.row.asDemand"></span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { joinUs } from '../router/aboutUs_serviceSupport_link.js'
  import '../assets/less/joinUs.less'
  export default{
    name: '',
    data () {
      return {
        joinUs
      }
    }
  }
</script>
