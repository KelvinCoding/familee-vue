<template>
  <div v-show="isMounted">
    <v-flex>
      <HappileeText />
    </v-flex>
    <v-flex mt-5 class="display-2 font-cursive" text-xs-center>
      <span>Johanna & Kelvin</span>
      <span>Lee</span>
    </v-flex>
    <v-flex class="title" text-xs-center>
      <p>
        <v-icon v-text="'$vuetify.icons.city'"></v-icon>
        Fort Worth, Texas
      </p>
      <p class="subheading" text-xs-center>
        Additional Details Coming Soon!
      </p>
    </v-flex>
    <v-flex mt-3 mb-5>
      <v-layout
        v-show="IsBig"
        align-start
        justify-center
        row
        wrap
      >
        <v-flex
          v-for="(item, index) in items"
          :key="index"
          text-xs-center
          shrink
        >
          <v-btn
          :to="item.to"
          outline
            nuxt>
            <span>{{item.title}}</span>
          </v-btn>
        </v-flex>
      </v-layout>
      <v-overflow-btn
        v-show="!IsBig"
        :return-object="true"
        :items="items"
        item-text="title"
        v-on:change="dropdownSelect"
        label="Home"
        >
      </v-overflow-btn>
    </v-flex>
  </div>
</template>

<script>
import HappileeText from '~/components/HappileeText.vue'

export default {
  components:{
    HappileeText
  },
  data() {
    return {
      isMounted: false,
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

        // {
        //   icon: '$vuetify.icons.users',
        //   title: 'Our Family',
        //   to: '/family',
        //   meta: {
        //     crumbs: [
        //     {
        //       text: 'Home',
        //       to: '/home'
        //     },
        //     {
        //       text:'Our Family',
        //     }]
        //   }
        // },
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
        }
      ],
      currentSelectedItem: {}
    }
  },
  computed: {
    IsBig() {
      return this.isMounted ? this.$vuetify.breakpoint.mdAndUp : false
    }
  },
  methods: {
    dropdownSelect(value){
      this.$router.push(value.to)
    }
  },
  mounted(){
    this.isMounted = true;
  }
}
</script>

<style scoped>
.font-cursive {
  font-family: 'Calligraffitti', cursive !important;
}

.border-y-1-solid {
  border-top: 1px solid;
  border-bottom: 1px solid;
}

</style>
