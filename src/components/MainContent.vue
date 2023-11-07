<script>
import Product from './Product.vue';
import garments from '../db.json';

export default {
    components: { Product },
    data() {
        return
    }
}


</script>

<template>
    <main class="main-content">
        <section>
            <div class="container">
                <div class="row">
                    <div v-for="n in 6" :key="n" class="col-4">
                        <Product />
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