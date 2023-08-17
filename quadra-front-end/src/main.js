import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import PanelMenu from 'primevue/panelmenu';

import './assets/main.css'

//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     
//core
import "primevue/resources/primevue.min.css";
//icons
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const app = createApp(App)

app.use(PrimeVue)
app.use(router)

app.component('Button', Button);
app.component('Calendar', Calendar);
app.component('PanelMenu', PanelMenu);


app.mount('#app')
