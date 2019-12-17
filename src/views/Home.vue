<template>
  <div>
    <Jumbotron />
    <CarImpresion />
    <CarDisplay />
    <CarValla />
  </div>
</template>

<script>
  import CarImpresion from '@/components/CarImpresion.vue'
  import CarDisplay from '@/components/CarDisplay.vue'
  import CarValla from '@/components/CarValla.vue'
  import Jumbotron from '@/components/Jumbotron.vue'

  export default {
	name: 'home',
	components: {
      CarImpresion,
      CarDisplay,
      CarValla,
      Jumbotron
    }
  }
</script>


