<template>
  <div id="order">
    <h3>跨界共赢未来,招商共筑蓝图</h3>
    <el-row class="from_order">
      <el-col :sapn="24">
        <el-input v-model="name" placeholder="姓名" class="input"></el-input>
        <el-select v-model="sex" placeholder="性别" class="input">
          <el-option
            v-for="item in options"
            :label="item.label"
            :value="item.value"
            :key="item.id">
          </el-option>
        </el-select>
        <el-input v-model="phoneNumber" placeholder="电话号码" class="input"></el-input>
        <el-button type="primary" class="input" @click="addOrderUser();">提交</el-button>
      </el-col> 
    </el-row>
  </div>
</template>

<script>
  import '../assets/less/order.less'
  export default{
    name: 'order',
    data () {
      return {
        options: [{
          value: '1',
          label: '男'
        }, {
          value: '2',
          label: '女'
        }],
        name: '',
        sex: '',
        phoneNumber: '',
        url: 'http://www.aybc.so/aybcadmin/website/addOrder'
      }
    },
    methods: {
      addOrderUser () {
        var phoneReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
        if (this.name) {
          // statement
          if (this.sex) {
            // statement
            if (this.phoneNumber) {
              // statement
              if (phoneReg.test(this.phoneNumber)) {
                // statement
                this.$http.post(this.url, {
                  'name': this.name,
                  'phone_number': this.phoneNumber,
                  sex: this.sex
                }, {
                  emulateJSON: true
                })
                .then((msg) => {
                  console.log(msg)
                  if (msg.data.flag === '1000') {
                    // statement
                    window.alert('稍后会有专人跟您联系!请注意接听电话!')
                    window.location.reload()
                  } else {
                    window.alert(msg.data.return_code)
                  }
                }, (response) => {
                  window.alert(response.data.return_code)
                })
              } else {
                window.alert('输入手机号有误!请重新输出!')
              }
            } else {
              window.alert('手机号码不能为空')
            }
          } else {
            window.alert('请选择性别!')
          }
        } else {
          window.alert('请完善您的姓名!')
        }
        // this.$http.post()
      }
    }
  }
</script>
