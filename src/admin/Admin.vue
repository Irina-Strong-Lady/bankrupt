<script setup>
import Header from '../components/Header.vue'
import { 
        navBarLogoItems, 
        navBarItems 
      } from '../constants';

</script>

<template>
  <section>
    <div class="wrapper">
      <div class="title-wrapper">
        <h1 class="title">Страница административного доступа сайта <br> "Центр правовой помощи при банкротстве"</h1>
      </div>
      <Header :navBarItems="navBarItems" :navBarLogoItems="navBarLogoItems" />
    </div>
  </section>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
.wrapper
  position: absolute
  margin: 0
  padding: 0
  height: 100%
  width: 100%
  background: $table_caption
.title-wrapper
  position: relative
  display: flex
  flex-wrap: wrap
  width: 100%
  height: 50%
  justify-content: center
  align-content: center
.title
  font-family: sans-serif
  font-size: 24px
  font-weight: 600
  text-align: center
  padding: 0 15px
  color: $white
  @media screen and (max-width: 1000px)
    font-size: 20px
  @media screen and (max-width: 767px)
    font-size: 18px
  @media screen and (max-width: 200px)
    display: none

</style>