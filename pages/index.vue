<template>
  <div>
    <v-layout justify-start column text-xs-center>
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
        }
      ]
    }
  }
}
</script>
