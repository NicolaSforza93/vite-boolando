<script>
import PageHeader from './components/PageHeader.vue';
import MainContent from './components/MainContent.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  components: {
    PageHeader,
    MainContent,
    PageFooter,
  },
  data() {
    return
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
