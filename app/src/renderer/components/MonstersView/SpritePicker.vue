<template>
    <modal id="SpritePicker" @close="$emit('close')">
        <template slot="content">
            <img class="thumb" :src="t.path" v-for="(t, _) in types" width="96" height="96" @click.prevent.stop="$emit('save', t.name); $emit('close')">
        </template>
    </modal>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Modal from 'components/Modal.vue';

    export default {
        components: {
            Modal
        },
        data() {
            return {};
        },
        computed: {
            ...mapGetters({
                types: 'monsters/Types',
            })
        }
    }
</script>

<style>
    #SpritePicker .thumb {
        display: inline-block;
        border: 1px solid white;
        margin: 5px;
        image-rendering: pixelated;
    }
    #SpritePicker .modal-body {
        text-align: center;
    }
</style>