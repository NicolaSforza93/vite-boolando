<script>
import Product from './Product.vue';
import clothing from '../db.json';

export default {
    components: { Product },
    data() {
        return {
            clothing: clothing.products
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
                    <div v-for="(product, index) in clothing" :key="index" class="col-4">
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