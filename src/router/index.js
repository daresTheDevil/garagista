import Vue from 'vue'
import Router from 'vue-router'
import VehicleList from '@/components/VehicleList'
import VehicleDashboard from '@/components/VehicleDashboard'
import VehicleSetup from '@/components/VehicleSetup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vehiclelist',
      component: VehicleList
    },
    {
      path: '/vehicle',
      name: 'vehicledashboard',
      component: VehicleDashboard
    },
    {
      path: '/setup',
      name: 'vehiclesetup',
      component: VehicleSetup
    }
  ]
})
