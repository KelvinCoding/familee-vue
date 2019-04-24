<template>
  <div>
    <v-layout justify-start column text-xs-center>
      <v-flex>
        <HappileeText />
      </v-flex>
      <v-flex my-5 class="display-1">
        <span>Our Story</span>
      </v-flex>
      <v-flex>
        <v-layout align-start justify-center row wrap>
          <v-flex xs12 md8 text-xs-left>
          <v-card>
            <v-card-text class="subheading">
              <p>
                Johanna and Kelvin met in July 2017 at Arthur Murray dance studio in Fort Worth, Texas. The two encountered each other in group classes and social dance parties, but it wasn’t until their mutual friend invited both of them to grab food and drinks after a social party that the two had time to talk between dance steps.
              </p>
              <p>
                From there, they became unofficial dance partners and got to know one another through deep discussions and frequent texting. By September 1st, over some tacos from TacoHeads, the two pragmatically admitted mutual feelings for each other and Kelvin invited her as a +1 to a friend’s wedding that same weekend.
              </p>
              <p>
                This was very much so an atypical relationship for 2017. Things were not only straightforward but were approached with clarity, respect, and above all else, efficiency. Whether Johanna or Kelvin took a two week trip somewhere else in the globe, they always maintained communications which only further strengthened their bond. They’ve even gone on to enjoy traveling together many places and can’t wait for more in the future.
              </p>
              <p>
                Places they’ve traveled together:
              </p>
              <ul>
                <li>Austin, Texas</li>
                <li>Vancouver, Canada</li>
                <li>Los Angeles, California</li>
                <li>San Francisco, California</li>
              </ul>
              <br />
              <p>
                In late March of 2019, Kelvin scheduled a trip with some friend and Johanna’s sister to Harry Potter World in Hollywood, California. It was only appropriate to propose to a girl who grew up with Harry Potter in front of the Hogsmeade entrance. She said “of course”, and here we are now.
              </p>
            </v-card-text>
          </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import HappileeText from '~/components/HappileeText.vue'

export default {
  components: {
    HappileeText
  },
}
</script>
