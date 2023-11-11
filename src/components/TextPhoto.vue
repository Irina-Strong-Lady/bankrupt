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
    <div class="footer__section-layout">
      <div :style="`background-image: url(${imgUrl})`" class="wrapper__photo">
        <div class="wrapper__text">
          <p class="text__photo">
            Закажите платную консультацию юриста по банкротству по телефону
          </p>
        </div>
      </div>
      <div class="bottom__btn">
        <div class="footer__button">
          <a href="#!" class="footer__btn-text">ЗАКАЗАТЬ</a>
        </div>
      </div>  
    </div>
  </section>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.footer__section-layout
  max-width: 1920
  height: 100%
.wrapper__photo
  background-repeat: no-repeat
  background-position: center 
  background-repeat: no-repeat
  background-color: rgba(105, 123, 124, 0.12)
  transition: 1s  
.wrapper__text
  display: flex
  height: 530px
.text__photo
  margin: auto
  max-width: 25%
  text-align: center
  color: #FFF
  font-family: Advent Pro
  font-size: 42px
  font-style: normal
  font-weight: 500
  line-height: normal
  @media screen and (max-width: 1200px)
    max-width: 40%
    font-size: 36px
  @media screen and (max-width: 767px)
    font-size: 28px
    max-width: 60%
.bottom__btn
  display: flex
  flex-wrap: wrap
.footer__button  
  text-align: center
  margin: 50px auto 88px auto
  padding: 40px 120px
  background: rgba(105, 123, 124, 0.69)
  transition: .5s
  &:hover, &:focus, &:active
    opacity: .85
    transform: scale(1.025)
    transition: .5s
    cursor: pointer
  @media screen and (max-width: 1200px)
    padding: 20px 105px
.footer__btn-text
  text-decoration: none
  color: #02F0FF
  font-size: 24px
  font-style: normal
  font-weight: 500
  line-height: normal
  @media screen and (max-width: 1200px)
    font-size: 20px
</style>