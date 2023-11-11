<script setup>

</script>

<template>
  <footer>
    <div class="footer__wrapper">
      <div class="footer__wrap">
        <p class="text__wrap">Copyright <span class="copyright">&#169</span> 2023. Центр правовой помощи при банкротстве. Все права защищены.</p>
        <a href="#!" class="telegram">
          <img src="/src/assets/img/svg/telegram.svg" alt="telegram">
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.footer__wrapper
  background: rgba(105, 123, 124, 0.69)
.footer__wrap
  display: flex
  flex-wrap: nowrap
  flex-flow: row wrap
  margin: auto auto auto 20vw
  transition: 1s
  @media screen and (max-width: 1620px)
    flex-flow: column wrap
    margin: auto
    transition: 1s
    padding: 10px 10px
@mixin footer__text
  color: #362E2E
  font-size: 22px
  font-style: normal
  font-weight: 500
  line-height: normal
.text__wrap
  margin: 45px auto 45px auto
  text-align: justify
  @include footer__text
  @media screen and (max-width: 767px)
    display: none
.copyright
  @include footer__text
  font-size: 30px
  font-weight: 700
.telegram
  position: relative
  margin: auto
  transition: .5s
  &:hover, &:focus, &:active
    opacity: .85
    transform: scale(1.1)
    background-color: #91C9FF
    border-radius: 50%
    transition: .5s
    cursor: pointer
</style>