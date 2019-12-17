<template>
  <b-container fluid>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <h1 class="text-center text-muted">GALERÍA DE PRODUCTOS</h1>
	  <b-row class="justify-content-md-center lightgallery">
  	  <b-col xl="3" class="demo-gallery">
  	    <div class="SocialIcons">
          <a href="https://wa.me/59168774551" target="_blank"><i class="fab fa-whatsapp" style="color: green;"></i></a>
        </div>
  	    <div class="item-gallery" data-src="/img/Stands/gal-13189321.jpg" data-facebook-share-url="app.imagenpublicidad.com.bo/displays/stands">
  	      <a href="">
  	        <img class="img-responsive" src="/img/Stands/gal-13189321.jpg">
  	        <div class="demo-gallery-poster">
  	          <img src="/img/zoom.png">
  	        </div>
  	      </a>
  	    </div>
  	  </b-col>
      <b-col xl="3" class="demo-gallery">
        <div class="SocialIcons">
          <a href="https://wa.me/59168774551" target="_blank"><i class="fab fa-whatsapp" style="color: green;"></i></a>
        </div>
        <div class="item-gallery" data-src="/img/Stands/gal-13189322.jpg" data-facebook-share-url="app.imagenpublicidad.com.bo/displays/stands">
          <a href="">
            <img class="img-responsive" src="/img/Stands/gal-13189322.jpg">
            <div class="demo-gallery-poster">
              <img src="/img/zoom.png">
            </div>
          </a>
        </div>
      </b-col>
      <b-col xl="3" class="demo-gallery">
        <div class="SocialIcons">
          <a href="https://wa.me/59168774551" target="_blank"><i class="fab fa-whatsapp" style="color: green;"></i></a>
        </div>
        <div class="item-gallery" data-src="/img/Stands/gal-13189323.jpg" data-facebook-share-url="app.imagenpublicidad.com.bo/displays/stands">
          <a href="">
            <img class="img-responsive" src="/img/Stands/gal-13189323.jpg">
            <div class="demo-gallery-poster">
              <img src="/img/zoom.png">
            </div>
          </a>
        </div>
      </b-col>
      <b-col xl="3" class="demo-gallery">
        <div class="SocialIcons">
          <a href="https://wa.me/59168774551" target="_blank"><i class="fab fa-whatsapp" style="color: green;"></i></a>
        </div>
        <div class="item-gallery" data-src="/img/Stands/gal-13189324.jpg" data-facebook-share-url="app.imagenpublicidad.com.bo/displays/stands">
          <a href="">
            <img class="img-responsive" src="/img/Stands/gal-13189324.jpg">
            <div class="demo-gallery-poster">
              <img src="/img/zoom.png">
            </div>
          </a>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import 'lightgallery.js'
  import 'lightgallery.js/dist/css/lightgallery.css'
  import 'lg-share.js'

  export default {
    name: 'stands',
    data () {
      return {
        items: [
          {
            text: 'Inicio',
            href: '/'
          },
          {
            text: 'Impresión Digital',
            active: true
          },
          {
            text: 'Stands',
            active: true
          }
        ]
      }
    },

    mounted() {
      lightGallery(document.querySelector('.lightgallery'), {
  	    selector: '.item-gallery',
        share: true,
        googlePlus: false,
        pinterest: false
  	  });
    }
  }
</script>

<style lang="css">
  .demo-gallery .SocialIcons {
  	display: flex;
  	flex-direction: column;
  	left: 0;
  	opacity: 0;
  	position: absolute;
  	z-index: 1;
  	top: 15px;
  	transform: rotateY(90deg);
  	transform-origin: left center 0;
  	transition: all 350ms ease;
  }

  .demo-gallery .SocialIcons a {
  	background: #ffffff none repeat scroll 0 0;
  	font-size: 20px;
  	height: 50px;
  	margin-bottom: 1px;
  	position: relative;
  	text-align: center;
  	width: 50px;
  }

  .demo-gallery .SocialIcons a i {
  	left: 50%;
  	position: absolute;
  	top: 50%;
  	transform: translateX(-50%) translateY(-50%);
  }
  .demo-gallery .SocialIcons a:nth-child(1) {}
  .demo-gallery .SocialIcons a:nth-child(2) {}
  .demo-gallery .SocialIcons a:nth-child(3) {}

  .demo-gallery:hover .SocialIcons {
  	opacity: 1;
  	left: 15px;
  	transform: rotateY(0deg);
  }

  .demo-gallery > div {
    margin-bottom: 15px;
    width: 100%;
    display: inline-block;
    margin-right: 10px;
    list-style: outside none none;
  }

  .demo-gallery > div > a {
    border: 3px solid #FFF;
    border-radius: 3px;
    display: block;
    overflow: hidden;
    position: relative;
    float: left;
  }

  .demo-gallery > div > a > img {
    -webkit-transition: -webkit-transform 0.15s ease 0s;
    -moz-transition: -moz-transform 0.15s ease 0s;
    -o-transition: -o-transform 0.15s ease 0s;
    transition: transform 0.15s ease 0s;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    height: 100%;
    width: 100%;
  }

  .demo-gallery > div > a:hover > img {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  .demo-gallery > div > a:hover .demo-gallery-poster > img {
    opacity: 1;
  }

  .demo-gallery > div > a .demo-gallery-poster {
    background-color: rgba(0, 0, 0, 0.1);
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    -webkit-transition: background-color 0.15s ease 0s;
    -o-transition: background-color 0.15s ease 0s;
    transition: background-color 0.15s ease 0s;
  }

  .demo-gallery > div > a .demo-gallery-poster > img {
    left: 50%;
    margin-left: -10px;
    margin-top: -10px;
    opacity: 0;
    position: absolute;
    top: 50%;
    -webkit-transition: opacity 0.3s ease 0s;
    -o-transition: opacity 0.3s ease 0s;
    transition: opacity 0.3s ease 0s;
  }

  .demo-gallery > div > a:hover .demo-gallery-poster {
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>