import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router/index"
// 动态生成验证滑块，结合后端进行二次校验，能有效避免被恶意抓取后的模拟验证，进一步提升验证码的可靠性。
import MakeitCaptcha from 'makeit-captcha';
import 'makeit-captcha/dist/captcha.min.css'

import "@/assets/css/reset.css"

// import { setupStore } from '@/store';



const app = createApp(App)

app.use(MakeitCaptcha);

// setupStore(app);
// 使用路由
app.use(router)
app.use(ElementPlus)
app.mount('#app')

