<template>
    <div class="quests-view">
        <div class="panel">
            <router-link class="heading" :to="{name: 'quest-location-edit', params: {'location': -1}}">
                Locations <i class="fa fa-plus-square-o"></i>
            </router-link>
            <ul>
                <li v-for="(location, index) of locations">
                    <router-link :to="{name: 'quest-location-edit', params: {'location': index}}" class="pure-menu-link">
                        Location {{index}}
                    </router-link>
                </li>
            </ul>
            <router-link class="heading" :to="{name: 'quest-title-edit', params: {'title': -1}}">
                Titles <i class="fa fa-plus-square-o"></i>
            </router-link>
            <ul>
                <li v-for="(titles, index) of titles">
                    <router-link :to="{name: 'quest-title-edit', params: {'title': index}}" class="pure-menu-link">
                        Title {{index}}
                    </router-link>
                </li>
            </ul>
            <router-link class="heading" :to="{name: 'quest-prompt-edit', params: {'prompt': -1}}">
                Prompts <i class="fa fa-plus-square-o"></i>
            </router-link>
            <ul>
                <li v-for="(prompt, index) of prompts">
                    <router-link :to="{name: 'quest-prompt-edit', params: {'prompt': index}}" class="pure-menu-link">
                        Prompt {{index}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="edit">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        data() {
            return {

            }
        },
        methods: {

        },
        computed: {
            ...mapGetters({
                'locations': 'quests/Locations',
                'prompts': 'quests/Prompts',
                'titles': 'quests/Titles'
            })
        }
    }
</script>

<style>
    .quests-view {
        width: 100%;
        height: 100%;
        display: block;
        font-size: 0;
    }
</style>