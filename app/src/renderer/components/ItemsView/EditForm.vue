<template>
    <div id="ItemForm" v-if="data != null">
        <h3 class="heading">Item: {{item != 0 ? data.name : "New"}}</h3>
        <div class="pure-g">
            <form @submit.prevent="submit">
                <div class="pure-u-2-3">
                    <label>
                        Name
                    </label>
                    <input type="text" v-model="data.name"/>
                </div>
                <div class="pure-u-1-3">
                    <label>
                        Category
                    </label>
                    <select v-model="data.type">
                        <option :value="category" v-for="category of categories">
                            {{category}}
                        </option>
                    </select>
                </div>
                <div class="pure-u-1-3">
                    <label>
                        Days to Spoil
                    </label>
                    <input type="text" v-model="data.spoil"/>
                </div>
                <div class="pure-u-1-3">
                    <label>
                        Days to Rot
                    </label>
                    <input type="text" v-model="data.rot"/>
                </div>
                <div class="pure-u-1-2">
                    <label class="switch">
                        <input type="checkbox" v-model="data.craftable">
                        <div class="slider round"></div>
                        Craftable
                    </label>
                </div>
                <div class="pure-u-1-2">
                    <label class="switch">
                        <input type="checkbox" v-model="data.censor">
                        <div class="slider round"></div>
                        Censor
                    </label>
                </div>
                <div class="pure-u-1-3" v-for="f of filetypes" v-show="!data.craftable">
                    <label>
                        {{f}}
                    </label>
                    <input type="text" v-model="data[f]"/>
                </div>
                <div class="pure-u-1">
                    <hr>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import {Item} from 'renderer/datatypes'

    export default {
        props: ['item'],
        data() {
            return {
                data: null
            }
        },
        computed: {
            ...mapGetters({
                'items': 'item/Items',
                'filetypes': 'item/Filetypes',
                'categories': 'item/Categories'
            })
        },
        mounted() {
            this.setup();
        },
        methods: {
            ...mapActions({
                'updateItem': 'item/Update',
                'createItem': 'item/Create'
            }),
            setup() {
                if (this.item != -1) {
                    this.data = Object.assign(new Item(), this.items[Object.keys(this.items)[this.item-1]]);
                } else {
                    this.data = Object.assign(new Item(), {});
                }
            },
            submit() {
                if (this.data.validate()) {
                    if (this.data.id == -1) {
                        this.createItem(this.data);
                    } else {
                        this.updateItem(this.data);
                    }
                }
            }
        },
        watch: {
            'item'(){
                this.setup();
            }
        }
    }
</script>

<style>
    #ItemForm {
        max-width: 600px;
    }

    .pure-g {
        display: flex;
    }
</style>