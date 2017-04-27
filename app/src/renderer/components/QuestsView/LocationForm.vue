<template>
    <div class="location-form" v-if="text != null">
        <h3 class="heading">Location {{location != -1 ? location : "New"}}</h3>
            <div class="pure-g">
                <form @submit.prevent="submit">
                <div class="pure-u-1">
                    <textarea v-model="text" class="pure-u-1"></textarea>
                    <p class="pure-form-message">Use %s to dynamically insert adjectives into your location title</p>
                </div>
                <div class="pure-u-1">
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        props: ['location'],
        data() {
            return {
                text: null
            }
        },
        computed: {
            ...mapGetters({
                'locations': 'quests/Locations',
            })
        },
        mounted() {
            this.setup();
        },
        methods: {
            setup() {
                if (this.location != -1) {
                    this.text = this.locations[this.location];
                } else {
                    this.text = "";
                }
            }
        },
        watch: {
            'location'(){
                this.setup();
            }
        }
    }
</script>