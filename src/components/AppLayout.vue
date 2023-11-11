<script setup>
const props = defineProps({
    imgUrl: {
        type: String,
        required: true
    }
})
</script>

<template> 
  <section>
    <div :style="`background-image: url(${imgUrl})`" class="intro">
      <div class="wrapper">
        <div class="top__wrapper">
          <div class="arrow__wrapper"></div>
          <div class="top__title-left">
            <h1 class="top__text-left">ПОМОЖЕМ СОХРАНИТЬ ИМУЩЕСТВО</h1>
          </div>
          <div class="top__title-right">
            <h1 class="top__text-right">ВАШИ ДОЛГИ - НАША ЗАБОТА!</h1>
          </div>
        </div>
        <div class="bottom__wrapper">
          <div class="button__wrapper">
            <a href="#!" class="action__btn-text">ЗАКАЗАТЬ ЗВОНОК</a>
          </div>
          <div class="bottom__title-right">
            <h1 class="bottom__text-right">ПОЛНОЕ СПИСАНИЕ ДОЛГОВ БЕЗ РИСКОВ</h1>
          </div>
          <div class="arrow__wrapper-bottom"></div>
        </div>
      </div>        
    </div>
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
  padding-top: 229px
  text-align: center  
  & .wrapper
    display: inline-block
    max-width: 1200px    
.top__wrapper
  display: grid
  grid-template-columns: 46px repeat(2, 1fr)
  column-count: 1
  gap: 0 70px
  animation-duration: 2s
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
.arrow__wrapper
  background: url('../assets/img/svg/arrow-top.svg') no-repeat left
  transition: .5s
  margin-bottom: 20px
  &:hover, &:focus, &:active
    opacity: .85
    transform: translateX(-10px)
    transition: .5s
  @media screen and (max-width: 1200px)
    display: none
.top__title-left
  transition: .5s
  text-align: left  
  &:hover, &:focus, &:active
    opacity: .85
    transform: translateX(-10px)
    transition: .5s
    cursor: default 
  @media screen and (max-width: 1200px)
   display: none
.top__text-left
  color: #FFF
  font-size: 36px
  font-style: normal
  font-weight: 400
  line-height: normal
  padding-right: 100px
.top__title-right
  &:hover, &:focus, &:active
    cursor: default
  @media screen and (max-width: 1200px)
    position: sticky
    display: flex
    flex-wrap: wrap
    justify-content: center
    margin: 0 15px
.top__text-right
  color: #FFF
  font-size: 42px
  font-style: normal
  font-weight: 500
  line-height: normal
  letter-spacing: 1.5px
  text-align: left
  @media screen and (max-width: 1200px)
    padding-left: 0
  @media screen and (max-width: 767px)
    padding-left: 0
    font-size: 36px
    text-align: center
.bottom__wrapper
  display: grid
  grid-template-columns: repeat(2, 1fr) 46px
  margin-top: 80px
  animation-duration: 3s
  animation-name: slidein1 
  @media screen and (max-width: 1200px)
    grid-template-columns: 1fr 
  @keyframes slidein1
    from
      margin-left: 35%
      width: 100%
      opacity: 0 
    to
      margin-left: 0%
      width: 100%
      opacity: 1   
.button__wrapper
  padding: 40px 85px
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
.bottom__title-right
  padding: 5% 8% 0 19%
  transition: .5s
  &:hover, &:focus, &:active
    opacity: .85
    transform: translateX(10px)
    transition: .5s
    cursor: default
  @media screen and (max-width: 1200px)
    display: none  
.bottom__text-right
  color: #FFF
  font-size: 38px
  font-style: normal
  font-weight: 400
  line-height: normal
  text-align: left
.arrow__wrapper-bottom
  background: url('../assets/img/svg/arrow-right.svg') no-repeat right
  transition: .5s
  margin-top: 20px
  &:hover, &:focus, &:active
    opacity: .85
    transform: translateX(10px)
    transition: .5s
    cursor: default
  @media screen and (max-width: 1200px)
    display: none
</style>