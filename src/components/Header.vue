<script setup>
import { ref, onBeforeMount } from 'vue'
import { homeDropdown } from '../constants'
import 'animate.css'

const props = defineProps({    
    navBarItems: {
      type: Array,
      required: true
    },
    navBarLogoItems: {
      type: Object,
      required: true
    }
})

// Handler for navbar change onscroll
onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('scroll', topLogoView)
  window.addEventListener('scroll', topLogoText)
  window.addEventListener('load', topLogoView)
  window.addEventListener('load', topLogoText)
})

// Handler for navbar background appears when scrolling
const handleScroll = () => {
  window.scrollY > 50 ? stickyHeader.value = true : stickyHeader.value = false
}

const stickyHeader = ref(false)

// Handler for expanded menu always had bg-dark (even on top Y point)
const addDarkOnExpand = () => {
  addDark.value == false ? addDark.value = true : addDark.value = false
}

const addDark = ref(false)

// Hadler for expanded menu to fit 100% height
const maxHeighthMenu = () => {
  maxHeighth.value == false ? maxHeighth.value = true : maxHeighth.value = false
}

const maxHeighth = ref(false)

// Handler for navbar logo text change to telephone number with animation effect on scroll
const topLogoView = () => {
  window.scrollY <= 50 ? topLogo.value = true : topLogo.value = false
}

const topLogo = ref(true)

// Handler for navbar logo text change to telephone number with animation effect on scroll
const topLogoText = () => {
  window.scrollY <= 50 ? topText.value = props.navBarLogoItems.title : topText.value = props.navBarLogoItems.phone
}

const topText = ref(props.navBarLogoItems.title);

</script>

<template>
  <section>
    <nav class="navbar">
      <div        
        :class="{'bg-dark': stickyHeader || addDark, 'height-menu': maxHeighth}"
        class="container-fluid navbar-expand-lg navbar-dark"
      >
        <div class="wrapper">
          <div class="navbar-logo">
            <img src="../assets/img/svg/logo-sm.svg" :alt="`${navBarLogoItems.title}`" class="logo">
            <div class="vertical-line-logo"></div>
            <div class="navbar-brand-wrapper">
              <a             
                :class="topLogo ? 'navbar-brand-custom animate__bounceInDown' : 'phone animate__fadeInDown'"
              >{{ topText }}
              </a>
            </div> 
          </div>         
          <button class="navbar-toggler" 
            @click.capture="maxHeighthMenu(); addDarkOnExpand()"
            id="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
                class="nav-item nav-item-onload">
                <el-dropdown>
                  <span class="el-dropdown-link">
                    <router-link 
                      :to="{name: item.name}" 
                      class="nav-link" 
                      aria-current="page"
                      >{{ item.title }}
                    </router-link>
                  </span>
                  <template #dropdown v-if="item.name == 'home'">
                    <el-dropdown-menu>                      
                      <el-dropdown-item 
                        v-for="(item, index) in homeDropdown"
                        :key="index"
                      >
                        <img src="@/assets/img/png/right-point-arrow.png" alt="point" class="custom-arrow">
                        <router-link 
                          :to="{name: item.name}" 
                          class="dropdown-item"
                        >
                          {{ item.title }}
                        </router-link>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>                
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
  padding: 1.5vh 0
  transition: 2s
  z-index: 2
.wrapper
  display: flex
  flex-wrap: nowrap
  max-width: 1200px
  width: 100%
  margin: 0 auto
  box-sizing: border-box
  align-items: flex-wrap
  @media screen and (max-width: 1200px)
    max-width: 650px
    flex-wrap: nowrap
  @media screen and (max-width: 1000px)
    max-width: 650px
    flex-wrap: wrap
  @media screen and (max-width: 767px)
    margin: 0
    margin-left: 15px
.height-menu
  @media screen and (max-width: 1000px)
    height: 100%
    align-content: flex-start
.bg-dark
  opacity: .85
  background-color: rgb(13, 13, 13, 1)
  transition: 1s
  transform: translateX(0%)
.navbar-logo
  display: flex
  align-items: center
  justify-self: flex-start  
.logo
  @media screen and (max-width: 150px)
    display: none
.vertical-line-logo
  display: inline-block
  width: 2px
  height: 40px
  background: $white
  margin-left: 5px
  @media screen and (max-width: 250px)
    display: none
.navbar-brand-wrapper
  margin-left: 5px
  width: 40%
  @media screen and (max-width: 1200px)
    width: 50%
  @media screen and (max-width: 1150px)
    width: 40%
  @media screen and (max-width: 250px)
    display: none
.navbar-brand-custom  
  color: $white
  word-wrap: break-word
  text-decoration: none
  text-align: start
  line-height: 1em
  font-weight: 600
  animation-duration: 4s
.navbar-collapse
  justify-content: flex-end
.phone
  display: flex
  flex-wrap: nowrap
  align-self: center
  width: 200%
  color: $white
  font-weight: 600
  font-size: 24px
  text-decoration: none
  animation-duration: 1.5s
  @media screen and (max-width: 1200px)
    font-size: 20px
  @media screen and (max-width: 800px)
    font-size: 16px
  @media screen and (max-width: 250px)
    display: none
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
    left: 77.5%  
  @media screen and (max-width: 300px)
    left: 75%  
  @media screen and (max-width: 250px)
    left: 70%  
  @media screen and (max-width: 200px)
    left: 65%  
  @media screen and (max-width: 175px)
    left: 60%  
  @media screen and (max-width: 150px)
    left: 25% 
  @media screen and (max-width: 100px)
    left: 0  
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
.nav-link
  font-size: 18px
  &:hover, &:active, &:focus
    color: $accent
a.router-link-active
  display: inline-block
  width: auto
  color: $accent
  border-bottom: medium solid $accent
.show a.nav-link
  @media screen and (max-width: 1000px)
    margin-top: .5em
    font-size: 22px
    transition: .8s ease-in-out
.navbar button[aria-expanded="true"] > span.navbar-toggler-icon
  display: none
.navbar button[aria-expanded="false"] > div.navbar-close
  display: none
.navbar-close
  width: 10px
  height: 10px
  padding-top: 4vh
.navbar-close-line
  position: absolute
  width: 100%
  height: 2px
  background-color: $white
  &:first-child
    transform: translateY(-50%) rotate(45deg)     
  &:last-child
    transform: translateY(-50%) rotate(-45deg)
.el-dropdown-menu
  background-color: $table_caption  
:global(.el-dropdown-menu__item)
  color: $white
  padding: 15px 10px 15px 10px  
  border-bottom: 1px solid rgb(153, 144, 144)
  margin: 1.5px
.dropdown-item
  font-family: sans-serif
  font-size: 14px
  font-weight: 400
  text-transform: uppercase
  border: none
.custom-arrow
  margin-right: 15px
  height: 12.5px
  width: 12.5px  
.el-dropdown-link
  color: $white
  &.el-tooltip__trigger
    outline: none
:global(.el-dropdown__popper)
  --el-dropdown-menuItem-hover-fill: $table_caption
:global(span.el-popper__arrow, .el-dropdown__popper)
  display: none
:global(.el-dropdown__popper.el-popper)
  border: none
</style>