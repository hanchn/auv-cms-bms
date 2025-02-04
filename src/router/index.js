import { createRouter, createWebHashHistory } from 'vue-router';
import { getQueryString } from 'cupshe-utils';
// 创建路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    name: "ActivityList",
    path: "/ActivityList",
    component: () => import("@/views/ActivityList/index.vue"),
    children: []
  }, {
    name: "ActivityManage",
    path: "/ActivityManage",
    component: () => import("@/views/ActivityManage/index.vue"),
    children: []
  }, {
    name: "ArticleList",
    path: "/ArticleList",
    component: () => import("@/views/ArticleList/index.vue"),
    children: []
  }, {
    name: "ArticleManage",
    path: "/ArticleManage",
    component: () => import("@/views/ArticleManage/index.vue"),
    children: []
  }, {
    name: "CollectionList",
    path: "/CollectionList",
    component: () => import("@/views/CollectionList/index.vue"),
    children: []
  }, {
    name: "CollectionManage",
    path: "/CollectionManage",
    component: () => import("@/views/CollectionManage/index.vue"),
    children: []
  }, {
    name: "ColumnList",
    path: "/ColumnList",
    component: () => import("@/views/ColumnList/index.vue"),
    children: []
  }, {
    name: "Home",
    path: "/Home",
    component: () => import("@/views/Home/index.vue"),
    children: []
  }, {
    name: "MaterialList",
    path: "/MaterialList",
    component: () => import("@/views/MaterialList/index.vue"),
    children: []
  }, {
    name: "MaterialManage",
    path: "/MaterialManage",
    component: () => import("@/views/MaterialManage/index.vue"),
    children: []
  }, {
    name: "MenuList",
    path: "/MenuList",
    component: () => import("@/views/MenuList/index.vue"),
    children: []
  }, {
    name: "PointList",
    path: "/PointList",
    component: () => import("@/views/PointList/index.vue"),
    children: []
  }, {
    name: "PointManage",
    path: "/PointManage",
    component: () => import("@/views/PointManage/index.vue"),
    children: []
  }, {
    name: "ProductList",
    path: "/ProductList",
    component: () => import("@/views/ProductList/index.vue"),
    children: []
  }, {
    name: "ProductManage",
    path: "/ProductManage",
    component: () => import("@/views/ProductManage/index.vue"),
    children: []
  }, {
    name: "SiteConfig",
    path: "/SiteConfig",
    component: () => import("@/views/SiteConfig/index.vue"),
    children: []
  }, {
    name: "TemplateList",
    path: "/TemplateList",
    component: () => import("@/views/TemplateList/index.vue"),
    children: []
  }, {
    name: "TemplateManage",
    path: "/TemplateManage",
    component: () => import("@/views/TemplateManage/index.vue"),
    children: []
  }, {
    name: "UserList",
    path: "/UserList",
    component: () => import("@/views/UserList/index.vue"),
    children: []
  }, {
    name: "UserManage",
    path: "/UserManage",
    component: () => import("@/views/UserManage/index.vue"),
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