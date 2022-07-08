import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Portfolio from '../views/portfolio.vue'
import Blog from '../views/blog.vue'
import Contact from '../views/contact.vue'
import Blogdetails from '../views/blogdetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },

  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },

  // Blog Details Parameter
   {
    path: '/blog/:id',
    name: 'blogdetails',
    component: Blogdetails
  }






]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(){
    //Always scroll to top
    return {top: 0}
  }
})

export default router
