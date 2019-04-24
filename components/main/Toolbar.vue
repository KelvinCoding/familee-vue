<template>
  <v-toolbar clipped-left fixed app>
    <v-toolbar-side-icon @click="drawerChangeEvent" />
    <v-btn v-if="false" icon @click.stop="miniVariant = !miniVariant">
      <v-icon>{{ `chevron_${miniVariant ? 'right' : 'left'}` }}</v-icon>
    </v-btn>
    <v-toolbar-title v-text="title" />
  </v-toolbar>
</template>

<script>
export default {
  props:{
    miniVariant: {
      type: Boolean,
      required: false,
      default: false
    },
    title: {
      type: String,
      required: false,
      default: 'Johanna & Kelvin'
    }
  },
  methods: {
    drawerChangeEvent(event) {
      this.$emit('toolbar-drawer');
    }
  }
}
</script>

<style>

</style>
