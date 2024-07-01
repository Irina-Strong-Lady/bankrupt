<script setup>
import { ref, defineModel } from 'vue'
import { onSubmitLogin, addLoginForm, vuelidateLogin } from '@/composable'
import NameForm from '../../components/modal/formitems/NameForm.vue'
import PasswordForm from '../formitems/PasswordForm.vue'
import RegisterForm from './RegisterForm.vue'
import { loginPassword } from '../constants'

const loginFormVisible = defineModel()

const resetFormVisible = ref(false);

const form = 'reset';

</script>

<template>
  <el-dialog v-model="loginFormVisible">
    <el-form 
      :model="addLoginForm"
      @submit="onSubmitLogin"
    >
      <NameForm :addForm="addLoginForm" :vuelidate="vuelidateLogin" />
      <PasswordForm :addForm="addLoginForm" :placeholder="loginPassword" :vuelidate="vuelidateLogin"/>
      <a 
        @click="resetFormVisible = true"
        class="password-reset el-button-dialog"
      >Забыли пароль?
      </a>
      <RegisterForm v-model="resetFormVisible" :form="form" />
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