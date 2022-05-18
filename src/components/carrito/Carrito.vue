<template>
    <vue-final-modal
        name="carrito"
        v-slot="{close}"
        v-bind="$attrs"
        classes="modal-container"
        content-class="modal-content"
        v-on="$attrs"
    >
        <div v-if="carrito.length" class="modal_content">
            <ListaCarrito :carrito="carrito"/>
        </div>
        <div v-else class="modal_content">
            <h5>Debes agregar productos al carrito</h5>
        </div>
        <button class="btn btn-outline-primary modal_clase" @click="close">
            X
        </button>
    </vue-final-modal>


</template>

<script>
import {$vfm, VueFinalModal } from 'vue-final-modal'
import ListaCarrito from './ListaCarrito.vue'

export default {
    name: "CustomModal",
    inheritAttrs: false,
    components: {
        VueFinalModal, ListaCarrito
    },
    props: {
        carrito: {
            type: Array
        }
    },
    methods: {
        close(){
            $vfm.hide('cartModal')
        }
    }
}
</script>


<style scoped>
::v-deep .modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 600px;
}
::v-deep .modal-content{
    position: relative;
    display: flex;
    flex-direction: column;
    max-height: 90%;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid white;
    border-radius: 0.25rem;
    background: #fff;
}
.modal_title {
    text-align: center;
    margin: 0 2rem 0 0;
    font-size: 1.5rem;
    font-weight: 700;
}
.modal_content {
    margin-top: 4rem;
    flex-grow: 1;
    overflow-y: auto;
    text-align: center;
}
</style>
