import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from "unhead"

import Bootstrap from 'bootstrap/dist/js/bootstrap.js'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
// Css Animation
import 'animate.css';
import '../node_modules/nprogress/nprogress.css' 

const head = createHead()
createApp(App).use(router).use(Bootstrap).use(head).mount('#app')
