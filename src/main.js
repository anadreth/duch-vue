import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import OrganizationChart from 'primevue/organizationchart';
import 'primevue/resources/themes/lara-light-green/theme.css'



const app = createApp(App)

app.use(PrimeVue);
app.component('OrganizationChart', OrganizationChart);


app.mount('#app')

