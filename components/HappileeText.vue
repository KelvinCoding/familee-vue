<template>
  <v-layout row wrap justify-center>
    <v-flex
      xs12
      md6
      py-5
      text-xs-center
      class="display-3 border-y-1-solid border-color-teal font-cursive"
    >
      <transition name="fade" mode="out-in">
        <div v-if="shouldChangeName" key="2">
          <span>
            {{ names.transitionToText }}
          </span>
          <span>Ever After</span>
        </div>
        <div v-else key="1">
          <span>{{ names.default }}</span>
          <span>Ever After</span>
        </div>
      </transition>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      names: {
        transitionToText: 'Happi-Lee',
        default: 'Happily'
      },
      shouldChangeName: false
    }
  },
  mounted() {
    setTimeout(this.changeNames, 2500)
  },
  methods: {
    changeNames() {
      this.shouldChangeName = true
    }
  }
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.font-cursive {
  font-family: 'Calligraffitti', cursive !important;
}

.border-y-1-solid {
  border-top: 1px solid;
  border-bottom: 1px solid;
}

.border-color-teal-l {
  border-color: hsl(200, 40%, 80%);
}

.light-font-color {
  color: hsl(200, 40%, 80%);
}
</style>
