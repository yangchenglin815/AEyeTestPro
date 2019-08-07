import Vue from 'vue'
import Router from 'vue-router'
//import AlertPersonalInfo from '../components/AlertPersonalInfo'
import FaceDetection from '../components/FaceDetection'
import VeinDetection from "../components/VeinDetection";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VeinDetection',
      component: VeinDetection
    }
  ]
})
