import {parseJson, parseCSV} from '../../utils.js';
const remote = require('electron').remote;
const path = require('path');

const state = {
  assets: '',
  monsters: [],
  items: [],
}

const getters = {
    'config/Assets'(state) {
        return state.assets;
    },
    Modifiers(state) {
        return state.assets + '/content/adjectives.csv';
    },
    Monsters(state) {
        return state.monsters;
    },
    Items(state) {
      return state.items;  
    }
}

const mutations = {
  '@ChangeAssets'(state, directory) {

    if (state.assets != directory) {
      localStorage.setItem('assets', directory);
      state.assets = directory;
      state.monsters = parseJson(directory + '/content/monsters.json');
      state.items = parseCSV(directory + '/content/items.csv');

      // set protocol resolution
      remote.getGlobal('configuration').assetsPath = directory;
    }
  }
}

export default {
  state,
  getters,
  mutations
}
