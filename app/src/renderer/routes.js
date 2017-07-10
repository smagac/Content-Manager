export default [
  {
    path: '/monsters',
    name: 'monster-list',
    component: require('components/Monsters'),
    children: [
      {
        path: ':monster',
        name: 'monster-edit',
        component: require('components/MonstersView/EditForm'),
        props: true
      }
    ]
  },
  {
    path: '/items',
    name: 'items-list',
    component: require('components/Items'),
    children: [
      {
        path: ':item',
        name: 'item-edit',
        component: require('components/ItemsView/EditForm'),
        props: true
      }
    ]
  },
  {
    path: '/quests',
    name: 'quests-list',
    component: require('components/QuestsView'),
    children: [
      {
        path: 'location/:location',
        name: 'quest-location-edit',
        component: require('components/QuestsView/LocationForm'),
        props: true
      },
      {
        path: 'titles/:title',
        name: 'quest-title-edit',
        component: require('components/QuestsView/TitleForm'),
        props: true
      },
      {
        path: 'prompt/:prompt',
        name: 'quest-prompt-edit',
        component: require('components/QuestsView/PromptForm'),
        props: true
      }
    ]
  },
  {
    path: '/modifiers',
    name: 'modifiers-list',
    component: require('components/Monsters'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: require('components/SettingsView')
  },
  {
    path: '*',
    redirect: '/settings'
  }
]
