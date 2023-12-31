import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './routes';
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

createApp(App)
  .use(store)
  .use(router)
  .use(PrimeVue)
  .mount('#app');
