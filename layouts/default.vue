<template>
  <v-app dark class="bg-gradient">
    <Toolbar />
    <v-content>
      <v-container v-show="isMounted" fluid grid-list-xs>
        <v-layout column justify-start>
          <Header />
          <v-flex>
            <nuxt />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer :fixed="true" app>
      <span>&copy; 2019 - Kelvin Rodriguez</span>
    </v-footer>
  </v-app>
</template>

<script>
import Header from '~/components/main/Header.vue'

export default {
  components:{
    Header
  },
  data() {
    return {
      isMounted: false
    }
  },
  mounted(){
    this.isMounted = true;
  }
}
</script>

<style scoped>
.bg-gradient {
  background: hsl(200, 10%, 10%) !important;
  /* background: rgb(255,255,255) !important;
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(136,136,136,1) 71%, rgba(98,98,98,1) 100%) !important; */
}

.font-cursive {
  font-family: 'Calligraffitti', cursive !important;
}
</style>
