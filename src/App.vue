<script>
import PageHeader from './components/PageHeader.vue';
import MainContent from './components/MainContent.vue';
import PageFooter from './components/PageFooter.vue';
import axios from 'axios';
import { store } from './store';

export default {
  components: {
    PageHeader,
    MainContent,
    PageFooter,
  },
  data() {
    return {
    }

  },
  created() {
    axios.get('http://localhost:3000/products')
      .then(res => {
        // console.log(res.data);
        const products = res.data;
        // console.log(products);
        store.products = products;
      })
  }
}
</script>

<template>
  <PageHeader />
  <MainContent />
  <PageFooter />
</template>

<style lang="scss">
@use './styles/general.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
</style>
