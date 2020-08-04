import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Article from './views/Article.vue';
import About from './views/About.vue';
import FourOFour from './views/FourOFour.vue';

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
                component: About
            },
            {
                path: '/:category/:article',
                name: 'article',
                component: Article
            },
            {
                path: '*',
                name: '404',
                component: FourOFour
            }
        ]
    });
}
