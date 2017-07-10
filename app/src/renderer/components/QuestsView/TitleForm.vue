<template>
    <div id="TitleForm" v-if="text != null">
        <h3 class="heading">Title {{title != -1 ? title : "New"}}</h3>
        <div class="pure-g">
            <form @submit.prevent="submit">
                <div class="pure-u-1">
                    <textarea v-model="text" class="pure-u-1"></textarea>
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        props: ['title'],
        data() {
            return {
                text: null
            }
        },
        computed: {
            ...mapGetters({
                'titles': 'quests/Titles'
            })
        },
        mounted() {
            this.setup();
        },
        methods: {
            setup() {
                if (this.title != -1) {
                    this.text = this.titles[this.title];
                } else {
                    this.text = "";
                }
            }
        },
        watch: {
            'title'(){
                this.setup();
            }
        }
    }
</script>