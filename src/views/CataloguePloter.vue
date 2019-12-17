<template>
  <WebViewer :path="`${publicPath}lib`" url="/pdf/catalogo2.pdf"/>
</template>

<script>
  import WebViewer from '../components/WebViewer.vue'
  export default {
    name: 'catalogue-ploter',
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