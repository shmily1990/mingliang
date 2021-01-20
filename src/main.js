import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from '@/components/echarts'

Vue.config.productionTip = false
Vue.component('echarts', echarts)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
