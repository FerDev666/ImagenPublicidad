<template>
  <div ref='viewer'></div>
</template>

<script>
  export default {
    name: 'WebViewer',
    props: {
      path: String,
      url: String
    },
    mounted: function () {
      WebViewer({
        path: this.path,
        initialDoc: this.url,
      }, this.$refs.viewer).then((instance) => {
        // call apis here
      });
    }
}
</script>

<style scoped>
  div {
	width: 100%; 
	height: 100vh;
  }
</style>