import { createRouter, createWebHashHistory } from "vue-router"
// vue-cli3 中的整体引入方法
let modules = import.meta.globEager('./modules/**/*.js')
let routeModuleList = []
Object.keys(modules).forEach((key)=> {
    const mod = modules[key].default || {}
    const modList = Array.isArray(mod) ? [...mod] : [mod]
    routeModuleList.push(...modList)
})

let routes = [
    {
        path: "/login",
        name: "Login",
        meta: {
            title: "登录"
        },
        component: () => import('../views/login/index.vue')
    }
]
// 动态路由
export const asyncRoutes = [...routeModuleList]

console.log(routeModuleList, routes, "routes");
// 无需验证的路由
routes = routes.concat(routeModuleList)
const router = createRouter({
    /**
     * 使用hash模式  createWebHashHistory()
     * HTML5模式 createWebHistory() 我们的应用是单页的客户端应用，需要在服务器上添加一个简单的回退路由
     */
    history: createWebHashHistory(),
    routes: routes // 创建路由实例并传递 `routes` 配置
})

router.beforeEach((to, from) => {

})

export default router

