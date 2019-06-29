import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Row, Col, Search, Swipe, SwipeItem, Lazyload, Tab, Tabs, Tabbar, TabbarItem, Collapse, CollapseItem, Rate, DropdownMenu, DropdownItem, Image } from 'vant';


Vue.use(Row).use(Col).use(Search).use(Swipe).use(SwipeItem).use(Lazyload).use(Tab).use(Tabs).use(Tabbar).use(TabbarItem).use(Collapse).use(CollapseItem).use(Rate).use(DropdownMenu).use(DropdownItem).use(Image);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
