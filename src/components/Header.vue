<script setup>
import { ref, onBeforeMount } from 'vue';

// Handler for navbar change onscroll
onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll);
});

const stickyHeader = ref(false);

function handleScroll() {
  window.scrollY ? stickyHeader.value = true : stickyHeader.value = false
};

// Handler for burger icon opens vertical navbar, 
// close vertical navbar or close vertical navbar by clicking on menu item
const burgerActive = () => {
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', burgerOn);

  const navbarClose = document.querySelector('.header__nav-close');
  navbarClose.addEventListener('click', burgerOn);

  const menuLinks = document.querySelectorAll('.header__link');
  menuLinks.forEach(item => item.addEventListener('click', burgerOn));
}

const firstItemHoverRemove = () => {
const firstItem = document.querySelectorAll('.header__item');
firstItem.forEach(item => item.addEventListener('click', item.classList.remove('header__item-onload')));
}

const burgerOpen = ref(false);

function burgerOn() {
  burgerOpen.value == false ? burgerOpen.value = true : burgerOpen.value = false
};

const menuItems = ['Главная', 'Цены', 'Услуги', 'Контакты']
</script>

<template>
  <header class="header" :class="stickyHeader ? 'header_active' : ''" >
    <div class="wrapper">
      <div class="header__wrapper">
        <div class="header__logo">
          <a href="#!" class="header__logo-link"></a>
          <div class="vertical__line-logo"></div>        
          <a href="#!" class="header__logo-text">ЦЕНТР ПРАВОВОЙ ПОМОЩИ ПРИ БАНКРОТСТВЕ</a>
        </div>
        <nav class="header__nav" :class="burgerOpen ? 'header__nav-active' : ''">
          <ul class="header__list">
            <li v-for="(item, index) in menuItems" :key="index" class="header__item header__item-onload" @click.capture="firstItemHoverRemove">
              <a href="#!" class="header__link">{{ item }}</a>
            </li>
          </ul>
          <div class="header__nav-close">
            <span class="header__nav-close-line"></span>
            <span class="header__nav-close-line"></span>
          </div>
        </nav>
        <div class="burger__container">
          <div class="header__burger burger" @click.capture="burgerActive">
            <span class="burger__line burger__line-first"></span>
            <span class="burger__line burger__line-second"></span>
            <span class="burger__line burger__line-third"></span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

img
  max-width: 100%
  height: auto
.header
  position: fixed
  top: 0
  left: 0
  width: 100%
  transition: 1s
  z-index: 1
.wrapper
  max-width: 1200px
  margin: auto
.header_active
  background: #0E1D28
  opacity: .90
  transition: 1s
  z-index: 100	
.header__wrapper  
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  margin-top: 15px
  @media screen and (max-width: 1200px)
    padding: 0 15px  
    justify-content: center
    margin: 0 10px
  @media screen and (max-width: 767px)
    justify-content: space-between
    padding: 0 
    margin: 0
.header__logo
  display: flex
  flex-wrap: wrap
  @media screen and (max-width: 767px)
    padding-left: 15px
.header__logo-link
  margin: 15px auto
  padding: 3em
  background: url('../assets/img/svg/logo.svg') no-repeat center
  @media screen and (max-width: 1200px)
    padding: 2em    
.vertical__line-logo
  margin: 20px 15px auto 15px
  width: 3px
  height: 84px
  background: $white
  @media screen and (max-width: 1200px)
    height: 50px
.header__logo-text
  margin: 25px auto auto auto
  width: 200px
  height: 80px
  color: $white
  font-size: 22px
  font-style: normal
  font-weight: 40
  line-height: normal
  text-decoration: none
  @media screen and (max-width: 1200px)
    margin: 15px auto auto auto
    width: 160px
    font-size: 18px
.header__nav
  transition: .5s all linear
  margin: auto 0 auto 0
  @media screen and (max-width: 767px)
    position: fixed
    width: 100%
    height: 100%
    background-color: #353D45
    z-index: 10
    padding: 75px
    transform: translateX(100%)
.header__nav-active
  @media screen and (max-width: 767px)
    transform: translateX(0%)
    transition: .5s all linear
.header__nav-close
  @media screen and (max-width: 767px)
    position: absolute
    width: 40px
    height: 40px
    top: 40px
    right: 40px
    z-index: 11
    &:hover, &:focus, &:active
      transform: scale(1.05)
.header__nav-close-line
  @media screen and (max-width: 767px)
    display: block
    width: 100%
    height: 2px
    background-color: $white 
    position: absolute
    top: 50%
    &:first-child
      transform: translateY(-50%) rotate(45deg)
    &:last-child
      transform: translateY(-50%) rotate(-45deg)
.header__list
  display: flex
  flex-wrap: wrap
.header__item
  color: $white
  margin-right: 55px
  list-style-type: none
  &:last-child
    margin-right: 0
  @media screen and (max-width: 767px)
    width: 100%
    margin-right: 0
    margin-bottom: 30px
    &:last-child
      margin-bottom: 0
.header__item-onload
  &:first-child
    color: $accent
.header__link
  font-size: 22px
  font-style: normal
  font-weight: 700
  line-height: normal
  text-decoration: none  
  &:hover, &:focus, &:active
    color: $accent
    cursor: default  
  @media screen and (max-width: 1200px)
    font-size: 20px
  @media screen and (max-width: 767px)
    font-size: 36px
    line-height: 48px
    font-weight: 400
.burger__container
  display: none
  transition: 1s
  &:hover, &:focus, &:active
    transform: scale(1.1)
    transition: 1s
  @media screen and (max-width: 767px)
    display: block
.header__burger
  width: 40px
  height: 28px
  position: relative
  top: 40%
  @media screen and (max-width: 767px)
    top: 30%
    right: 80%  
.burger__line
  display: block
  width: 100%
  height: 2px
  background-color: $white
  position: absolute
  left: 0  
.burger__line-first
  top: 0
.burger__line-second
  top: 50%
  transform: translateY(-50%)
.burger__line-third
  bottom: 0
</style>