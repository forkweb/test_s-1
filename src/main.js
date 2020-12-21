import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import Vuelidate from 'vuelidate'
import  'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false


Vue.use(Vuelidate);


const firebaseConfig = {
  apiKey: "AIzaSyC-LtSA-oCaiyZeirQv3rraT5zVcm1NLRU",
  authDomain: "simbirsoft-631cb.firebaseapp.com",
  databaseURL: "https://simbirsoft-631cb.firebaseio.com",
  projectId: "simbirsoft-631cb",
  storageBucket: "simbirsoft-631cb.appspot.com",
  messagingSenderId: "989666207320",
  appId: "1:989666207320:web:8bd6f81f6e2e3326000c2d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app

firebase.auth().onAuthStateChanged(()=> {
  if(!app) {
    app = new Vue({
      render: h => h(App),
      router,
      store
    }).$mount('#app')
  }
});