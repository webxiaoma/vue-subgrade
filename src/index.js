// import 'es6-promise/auto'
// import 'babel-polyfill';

import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false


// import './assets/fonts/iconfont.css'  // 引入icon 图标

import 'element-ui/lib/theme-chalk/index.css'  // element 样式
import 'element-ui/lib/theme-chalk/display.css';

import {
  Container,
  Header,
  Main,
  Footer,
  Aside,
  Row,
  Col,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Button,
  Tabs,
  TabPane,
  Form,
  FormItem,
  Input,
  Checkbox,
  Tooltip,
} from 'element-ui'

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Button)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Tooltip)






export default new Vue({
    el:'#root',
    router,
    store,
    render: h => h(App)
})