<script setup>
import { ref, reactive } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/scrollbar';
import 'animate.css';

const dialogFormVisible = ref(false)

const form = reactive({
  name: '',
  phone: '',
  question: '',
})

const modules = [Pagination, Navigation, Scrollbar, EffectCoverflow]

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
});

const changeOnSlide = ref(false);

const onSlideChange = () => {
  changeOnSlide.value == false ? changeOnSlide.value = true : changeOnSlide.value = false;
};

const onSlideChangeReset = () => {
  changeOnSlide.value = false;
};

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
  <el-dialog v-model="dialogFormVisible" class="el-dialog-custom">
    <el-form :model="form">
      <el-form-item >
        <div class="circle"></div>
        <el-input v-model="form.name" autocomplete="off" placeholder="Имя" />
      </el-form-item>
      <el-form-item >
        <div class="circle"></div>
        <el-input v-model="form.phone" autocomplete="off" placeholder="Телефон" />
      </el-form-item>
      <el-form-item >
        <el-input v-model="form.question" autocomplete="off" type="textarea" placeholder="Вопрос" class="el-input-textarea"></el-input>
      </el-form-item>
      <el-button type="primary" @click="dialogFormVisible = false" class="el-button-dialog">
        Отправить
      </el-button>
    </el-form>
  </el-dialog>
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

//Modal dialog
:global(.el-dialog)
  background: $table_caption
  min-width: 100%
  min-height: 100%
  margin: 0
.el-dialog .el-button
  background: $table_caption
  border: 1px solid $border_dialog
  border-radius: 0px
:global(.el-dialog__headerbtn)
  font-size: 54px
  width: 120px
  height: 120px
  @media screen and (max-width: 1800px)
    font-size: 42px
  @media screen and (max-width: 1000px)
    font-size: 36px
    width: 100px
    height: 100px
  @media screen and (max-width: 767px)
    font-size: 30px
    width: 75px
    height: 75px
:global(.el-dialog__headerbtn .el-dialog__close)
  color: $white
.el-form-item:first-child
  margin: 100px 0 115px 547px
  @media screen and (max-width: 1800px)
    margin: 65px 0 30px 450px
  @media screen and (max-width: 1200px)
    margin: 65px 0 30px 350px
  @media screen and (max-width: 1000px)
    margin: 65px 0 30px 200px
  @media screen and (max-width: 767px)
    margin: 40px 0 20px 50px
  @media screen and (max-width: 400px)
    margin: 40px 0 20px 25px
  @media screen and (max-width: 200px)
    display: none
.el-form-item:nth-child(2n)
  margin: 0 0 115px 547px
  @media screen and (max-width: 1800px)
    margin: 0 0 65px 450px
  @media screen and (max-width: 1200px)
    margin: 0 0 65px 350px
  @media screen and (max-width: 1000px)
    margin: 0 0 65px 200px
  @media screen and (max-width: 767px)
    margin: 0 0 40px 50px
  @media screen and (max-width: 400px)
    margin: 0 0 40px 25px
  @media screen and (max-width: 200px)
    display: none
.circle
  position: absolute
  width: 25px
  height: 25px
  border: 3px solid $white
  border-radius: 50%  
  z-index: 1
  @media screen and (max-width: 1200px)
    width: 18px
    height: 18px
  @media screen and (max-width: 767px)
    width: 15px
    height: 15px
  @media screen and (max-width: 200px)
    display: none
.el-input
  width: 375px
  --el-input-text-color: #FFFFFF
  @media screen and (max-width: 1800px)
    width: 300px
:deep(.el-input__wrapper)
  background: $table_caption
  border-bottom: 2px solid $border_dialog
  border-radius: 0px
  box-shadow: none
:deep(.el-input__inner)
  height: 60px
  text-align: center
  font-family: sans-serif
  font-size: 24px
  &::placeholder
    color: $white
  @media screen and (max-width: 1800px)
    font-size: 20px
  @media screen and (max-width: 1200px)
    font-size: 16px
  @media screen and (max-width: 767px)
    font-size: 14px
:deep(.el-textarea__inner)
  width: 825px
  height: 315px
  margin-left: 547px
  padding: 25px 0 0 50px
  --el-input-text-color: #FFFFFF
  background: $table_caption
  font-family: sans-serif
  font-size: 24px
  border: 2px solid $border_dialog
  border-radius: 0px
  box-shadow: none
  &::placeholder
    color: $white
  @media screen and (max-width: 1800px)
    margin-left: 450px 
    width: 500px
    height: 200px
    font-size: 20px
  @media screen and (max-width: 1200px)
    width: 400px
    height: 175px
    margin-left: 350px
    font-size: 16px 
  @media screen and (max-width: 1000px)  
    margin-left: 200px 
  @media screen and (max-width: 767px)  
    margin-left: 50px
    width: 300px
    padding: 15px 0 0 25px
    font-size: 14px 
  @media screen and (max-width: 400px)  
    margin-left: 25px
    max-width: 90%    
  @media screen and (max-width: 200px)
    display: none
:deep(.el-button-dialog)
  margin: 115px 0 0 547px
  padding: 40px 75px
  @media screen and (max-width: 1800px)
    margin: 65px 0 0 450px
    padding: 25px 50px
  @media screen and (max-width: 1200px)
    margin: 65px 0 0 350px
  @media screen and (max-width: 1000px)
    margin: 65px 0 0 200px
  @media screen and (max-width: 767px)
    margin: 65px 0 0 50px
  @media screen and (max-width: 400px)
    margin: 65px 0 0 25px
    max-width: 90%
  @media screen and (max-width: 200px)
    display: none
:deep(.el-button-dialog > span)
  font-family: sans-serif
  color: $white
  @media screen and (max-width: 1800px)
    font-size: 20px
  @media screen and (max-width: 1200px)
    font-size: 16px
  @media screen and (max-width: 767px)
    font-size: 14px
</style>