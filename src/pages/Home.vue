<script setup>
import AppLayout from '../components/AppLayout.vue'
import Header from '../components/Header.vue';
import Cards from '../components/Cards.vue';
import TextPhoto from '../components/TextPhoto.vue';
import Footer from '../components/Footer.vue';
const imgUrl = "/src/assets/img/"
const serviceList = [
  {
    image: 'background-image.jpg',
    title: 'ВАШИ ДОЛГИ - НАША ЗАБОТА!',
    text: 'персональные предложения и индивидуальный подход'
  },
  {
    image: 'photo-for-text.jpg',
    title: 'ПОМОЖЕМ СОХРАНИТЬ ИМУЩЕСТВО',
    text: 'гибкая система скидок'
  },
  {
    image: 'photo-for-text.jpg',
    title: 'ПОЛНОЕ СПИСАНИЕ ДОЛГОВ БЕЗ РИСКОВ',
    text: 'помощь в поиске выхода из любой ситуации'
  }
]  
</script>

<template>
  <Header />
  <AppLayout :imgUrl="imgUrl" :serviceList="serviceList"/> 
  <Cards />
  <TextPhoto :imgUrl="imgUrl" :serviceList="serviceList"/>
  <Footer />
</template>

<style lang="sass" scoped>
@import '../assets/styles/main' 

</style>