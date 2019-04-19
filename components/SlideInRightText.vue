<template>
  <transition appear name="slide-in-right" :transtion-delay="{ delayMs }">
    <div>
      {{ text }}
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    delayMs: {
      type: Number,
      default: 0,
      required: false
    }
  }
}
</script>
<style>
.slide-in-right-enter-active {
  -webkit-animation: slide-in-right 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-right 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
