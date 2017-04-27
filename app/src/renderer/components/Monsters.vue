<template>
    <div class="monsters-view">
        <div class="panel">
            <ul>
                <li v-for="(monster, index) of monsters">
                    <router-link :to="{name: 'monster-edit', params: {'monster': index}}">
                        {{monster ? monster.name: "N/A"}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="edit" :v-if="selected">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        data() {
            return {
                selected: null
            }
        },
        computed: {
            ...mapGetters({
                'monsters': 'monsters/Monsters'
            }),  
        }
    }
</script>

<style scoped>
.monsters-view {
    width: 100%;
    height: 100%;
    display: block;
    font-size: 0;
}
</style>