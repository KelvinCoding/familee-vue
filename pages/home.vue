<template>
  <div v-show="isFinishedMounting">
    <v-layout justify-start column text-xs-center>
      <v-flex></v-flex>
      <v-flex>
        <HappileeText />
      </v-flex>
      <v-flex mt-5 class="display-2 font-cursive">
        <span>Johanna & Kelvin</span>
        <span>Lee</span>
      </v-flex>
      <v-flex class="title">
        <p>
          <v-icon v-text="'$vuetify.icons.city'"></v-icon>
          Fort Worth, Texas
        </p>
        <p class="subheading">
          Additional Details Coming Soon!
        </p>
      </v-flex>
      <v-flex mt-5 mb-5>
        <v-layout row justify-center>
          <v-flex v-for="(buttonData, index) in buttonInfo" :key="index" pa-1>
            <v-btn color="pink" dark :to="buttonData.to" nuxt>
              {{ buttonData.name }}
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex>
        <v-carousel height="90%" hide-delimiters>
          <v-carousel-item v-for="(i, index1) in carouselImages" :key="index1">
            <v-layout row align-center fill-height>
              <v-flex v-for="(j, index2) in i.groupImageSrc" :key="index2">
                <v-img :src="j" />
              </v-flex>
            </v-layout>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-spacer></v-spacer>
    </v-layout>
  </div>
</template>
<script>

import HappileeText from '~/components/HappileeText.vue'

export default {
  components: {
    HappileeText
  },
  data() {
    return {
      isFinishedMounting: false,
      shouldChangeName: false,
      buttonInfo: [
        {
          name: 'Our Story',
          to: '/story'
        },
        {
          name: 'Our Family',
          to: '/family'
        },
        {
          name: 'Registry',
          to: '/registry'
        }
      ],
      images: {
        christmas201701: {
          src: '/together/2017-christmas-together-01-cropped.jpg'
        },
        christmas201801: {
          src: '/together/2018-christmas-together.jpg'
        }
      },
      carouselImages: [
        {
          groupImageSrc: ['/together/2017-christmas-together-01-cropped.jpg']
        },
        {
          groupImageSrc: [
            '/together/2016-kcup-cropped.jpg',
            '/together/2019-gio-cropped.jpg',
            '/together/2018-sherlock-cropped.jpg',
            '/together/2018-johanna-01-cropped.jpg'
          ]
        }
      ],
      names: {
        transitionToText: 'Happi-Lee',
        default: 'Happily'
      },
      lastName: {
        transitionToText: 'Lee Family',
        default: 'Family'
      }
    }
  },
  computed: {
    isSmallScreen() {
      return this.isFinishedMounting
        ? !this.$vuetify.breakpoint.mdAndUp
        : true
    },
    layoutBinding() {
      const isBig = this.isFinishedMounting
        ? this.$vuetify.breakpoint.mdAndUp
        : true

      const binding = {
        column: !isBig
      }

      binding['align-end'] = isBig
      binding['align-center'] = !isBig
      binding['justify-space-around'] = isBig
      binding['justify-start'] = !isBig

      return binding
    }
  },
  mounted() {
    this.isFinishedMounting = true
    setTimeout(this.changeNames, 2500)
  },
  methods: {
    changeNames() {
      this.shouldChangeName = true
      // console.log("ChangeNames!");
    }
  }
}
</script>
<style scoped>
.force-monospace {
  font-family: 'Roboto Mono', monospace !important;
}

.font-cursive {
  font-family: 'Calligraffitti', cursive !important;
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}


</style>
