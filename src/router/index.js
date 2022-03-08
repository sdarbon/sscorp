import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Skills from '@/views/Skills.vue'
import Login from '@/views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  var isAuthenticated= false;

  if(localStorage.getItem('User'))
    isAuthenticated = true;
   else
    isAuthenticated= false

  console.log(`${from.path} to ${to.path}?`);
  if (to.name !== 'Login' && !isAuthenticated ) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router
