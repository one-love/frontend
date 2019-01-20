// Templates
import Error from 'templates/empty/store'
import Title from 'templates/default/store'

// Pages
import Auth from 'pages/login/store'
import Cluster from 'pages/cluster/store'
import Me from 'pages/me/store'
import Provision from 'pages/provision/store'
import Service from 'pages/service/store'
import User from 'pages/user/store'


export default {
  auth: new Auth(),
  me: new Me(),
  cluster: new Cluster(),
  error: new Error(),
  provision: new Provision(),
  service: new Service(),
  title: new Title(),
  user: new User(),
}
