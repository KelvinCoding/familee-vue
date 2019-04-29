<template>
  <div>
    <v-layout justify-start column text-xs-center>
      <v-flex>
        <v-carousel v-if="false" height="90%" hide-delimiters>
          <v-carousel-item v-for="(i, index1) in carouselImages" :key="index1">
            <v-layout row align-center fill-height>
              <v-flex v-for="(j, index2) in i.groupImageSrc" :key="index2">
                <v-img :src="j" />
              </v-flex>
            </v-layout>
          </v-carousel-item>
        </v-carousel>
        <v-carousel v-else height="90%" hide-delimiters :interval="9000000">
          <v-carousel-item v-for="(i, index1) in carouselImages" :key="index1">
            <ImagePopup :image-sources="i.groupImageSrc" />
          </v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-spacer></v-spacer>
    </v-layout>
  </div>
</template>
<script>
import ImagePopup from '~/components/main/ImagePopup.vue'

export default {
  components: {
    ImagePopup
  },
  data() {
    return {
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
        },
        {
          groupImageSrc: ['/together/PANO_20180822_234510.jpg']
        },
        {
          groupImageSrc: ['/together/IMG_20180826_123158.jpg']
        },
        {
          groupImageSrc: [
            '/together/IMG_20181020_150656.jpg',
            '/together/MVIMG_20180214_214734.jpg',
            '/together/2018-dance-together.jpg'
          ]
        },
        {
          groupImageSrc: ['/together/IMG_20190329_125026.jpg']
        }
      ]
    }
  }
}
</script>
