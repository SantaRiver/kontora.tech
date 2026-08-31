import Vue from 'vue'
import App from './App.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'
import VueParallaxJs from 'vue-parallax-js'
import VueScrollTo from 'vue-scrollto'
import VueRouter from 'vue-router'
import VTooltip from 'v-tooltip'
import { hasAnalyticsConsent, loadYandexMetrika, trackHit } from './utils/analytics'

Vue.use(VTooltip)
Vue.use(VueRouter)
Vue.use(VueScrollTo)
Vue.use(VueParallaxJs)

Vue.config.productionTip = false

const routes = [
  { path: '/'}
]

const router = new VueRouter({
  mode:'history',
  routes // short for `routes: routes`
})

// Returning visitor who already consented — start Metrika right away.
if (hasAnalyticsConsent()) {
  loadYandexMetrika()
}

// ssr:true (see analytics.js) disables Metrika's automatic pageview-on-load
// hit. This is a single-route SPA — "/about", "/team" etc. are pushState
// paths from scroll navigation (App.vue's scrollTo()), not real page loads —
// so router.afterEach is the one place that sees every one of them,
// including the very first. No-ops safely if consent hasn't been given yet.
router.afterEach(() => {
  trackHit(window.location.href)
})

new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App),
}).$mount('#app')
