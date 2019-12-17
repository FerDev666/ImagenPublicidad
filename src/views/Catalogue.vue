<template>
  <WebViewer :path="`${publicPath}lib`" url="/pdf/catalogo1.pdf"/>
</template>

<script>
  import WebViewer from '../components/WebViewer.vue'
  export default {
    name: 'catalogue',
    components: {
      WebViewer
    },
    data () {
      return {
        publicPath: process.env.BASE_URL
      }
    }
  }
</script>