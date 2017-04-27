<template>
    <div class="modal" @click.prevent.stop="$emit('close')">
        <div class="modal-body" @click.prevent.stop="">
            <div class="modal-content">
                <slot name="content"></slot>
            </div>
            <div class="modal-actions">
                <slot name="actions"></slot>
            </div>
        </div>
    </div>
</template>

<style>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 2rem 0;
        overflow-y: auto;
        overflow-x: hidden;
        background: rgba(0,0,0,.5);
    }

    .modal-body {
        background: black;
        border: 4px solid white;
        box-shadow: 4px 4px 0 0 black;
        width: 50%;
        max-width: 800px;
        z-index: 1;
        padding: 10px;
    }
</style>