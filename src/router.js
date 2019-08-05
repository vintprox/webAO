/**
 * Application's routing logic
 */

import Vue from 'vue';

import Router from 'vue-router';

import MainMenu from './views/MainMenu';
import Game from './views/Game';

Vue.use(Router);

const router = new Router({

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

let query = new URLSearchParams(location.search);

// Backwards compatibility with URLs contraining `ìp` query parameter
let host = query.get('ip');
if (host) {
  router.replace({ name: 'Game', params: { host } });
}

// Remove query string to avoid confusion
let cleanURL = location.href.replace(location.search, '');
history.replaceState({}, document.title, cleanURL);

export default router;
