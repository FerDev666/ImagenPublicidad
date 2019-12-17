<template>
  <b-card no-body class="overflow-hidden">
    <b-row no-gutters>
      <b-col md="6" class="img-hover-zoom">
        <b-card-img src="/img/39792923-34096388.jpg" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6" >
        <b-card-body>
          <router-link :to="{ name: 'post', params: { slug: 'publicidad-vial-imagen-srl-celebra-30-anos' }}">
            <h1 class="text-center">PUBLICIDAD VIAL IMAGEN SRL CELEBRA</h1>
            <div class="txt">30 AÑOS</div>
          </router-link>
          <b-card-text>
            <blockquote class="blockquote">
              <p class="mb-0">“No son los individuos los que hacen las empresas exitosas, Sino los Equipos”.</p>
            </blockquote>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
  export default {
    name: 'jumbotron',
  }
</script>

<style lang="css" scoped>
  a {
    color: black;
    text-decoration: none;
  }

  .img-hover-zoom {
    overflow: hidden;
  }

  .img-hover-zoom img {
    height: 400px;
    transition: transform 1s, filter 2s ease-in-out;
    filter: blur(0px);
    transform: scale(1.2);
  }

  .img-hover-zoom:hover img {
    filter: blur(0);
    transform: scale(1);
  }

  @import url('https://fonts.googleapis.com/css?family=Roboto:700,900');
  .txt {
    text-align: center;
    font-family: 'Roboto';
    font-size: 12vmin;
    font-weight: 700;
    animation: netflix_style 3.5s infinite;
    outline: none;
    white-space: nowrap;
  }
  @keyframes netflix_style {
    0% {
      text-shadow: makelongshadow(100,1);
      color:#f3f3f3;
      transform: scale(1.5, 1.5);
    }
    10% {
      text-shadow: makelongshadow(100,1.5);
      color:#f3f3f3;
      transform: scale(1.5, 1.5);
    }
    15% {
       color:#f3f3f3;
    }
    20% {    
      color:#e90418;
      text-shadow: none;
      transform: scale(1.1, 1.1);
    }
    75% {
      opacity: 1;
    }
    80% {
      opacity: 0;    
      color:#e90418;
      transform: scale(0.85, 0.9);
    }
    
    100% {
      opacity: 0;
    }
  }
</style>