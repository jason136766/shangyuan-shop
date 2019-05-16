import Vue from 'vue'
import App from './App.vue'
import { Row, Col, Search, Swipe, SwipeItem, Lazyload, Tab, Tabs, Tabbar, TabbarItem  } from 'vant';

Vue.use(Row).use(Col).use(Search).use(Swipe).use(SwipeItem).use(Lazyload).use(Tab).use(Tabs).use(Tabbar).use(TabbarItem);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
