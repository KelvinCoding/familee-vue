<template>
  <div>
    <a :href="link" target="_blank">
    <v-card>
      <v-card-title primary-title>
        <v-layout row wrap justify-center>
          <v-flex xs12>
            <component :is="logoComponent">{{title}}</component>
          </v-flex>
        </v-layout>
      </v-card-title>
    </v-card>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    logoComponent: {
      type: Object,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>
