<script>
import Product from './Product.vue';
// import clothing from '../db.json';
import { store } from '../store';

export default {
    components: { Product },
    data() {
        return {
            store
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
                    <div v-for="(product, id) in store.clothing" :key="id" class="col-4">
                        <Product :item="product" />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
section {
    padding: 35px;
}
</style>