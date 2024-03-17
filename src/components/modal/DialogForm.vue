<script setup>
import { defineModel, ref } from 'vue'
import { onSubmit, addQuestionForm, vuelidate } from '@/composable'
import QuestionForm from './formitems/QuestionForm.vue'
import NameForm from './formitems/NameForm.vue'
import PhoneForm from './formitems/PhoneForm.vue'
import EmailForm from './formitems/EmailForm.vue'

const dialogFormVisible = defineModel()

const checked = ref(false);

</script>

<template>
  <el-dialog v-model="dialogFormVisible" class="el-dialog-custom">
    <el-form 
      :model="addQuestionForm"
      @submit="onSubmit"
    >
      <NameForm :addForm="addQuestionForm" :vuelidate="vuelidate" />
      <PhoneForm :addForm="addQuestionForm" :vuelidate="vuelidate" />
      <el-checkbox 
        v-model="checked" 
        size="large"
        :border="true"
        class="checkbox"
      >
        <p 
          :class="!checked ? 'email-visible' : 'email-invisible'" 
          class="email-label"
        >Email</p>
      </el-checkbox>
      <EmailForm :addForm="addQuestionForm" :checked="checked" :vuelidate="vuelidate" />
      <QuestionForm :addForm="addQuestionForm" :vuelidate="vuelidate" />
      <el-button 
        native-type="submit" 
        class="el-button-dialog"
      >
        Отправить
      </el-button>
    </el-form>
  </el-dialog>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
@import '@/assets/styles/modal/modal'
</style>