import { createRouter, createWebHashHistory } from 'vue-router';
import { getQueryString } from 'cupshe-utils';
// 创建路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    name: "ArticleList",
    path: "/ArticleList",
    component: () => import("@/views/ArticleList/index.vue"),
    children: []
  }, {
    name: "ArticleList copy",
    path: "/ArticleList copy",
    component: () => import("@/views/ArticleList copy/index.vue"),
    children: []
  }, {
    name: "Articles",
    path: "/Articles",
    component: () => import("@/views/Articles/index.vue"),
    children: []
  }, {
    name: "Home",
    path: "/Home",
    component: () => import("@/views/Home/index.vue"),
    children: []
  }, {
    name: "Templates",
    path: "/Templates",
    component: () => import("@/views/Templates/index.vue"),
    children: []
  }]
});
// 路由钩子
router.beforeEach((to, from, next) => {
  // url上有token时设置到localStorage中
  if (getQueryString('token')) {
    localStorage.setItem('token', getQueryString('token') || '');
  }
  if (getQueryString('lang')) {
    localStorage.setItem('lang', getQueryString('lang') || '');
  }
  if (getQueryString('userId')) {
    localStorage.setItem('lang', getQueryString('userId') || '');
  }
  // 2、获取token
  const token = localStorage.getItem('token');
  // 登录拦截
  if (!token) {
    if (self === top) {
      next();
    } else {
      parent.postMessage(400001, '*');
    }
  } else {
    next();
  }
});
export default router;