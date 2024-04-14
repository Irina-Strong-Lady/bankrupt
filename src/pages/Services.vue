<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import PagesLayout from '../components/PagesLayout.vue'
import ServicesDesc from '../components/ServicesDesc.vue'
import glasses from "@/assets/img/black_glasses_reduce.jpg"
import { navBarLogoItems, navBarItems, serviceOptions } from '../constants';

</script>

<template>
  <Header :navBarItems="navBarItems" :navBarLogoItems="navBarLogoItems"/>
  <PagesLayout :glasses="glasses" :navBarItems="navBarItems" :navBarLogoItems="navBarLogoItems"/>
  <ServicesDesc :serviceOptions="serviceOptions"/>
  <Footer />
</template>

<style lang="sass" scoped>
@import '../assets/styles/main' 
</style>