<template>
  <div class="main">
    <h1 class="text-center text-muted">Displays</h1>
    <b-row class="justify-content-md-center">
      <b-col col lg="11">
        <agile class="thumbnails2" ref="thumbnails2" :options="options2" :as-nav-for="asNavFor2">
          <div class="slide slide--thumbniail" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`" :data-src="slide">
            <img :src="slide"/>
          </div>
          <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
          <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
        </agile>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import 'lightgallery.js'
  import 'lightgallery.js/dist/css/lightgallery.css'

  export default {
    data() {
      return {
        asNavFor1: [],
        asNavFor2: [],
        options1: {
          dots: false,
          fade: true,
          navButtons: false
        },
        
        options2: {
          autoplay: false,
          centerMode: true,
          dots: false,
          navButtons: false,
          slidesToShow: 3,
          responsive: [
            {
              breakpoint: 600,
              settings: {
                  slidesToShow: 5
              }
            },
            {
              breakpoint: 900,
              settings: {
                  navButtons: true
              }
            }
          ]
        },
      
        slides: [
          '/img/Displays/gal-13184029-MESA.jpg',
          '/img/Displays/gal-13184030-MESA.jpg',
          '/img/Displays/gal-13184024-BACKPANEL.jpg',
          '/img/Displays/gal-13184025-BACKPANEL.jpg',
          '/img/Displays/gal-13184026-BACKPANEL.jpg',
          '/img/Router-CNC/gal-13189163.jpg',
          '/img/Router-CNC/gal-13189166.jpg',
          '/img/Router-CNC/gal-13189167.jpg',
          '/img/Stands/gal-13189321.jpg',
          '/img/Stands/gal-13189322.jpg',
          '/img/Displays/gal-13184027-ROLLER.jpg',
          '/img/Displays/gal-13184028-ROLLER.jpg',
          '/img/Displays/gal-13184031-ROLLER.jpg',
        ]
      }
    },

    mounted () {
      this.asNavFor1.push(this.$refs.thumbnails2)
      this.asNavFor2.push(this.$refs.main)

      lightGallery(document.querySelector('.thumbnails2'), {
        selector: '.slide',
        share: true,
        googlePlus: false,
        pinterest: false,
        counter: false
      });
    }
  }
</script>

<style lang="sass"> 
  .main
    margin-top: 50px

  .thumbnails2
    margin: 0 -5px
    width: calc(100% + 10px)

  .agile
    &__nav-button
      background: transparent
      border: none
      color: #ccc
      cursor: pointer
      font-size: 24px
      transition-duration: .3s
    
      .thumbnails2 &
        position: absolute
        top: 50%
        transform: translateY(-50%)

        &--prev
          left: -45px
    
        &--next
          right: -45px

      &:hover
        color: #888

    &__dot
      margin: 0 10px

      button 
        background-color: #eee
        border: none
        border-radius: 50%
        cursor: pointer
        display: block
        height: 10px
        font-size: 0
        line-height: 0
        margin: 0
        padding: 0
        transition-duration: .3s
        width: 10px

      &--current,
      &:hover
        button
          background-color: #888

  .slide
    align-items: center
    box-sizing: border-box
    color: #fff
    display: flex
    height: 450px
    justify-content: center

    &--thumbniail
      cursor: pointer
      height: 100%
      padding: 0 5px
      transition: opacity .3s

      &:hover
        opacity: .75

    img
      height: 100%
      object-fit: cover
      object-position: center
      width: 100%
</style>