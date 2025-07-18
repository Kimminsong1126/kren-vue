import {createRouter, createWebHistory} from 'vue-router';
import Home from '../todo/TodoListPage.vue';
import List from '../page/todo/ListPage.vue';

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path: '/',
            name: 'Home',
            component : Home
        },
        {
            path: '/list',
            name: 'List',
            component : List
        }
        // {
        //     path: '/todo/list',
        //     name: '',
        //     component : List
        // }
    ]
});

export default router;