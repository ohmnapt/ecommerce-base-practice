import { createRouter, createWebHistory } from 'vue-router'
import QObjectList from '../components/QObjectList.vue'
import Detail from '../components/Detail.vue'

const routerHistory = createWebHistory()

const routes = [
    {
        path: '/',
        name: 'QObjectList',
        component: QObjectList
      },
      {
        //path: '/detail/:objid/:objtype/:height/:width/:depth',
        path: '/detail',
        name: 'Detail',
        component: Detail
      }
]

const router = createRouter({
	history: routerHistory,
	routes
})

export default router