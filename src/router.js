import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home.vue"
import Document from "./pages/Document.vue"
import AllDocuments from "./pages/AllDocuments.vue"
import Search from "./pages/Search.vue"

Vue.use(Router);

export default new Router({
    mode: 'history',

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/search',
            name: 'home',
            component: Home
        },
        {
            path: '/document/:id',
            name: 'document',
            component: Document
        },
        {
            path: '/documents',
            name: 'AllDocuments',
            component: AllDocuments
        },
        {
            path: '/search/:query',
            name: 'search',
            component: Search
        }
    ]
})