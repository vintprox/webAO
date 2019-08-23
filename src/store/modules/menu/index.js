/**
 * Menu store module
 */

import Settings from '@/components/Menu/sections/Settings';
import SettingsIcon from 'i/Cogs';
import Help from '@/components/Menu/sections/Help';
import HelpIcon from 'i/HelpRhombus';
import Servers from '@/components/Menu/sections/Servers';
import ServersIcon from 'i/Server';

import mutations from './mutations';

const state = {
  sections: [
    {
      name: 'Settings',
      component: Settings,
      icon: SettingsIcon,
      isService: true
    },
    {
      name: 'Help',
      component: Help,
      icon: HelpIcon,
      isService: true
    },
    {
      name: 'Servers',
      component: Servers,
      icon: ServersIcon
    }
  ],
  openSection: null
};

export default {
  namespaced: true,
  state,
  mutations,
};
