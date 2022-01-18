import { createWebHistory, createRouter } from "vue-router";
import Store from "../pages/Store";
import Login from "../pages/Login";
import Pos from "../pages/Pos";
import Transaction from "../pages/Transaction";
import Report from "../pages/Report";
import Register from "../pages/Register";
export const routes = [
    {
        name: "store",
        path: "/store",
        component: Store,
    },
    {
        name: "login",
        path: "/login",
        component: Login,
    
    },
    {
        name: "pos",
        path: "/pos",
        component: Pos,
    },
    {
        name: "transaction",
        path: "/transaction",
        component: Transaction,
    },
    {
        name: "report",
        path: "/report",
        component: Report,
    },
    {
        name: "register",
        path: "/register",
        component: Register,
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior() {
        window.scrollTo(0, 0);
    }
});



export default router;