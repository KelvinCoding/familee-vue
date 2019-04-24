<template>
  <v-app dark class="bg-gradient">
    <v-navigation-drawer
      v-model="drawer"
      v-on:toolbar-drawer="drawerChangeHandler"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <Toolbar />
    <v-content>
      <v-container fluid grid-list-xs>
        <v-layout column justify-start>
          <v-flex>
            <HappileeText />
          </v-flex>
          <v-flex>
            <v-layout row wrap>
              <v-flex v-for="(item, index) in items" :key="index">
                <v-btn dark :to="item.to" nuxt>
                  <v-icon>{{item.icon}}</v-icon>{{ item.Title }}
                </v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex>
            <nuxt />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019 - Kelvin Rodriguez</span>
    </v-footer>
  </v-app>
</template>

<script>
import Toolbar from '~/components/main/Toolbar.vue'
import HappileeText from '~/components/HappileeText.vue'
export default {
  components:{
    Toolbar,
    HappileeText
  },
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: '$vuetify.icons.home',
          title: 'Home',
          to: '/home',
          meta: {
            crumbs: [{
              text: 'Home',
              disabled: false,
              disabled: true
            }]
          }
        },
        {
          icon: '$vuetify.icons.grin-hearts',
          title: 'Our Story',
          to: '/story',
          meta: {
            crumbs: [
            {
              text: 'Home',
              to: '/home',
              disabled: false
            },
            {
              text:'Our Story',
              disabled: true
            }]
          }
        },

        {
          icon: '$vuetify.icons.users',
          title: 'Our Family',
          to: '/family',
          meta: {
            crumbs: [
            {
              text: 'Home',
              to: '/home'
            },
            {
              text:'Our Family',
            }]
          }
        },
        {
          icon: '$vuetify.icons.gifts',
          title: 'Registry',
          to: '/registry',
          meta: {
            crumbs: [
            {
              text: 'Home',
              disabled: false,
              to: '/home'
            },
            {
              text:'Registry',
            }]
          }
        },
        {
          icon: '$vuetify.icons.edit',
          title: 'Contact Us!',
          to: '/contact'
        },
        {
          icon: '$vuetify.icons.welcome',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: '$vuetify.icons.lightbulb',
          title: 'Inspire',
          to: '/inspire'
        },
        {
          icon: '$vuetify.icons.tools',
          title: 'Testing',
          to:'/test'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods: {
    drawerChangeHandler() {
      this.drawer = !this.drawer
    }
  }
}
</script>

<style scoped>
.bg-gradient {
  background: hsl(200, 10%, 10%) !important;
  /* background: rgb(255,255,255) !important;
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(136,136,136,1) 71%, rgba(98,98,98,1) 100%) !important; */
}
</style>
