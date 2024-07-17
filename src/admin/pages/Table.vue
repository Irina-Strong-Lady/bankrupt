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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
              <path fill="currentColor" d="M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z">
              </path>
            </svg>
          </div>
          <div class="exit-wrapper">
            <a @click.prevent="logout" class="admin-logout">Выход</a>
          </div>
        </div>
        <div v-else class="user-wrapper">
          <div class="user-img">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
              <path fill="currentColor" d="M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z">
              </path>
            </svg>
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
  width: 2.5em
  color: $white
  padding: .25rem
  border: 1.5px solid $white
  border-radius: 50%
  transition: .5s
  margin-bottom: 10px
  margin-right: .33em
  &:hover, &:active, &:focus
    transform: scale(1.125)
    cursor: pointer
    color: $table_caption
    background: $accent
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