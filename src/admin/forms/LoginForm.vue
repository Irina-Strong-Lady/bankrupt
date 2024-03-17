<script setup>
import { defineModel } from 'vue'
import { onSubmit, addQuestionForm, vuelidate } from '@/composable'
import NameForm from '../../components/modal/formitems/NameForm.vue'
import PasswordForm from '../formitems/PasswordForm.vue'

const loginFormVisible = defineModel()

const buttonPassword = 'Введите пароль'

</script>

<template>
  <el-dialog v-model="loginFormVisible" class="el-dialog-custom">
    <el-form 
      :model="addQuestionForm"
      @submit="onSubmit"
    >
      <NameForm :addForm="addQuestionForm" :vuelidate="vuelidate" />
      <PasswordForm :addForm="addQuestionForm" :buttonPassword="buttonPassword" />
      <el-button 
        native-type="submit" 
        class="el-button-dialog"
        style="margin-top: 50px;"
      >
        Войти
      </el-button>
    </el-form>
  </el-dialog>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
@import '@/assets/styles/modal/modal'
</style>