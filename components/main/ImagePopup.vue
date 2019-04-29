<template>
  <v-layout row justify-center align-center>
    <v-layout slot="activator" row justify-center>
      <v-flex v-for="(item, index) in imageSources" :key="index">
        <v-img :src="item" max-height="80vh" contain @click="dialog = true" />
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" persistent>
      <v-card>
        <v-layout row justify-center>
          <v-flex v-for="(item, index) in imageSources" :key="index">
            <v-img :src="item" @click="dialog = false" />
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: {
    imageSources: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      dialog: false
    }
  }
}
</script>

<style></style>
