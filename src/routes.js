import VueRouter from 'vue-router';
import Home from "@/views/Home";
import About from "@/views/About";
import WatchNow from "@/views/WatchNow";
import Soundtrack from "@/views/Soundtrack";
import MoviePosters from "@/views/MoviePosters";
import Newsletter from "@/views/Newsletter";
import Vue from 'vue/dist/vue.js';

Vue.use(VueRouter )

const routes =[
    {
        path:'/',
        component:Home,
        name:'home'
    },
    {
        path:'/about',
        component:About,
        name:'about'
    },
    {
        path: '/watch-now',
        component: WatchNow,
        name: 'watch-now'
    },
    {
        path:'/soundtrack',
        component:Soundtrack,
        name:'soundtrack'
    },
    {
        path:'/movie-posters',
        component:MoviePosters,
        name:'movie-poster'
    },
    {
        path:'/newsletter',
        component:Newsletter,
        name:'newsletter'
    }
];

export default new VueRouter({
    routes,
    linkActiveClass:'active',
    mode:'history'
})
