<template>
  <v-layout column wrap align-center justify-start>
    <v-flex>
      <iframe
        :src="contactForm.url"
        :width="contactForm.width"
        :height="contactForm.height">
        Loading...
      </iframe>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: function() {
    return {
      contactForm: {
        url: 'https://docs.google.com/forms/d/e/1FAIpQLScWfhvP_km6FzZ5BAKqZ9_6FGbKGNEDZqL7a783yQh6Qv-GwQ/viewform?embedded=true',
        width: 640,
        height: 1054
      }
    }
  }
}
</script>

<style>

</style>
