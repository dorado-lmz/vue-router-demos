import Vue from 'vue'
import Router from 'vue-router'
import Example from './Example.vue'
import examples from '../examples'
import App from './App.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'example',
      path: '/examples/:example',
      component: Example,
      props: (route) => examples.find(example => example.name === route.params.example),
      beforeEnter (to, from, next) {
        examples.find(example => example.name === to.params.example) ? next() : next(false)
      }
    },
    {
      path: '*',
      component: {
        render (h) { return h('div', '404. Not Found.') }
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.group('global');
  console.log('global beforEach');
  next();
});
router.afterEach (() => {
  console.log('global afterEach');
  console.groupEnd('global');
});

new Vue({
  router,
  ...App
}).$mount('#app')
