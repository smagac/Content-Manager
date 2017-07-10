<template>
    <div class="toast-container">
        <div class="toast" v-for="toast in toasts">
            {{toast.text}}
        </div>
    </div>
</template>

<script>
    import {EventBus} from 'renderer/eventbus.js';

    class Toast {
        constructor(message) {
            this.text = message;
        }
    }

    export default {
        data() {
            return {
                toasts: [],
            }
        },
        mounted() {
            EventBus.$on('alert', (message) => {
                this.showToast(message)
            });
        },
        methods: {
            showToast(toast) {
                let t = new Toast(toast);
                this.toasts.push(t);
                setTimeout(() => {
                    this.toasts.splice(this.toasts.indexOf(t), 1);
                }, 4000);
            }
        }
    }
</script>

<style scoped>
    .toast-container {
        position: fixed;
        padding-top: 16px;
        padding-right: 16px;
        top: 0;
        right: 0;
        bottom: 0;
        width: 250px;
        display: flex;
        flex-direction: column;
        pointer-events: none;
    }

    .toast {
        display: block;
        padding: 20px;
        background: black;
        color: white;
        font-size: 14px;
        border: 2px solid white;
        font-family: "Alagard";
        align-self: flex-start;
        box-shadow: 4px 4px 0 0 black;
        margin-bottom: 10px;
    }
</style>