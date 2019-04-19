import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'
// import famileetheme from './famileetheme'

Vue.use(Vuetify, {
  // famileetheme
  theme: {
    // primary: colors.pink.lighten1,
    primary: colors.blue.darken2,
    accent: colors.pink.darken1,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  }
})
