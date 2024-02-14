<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, EffectCoverflow } from 'swiper/modules'
import DialogForm from './modal/DialogForm.vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import 'swiper/css/scrollbar'
import 'animate.css'

const modules = [Pagination, Navigation, Scrollbar, EffectCoverflow]

const dialogFormVisible = ref(false)

const pagination = {
  clickable: true, 
  el: '.swiper-pagination'
}

const navigation = {
  prevEl: '.swiper-button-prev',
  nextEl: '.swiper-button-next',
  clickable: true
}

const scrollbar = {
  hide: true 
}

const props = defineProps({    
    serviceList: {
      type: Object,
      required: true
    }
})

const changeOnSlide = ref(false)

const onSlideChange = () => changeOnSlide.value = !changeOnSlide.value

const onSlideChangeReset = () => changeOnSlide.value = false;

</script>

<template>
  <section>    
    <swiper
      :navigation="navigation"
      :pagination="pagination"
      :scrollbar="scrollbar"
      :modules="modules" 
      :effect="'coverflow'"
      @swiper="onSlideChange"
      @real-index-change="onSlideChange"
      @navigation-next="onSlideChange"
      @navigation-prev="onSlideChange"
      @slider-move="onSlideChangeReset"
      @touch-move="onSlideChangeReset"
      @pagination-update="onSlideChangeReset"
      class="intro"
    >
      <swiper-slide 
        v-for="(item, index) in serviceList" 
        :key="index" :style="`background-image: url(${item.image})`" 
        class="intro"
      >
        <div class="wrapper">
          <div class="top__wrapper">
            <div class="top__title">
              <h1 class="top__text" :class="{'animate__bounceInDown': changeOnSlide}">{{ item.title }}</h1>
              <h2 class="top__text-low" :class="{'animate__bounceInUp': changeOnSlide}">{{ item.text }}</h2>
            </div>
          </div>
          <el-button 
            :class="{'animate__bounceInUp': changeOnSlide}" 
            @click="dialogFormVisible = true"
          >
            Заказать звонок
          </el-button>
        </div>               
      </swiper-slide>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-pagination"></div>
    </swiper>
  </section>
  <DialogForm v-model="dialogFormVisible" />
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.intro
  height: 740px
  width: 100%
  background-repeat: no-repeat
  background-size: cover
  background-position: center
  text-align: center
  z-index: 0
.wrapper
  position: relative
  text-align: left
  flex-grow: 1
  max-width: 1200px
  @media screen and (max-width: 1200px)
    max-width: 650px
    justify-items: center
    padding-left: 15px
  @media screen and (max-width: 767px)    
    padding-left: 0
    padding-right: 70px
    align-content: middle
  @media screen and (max-width: 740px)
    padding-left: 15px
.top__wrapper
  display: inline-block
  width: 100%
  margin-bottom: 1em  
.top__title
  transition: .5s
  &:hover, &:focus, &:active
    opacity: .85
    transform: translateX(-10px)
    transition: .5s
    cursor: default 
.top__text
  color: #FFF
  font-size: 36px
  font-style: normal
  font-weight: 700
  line-height: normal
  animation-duration: 1s
  text-transform: uppercase
  @media screen and (max-width: 767px)
    font-size: 20px
.top__text-low
  text-align: left
  color: #FFF
  font-size: 26px
  font-style: normal
  font-weight: 400
  line-height: normal
  animation-duration: 2s
  word-wrap: normal
  @media screen and (max-width: 767px)
    font-size: 20px
.swiper-pagination
  bottom: 10vh
  @media screen and (max-width: 1650px)
    bottom: 5vh
  @media screen and (max-width: 1200px)
    bottom: 2.5vh
  @media screen and (max-width: 767px)
    bottom: 1.5vh
</style>