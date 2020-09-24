import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [];
//参数分别是文件夹路径、是否遍历所有子目录、用正则筛选文件名、懒加载
importPages(require.context('@/views', true, /\.vue$/, 'lazy'));

function importPages(r) {
  r.keys().forEach(key => {
    var pathArr = key.split('.')[1].split('/');
    if (pathArr.length <= 3) {
      if (pathArr.length === 3) {
        routes.forEach(route => {
          if (route.name === pathArr[1]) {
            route.children.push({
              name: `${pathArr[1]}.${pathArr[2]}`,
              path: key.split('.')[1],
              component: resolve => require([`@/views${key.split('.')[1]}`], resolve)
            });
          }
        });
      } else {
        routes.push({
          name: pathArr[1],
          path: pathArr[1] === 'Home' ? '/' : key.split('.')[1],
          component: resolve => require([`@/views${key.split('.')[1]}`], resolve),
          children: []
        })
      }
    }
  });
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {next();});

router.afterEach((to, from) => {});

export default router
