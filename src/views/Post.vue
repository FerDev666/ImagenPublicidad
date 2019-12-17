<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col col xl="9">
        <h1 class="text-center">PUBLICIDAD VIAL IMAGEN SRL CELEBRA 30 AÑOS</h1>
        <hr>
        <p>
          <vue-goodshare-facebook 
            page_url="https://imagenpublicidad.com.bo" 
            title_social="Facebook"
            has_counter
            has_icon 
          ></vue-goodshare-facebook>
          <vue-goodshare-twitter 
            page_url="https://imagenpublicidad.com.bo" 
            title_social="Twitter"
            has_counter
            has_icon 
          ></vue-goodshare-twitter>
          <vue-goodshare-whatsapp 
            page_url="https://wa.me/59178988344" 
            title_social="Whatsapp"
            has_icon 
          ></vue-goodshare-whatsapp>
        </p>
        <b-img src="/img/39792923-34096388.jpg" fluid-grow alt="Fluid-grow image" style="max-height: 700px;">
        </b-img>
        <h2 style="padding-top: 1em;">CUMPLIMOS 30 AÑOS CONTIGO</h2>
        <blockquote class="blockquote">
          <p class="mb-0 text-justify">“No son los individuos los que hacen las empresas exitosas, Sino los Equipos”.</p>
          <br>
          <p class="mb-0 text-justify">Nacimos en 1989, cuando las Gigantografias se pintaban a pincel, por maestros a los que ahora les rendimos un homenaje. Hoy 30 años después la empresa ofrece servicio de impresión con máquinas digitales de alta tecnología, diseño, construcción de stands, letreros, display, y todo en la industria publicitaria, con oficinas en el eje troncal y más de 300 vallas publicitarias a nivel nacional, en el área urbana y rural.</p>
          <br>
          <p class="text-justify">𝗚𝗿𝗮𝗰𝗶𝗮𝘀 𝗮 𝗻𝘂𝗲𝘀𝘁𝗿𝗼 𝗴𝗿𝗮𝗻 𝗲𝗾𝘂𝗶𝗽𝗼 𝘆 𝗮 𝘁𝗼𝗱𝗼𝘀 𝗻𝘂𝗲𝘀𝘁𝗿𝗼𝘀 𝗰𝗹𝗶𝗲𝗻𝘁𝗲𝘀 𝗾𝘂𝗲 𝗰𝗼𝗻𝗳𝗶𝗮𝗿𝗼𝗻 𝗲𝗻 𝗻𝘂𝗲𝘀𝘁𝗿𝗼 𝘁𝗿𝗮𝗯𝗮𝗷𝗼, 30 𝗮ñ𝗼𝘀 𝗱𝗲 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝗮 𝘀𝘂 𝘀𝗲𝗿𝘃𝗶𝗰𝗶𝗼.</p>
        </blockquote>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
	  name: 'post',
    props: ["slug"],
    data() {
      return {
      }
    }
  }
</script>

