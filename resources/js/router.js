import Vue from 'vue';
import Router from 'vue-router';
import Welcome from './views/Welcome.vue';
import User from './views/Users.vue';

Vue.use(Router);

const routes =[
    {
        path:'/',
        name:'welcome',
        component: Welcome
    },
    {
        path:'/users',
        name:'users',
        component: User
    }
];

const router = new Router({
    routes:routes
});

export default router;