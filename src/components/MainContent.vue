<script>
import Product from './Product.vue';
// import clothing from '../db.json';
import { store } from '../store';

export default {
    components: { Product },
    data() {
        return {
            store,
            open: false,
            selectedProduct: {}
        }
    },
    computed: {
        products: function () {
            return store.products;
        }
    },
    methods: {
        toggleFavorite(product) {
            // console.log(item);
            if (product.isInFavorites === true) {
                product.isInFavorites = false;
            } else {
                product.isInFavorites = true
            }
        },

        showModal(product) {
            this.selectedProduct = product;
            this.open = true;
        },

        closeModal() {
            this.open = false;
            this.selectedProduct = {};
        }
    },
    mounted() {
    }
}
</script>

<template>
    <main class="main-content">
        <section>
            <div class="container">
                <div class="row">
                    <div v-for="(product, id) in products" :key="id" class="col-4">
                        <Product :item="product" @toggle="toggleFavorite" @show="showModal" />
                    </div>
                </div>
            </div>
        </section>
        <div v-if="open" class="modal">
            <div class="card">
                <div class="card-header">
                    <figure>
                        <img :src="selectedProduct.frontImage" alt="">
                    </figure>
                </div>
                <div class="card-body">
                    <p>
                        {{ selectedProduct.brand }}
                    </p>
                    <h1>{{ selectedProduct.name }}</h1>
                    <div class="size">
                        <select name="size" id="size" placeholder="Scegli una taglia">
                            <option selected value="Scegli una taglia">Scegli una taglia</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </div>
                    <button>Aggiungi al carrello</button>
                </div>
                <span class="close">
                    <font-awesome-icon @click="closeModal" icon="fa-solid fa-circle-xmark" />
                </span>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
section {
    padding: 35px;
}

.modal::after {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 40;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal {
    .card {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 50;
        background-color: white;
        border-radius: 20px;
        padding: 20px;
        width: 100%;
        max-width: 400px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        display: flex;
        gap: 10px;
    }

    .card-body {
        align-self: center;
        display: flex;
        flex-direction: column;
        gap: 5px;

        h1 {
            text-transform: uppercase;
            font-size: 25px;
        }

        .size {
            select {
                padding: 3px;
                border: 1px solid black;
                font-family: inherit;
                cursor: pointer;
            }
        }

        button {
            width: 100%;
            padding: 5px;
            border: none;
            color: white;
            background-color: black;
            font-family: inherit;
            cursor: pointer;
        }
    }

    .close {
        cursor: pointer;
        font-size: 20px;
        color: red;
    }
}
</style>