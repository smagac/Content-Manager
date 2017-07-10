import {parseJson, parseCSV, guid} from 'renderer/utils.js';
import {EventBus} from 'renderer/eventbus.js';
import {Item} from 'renderer/datatypes';
const remote = require('electron').remote;
const fs = require('fs');
const path = require('path');


const state = {
    items: [],
    filetypes: ['Audio', 'Video', 'Image', 'Exec', 'Zip', 'Other'],
    categories: [
        "joke","material","luxery","food","entertainment","instrument","people","odd","nuisance","tool",
        "equipment","clothes","necessity","science","adult","junk","educational","person/tool","junk/people",
        "container","animal","medicine"
    ]
};

const getters = {
    'item/Items'(state) {
        return state.items;
    },
    'item/Categories'(state) {
        return state.categories;
    },
    'item/Filetypes'(state) {
        return state.filetypes;
    }
}

const mutations = {
    '@ChangeAssets'(state, directory) {
        let items = parseCSV(
            directory + '/content/items.csv'
        ).map(item => {
            let i = new Item();
            i.fromCSV(item);
            return i;
        });
        console.log(items);

        // give all monsters GUID for identification checking when updating them

        let it = {};
        for (let item of items) {
            item._guid = guid();
            it[item.name] = item;
        }
        state.items = it;
    },
    'item/SaveItem'(state, item) {
        state.items[item.name] = item;
        let items = Object.keys(state.items).map((key) => state.items[key].prepare()).join('\r\n');
        fs.writeFile(remote.getGlobal('configuration').assetsPath + '/content/items.csv', items, 'utf-8', function() {
            EventBus.$emit('alert', "Item has been saved");
        });
    }
}

const actions = {
    'item/Update'({ commit }, item) {
        if (item.name in state.items && state.items[item.name]._guid != item._guid) {
            EventBus.$emit('alert', "Item Name already exists");
            return;
        }
        commit('item/SaveItem', item);
        EventBus.$emit('alert', "Item info has been updated");
    },
    'item/Create'(state, monster) {
        if (monster.name in state.monsters && state.monsters[monster.name]._guid != monster._guid) {
            EventBus.$emit('alert', "Monster Name already exists");
            return;
        }
        commit('monsters/SaveMonster', monster);
        EventBus.$emit('alert', "Monster has been created");

        // get the monster's new id
        return state.orderedMonsters.indexOf(monster);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}