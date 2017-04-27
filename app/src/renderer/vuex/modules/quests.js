import {parseJson, parseCSV} from '../../utils.js';

const state = {
    quests: []
};

const getters = {
    'quests/Titles'(state) {
        return state.quests.titles;
    },
    'quests/Prompts'(state) {
        let prompts = [];
        for (let type of Object.keys(state.quests.prompts)) {
            let category = state.quests.prompts[type];
            for (let index in category) {
                let prompt = category[index];
                prompts.push({
                    text: prompt,
                    index,
                    type
                })
            }
        }
        return prompts;
    },
    'quests/Types'(state) {
        return Object.keys(state.quests.prompts);
    },
    'quests/Locations'(state) {
        return state.quests.locations;        
    }
}

const mutations = {
    '@ChangeAssets'(state, directory) {
        state.quests = parseJson(directory + '/content/quest.json');
    },
    'quests/CreatePrompt'(state, {text, type}) {
        state.quests[type].push(text)
    },
    'quests/SavePrompt'(state, {text, type, index}) {
        state.quests[type][index] = text;
    }
}

export default {
    state,
    getters,
    mutations
}