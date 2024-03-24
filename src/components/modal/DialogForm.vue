<script setup>
import { defineModel, ref } from 'vue'
import { onSubmitVisitor, addQuestionForm, vuelidateVisitor } from '@/composable'
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
      @submit="onSubmitVisitor"
    >
      <NameForm :addForm="addQuestionForm" :vuelidate="vuelidateVisitor" />
      <PhoneForm :addForm="addQuestionForm" :vuelidate="vuelidateVisitor" />
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
      <EmailForm :addForm="addQuestionForm" :checked="checked" :vuelidate="vuelidateVisitor" />
      <QuestionForm :addForm="addQuestionForm" :vuelidate="vuelidateVisitor" />
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