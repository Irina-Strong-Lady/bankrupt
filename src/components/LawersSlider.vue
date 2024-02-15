<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'animate.css'

const modules = [Navigation, Scrollbar, Pagination]

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
    lawerSliderImage: {
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
      :auto-height="true"
      :speed="1200"
      class="wrapper">
      <swiper-slide 
        v-for="(item, index) in lawerSliderImage"
        :key="index"
        v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible="{ opacity: 1, x: 0, transition: {
                        duration: 800,
                        type: 'spring',
                        ease: 'easeIn',
                        mass: .5
                      }
                    }"       
      >
        <div class="wrapper__photo">
          <div :style="`background-image: url(${item.image})`" class="photo">
          </div>
        </div>
        <div class="wrapper__text">
          <p class="title">{{ item.title }}</p>
          <p class="desc">{{ item.text }}</p>
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
.wrapper
  width: 100%
  height: 100%
  padding-top: 3em
  padding-bottom: 1em
.wrapper__photo
  display: block
  border: 10px solid #f2f4f4
  border-radius: 50%
  margin-bottom: 1em
  background: rgb(6 6 6 / 12%)
.photo
  width: 175px
  height: 175px
  border-radius: 50%
  background-position: center center
  background-size: cover
  margin: 25px 25px
  @media screen and (max-width: 767px)
    width: 125px
    height: 125px
.wrapper__text
  display: block 
  text-align: center
  text-wrap: wrap
  width: 35%
  height: 50% 
  @media screen and (max-width: 767px)
    width: 70%
.title
  font-family: sans-serif
  font-size: 18px
  font-weight: 600
  color: #0589de
  margin-bottom: .3em
.desc
  font-family: sans-serif
  font-size: 14px
  line-height: 1.5em
  text-align: center
  color: $footer_letters
.swiper-slide
  flex-direction: column
.swiper-button-next, .swiper-rtl .swiper-button-prev
  @media screen and (min-width: 1650px)
    right: calc(var(--swiper-navigation-size) / 44 * 528) 
.swiper-button-prev, .swiper-rtl .swiper-button-next
  @media screen and (min-width: 1650px)
    left: calc(var(--swiper-navigation-size) / 44 * 528)
.swiper-pagination
  position: relative
.swiper .swiper-pagination-bullets
  top: 5vh
</style>