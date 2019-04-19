<template>
  <div v-show="isFinishedMounting">
    <v-layout column wrap justify-space-around fill-height text-xs-center>
      <v-flex class="display-3 text-uppercase force-monospace">
        <transition name="fade" mode="out-in">
          <span v-if="shouldChangeName" key="2"
            >{{ names.transitionToText }}
          </span>
          <span v-else key="1">{{ names.default }}</span>
        </transition>
        <span>Ever After</span>
      </v-flex>
      <v-flex mt-5 class="title">
        <p>
          <v-icon>calendar_today</v-icon>
          June 7th, 2019
        </p>
        <p>
          <v-icon>location_city</v-icon>
          Fort Worth, Texas
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
export default {
  components: {},
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
