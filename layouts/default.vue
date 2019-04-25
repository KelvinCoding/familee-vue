<template>
  <v-app dark>
    <v-content style="z-index: 10">
      <v-container v-show="isMounted" fluid grid-list-xs>
        <v-layout column justify-start>
          <Header />
          <v-flex>
            <nuxt />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <div class="auroral-container">
      <div class="auroral-northern"></div>
      <div class="auroral-stars"></div>
    </div>
  </v-app>
</template>

<script>
import Header from '~/components/main/Header.vue'

export default {
  components: {
    Header
  },
  data() {
    return {
      isMounted: false
    }
  },
  mounted() {
    this.isMounted = true
  }
}
</script>

<style scoped lang="scss">
.font-cursive {
  font-family: 'Calligraffitti', cursive !important;
}

@keyframes northern {
  0% {
    transform: translate(5%, -2%);
  }

  25% {
    transform: translate(10%, 7%);
  }

  40% {
    transform: rotate(-10deg);
  }

  60% {
    transform: translate(7%, -2%);
  }

  85% {
    transform: translate(6%, 3%) rotate(12deg);
  }

  100% {
    transform: none;
  }
}

.auroral-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
}

.auroral-northern {
  position: absolute;
  overflow: hidden;
  left: -50%;
  top: -50%;
  width: 200%;
  height: 200%;
  animation-name: northern;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  background: linear-gradient(
    180deg,
    #a3cab0 10%,
    #27756b 30%,
    #000927 60%
  ) !important;
}

/* We start with setting the variables: how many stars there should be and an empty variable declaration for later */
$star-number: 100;
$current-stars: 0;

/* Now we just style this one 1px by 1px div to be a round dot fixed in top left corner */
.auroral-stars {
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  background: white;

  /* We count down from the number of stars that we chose to have: */
  @while $star-number > 0 {
    /* And with each iteration we concatenate string with another box shadow declaration.
    We set random position for the box shadow and random size (from 1 to 2 px).
    The last thing to add is a comma, but we need to use and unquote function to add that */

    $current-stars: $current-stars +
      (random(100) + vw)
      (random(50) + vh)
      0
      (random(2) + px)
      rgba(255, 255, 255, 0.7) +
      unquote(', ');

    /* The last box shadow needs to be added without a comma.
     After we have the whole string ready, we add it to the box-shadow as a value */
    @if $star-number == 1 {
      $current-stars: $current-stars +
        (random(100) + vw)
        (random(50) + vh)
        0
        0
        rgba(255, 255, 255, 0.9);
      box-shadow: $current-stars;
    }

    /* Remember to count down. Otherwise you will end up with an infinite loop */
    $star-number: $star-number - 1;
  }
}
</style>
