<script setup>
import AppLayout from '../components/AppLayout.vue'
import Header from '../components/Header.vue';
import Cards from '../components/Cards.vue';
import TextPhoto from '../components/TextPhoto.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <Header />
  <AppLayout imgUrl="/src/assets/img/background-image.jpg" /> 
  <Cards />
  <TextPhoto imgUrl="/src/assets/img/photo-for-text.jpg"/>
  <Footer />
</template>

<style lang="sass" scoped>
@import '../assets/styles/main' 

</style>