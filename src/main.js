import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';
import swal from 'sweetalert';

import axios from 'axios'
window.axios = require('axios')

createApp(App).use(router).mount('#app')
