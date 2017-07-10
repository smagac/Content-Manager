<template>
    <div class="monsters-view">
        <div class="panel">
            <div class="sticky">
                <router-link :to="{name: 'monster-edit', params: {'monster': -1}}">
                    <span>Add Monster</span><i class="fa fa-plus-o"></i>
                </router-link>
            </div>
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

.panel .sticky {
    position: fixed;
    top: 0;
    padding: 8px 15px;
    background: white;
    border-bottom: 1px solid rgba(0,0,0,.5);
    width: 300px;
    display: block;
    height: 2.5em;
}

.panel {
    height: calc(100% - 2.5em);
}
</style>