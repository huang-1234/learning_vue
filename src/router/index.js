import Vue from 'vue';
import VueRouter from 'vue-router';


// import Home from '../pages/Home.vue';
// import Todo from '../pages/Todo.vue';
const Home = ()=> import ('../pages/Home.vue');
const Todo = () => import('../pages/Todo.vue');

const Creator = () => import('../pages/Creator');



Vue.use(VueRouter);

const routes = [
  {
    path: '/home/',
    component: Home
  },
  {
    path: '/todo/',
    component: Todo
  },
  {
    path: '/creator',
    component: Creator,
    children: [
      {
        path: '',
        
      }
    ]
  }

]

// router config
const router = new VueRouter({
   routes: routes,
   mode:'history'
});

export default router