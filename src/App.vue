<template>
  <div>
    <loading 
      :active.sync="isLoading" 
      :can-cancel="true" 
      color="#dd4343"
      :is-full-page="fullPage">
    </loading>
    <Sidebar />
    <b-container fluid>
      <b-row class="justify-content-md-center">
        <b-col col xl="12">
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Sidebar from '@/components/Sidebar.vue'
  export default {
    components: {
      Sidebar
    },

    computed: {
      ...mapGetters([
        'isLoading',
      ])
    },

    data() {
      return {
        fullPage: true
      }
    },

    methods: {
      doAjax() {
        this.isLoading = true
      }
    }
  }
</script>

