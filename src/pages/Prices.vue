<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import PagesLayout from '../components/PagesLayout.vue';
import hummer from "@/assets/img/judger-hummer-reduce.jpg";
import { navBarLogoItems, navBarItems } from '../constants'

</script>

<template>
  <Header :navBarItems="navBarItems" :navBarLogoItems="navBarLogoItems"/>
  <PagesLayout :hummer="hummer"/>
  <Footer />
</template>

<style lang="sass" scoped>
@import '../assets/styles/main' 
</style>