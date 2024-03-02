<script setup>

</script>

<template>
  <footer v-cloak>
    <div class="footer__wrapper">
      <div class="bg__color-wrapper">
        <div class="footer__wrap">
          <p class="text__wrap">Copyright <span class="copyright">&#169</span> 2023. Центр правовой помощи при банкротстве. Все права защищены.</p>
          <a href="https://t.me/brain_iobot" target="_blank" class="telegram">
            <img src="/src/assets/img/svg/telegram.svg" alt="telegram">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
[v-cloak]
  display: none
.footer__wrapper
  background: $pinky_bg
.bg__color-wrapper
  background: rgb(6 6 6 / 12%)
.footer__wrap
  display: flex
  justify-content: space-around
  align-items: center
  transition: 1s
@mixin footer__text
  color: $footer_letters
  font-family: sans-serif
  font-size: 18px
  font-style: normal
  font-weight: 500
  line-height: normal
.text__wrap
  margin: 0 auto 0 auto
  text-align: justify
  align-content: center
  @include footer__text
  @media screen and (max-width: 1000px)
    display: none
.copyright
  @include footer__text
  font-size: 22px
  font-weight: 700
.telegram img
  position: relative
  float: center
  transition: .5s
  right: 200%
  padding: 10px 0 0 0
  @media screen and (max-width: 1000px)
    right: 0
  &:hover, &:focus, &:active
    opacity: .85
    transform: scale(1.1)
    background-color: #91C9FF
    border-radius: 50%
    transition: .5s
    cursor: pointer
</style>