import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';
import swal from 'sweetalert';
import axios from 'axios';

const cors = require('cors')

app.use(cors({ origin: ['http://localhost:8082'], }))


window.axios = require('axios')

createApp(App).use(router).mount('#app')
