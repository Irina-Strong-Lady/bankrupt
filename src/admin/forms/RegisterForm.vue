<script setup>
import { defineModel } from 'vue'
import { onSubmitUser, onSubmitReset, addRegisterForm, vuelidateUser } from '@/composable'
import { registerPassword, registerConfirm, newPassword, registerButton, resetButton } from '../constants'
import NameForm from '../../components/modal/formitems/NameForm.vue'
import PhoneForm from '../../components/modal/formitems/PhoneForm.vue'
import PasswordForm from '../formitems/PasswordForm.vue'

const registerFormVisible = defineModel()

const props = defineProps({    
    form: {
      type: String,
      required: true
    }
});

</script>

<template>
  <el-dialog v-model="registerFormVisible">
    <el-form v-if="form == 'register'"
      :model="addRegisterForm"
      @submit="onSubmitUser"
    >
      <NameForm :addForm="addRegisterForm" :vuelidate="vuelidateUser" />
      <PhoneForm :addForm="addRegisterForm" :vuelidate="vuelidateUser" :placeholder="'Телефон'"/>
      <PasswordForm :addForm="addRegisterForm" :placeholder="form == 'register' ? registerPassword : newPassword" :vuelidate="vuelidateUser" />
      <PasswordForm :addForm="addRegisterForm" :placeholder="registerConfirm" :vuelidate="vuelidateUser" />
      <el-button 
        native-type="submit" 
        class="el-button-dialog"
        style="margin-top: 50px;"
      > {{ form == 'register' ? registerButton : resetButton }}
      </el-button>
    </el-form>
    <el-form v-else-if="form == 'reset'"
      :model="addRegisterForm"
      @submit="onSubmitReset"
    >
      <NameForm :addForm="addRegisterForm" :vuelidate="vuelidateUser" />
      <PhoneForm :addForm="addRegisterForm" :vuelidate="vuelidateUser" />
      <PasswordForm :addForm="addRegisterForm" :placeholder="form == 'register' ? registerPassword : newPassword" :vuelidate="vuelidateUser" />
      <PasswordForm :addForm="addRegisterForm" :placeholder="registerConfirm" :vuelidate="vuelidateUser" />
      <el-button 
        native-type="submit" 
        class="el-button-dialog"
        style="margin-top: 50px;"
      > {{ form == 'register' ? registerButton : resetButton }}
      </el-button>
    </el-form>
  </el-dialog>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
@import '@/assets/styles/modal/modal'
</style>