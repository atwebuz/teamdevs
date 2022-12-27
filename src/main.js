import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from "unhead"
import Antd from 'ant-design-vue';


import Bootstrap from 'bootstrap/dist/js/bootstrap.js'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
// Css Animation
import 'animate.css';
// NProgress style
import '../node_modules/nprogress/nprogress.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; 
// UI library style
import 'ant-design-vue/dist/antd.css';

const head = createHead()
createApp(App).use(router).use(Bootstrap).use(head).use(Antd).mount('#app')
