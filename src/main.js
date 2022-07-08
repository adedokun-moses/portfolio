import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import  VueGoogleMaps from '@fawmi/vue-google-maps'

createApp(App).use(router).mount('#app')
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBTpbWZONQMnSlSPu-Dcr43aVeM4WJWey8',
    },
}).mount('#app')
