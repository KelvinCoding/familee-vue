import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'
import '@fortawesome/fontawesome-free/css/all.css'

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
  },
  iconfont: 'fa',
  icons: {
    'gem': 'fas fa-gem',
    'city': 'fas fa-city',
    'home': 'fas fa-home',
    'grin-hearts': 'fas fa-grin-hearts',
    'users': 'fas fa-users',
    'lightbulb': 'fas fa-lightbulb',
    'tools': 'fas fa-tools',
    'gifts': 'fas fa-gifts',
    'welcome': 'fas fa-door-open'
  }
})
