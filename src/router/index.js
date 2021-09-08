import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Cart from '../views/cart/Cart.vue'
import CateGory from '../views/category/Category.vue'
import Profile from '../views/profile/Profile.vue'




Vue.use(VueRouter)

const routes = [
	{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
		component:  resolve => require(['../views/home/Home.vue'], resolve)
  },
	{
		path: '/category',
		component:  resolve => require(['../views/category/Category.vue'], resolve)
	},
	{
		path: '/Cart',
		component:  resolve => require(['../views/cart/Cart.vue'], resolve)
	},
	{
		path: '/Profile',
		component:  resolve => require(['../views/profile/Profile.vue'], resolve)
	}
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL
})

router.beforeEach((to,from,next)=>{
	window.document.title = to.meta.title;
	next()
})

export default router