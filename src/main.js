import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VModal from 'vue-js-modal'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home/Home.vue'
import Prestations from './components/Prestations/Prestations.vue'
import ProdMusic from './components/Prestations/Childrens/ProdMusic.vue'
import ProdAudio from './components/Prestations/Childrens/ProdAudio.vue'
import Instruments from './components/Prestations/Childrens/Instruments.vue'
import Material from './components/Material/Material.vue'
import Studio from './components/Studio/Studio.vue'
import Contact from './components/Contact/Contact.vue'

Vue.use(Vuelidate)
Vue.use(VModal)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      "path": "/",
      "component": Home
    },
    {
      "path": "/prestations",
      "component": Prestations,
      children: [
        {
          "path": "/prod_music",
          component: ProdMusic
        },
        {
          "path": "/prod_audio",
          component: ProdAudio    
        },
        {
          "path": "/instruments",
          component: Instruments
        }
      ]
    },
    {
      "path": "/materiel",
      "component": Material
    },
    {
      "path": "/studio",
      "component": Studio
    },
    {
      "path": "/contact",
      "component": Contact
    }
  ],
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
