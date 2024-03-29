import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3a2bd4da = () => interopDefault(import('../pages/board.vue' /* webpackChunkName: "pages/board" */))
const _47a5c6d4 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _145f398a = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _1285797f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/board",
    component: _3a2bd4da,
    name: "board"
  }, {
    path: "/login",
    component: _47a5c6d4,
    name: "login"
  }, {
    path: "/signup",
    component: _145f398a,
    name: "signup"
  }, {
    path: "/",
    component: _1285797f,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
