<script setup></script>

<template>
  <section>
    <div class="bottom__section-layout">
      <div class="card__block">
        <div class="cards__wrapper">
          <div class="cards">
            <div class="card">
              <div class="card__pic">
                <img src="/src/assets/img/svg/bank-building-icon.svg" alt="ПРОЦЕДУРА БАНКРОТСТВА" class="card__pic-thumb">
              </div>
              <div class="card__title">
                ПРОЦЕДУРА БАНКРОТСТВА
              </div>
              <div class="card__desc">
                Эффективное представительство по защите прав физических и юридических лиц. Сотрудники с опытом работы в системе арбитражных судов всех инстанций
              </div>
            </div>
            <div class="card">
              <div class="card__pic">
                <img src="/src/assets/img/svg/building-icon.svg" alt="БАНКРОТСТВО ЮРИДИЧЕСКИХ ЛИЦ" class="card__pic-thumb">
              </div>
              <div class="card__title">
                БАНКРОТСТВО ЮРИДИЧЕСКИХ ЛИЦ
              </div>
              <div class="card__desc">
                Сопровождение процедуры банкротства на любой стадии
              </div>
            </div>
            <div class="card">
              <div class="card__pic">
                <img src="/src/assets/img/svg/user-icon.svg" alt="БАНКРОТСТВО ФИЗИЧЕСКИХ ЛИЦ" class="card__pic-thumb">
              </div>
              <div class="card__title">
                БАНКРОТСТВО ФИЗИЧЕСКИХ ЛИЦ
              </div>
              <div class="card__desc">
                100% успешных кейсов по защите прав граждан. Законные и эффективные подходы по избавлению от долговой нагрузки
              </div>
            </div>
          </div>          
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.bottom__section-layout
  background-color: #EAE2E2
  height: 100%
.cards__wrapper
  max-width: 1200px
  margin: 0 auto
  background-color: #EAE2E2
  transition: 1s
  padding: 0 10px
.cards
  display: grid
  grid-template-columns: repeat(3, 1fr)
  transition: 1s
  @media screen and (max-width: 1200px)
    grid-template-columns: 400px
    justify-content: center
    transition: 1s
  @media screen and (max-width: 767px)
    grid-template-columns: 280px

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
  position: relative
  border: 1px solid #208f96
  transition: 1s
  @include card__effects
.card__pic
  position: sticky
  width: 160px
  height: 160px
  background: #697B7C
  border: 1px solid #02F0FF
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
  font-family: Advent Pro
  font-size: 26px
  font-style: normal
  font-weight: 600
  line-height: normal
  @media screen and (max-width: 767px)
    font-size: 24px
.card__desc
  color: #313030
  text-align: center
  font-family: Advent Pro
  font-size: 26px
  font-style: normal
  font-weight: 600
  line-height: normal
  padding: 0 1em 1em 1em
  text-align: justify
  @media screen and (max-width: 767px)
    font-size: 24px
    text-align: center
.card__arrow
  display: flex
  flex-wrap: wrap
  padding: 0 154px 36px 154px
  justify-content: baseline
  margin: auto 0 0 0
  transition: .5s
  &:hover, &:focus, &:active
    opacity: .85
    transform: translateY(10px)
    transition: .5s
  @media screen and (max-width: 767px)
    padding: 0 0 36px 90px
</style>