// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import './styles/main.scss'
import { store } from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBu8PDkedzyM1wJolaVOPNNPdkYzgRAiAk',
      authDomain: 'movue-d0306.firebaseapp.com',
      databaseURL: 'https://movue-d0306.firebaseio.com',
      projectId: 'movue-d0306',
      storageBucket: 'movue-d0306.appspot.com'
    })
  }
})
