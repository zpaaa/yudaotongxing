import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
 import 'swiper/dist/css/swiper.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

import 'common/stylus/index.styl'

fastclick.attach(document.body)
new Vue({
	el:"#app",
	render: h => h(App),
	router
})
var html=document.getElementsByTagName('html')[0];
function fontSize(){
    var w=document.documentElement.clientWidth;
    //console.log(w);
    w>650?w=625:w=w;
    html.style.fontSize=w/10.80+'px'
}
fontSize()
window.onresize=function(){
    fontSize()
}