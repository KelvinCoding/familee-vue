<template>
  <div class="light"></div>
</template>
<style lang="scss" scoped>
.tree {
  fill: #000;
}
.sky-bright {
  stop-color: hsl(195, 70%, 25%);
}
.sky-dark {
  stop-color: hsl(240, 30%, 5%);
}

.sky {
  fill: url(#sky-gradient);
}

.mountains {
  fill: url(#linear-gradient);
}

.hills {
  fill: url(#linear-gradient-2);
}

.star {
  fill: #fff;
  animation: star 2s infinite alternate;
  opacity: 0.8;
  @for $n from 1 through 11 {
    &:nth-child(#{$n}) {
      animation-delay: random(20) * -0.1s;
    }
  }
}

@keyframes star {
  0% {
    opacity: 0.2;
  }
}

.light {
  opacity: 0.5;
  animation: lights 5s infinite alternate;
  @for $n from 1 through 60 {
    &:nth-child(#{$n}) {
      opacity: random(8) * 0.1;
      transform: scale(random(9) * 0.1+0.5, random(50) * 0.01+0.6);
      animation-delay: random(10) * -0.5s;
    }
  }
}
@keyframes lights {
  0% {
    opacity: 0;
  }
}
</style>
