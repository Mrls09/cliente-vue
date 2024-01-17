import  VueRouter  from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
    //la ruta base
    {
        path: '/',//el inicio de nuestra ruta
        redirect:'/inicio'
    },
    {
        path:"/",
        component: {
            render(c) {
                return c('router-view');
            },
        },
        children: [
            {
                path: '/inicio', //lo posterior a la ruta base
                name: 'inicio',
                component: () => import('../components/Inicio.vue')
            },
            {
                path: '/profile', //lo posterior a la ruta base
                name: 'profile',
                component: () => import('../components/Profile.vue')
            },
            {
                path: '/producto', //lo posterior a la ruta base
                name: 'producto',
                component: () => import('../components/Producto.vue')
            },
            {
                path: '/juguetes-home', //lo posterior a la ruta base
                name: 'juguetes-home',
                component: () => import('../components/juguetes/InicioJuguetes.vue')
            },
            {
                path: '/electronicos', //lo posterior a la ruta base
                name: 'electronicos',
                component: () => import('../components/juguetes/Electronicos.vue')
            },
            {
                path: '/juegosdevideo', //lo posterior a la ruta base
                name: 'juegosdevideo',
                component: () => import('../components/juguetes/JuegosVideo.vue')
            },
            {
                path: '/electrodomesticos-home', //lo posterior a la ruta base
                name: 'electrodomesticos-home',
                component: () => import('../components/electrodomesticos/Electrodomesticos-home.vue')
            },
            {
                path: '/electrodomesticos-cocina', //lo posterior a la ruta base
                name: 'electrodomesticos-cocina',
                component: () => import('../components/electrodomesticos/Cocina.vue')
            },
            {
                path: '/electrodomesticos-estufa', //lo posterior a la ruta base
                name: 'electrodomesticos-estufa',
                component: () => import('../components/electrodomesticos/Estufa.vue')
            },
        ],
        
    },
   
]
const router = new VueRouter({routes,})
export default router;