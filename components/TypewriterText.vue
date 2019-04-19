<template>
  <transition appear name="typewriter">
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

<style scoped>
.force-monospace {
  font-family: 'Roboto Mono', monospace !important;
}

.typewriter-enter-active {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.2rem solid transparent; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: auto; /* Adjust as needed */
  animation: typing 2s steps(17, end) 1s 1 both,
    blink-caret 500ms steps(1, end) 0s 8;
}

.anim-delay-5 {
  animation-delay: 5s;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: black;
  }
}
</style>
