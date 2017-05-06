<template>
  <div id="newsDetailsHtml">
    <div v-html="details"></div>
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
