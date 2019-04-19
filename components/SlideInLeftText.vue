<template>
  <transition appear name="slide-in-left">
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
.slide-in-left-enter-active {
  -webkit-animation: slide-in-left 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
  animation: slide-in-left 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
