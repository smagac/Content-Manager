import {parseJson, parseCSV, guid} from 'renderer/utils.js';
import {EventBus} from 'renderer/eventbus.js';
const fs = require('fs');
const path = require('path');

const state = {
    monsters: [],
    types: [],
    orderedMonsters: []
};

const getters = {
    'monsters/Monsters'(state) {
        return state.orderedMonsters;
    },
    'monsters/Types'(state) {
        return state.types;
    }
}

const mutations = {
    '@ChangeAssets'(state, directory) {
        state.monsters = parseJson(directory + '/content/monsters.json');

        // give all monsters GUID for identification checking when updating them
        for (let monster of Object.keys(state.monsters)) {
            state.monsters[monster]._guid = guid();
        }

        let list = [];
        for (let monster of Object.keys(state.monsters)) {
            list.push(Object.assign({name: monster}, state.monsters[monster]));
        }
        state.orderedMonsters = list;

        let files = fs.readdirSync(directory+'/monsters/');
        let types = [];
        console.log(files);
        for (let f of files) {
            types.push({
                name: path.basename(f, '.png'),
                path: 'asset://monsters/'+f,
            });
        }
        state.types = types;
    },
    'monsters/SaveMonster'(state, monster) {
        state.monsters[monster.name] = monster;

        let list = [];
        for (let m of Object.keys(state.monsters)) {
            list.push(Object.assign({name: m}, state.monsters[m]));
        }
        state.orderedMonsters = list;
    }
}

const actions = {
    'monsters/Update'({ commit }, monster) {
        if (monster.name in state.monsters && state.monsters[monster.name]._guid != monster._guid) {
            EventBus.$emit('alert', "Monster Name already exists");
            return;
        }
        commit('monsters/SaveMonster', monster);
        EventBus.$emit('alert', "Monster info has been updated");
    },
    'monsters/Create'(state, monster) {
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