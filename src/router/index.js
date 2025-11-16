import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import ContactPage from '@/pages/ContactPage.vue';
import AboutPage from '@/pages/AboutPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/contact', component: ContactPage },
    { path: '/about', component: AboutPage }
  ]
});

export default router;
