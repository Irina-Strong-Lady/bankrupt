<script setup>
import { ref } from 'vue'
import DialogForm from './modal/DialogForm.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { Parallax, Autoplay, Scrollbar } from 'swiper/modules'

const modules = [Parallax, Autoplay, Scrollbar]

const dialogFormVisible = ref(false)

const props = defineProps({    
    footerImage: {
      type: Object,
      required: true
    }
})

const autoplay = {
  delay: 5000
}

const scrollbar = {
  hide: true 
};

</script>

<template>
  <swiper 
    :style="{
      '--swiper-navigation-color': '$accent',
      '--swiper-pagination-color': '$accent'
    }"
    :speed="1000"
    :parallax="true"
    :modules="modules"
    :autoplay="autoplay"
    :scrollbar="scrollbar"
    class="mySwiper"
  >
    <div
      slot="container-start"     
      data-swiper-parallax="-23%"
      class="parallax-bg"
    >
    </div>
    <swiper-slide v-for="(item, index) in footerImage"     
      :style="`background-image: url(${item.image})`"
      class="image"
      >      
      <div class="title" data-swiper-parallax="-300">{{ item.title }}</div>
      <div class="text" data-swiper-parallax="-100">
        <p>{{ item.text }}</p>
      </div>
    </swiper-slide>
  </swiper>
  <swiper>
    <div class="button">
      <el-button 
        @click="dialogFormVisible = true"
      >
        Заказать звонок
      </el-button>
    </div>
  </swiper>
  <DialogForm v-model="dialogFormVisible" />    
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.mySwiper
  position: relative
  display: flex
  flex-wrap: wrap
  justify-content: center
  background: $btn
.parallax-bg
  position: absolute
.image
  height: 60vh  
  background-position: center center
  background-size: cover
  align-content: center
  justify-content: left
  @media screen and (max-width: 767px)
    height: 30vh
.swiper-slide
  display: flex
  flex-wrap: wrap
  flex-direction: column
  justify-content: center
  text-align: justify
  align-content: flex-start
.title, .text > p
  max-width: 500px
  padding-left: 10vw
  line-height: 1em
  word-wrap: break-word
  color: $pinky_bg
  @media screen and (max-width: 767px)
    max-width: 300px
  @media screen and (max-width: 400px)
    max-width: 200px
  @media screen and (max-width: 250px)
    max-width: 150px
.title
  font-size: 30px
  font-weight: 900
  text-transform: uppercase
  padding-bottom: .5em
  @media screen and (max-width: 767px)
    font-size: 18px
.text > p
  font-weight: normal
  font-size: 26px
  font-weight: 600
  white-space: wrap
  text-align: justify
  text-transform: uppercase
  color: $accent
  @media screen and (max-width: 767px)
    font-size: 16px
.el-button
  margin-top: 3em
  padding: 45px 65px
  @media screen and (max-width: 767px)
    padding: 35px 45px
.button
  display: flex
  flex-wrap: wrap
  justify-content: center
  background: $pinky_bg
</style>