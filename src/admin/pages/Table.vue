<script setup>
import router from '@/router'
import { isValidToken } from '@/composable'
import WorkTable from './components/WorkTable.vue'
import { elMessage } from '@/composable';

let warning = 'warning'
let message = 'Действие токена истекло'

const toAdmin = () => router.push({name: 'admins'})

const toProfile = ()=> router.push({name: 'profiles'})

const messageReport = () => isValidToken() ? undefined : elMessage(warning, message)

const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('claim')
  toAdmin()
};

</script>

<template>
  <section>
    <div class="wrapper">
      <div class="caption-wrapper">
        <div v-if="isValidToken()" class="user-wrapper">
          <div 
            class="user-img" 
            @click.prevent="isValidToken() ? toProfile() : toAdmin(); 
                            isValidToken() ? undefined : messageReport()">
            <img src="/src/assets/img/png/user-img.png" alt="user-img" class="user-pic">
          </div>
          <div class="exit-wrapper">
            <a @click.prevent="logout" class="admin-logout">Выход</a>
          </div>
        </div>
        <div v-else class="user-wrapper">
          <div class="user-img">
            <img src="/src/assets/img/png/user-img.png" alt="user-img" class="user-pic">
          </div>
          <div class="exit-wrapper">
          <a @click.prevent="logout" class="admin-logout">Выход</a>
          </div>
        </div>
        <div class="title-wrapper">
          <h1 class="caption">{{ isValidToken() ? undefined : 'Сессия истекла (необходима авторизация)' }}</h1>
        </div>
        <div v-if="isValidToken()" class="work-table-wrapper">
          <WorkTable />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
.wrapper
  position: absolute
  background: $table_caption
  width: 100%
  height: 100%
  margin: 0
.caption-wrapper
  position: relative
  display: flex
  align-items: center
  flex-wrap: wrap
  flex-direction: column
  background: $table_caption
.caption
  color: $white
  font-family: sans-serif
  font-size: 24px
  margin-bottom: 1rem
  @media screen and (max-width: 1200px)
    font-size: 20px
  @media screen and (max-width: 767px)
    font-size: 16px
.user-wrapper
  display: flex
  flex-wrap: wrap
  justify-content: flex-end
  width: 100%
  height: 100%
  padding: 20px 20px 0 0
.user-img
  display: block
  padding: .25rem
  border: 1.5px solid $white
  border-radius: 25%
  transition: .5s
  margin-bottom: 10px
  margin-right: .33em
  &:hover, &:active, &:focus
    transform: scale(1.125)
    cursor: pointer
    border-color: $border_dialog
.exit-wrapper
  display: flex
  flex-wrap: wrap 
  justify-content: flex-end
  width: 100%
  height: 100%
.admin-logout
  color: $white
  font-family: sans-serif
  font-size: 16px
  text-decoration: none
  &:hover, &:active, &:focus
    transform: scale(1.05)
    cursor: pointer
    color: $border_dialog
.title-wrapper
  width: 50%
  text-align: center
.work-table-wrapper
  width: 100%
  padding: 20px
</style>