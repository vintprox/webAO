/**
 * Application's routing logic
 */

import Vue from 'vue';

import Router from 'vue-router';

import Start from './views/Start';
import Game from './views/Game';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/:host',
      name: 'Game',
      component: Game
    }
  ]
});

export default router;
