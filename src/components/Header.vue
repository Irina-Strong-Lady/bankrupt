<script setup>
import { ref, onBeforeMount } from 'vue';

// Handler for navbar change onscroll
onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('scroll', verticalSelector);
  window.addEventListener('scroll', checkCollapseNav);
  window.addEventListener('resize', changeOnHorizontalResize);
  window.addEventListener('resize', resizeToSmalToggler);
});

const handleScroll = () => {
  window.scrollY > 0 ? stickyHeader.value = true : stickyHeader.value = false;
};

const stickyHeader = ref(false);

// Handler for change navbar-items color to $accnet on click
const firstItemHoverRemove = () => {
const firstItem = document.querySelectorAll('.nav-item');
firstItem.forEach(item => item.addEventListener('click', item.classList.remove('nav-item-onload')));
};

// Check the bg-dark class not applied on top navbar position in 
// collapsed state after vertical scrolling and after click and applied in scrolled position
const checkCollapseNav = () => {
  const toggler = document.querySelector('.navbar-toggler');
  toggler.classList.contains('collapsed') && window.scrollY == 0 ? checkCollapse.value = false : checkCollapse.value = true;  
};

const checkCollapse = ref(false);

// Check the bg-dark class not applied on top navbar position in 
// collapsed state after vertical scrolling from bottom
const verticalSelector = () => {
  const vertical = document.querySelector('.vertical-line-logo');
  const navbar = document.querySelector('.container-fluid');
  const collapse = document.querySelector('.navbar-collapse');
  vertical != null && !collapse.classList.contains('show') ? navbar.classList.remove('bg-dark') : navbar.classList.add('bg-dark');  
};

// Check the 'bg-dark' and 'show' classes not applied on top navbar position in 
// collapsed state after window resize
const changeOnHorizontalResize = () => {
  const collapse = document.querySelector('.navbar-collapse');
  const vertical = document.querySelector('.vertical-line-logo');
  const navbar = document.querySelector('.container-fluid');
  if (collapse.classList.contains('show') && window.innerWidth >= 1000) {
    collapse.classList.remove('show');
    }
  else if (vertical != null) {
    navbar.classList.remove('bg-dark');
    }
  };

// Check the burger toggler after window resize to small
const resizeToSmalToggler = () => {
  if (window.innerWidth < 1000) {
    document.querySelector('.navbar-toggler').setAttribute('aria-expanded', 'false');
    };
  };

const props = defineProps({    
    navBarItems: {
      type: Array,
      required: true
    }
});

</script>

<template>
  <section>
    <nav class="navbar">
      <div
        :class="stickyHeader || checkCollapse ? 'bg-dark' : ''"
        class="container-fluid navbar-expand-lg navbar-dark"
      >
        <div class="wrapper">
          <div class="navbar-logo">
            <img src="../assets/img/svg/logo-sm.svg" alt="Центр правовой помощи при банкротстве" class="logo">
            <div
              :class="stickyHeader ? '' : 'vertical-line-logo'"
              :style="{'transition': '.5s'}"
            >
            </div>
            <div class="navbar-brand-wrapper">
              <a              
                :class="stickyHeader ? '' : 'navbar-brand-custom'"
                :style="{'transition': '.5s', 'text-decoration': 'none'}" 
                href="#!">Центр правовой помощи при банкротстве
              </a>
            </div>
          </div>
          <button @click.capture="checkCollapseNav()" class="navbar-toggler" id="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            <div class="navbar-close">
              <span class="navbar-close-line"></span>
              <span class="navbar-close-line"></span>
            </div>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li 
                v-for="(item, index) in navBarItems"
                :key="index"
                @click.capture="firstItemHoverRemove()"
                class="nav-item nav-item-onload">
                <a class="nav-link" aria-current="page" href="#!">{{ item }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.navbar
  position: absolute
.container-fluid
  position: fixed
  top: 0
  padding: 2.5vh 0
  z-index: 2
  @media screen and (max-width: 1000px)
    padding: 1.5vh 0
.wrapper
  display: flex
  flex-wrap: nowrap
  max-width: 1200px
  width: 100%
  margin: 0 auto
  box-sizing: border-box
  align-items: flex-start
  @media screen and (max-width: 1200px)
    max-width: 650px
    flex-wrap: nowrap
  @media screen and (max-width: 1000px)
    max-width: 650px
    flex-wrap: wrap
  @media screen and (max-width: 767px)
    margin: 0
    margin-left: 15px
.bg-dark
  opacity: .85
  background-color: rgb(13, 13, 13, 1)
.navbar-logo
  display: flex
  align-items: center
  justify-self: flex-start
.vertical-line-logo
  display: inline-block
  width: 2px
  height: 40px
  background: $white
  margin-left: 5px
.navbar-brand-wrapper
  display: flex
  width: 35%
  margin-left: 5px
.navbar-brand-custom  
  color: $white
  word-wrap: break-word
  text-decoration: none
  text-align: start
  line-height: 1em
  font-weight: 600
.navbar-collapse
  justify-content: flex-end
.navbar-toggler
  position: absolute
  border: none
  border-radius: 0
  margin-left: auto
  left: 90%
  @media screen and (max-width: 767px)
    left: 87.5%  
  @media screen and (max-width: 500px)
    left: 85%  
  @media screen and (max-width: 400px)
    left: 82.5%  
  @media screen and (max-width: 350px)
    left: 80%  
  @media screen and (max-width: 300px)
    left: 77.5%  
  @media screen and (max-width: 250px)
    left: 75%  
  &:focus
    outline: none
    box-shadow: none
.navbar-toggler-icon
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgb(255, 255, 255)' stroke-linecap='square' stroke-miterlimit='10' stroke-width='1.25' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")
  font-size: 1.5em
.nav-item
  margin-left: 4vw
  color: $white
  &:first-child
    margin-left: 0
  @media screen and (max-width: 1000px)
    margin-left: 0
.nav-item-onload
  &:first-child
    color: $accent
.nav-link
  font-size: 18px
  &:hover, &:active, &:focus
    color: $accent
.show a.nav-link
  margin-top: 1em
  font-size: 26px
.navbar button[aria-expanded="true"] > span.navbar-toggler-icon
  display: none
.navbar button[aria-expanded="false"] > div.navbar-close
  display: none
.navbar-close
  width: 10px
  height: 10px
  padding-top: 2.5vh
.navbar-close-line
  position: absolute
  width: 100%
  height: 2px
  background-color: $white 
  &:first-child
    transform: translateY(-50%) rotate(45deg)
  &:last-child
    transform: translateY(-50%) rotate(-45deg) 
</style>