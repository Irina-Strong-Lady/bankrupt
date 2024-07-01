<script setup>
import router from '@/router'
import { ref } from 'vue'
import { isValidToken, getTokenData } from '@/composable'
import UserProfileForm from '@/admin/forms/UserProfileForm.vue'

const userData = getTokenData()

const buttonVisible = ref(false)

const isChecked = () => buttonVisible.value = !buttonVisible.value

const userFormVisible = ref(false);

</script>

<template>
  <section>
    <div class="wrapper">
      <div class="btn-img" 
            @click.prevent="isValidToken() ? 
            router.push({name: 'tables'}) : 
            router.push({name: 'admins'})"
      >
        <img src="/src/assets/img/png/back-btn.png" alt="back-btn" class="btn" />
      </div>
      <div class="caption-wrapper">
        <h2 class="caption">Профиль пользователя</h2>
      </div>
      <div class="user-wrapper">
        <div class="user-info">
          <tbody>
            <tr>
              <div class="row-wrapper">
                <th>Имя:</th>
                <td>{{ userData.name }}</td>
              </div>
            </tr>
            <tr>
              <div class="row-wrapper">
                <th>Телефон:</th>
                <td>{{ userData.phone }}</td>
              </div>
            </tr>
          </tbody>
          <div class="checkbox-wrapper">
            <el-checkbox 
            @input="isChecked"
            size="large"
            >
              <span>Обновить данные пользователя</span>
            </el-checkbox>
          </div>         
          <transition name="fade">
            <div v-if="buttonVisible" :class="['btn-wrapper', { buttonVisible : 'btn-transition'}]">
              <el-button 
                @click.prevent="userFormVisible = true"
              >
                Обновить
              </el-button>
            </div> 
          </transition>         
        </div>  
      </div>
    </div>    
  </section>
  <section>
    <UserProfileForm v-model="userFormVisible" />
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
.btn-img
  margin: 20px 0 0 20px
.btn
  width: 2em
  height: 2em
  &:hover, &:active, &:focus
    transform: scale(1.125)
    cursor: pointer
    transition: .75s
.caption-wrapper
  display: flex
  justify-content: flex-start
  margin-top: 20px
  margin-left: 20px
  @media screen and (max-width: 265px)
    display: none
.caption  
  font-size: 24px
  font-weight: 600
  color: $white
.btn-wrapper
  margin: 1em 0 1em 0
.btn-transition
  transition: margin-right 2s ease-in-out
.el-button
  background: $text_photo
:deep(.el-button > span)
  font-size: 18px
  color: $white
.user-wrapper
  display: flex
  width: 100%
  height: 50%
  margin-left: 20px
  @media screen and (max-width: 265px)
    display: none
.user-info
  margin: 0
.row-wrapper
  margin-top: 1em
.checkbox-wrapper
  margin-top: 1.5em
th, td, span
  display: inline-block
  color: $white
  font-size: 18px
  font-weight: 600
  color: $white
  &:last-child
    margin-left: 10px
span 
  color: $text_photo
.fade-enter-active, .fade-leave-active 
  transition: opacity 1s ease
.fade-enter-from,.fade-leave-to 
  opacity: 0
</style>