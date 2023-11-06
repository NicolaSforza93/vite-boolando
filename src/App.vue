<script>
import PageHeader from './components/PageHeader.vue';
import Product from './components/Product.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  components: {
    PageHeader,
    Product,
    PageFooter,
  },
  data() {
    return
  }
}
</script>

<template>
  <PageHeader />
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
  <PageFooter />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
