import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
// import "vue-material-design-icons/styles.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
