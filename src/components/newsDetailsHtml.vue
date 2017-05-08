<template>
  <div id="newsDetailsHtml">
    <h1 style="text-align: center;margin-bottom: 30px;color: #ccc;">{{ details.title }}</h1>
    <div v-html="details.details"></div>
  </div>
</template>

<script>
  export default{
    name: 'newsDetailsHtml',
    data () {
      return {}
    },
    props: ['details']
  }
</script>
