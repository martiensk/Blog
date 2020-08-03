import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export function createRouter() {
    return new Router({
        mode: 'history',
        base: process.env.BASE_URL,
        routes: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/about',
                name: 'about',
                component: () =>
                    import(/* webpackChunkName: "about" */ './views/About.vue')
            },
            {
                path: '/:category/:article',
                name: 'article',
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ './views/Article.vue'
                    )
            },
            {
                path: '*',
                name: '404',
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ './views/FourOFour.vue'
                    )
            }
        ]
    });
}
