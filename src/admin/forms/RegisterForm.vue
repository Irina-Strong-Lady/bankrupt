<script setup>
import { defineModel } from 'vue'
import { onSubmitUser, addRegisterForm, vuelidateUser } from '@/composable'
import { registerPassword, registerConfirm } from '../constants'
import NameForm from '../../components/modal/formitems/NameForm.vue'
import PhoneForm from '../../components/modal/formitems/PhoneForm.vue'
import PasswordForm from '../formitems/PasswordForm.vue'

const registerFormVisible = defineModel()

</script>

<template>
  <el-dialog v-model="registerFormVisible" class="el-dialog-custom">
    <el-form 
      :model="addRegisterForm"
      @submit="onSubmitUser"
    >
      <NameForm :addForm="addRegisterForm" :vuelidate="vuelidateUser" />
      <PhoneForm :addForm="addRegisterForm" :vuelidate="vuelidateUser" />
      <PasswordForm :addForm="addRegisterForm" :placeholder="registerPassword" :vuelidate="vuelidateUser" />
      <PasswordForm :addForm="addRegisterForm" :placeholder="registerConfirm" :vuelidate="vuelidateUser" />
      <el-button 
        native-type="submit" 
        class="el-button-dialog"
        style="margin-top: 50px;"
      >
        Зарегистрироваться
      </el-button>
    </el-form>
  </el-dialog>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
@import '@/assets/styles/modal/modal'
</style>