<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, EffectCube, Pagination, Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-cube'

const modules = [ EffectCube, Navigation, Scrollbar, Pagination ]

const navigation = {
  prevEl: '.swiper-button-prev',
  nextEl: '.swiper-button-next',  
  clickable: true
}

const pagination = {
  clickable: true,
  el: '.swiper-pagination'
}

const scrollbar = {
  hide: true
}

const props = defineProps({    
    cardsList: {
      type: Object,
      required: true
    }
});

</script>

<template>
  <section>
    <swiper
      :navigation="navigation"
      :pagination="pagination"
      :modules="modules"
      :scrollbar="scrollbar"
      :effect="'cube'"
      :initialSlide="1"
      :speed="1000"      
    >
      <swiper-slide 
        v-for="(item, index) in cardsList"
        :key="index"               
      >
        <div class="cards__wrapper"
          v-motion
            :focused="{ opacity: 0, x: 50 }"
            :visible="{ opacity: 1, x: 0, transition: {
                          duration: 800,
                          type: 'keyframes',
                          ease: 'easeIn',
                          mass: .5
                        }
                      }"
        >
          <div class="cards">
            <div class="card">
              <div class="card__pic">
                <img :src="`${item.image}`" alt="ПРОЦЕДУРА БАНКРОТСТВА" class="card__pic-thumb">
              </div>
              <div class="card__title">{{ item.title }}</div>
              <div class="card__desc">{{ item.text }}</div>
            </div>
          </div>          
        </div>
      </swiper-slide>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-pagination"></div>
    </swiper>
  </section>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.cards__wrapper
  max-width: 400px
  margin: 0 auto
  background-color: #EAE2E2
  transition: 1s
  padding: 0 10px
.cards
  display: flex
  justify-content: center
  width: 400px
  transition: 1s
  margin: 0 auto
  @media screen and (max-width: 767px)
    width: 280px

@mixin card__effects
  &:hover, &:focus, &:active
    transform: scale(1.125)
    background-color: #91C9FF    
    border: 0
    z-index: 1
    cursor: default
.card
  display: flex
  flex-direction: column
  border: 1.5px solid $accent
  height: 100%
  transition: 1s
  background: $pinky_bg
  @include card__effects
.card__pic
  position: sticky
  width: 160px
  height: 160px
  background: #697B7C
  border: 1px solid $accent
  border-radius: 50%
  top: 0
  left: 0
  transform: translateY(-80px)
  margin: 0 auto 0 auto
  transition: 1s
  @media screen and (max-width: 1200px)
    transform: translateY(0px)
    position: relative   
    margin: 1em auto 1em auto
    transition: 1s
  @media screen and (max-width: 767px)
    width: 100px
    height: 100px
.card__pic-thumb
  display: block
  padding: 45px
  @media screen and (max-width: 767px)
    padding: 18px
.card__title
  margin-bottom: 1em
  padding: 0 3em
  color: #313030
  text-align: center
  font-family: sans-serif
  font-size: 24px
  font-style: normal
  font-weight: 600
  line-height: normal
  @media screen and (max-width: 767px)
    font-size: 18px
.card__desc
  color: #313030
  font-family: sans-serif
  font-size: 24px
  font-style: normal
  font-weight: 400
  line-height: 1.5em
  padding: 0 1em 1em 1em
  text-align: center
  @media screen and (max-width: 767px)
    font-size: 14px
.swiper-slide
  @media screen and (max-width: 1200px)
    height: auto
    align-self: stretch
.swiper-button-next, .swiper-rtl .swiper-button-prev
  @media screen and (min-width: 1650px)
    right: calc(var(--swiper-navigation-size) / 44 * 528) 
.swiper-button-prev, .swiper-rtl .swiper-button-next
  @media screen and (min-width: 1650px)
    left: calc(var(--swiper-navigation-size) / 44 * 528)
.swiper-pagination
  position: relative
  transform: translateY(-3.5vh)
  @media screen and (max-width: 767px)
    transform: translateY(-2vh)
.swiper .swiper-pagination-bullets
  top: 5vh
div.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet
  border: 1px solid $accent
</style>