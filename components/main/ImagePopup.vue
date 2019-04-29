<template>
  <v-layout row justify-center align-center>
    <v-layout row justify-center slot="activator">
      <v-flex v-for="(item, index) in imageSources" :key="index" >
          <v-img
          @click="dialog = true"
          :src="item"
          max-height="80vh"
          contain/>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" persistent>
      <v-card>
        <v-layout row justify-center>
          <v-flex
            v-for="(item, index) in imageSources" :key="index"
          >
            <v-img @click="dialog = false"
              :src="item"
            />
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props:{
    imageSources: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      dialog: false
    }
  },
}
</script>

<style>

</style>
