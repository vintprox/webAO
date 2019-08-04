/**
 * Application's routing logic
 */

import Vue from 'vue';

import Router from 'vue-router';

import MainMenu from './views/MainMenu';
import Game from './views/Game';

Vue.use(Router);

export default new Router({

  // All top level routes provide their own views to application
  routes: [
  
    {
      path: '/',
      name: 'MainMenu',
      component: MainMenu
    },

    // Examples: `/localhost`, `/127.0.0.1:27016`
    {
      path: '/:host',
      name: 'Game',
      component: Game
    }
  
  ]
  
});
