<template>
  <b-navbar toggleable="lg" type="light" variant="light" sticky>
    <b-navbar-brand to="/">
      <img src="/img/logo.png" alt="logo" width="150px">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Impresión Digital" right>
          <b-dropdown-item :to="'/impresion-digital/esmerilado'">Esmerilado</b-dropdown-item>
          <b-dropdown-item :to="'/impresion-digital/brilloso'">Brilloso</b-dropdown-item>
          <b-dropdown-item :to="'/impresion-digital/pared'">De Pared</b-dropdown-item>
          <b-dropdown-item :to="'/impresion-digital/piso'">De Piso</b-dropdown-item>
          <b-dropdown-item :to="'/impresion-digital/microperforado'">Microperforado</b-dropdown-item>
          <b-dropdown-item :to="'/impresion-digital/bastidor'">Bastidor</b-dropdown-item>
          <b-dropdown-item :to="'/impresion-digital/caja-de-luz'">Caja De Luz</b-dropdown-item>
          <b-dropdown-item :to="'/impresion-digital/corporeo'">Corporeo</b-dropdown-item>
          <b-dropdown-item :to="'/impresion-digital/señaletica'">Señaletica</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Displays" right>
          <b-dropdown-item :to="'/displays/rollers'">Rollers</b-dropdown-item>
          <b-dropdown-item :to="'/displays/mesas'">Mesas Publicitarias</b-dropdown-item>
          <b-dropdown-item :to="'/displays/backpanel'">Back Panel</b-dropdown-item>
          <b-dropdown-item :to="'/displays/router'">Router CNC</b-dropdown-item>
          <b-dropdown-item :to="'/displays/muebles'">Muebles Publicitarias</b-dropdown-item>
          <b-dropdown-item :to="'/displays/stands'">Stands</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Catálogos" right>
          <b-dropdown-item :to="'/catalogue'">Catálogo #1</b-dropdown-item>
          <b-dropdown-item :to="'/catalogue-ploter'">Catálogo #2</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item :to="'/vallas'" right>Vallas Publicitarias</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style lang = "css"> 
  a.dropdown-item:hover, a.dropdown-item:focus {
    color: #ffffff;
    text-decoration: none;
    background-color: #dd4343;
  }

  a.nav-link {
    font-weight: bold;
  }

  ul .dropdown-menu {
    outline:0px;
  }

  a.nav-link {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    overflow: hidden;
  }

  a.nav-link:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 50%;
    right: 50%;
    bottom: 0;
    background: #dd4343;
    height: 4px;
    -webkit-transition-property: left, right;
    transition-property: left, right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  a.nav-link:hover:before, a.nav-link:focus:before, a.nav-link:active:before {
    left: 0;
    right: 0;
  }
</style>