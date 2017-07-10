<template>
    <div id="MonsterEditForm" v-if="data">
        <div class="pure-g" style="max-width: 800px">
            <form @submit.prevent="submit">
                <div class="pure-u-1-1">
                    <template v-if="image">
                        <img class="thumb" :src="image" width="128" height="128" />
                        <img class="thumb" :src="image" width="64" height="64" />
                        <img class="thumb" :src="image" width="16" height="16" />
                    </template>
                    <button @click.prevent.stop="choosingSprite = true">Change Sprite</button>
                </div>
                <div class="pure-u-5-6">
                    <label>
                        Name
                    </label>
                    <input type="text" v-model="data.name"/>
                </div>
                <div class="pure-u-1-6">
                    <label>
                        Level
                    </label>
                    <input type="text" v-model="data.level"/>
                </div>
                <div class="pure-u-1-3">&nbsp;</div>
                <div class="pure-u-1-3">
                    <h3>Base</h3>
                </div>
                <div class="pure-u-1-3">
                    <h3>MAX</h3>
                </div>
                <div class="pure-u-1-3">
                    <label>
                        HP
                    </label>
                </div>
                <div class="pure-u-1-3">
                    <input type="text" v-model="data.hp"/>
                </div>
                <div class="pure-u-1-3">
                    <input type="text" v-model="data.maxhp"/>
                </div>
                <div class="pure-u-1-3">
                    <label>
                        Strength
                    </label>
                </div>
                <div class="pure-u-1-3">
                    <input type="text" v-model="data.str"/>
                </div>
                <div class="pure-u-1-3">
                    <input type="text" v-model="data.maxstr"/>
                </div>
                <div class="pure-u-1-3">
                    <label>
                        Defense
                    </label>
                </div>
                <div class="pure-u-1-3">
                    <input type="text" v-model="data.str"/>
                </div>
                <div class="pure-u-1-3">
                    <input type="text" v-model="data.maxstr"/>
                </div>
                <div class="pure-u-1-3">
                    <label>
                        Vitality
                    </label>
                </div>
                <div class="pure-u-1-3">
                    <input type="text" v-model="data.str"/>
                </div>
                <div class="pure-u-1-3">
                    <input type="text" v-model="data.maxstr"/>
                </div>
                <div class="pure-u-1-3">
                    <label>
                        Speed
                    </label>
                </div>
                <div class="pure-u-1-3">
                    <input type="text" v-model="data.str"/>
                </div>
                <div class="pure-u-1-3">
                    <input type="text" v-model="data.maxstr"/>
                </div>
                <div class="pure-u-1-3">
                    <label>
                        Exp
                    </label>
                </div>
                <div class="pure-u-1-3">
                    <input type="text" v-model="data.exp"/>
                </div>
                <div class="pure-u-1-3">
                    <input type="text" v-model="data.maxexp"/>
                </div>
                <div class="pure-u-1">
                    <h2>Ailments</h2>
                </div>
                <div class="pure-u-1-3">
                    <label>Poison</label>
                    <input type="text" v-model="ailments.poison"/>
                </div>
                <div class="pure-u-1-3">
                    <label>Venom</label>
                    <input type="text" v-model="ailments.venom"/>
                </div>
                <div class="pure-u-1-3">
                    <label>Confuse</label>
                    <input type="text" v-model="ailments.confuse"/>
                </div>
                <div class="pure-u-1-3">
                    <label>Sprain</label>
                    <input type="text" v-model="ailments.sprain"/>
                </div>
                <div class="pure-u-1-3">
                    <label>Arthritis</label>
                    <input type="text" v-model="ailments.arthritis"/>
                </div>
                <div class="pure-u-1-3">
                    <label>Blind</label>
                    <input type="text" v-model="ailments.blind"/>
                </div>
                <div class="pure-u-1">
                    <hr>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
        <sprite-picker @save="(type) => { data.type = type; }" @close="choosingSprite = false" v-if="choosingSprite"></sprite-picker>
    </div>
</template>

<style>
    #MonsterEditForm {
        width: 100%;
        height: 100%;
        display: block;
    }
</style>
<script>
    import {mapGetters, mapActions} from 'vuex';
    import SpritePicker from './SpritePicker.vue';

    class Monster {
        constructor() {
            this.name = "";
            this._guid = -1;
            this.hp = 0;
            this.str = 0;
            this.vit = 0;
            this.spd = 0;
            this.def = 0;
            this.exp = 0;
            this.maxhp = 0;
            this.maxstr = 0;
            this.maxvit = 0;
            this.maxspd = 0;
            this.maxexp = 0;
            this.level = 0;
            this.type = null;
        }
    }

    class Ailments {
        constructor() {
            this.blind = 0;
            this.confuse = 0;
            this.sprain = 0;
            this.arthritis = 0;
            this.poison = 0;
            this.venom = 0;
        }
    }

    export default {
        props: ['monster'],
        components: {
            SpritePicker
        },
        data() {
            return {
                data: null,
                ailments: null,
                choosingSprite: false
            }
        },
        mounted() {
            this.setup();
        },
        computed: {
            ...mapGetters({
                'monsters': 'monsters/Monsters',
                'assetsDir': 'config/Assets'
            }),
            image() {
                if (this.data.type) {
                    return `asset://monsters/${this.data.type}.png`;
                }
                return null;
            }
        },
        methods: {
            ...mapActions({
                'updateMonster': 'monsters/Update',
                'createMonster': 'monsters/Create'
            }),
            setup() {
                if (this.monster == -1) {
                    this.data = new Monster();
                    this.ailments = new Ailments();
                } else {
                    let source = this.monsters[this.monster];
                    this.data = Object.assign(new Monster(), source);
                    this.ailments = Object.assign(new Ailments(), source.status);
                }
            },
            changeSprite() {

            },
            submit() {
                if (this.monster == -1) {
                    let m_id = this.createMonster(this.data);
                    this.$router.go({name: 'monster-edit', params: {monster: m_id}});
                } else {
                    this.updateMonster(this.data);
                }
            }
        },
        watch: {
            'monster'(name) {
                this.setup();
            }
        }
    }
</script>

<style scoped>
    .thumb {
        display: inline-block;
        image-rendering: pixelated;
        vertical-align: bottom;
        margin-right: .5em;
    }
</style>