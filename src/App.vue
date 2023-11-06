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
  <Product />
  <PageFooter />
</template>

<style lang="scss"></style>
