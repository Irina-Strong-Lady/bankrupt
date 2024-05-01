<script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue'
import RegisterForm from './forms/RegisterForm.vue'
import LoginForm from './forms/LoginForm.vue'
import { navBarLogoItems, navBarItems } from '../constants'

const registerFormVisible = ref(false)

const loginFormVisible = ref(false)

const form = 'register';

</script>

<template>
  <section>
    <div class="wrapper">
      <div class="title-wrapper">
        <h1 class="title">Страница административного доступа сайта <br> "Центр правовой помощи при банкротстве"</h1>
      </div>
      <div class="buttons-wrapper">
        <el-button 
          @click="loginFormVisible = true"
          class="button"
        >Войти</el-button>
        <el-button 
          @click="registerFormVisible = true"
          class="button"
        >Зарегистрироваться</el-button>
      </div>
      <Header :navBarItems="navBarItems" :navBarLogoItems="navBarLogoItems" />
    </div>
  </section>
  <section>
    <RegisterForm v-model="registerFormVisible" :form="form" />
    <LoginForm v-model="loginFormVisible" />
  </section>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
.wrapper
  position: absolute
  margin: 0
  padding: 0
  height: 100%
  width: 100%
  background: $table_caption
.title-wrapper
  position: relative
  display: flex
  flex-wrap: wrap
  width: 100%
  height: 25%
  justify-content: center
  align-content: flex-end
  margin-bottom: 45px
  @media screen and (max-height: 750px)
    height: 35%
  @media screen and (max-height: 500px)
    height: 50%
  @media screen and (max-height: 350px)
    height: 65%
  @media screen and (max-height: 250px)
    display: none
.title
  font-family: sans-serif
  font-size: 24px
  font-weight: 600
  text-align: center
  padding: 0 15px
  color: $white
  @media screen and (max-width: 1000px)
    font-size: 18px
  @media screen and (max-width: 767px)
    font-size: 16px
  @media screen and (max-width: 200px)
    display: none
.buttons-wrapper
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-items: flex-start
  @media screen and (max-height: 250px)
    display: none
.button
  border: 1px solid $border_dialog
  border-radius: 25px
  background: $table_caption
  &:first-child    
    margin: 0 15px 30px 0
  @media screen and (max-width: 1000px)
    padding: 20px 30px
  @media screen and (max-width: 767px)
    padding: 15px 22.5px
    margin: 0
  @media screen and (max-width: 180px)
    display: none
:deep(.button > span)
  font-family: sans-serif
  font-size: 20px
  color: $white
  @media screen and (max-width: 1000px)
    font-size: 16px
  @media screen and (max-width: 767px)
    font-size: 14px
</style>