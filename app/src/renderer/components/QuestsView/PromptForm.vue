<template>
    <div class="location-form" v-if="text != null">
        <h3 class="heading">Prompt {{prompt != -1 ? prompt : "New"}}</h3>
        <div class="pure-g">
            <form @submit.prevent="submit">
                <div class="pure-u-1">
                    <label>Text</label>
                    <textarea v-model="text"></textarea>
                    <p class="help">
                        Formatting:
                        <br>
                        <strong>~enemy</strong> to substitute a monster type
                        <br>
                        <strong>~item</strong> to substitute and item type
                        <br>
                        <strong>~location</strong> to substitute a random location
                        <br>
                        <strong>~objective</strong> to substitute the objective type
                    </p>
                </div>
                <div class="pure-u-1-3">
                    <label>Category</label>
                    <select v-model="type">
                        <option v-for="t of types" :value="t">{{t}}</option>
                    </select>
                </div>
                <div class="pure-u-1">
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex';

    export default {
        props: ['prompt'],
        data() {
            return {
                text: null,
                type: null,
                index: null
            }
        },
        computed: {
            ...mapGetters({
                'prompts': 'quests/Prompts',
                'types': 'quests/Types'
            })
        },
        mounted() {
            this.setup();
        },
        methods: {
            ...mapMutations({
                newPrompt:'quests/CreatePrompt',
                savePrompt:'quests/SavePrompt'
            }),
            setup() {
                if (this.prompt != -1) {
                    let p = this.prompts[this.prompt];
                    this.text = p.text;
                    this.type = p.type;
                    this.index = p.index;
                } else {
                    this.text = "";
                    this.type = this.types[0];
                    this.index = -1;
                }
            },
            submit() {
                let category = this.quests.prompts[this.type];
                if (this.index == -1) {

                    category.push(this.text);
                    this.$route.go({name: 'quest-prompt-edit', params: {prompt: this.prompts.length-1}});
                } else {
                    this.$set(category, this.index, this.text);
                }
            }
        },
        watch: {
            'prompt'(){
                this.setup();
            }
        }
    }
</script>