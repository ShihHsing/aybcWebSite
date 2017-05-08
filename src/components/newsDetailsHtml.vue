<template>
  <div id="newsDetailsHtml">
    <h1 style="text-align: center;margin-bottom: 30px;color: #ccc;">{{ details.title }}</h1>
    <div class="newbody" v-html="details.details"></div>
  </div>
</template>

<style lang="less">
  #newsDetailsHtml{
    .newbody{
      img{
        max-width: 80%;
      }
    }
  }
</style>

<script>
  export default{
    name: 'newsDetailsHtml',
    data () {
      return {}
    },
    props: ['details']
  }
</script>
