import Vue from 'vue'
import Router from 'vue-router'

import LogIn from '../components/LogIn'
// import TaskBoard from '../components/TaskBoard'
// import TaskCreate from '../components/TaskCreate'
// import TaskList from '../components/TaskList'
// import Task from '../components/Task'

import firebase from 'firebase/app'

Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      meta: {layout: "empty"},
      component: LogIn
    },
    // {
    //   path: '/board',
    //   name: 'board',
    //   meta: {layout: "main", login: true},
    //   component: TaskBoard,
    //   props: true
    // },
    // {
    //   path: '/create',
    //   name: 'create',
    //   meta: {layout: "main", login: true},
    //   component: TaskCreate,
    //   props: true
    // },
    // {
    //   path: '/list',
    //   name: 'list',
    //   meta: {layout: "main", login: true},
    //   component: TaskList,
    //   props: true
    // },
    // {
    //   path: '/task/:id',
    //   name: 'task',
    //   meta: {layout: "main", login: true},
    //   component: Task,
    //   props: true
    // }
  ]

})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requireLogin = to.matched.some(record => record.meta.login);

  if(requireLogin && !currentUser) {
    next('/');
  } else {
    next();
  }

});

export default router;