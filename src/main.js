import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import App from './App.vue'
import router from './router'

library.add(fas, fab)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
