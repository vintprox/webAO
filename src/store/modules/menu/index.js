/**
 * Menu store module
 */

import CampaignIcon from 'i/FolderMultiple';
import ServersIcon from 'i/PlayNetwork';
import AppsIcon from 'i/Apps';
import RewardsIcon from 'i/Trophy';
import SettingsIcon from 'i/Settings';
import HelpIcon from 'i/HelpRhombus';

import Campaign from '@/components/Menu/sections/Campaign';
import Servers from '@/components/Menu/sections/Servers';
import Apps from '@/components/Menu/sections/Apps';
import Rewards from '@/components/Menu/sections/Rewards';
import Settings from '@/components/Menu/sections/Settings';
import Help from '@/components/Menu/sections/Help';

import mutations from './mutations';

const state = {
  sectionGroups: [
    {
      name: 'Primary',
      sections: [
        {
          name: 'Campaign',
          component: Campaign,
          icon: CampaignIcon
        },
        {
          name: 'Servers',
          component: Servers,
          icon: ServersIcon
        },
        {
          name: 'Apps',
          component: Apps,
          icon: AppsIcon
        }
      ]
    },
    {
      name: 'Service',
      sections: [
        {
          name: 'Rewards',
          component: Rewards,
          icon: RewardsIcon
        },
        {
          name: 'Settings',
          component: Settings,
          icon: SettingsIcon
        },
        {
          name: 'Help',
          component: Help,
          icon: HelpIcon
        }
      ]
    }
  ],
  openSection: null
};

export default {
  namespaced: true,
  state,
  mutations,
};
