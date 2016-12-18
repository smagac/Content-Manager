import { listen, Reducer } from '../reducer-helper';

/**
 * A store of all the paths of files relative to the assetsDirectory
 */
class FilesReducer extends Reducer {
  get initialState() {
    const assetsDirectory = localStorage.getItem('assetsDirectory');
    if (assetsDirectory) {
      return {
        assetsDirectory,
        adjectives: assetsDirectory + '/content/adjectives.csv',
        monsters: assetsDirectory + '/content/monsters.json',
        quests: assetsDirectory + '/content/quests.json',
        items: assetsDirectory + '/content/items.json',
      }
    }
    return {
      assetsDirectory: '',
      adjectives: '',
      monsters: '',
      items: '',
      modifiers: '',
    }
  }

  onChangeAssetsDirectory({assetsDirectory}){
    localStorage.setItem('assetsDirectory', assetsDirectory)

    return {
      assetsDirectory,
      adjectives: assetsDirectory + '/content/adjectives.csv',
      monsters: assetsDirectory + '/content/monsters.json',
      quests: assetsDirectory + '/content/quests.json',
      items: assetsDirectory + '/content/items.json',
    };
  }
}

const actions = {
  loadResources(assetsDirectory) {
    return { type: 'CHANGE_ASSETS_DIRECTORY', assetsDirectory }
  }
}

const reducers = new FilesReducer(); 
export default {
  reducers,
  actions
}