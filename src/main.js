import {
	createApp
} from 'vue'

import App from './App.vue';
import store from './store/index.js';
import miniApp from './utils/mini.app.api.js';

const app = createApp(App);

app.config.globalProperties.$miniApp = miniApp;
app.use(store);
app.mount()
