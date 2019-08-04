import Vue from 'vue';

import Router from 'vue-router';

import MainMenu from './views/MainMenu';
import Game from './views/Game';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainMenu',
      component: MainMenu
    },
    {
      path: '/:host',
      name: 'Game',
      component: Game
    }
  ]
});
