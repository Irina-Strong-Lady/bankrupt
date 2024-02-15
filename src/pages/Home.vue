<script setup>
import AppLayout from '../components/AppLayout.vue'
import Header from '../components/Header.vue'
import Cards from '../components/Cards.vue'
import TextPhoto from '../components/TextPhoto.vue'
import LawersSlider from '../components/LawersSlider.vue'
import Footer from '../components/Footer.vue'
import { 
        navBarLogoItems, 
        navBarItems, 
        serviceList, 
        lawerSliderImage, 
        footerImage,
        cardsList 
      } from '../constants';

</script>

<template>
  <Header :navBarItems="navBarItems" :navBarLogoItems="navBarLogoItems"/>
  <AppLayout :serviceList="serviceList"/> 
  <Cards :cardsList="cardsList"/>
  <TextPhoto :footerImage="footerImage"/>
  <LawersSlider :lawerSliderImage="lawerSliderImage"/>
  <Footer />
</template>

<style lang="sass" scoped>
@import '../assets/styles/main' 
</style>