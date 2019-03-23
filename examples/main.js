import Vue from 'vue'
import App from './app'
import dxui from '../src/components/index'

Vue.use(dxui)

/* eslint no-unused-vars: "off" */
const app = new Vue({
  el: '#app',
  ...App
})
