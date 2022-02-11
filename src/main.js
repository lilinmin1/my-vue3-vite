import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router/index"

// import { setupStore } from '@/store';



const app = createApp(App)

// setupStore(app);
// 使用路由
app.use(router)
app.use(ElementPlus)
app.mount('#app')

