import { createRouter,  createWebHistory } from "vue-router";
import store from '../store/';

import HomeView from '../views/HomeView.vue';
// import TasksComponent from '../components/TasksComponent.vue';
// const About = { template: '<div>About</div>' }

const routes = [
  { path: '/', component: HomeView },
  { path: '/profile/:id', component: () => import('../views/ProfileView.vue'), meta: { requiresAuth: true }},
  { path: '/tasks', name: 'tasks', component: () => import('../components/TasksComponent.vue'), meta: { requiresAuth: true }},
  { path: '/login', component: () => import('../views/LoginView.vue'), meta: { requiresAuth: false }},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = store.state.user;

  if (to.meta.requiresAuth && !currentUser.id) {
    console.log('1')
    next("/login");
    
  } else if (to.path == "/login" && currentUser.id) {
    console.log('2')
    next("/");
    
  } else {
    console.log('3')
    next();
  }
});

export default router;