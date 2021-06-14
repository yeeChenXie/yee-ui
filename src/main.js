import { createApp } from 'vue'
import App from './App.vue'
// import XButton from "../package/button/index.js"
import YeeUi from 'yee-ui';
// import YButton from '../lib/yee-ui.common'

const app = createApp(App)
// app.component(YButton.name, YButton);
app.use(YeeUi)
app.mount('#app')
