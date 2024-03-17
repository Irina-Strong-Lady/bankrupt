<script setup>
import { defineModel } from 'vue'
import { onSubmit, addQuestionForm, vuelidate } from '@/composable'
import NameForm from '../../components/modal/formitems/NameForm.vue'
import PhoneForm from '../../components/modal/formitems/PhoneForm.vue'
import PasswordForm from '../formitems/PasswordForm.vue'

const registerFormVisible = defineModel()

const buttonPassword1 = 'Придумайте пароль'

const buttonPassword2 = 'Подтвердите пароль';

</script>

<template>
  <el-dialog v-model="registerFormVisible" class="el-dialog-custom">
    <el-form 
      :model="addQuestionForm"
      @submit="onSubmit"
    >
      <NameForm :addForm="addQuestionForm" :vuelidate="vuelidate" />
      <PhoneForm :addForm="addQuestionForm" :vuelidate="vuelidate" />
      <PasswordForm :addForm="addQuestionForm" :buttonPassword="buttonPassword1" :vuelidate="vuelidate" />
      <PasswordForm :addForm="addQuestionForm" :buttonPassword="buttonPassword2" :vuelidate="vuelidate" />
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