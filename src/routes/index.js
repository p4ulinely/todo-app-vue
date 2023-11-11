import { createRouter,  createWebHistory } from "vue-router";
import store from '../store/';

import HomeView from '../views/HomeView.vue';
const About = { template: '<div>About</div>' }

// TODO: it doesn't make much sense leave this thing here
store.subscribe((mutation, state) => localStorage.setItem('store', JSON.stringify(state)));

const routes = [
  { path: '/', component: HomeView },
  { path: '/profile/:id', component: () => import('../views/ProfileView.vue'), meta: { requiresAuth: true }},
  { path: '/tasks', name: 'tasks', component: () => import('../components/TasksComponent.vue'), meta: { requiresAuth: true }},
  { path: '/login', component: () => import('../views/LoginView.vue'), meta: { requiresAuth: false }},
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = store.state.userModule.user;

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