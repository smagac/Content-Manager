import {parseJson, parseCSV} from '../../utils.js';
const remote = require('electron').remote;
const path = require('path');

const state = {
  assets: '',
}

const getters = {
    'config/Assets'(state) {
        return state.assets;
    },
    Modifiers(state) {
        return state.assets + '/content/adjectives.csv';
    },
}

const mutations = {
  '@ChangeAssets'(state, directory) {

    if (state.assets != directory) {
      localStorage.setItem('assets', directory);
      state.assets = directory;

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
