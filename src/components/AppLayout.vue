<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const modules = [Pagination, Navigation]

const pagination = {
  clickable: true,
  type: 'progressbar'  
}

const props = defineProps({
    imgUrl: {
        type: String,
        required: true
    },
    serviceList: {
      type: Object,
      required: true
    }
})

</script>

<template>
  <section>    
    <swiper 
      :pagination="pagination" 
      :modules="modules" 
      :navigation="true" 
      class="intro"
    >
      <swiper-slide 
        v-for="(item, index) in serviceList" 
        :key="index" :style="`background-image: url(${imgUrl}${item.image})`" 
        class="intro"
      >
        <div class="wrapper">
          <div class="top__wrapper">
            <div class="top__title">
              <h1 class="top__text">{{ item.title }}</h1>
              <h2 class="top__text-low">{{ item.text }}</h2>
            </div>
          </div>
          <div class="bottom__wrapper">
            <div class="button__wrapper">
              <a href="#!" class="action__btn-text">ЗАКАЗАТЬ ЗВОНОК</a>
            </div>
          </div>               
        </div>
      </swiper-slide>
    </swiper>
  </section>
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
  & .wrapper
    position: relative
    display: flex
    flex-wrap: wrap
    text-align: left
    width: 1200px
.top__wrapper
  position: absolute
  top: -10vh
  animation-duration: 3s
  animation-name: slidein
  @keyframes slidein
    from
      margin-top: 35%
      width: 100%
      opacity: 0 
    to
      margin-top: 0%
      width: 100%
      opacity: 1    
  @media screen and (max-width: 1200px)
    grid-template-columns: 1fr
    gap: 0 50px    
.top__title
  transition: .5s
  &:hover, &:focus, &:active
    opacity: .85
    transform: translateX(-10px)
    transition: .5s
    cursor: default 
  @media screen and (max-width: 1200px)
   display: none
.top__text
  color: #FFF
  font-size: 36px
  font-style: normal
  font-weight: 700
  line-height: normal
  margin-bottom: 1vh
.top__text-low
  color: #FFF
  font-size: 24px
  font-style: normal
  font-weight: 400
  line-height: normal
.bottom__wrapper
  position: absolute
  animation-duration: 3s
  animation-name: slidein1 
  @media screen and (max-width: 1200px)
    grid-template-columns: 1fr 
  @keyframes slidein1
    from
      margin-top: 35%
      width: 100%
      opacity: 0 
    to
      margin-top: 0%
      width: 100%
      opacity: 1   
.button__wrapper
  padding: 30px 65px
  background: rgba(105, 123, 124, 0.69)
  margin: auto
  transition: .5s  
  &:hover, &:focus, &:active
    opacity: .85
    transform: scale(1.025)
    transition: .5s
    cursor: default
  @media screen and (max-width: 1200px)
   display: flex
   flex-wrap: wrap
   margin: auto
   padding: 30px 120px
  @media screen and (max-width: 767px)
    padding: 20px 62px
.action__btn-text
  color: #02F0FF
  font-size: 24px
  font-style: normal
  font-weight: 500
  line-height: normal
  text-decoration: none
  cursor: default
  @media screen and (max-width: 1200px)
    font-size: 20px
.swiper
  width: 100%
  height: 100%
.swiper-slide
  text-align: center
  font-size: 18px
  display: flex
  justify-content: center
  align-items: center
  color: #FFFFFF
.swiper-slide img
  display: block
  width: 100%
  height: 100%
.swiper-pagination-bullet
  width: 50px
  height: 50px
  text-align: center
  line-height: 20px
  font-size: 12px
  color: #000
  opacity: 0
  background: rgba(0, 0, 0, 0.2)
.swiper-pagination-bullet-active
  color: #fff
  background: #007aff
</style>