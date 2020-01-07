import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import vuetify from './plugins/vuetify';

import Dashboard from '@/components/Dashboard';
import Accessibility from '@/components/Accessibility';
import Colors from '@/components/Colors';
import Content from '@/components/Content';
import Formatting from '@/components/Formatting';
import Icons from '@/components/Icons';
import Imagery from '@/components/Imagery';
import Logos from '@/components/Logos';
import Testing from '@/components/Testing';
import Typography from '@/components/Typography';

import Alerts from '@/components/Alerts';
import Avatars from '@/components/Avatars';
import Badges from '@/components/Badges';
import Breadcrumbs from '@/components/Breadcrumbs';
import Buttons from '@/components/Buttons';
import Cards from '@/components/Cards';
import Dialogs from '@/components/Dialogs';
import Expansion from '@/components/Expansion';
import Footer from '@/components/Footer';
import Forms from '@/components/Forms';
import Graphs from '@/components/Graphs';
import Help from '@/components/Help';
import Hero from '@/components/Hero';
import Lists from '@/components/Lists';
import Navigation from '@/components/Navigation';
import RightRail from '@/components/RightRail';
import Search from '@/components/Search';
import Skeleton from '@/components/Skeleton';
import Steppers from '@/components/Steppers';
import Tables from '@/components/Tables';
import TabsNav from '@/components/TabsNav';
import Tiles from '@/components/Tiles';
import Tooltips from '@/components/Tooltips';




Vue.config.productionTip = false

Vue.use(Router)

const router = new Router({

  base: '',
  mode: 'history',
  routes: [

    {
      name: 'dashboard',
      path: '/',
      component: Dashboard
    },
    {
      name: 'accessibility',
      path: '/accessibility',
      component: Accessibility
    },
    {
      name: 'colors',
      path: '/colors',
      component: Colors
    },
    {
      name: 'content',
      path: '/content',
      component: Content
    },
    {
      name: 'formatting',
      path: '/formatting',
      component: Formatting
    },
    {
      name: 'icons',
      path: '/Icons',
      component: Icons
    },
    {
      name: 'imagery',
      path: '/Imagery',
      component: Imagery
    },
    {
      name: 'logos',
      path: '/Logos',
      component: Logos
    },
    {
      name: 'testing',
      path: '/Testing',
      component: Testing
    },
    {
      name: 'typography',
      path: '/Typography',
      component: Typography
    },

    {
      name: 'alerts',
      path: '/Alerts',
      component: Alerts
    },
    {
      name: 'avatars',
      path: '/Avatars',
      component: Avatars
    },
    {
      name: 'badges',
      path: '/Badges',
      component: Badges
    },
    {
      name: 'breadcrumbs',
      path: '/Breadcrumbs',
      component: Breadcrumbs
    },
    {
      name: 'buttons',
      path: '/Buttons',
      component: Buttons
    },
    {
      name: 'cards',
      path: '/Cards',
      component: Cards
    },
    {
      name: 'dialogs',
      path: '/Dialogs',
      component: Dialogs
    },
    {
      name: 'expansion',
      path: '/Expansion',
      component: Expansion
    },
    {
      name: 'footer',
      path: '/Footer',
      component: Footer
    },
    {
      name: 'forms',
      path: '/Forms',
      component: Forms
    },
    {
      name: 'graphs',
      path: '/Graphs',
      component: Graphs
    },
    {
      name: 'help',
      path: '/Help',
      component: Help
    },
    {
      name: 'hero',
      path: '/Hero',
      component: Hero
    },
    {
      name: 'lists',
      path: '/Lists',
      component: Lists
    },
    {
      name: 'navigation',
      path: '/Navigation',
      component: Navigation
    },
    {
      name: 'rightrail',
      path: '/RightRail',
      component: RightRail
    },
    {
      name: 'search',
      path: '/Search',
      component: Search
    },
    {
      name: 'skeleton',
      path: '/Skeleton',
      component: Skeleton
    },
    {
      name: 'steppers',
      path: '/Steppers',
      component: Steppers
    },
    {
      name: 'tables',
      path: '/Tables',
      component: Tables
    },
    {
      name: 'tabsnav',
      path: '/TabsNav',
      component: TabsNav
    },
    {
      name: 'tiles',
      path: '/Tiles',
      component: Tiles
    },
    {
      name: 'tooltips',
      path: '/Tooltips',
      component: Tooltips
    },


  ]

})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

import VueLivePreview from 'vue-live-preview'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

// CodeMirror options
Vue.use(VueLivePreview, {
  theme: 'material',
  tabSize: 2,
  lineNumbers: true,
})
