<script setup>
import { defineModel } from 'vue'
import { onSubmitProfile, addProfileForm, vuelidateProfile, profileResponse } from '@/composable'
import NameForm from '@/components/modal/formitems/NameForm.vue'
import PhoneForm from '@/components/modal/formitems/PhoneForm.vue'

const userFormVisible = defineModel();

</script>

<template>
  <el-dialog v-model="userFormVisible">
    <el-form
      :model="addProfileForm"
      @submit.prevent="onSubmitProfile"
    >
      <NameForm :addForm="addProfileForm" :vuelidate="vuelidateProfile" />
      <PhoneForm :addForm="addProfileForm" :vuelidate="vuelidateProfile" :placeholder="'Телефон'"/>
      <PhoneForm :addForm="addProfileForm" :vuelidate="vuelidateProfile" :placeholder="'Новый телефон'"/>
      <el-button
        @click="profileResponse"        
        native-type="submit" 
        class="el-button-dialog"
        style="margin-top: 50px;"
      > Обновить
      </el-button>
    </el-form>
  </el-dialog>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
@import '@/assets/styles/modal/modal'
</style>