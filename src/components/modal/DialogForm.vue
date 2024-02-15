<script setup>
import { defineModel, ref } from 'vue'
import { onSubmit, addQuestionForm } from '@/composable'
import { vMaska } from 'maska'

const dialogFormVisible = defineModel()

const checked = ref(false);

</script>

<template>
  <el-dialog v-model="dialogFormVisible" class="el-dialog-custom">
    <el-form 
      :model="addQuestionForm"
      @submit="onSubmit"
    >
      <el-form-item >
        <div class="circle"></div>
        <el-input 
          v-model="addQuestionForm.name" 
          name="name" 
          type="text"
          placeholder="Имя"          
          autocomplete="off"
          required
        />
      </el-form-item>
      <el-form-item class="el-form-item-2">
        <div class="circle"></div>
        <el-input 
          v-model="addQuestionForm.phone" 
          v-maska :data-maska="'+7 (###) ###-##-##'"
          name="phone"
          placeholder="Телефон"
          autocomplete="off"
          required
        />
      </el-form-item>
      <el-checkbox 
        v-model="checked" 
        size="large"
        border="true"
        class="checkbox"
      >
        <p 
          :class="!checked ? 'email-visible' : 'email-invisible'" 
          class="email-label"
        >Email</p>
      </el-checkbox>
      <el-form-item :class="checked ? 'email-visible' : 'email-invisible'">        
        <div class="circle"></div>
        <el-input
          v-model="addQuestionForm.email"
          type="email"
          placeholder="Email"
        />
      </el-form-item>
      <el-form-item>
        <el-input 
          v-model="addQuestionForm.question" 
          name="question"
          type="textarea" 
          placeholder="Вопрос"
          autocomplete="off"
          required
          class="el-input-textarea"
        />
      </el-form-item>
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
//Modal dialog
:global(.el-dialog)
  background: $table_caption
  min-width: 100%
  min-height: 100%
  margin: 0
.el-dialog .el-button
  background: $table_caption
  border: 1px solid $border_dialog
  border-radius: 0px
:global(.el-dialog__headerbtn)
  font-size: 54px
  width: 120px
  height: 120px
  @media screen and (max-width: 1800px)
    font-size: 42px
  @media screen and (max-width: 1000px)
    font-size: 36px
    width: 100px
    height: 100px
  @media screen and (max-width: 767px)
    font-size: 30px
    width: 75px
    height: 75px
:global(.el-dialog__headerbtn .el-dialog__close)
  color: $white
.el-form-item:first-child
  margin: 100px 0 75px 547px
  @media screen and (max-width: 1800px)
    margin: 65px 0 30px 450px
  @media screen and (max-width: 1200px)
    margin: 65px 0 30px 350px
  @media screen and (max-width: 1000px)
    margin: 65px 0 30px 200px
  @media screen and (max-width: 767px)
    margin: 40px 0 20px 50px
  @media screen and (max-width: 400px)
    margin: 40px 0 20px 25px
  @media screen and (max-width: 200px)
    display: none
.el-form-item:nth-child(2n), .el-form-item:nth-child(3n), .checkbox
  margin: 0 0 75px 547px
  @media screen and (max-width: 1800px)
    margin: 0 0 30px 450px
  @media screen and (max-width: 1200px)
    margin: 0 0 30px 350px
  @media screen and (max-width: 1000px)
    margin: 0 0 30px 200px
  @media screen and (max-width: 767px)
    margin: 0 0 20px 50px
  @media screen and (max-width: 400px)
    margin: 0 0 20px 25px
  @media screen and (max-width: 200px)
    display: none
.circle
  position: absolute
  width: 25px
  height: 25px
  border: 3px solid $white
  border-radius: 50%  
  z-index: 1
  @media screen and (max-width: 1200px)
    width: 18px
    height: 18px
  @media screen and (max-width: 767px)
    width: 15px
    height: 15px
  @media screen and (max-width: 200px)
    display: none
.el-input
  width: 375px
  --el-input-text-color: #FFFFFF
  @media screen and (max-width: 1800px)
    width: 300px
:deep(.el-input__wrapper)
  background: $table_caption
  border-bottom: 2px solid $border_dialog
  border-radius: 0px
  box-shadow: none
:deep(.el-input__inner)
  height: 60px
  text-align: center
  font-family: sans-serif
  font-size: 24px
  &::placeholder
    color: $white
  @media screen and (max-width: 1800px)
    font-size: 20px
  @media screen and (max-width: 1200px)
    font-size: 16px
  @media screen and (max-width: 767px)
    font-size: 14px
:deep(.el-textarea__inner)
  width: 825px
  height: 315px
  margin-left: 547px
  padding: 25px 0 0 50px
  --el-input-text-color: #FFFFFF
  background: $table_caption
  font-family: sans-serif
  font-size: 24px
  border: 2px solid $border_dialog
  border-radius: 0px
  box-shadow: none
  &::placeholder
    color: $white
  @media screen and (max-width: 1800px)
    margin-left: 450px 
    width: 500px
    height: 200px
    font-size: 20px
  @media screen and (max-width: 1200px)
    width: 400px
    height: 175px
    margin-left: 350px
    font-size: 16px 
  @media screen and (max-width: 1000px)  
    margin-left: 200px 
  @media screen and (max-width: 767px)  
    margin-left: 50px
    width: 300px
    padding: 15px 0 0 25px
    font-size: 14px 
  @media screen and (max-width: 400px)  
    margin-left: 25px
    max-width: 90%    
  @media screen and (max-width: 200px)
    display: none
:deep(.el-button-dialog)
  margin: 115px 0 0 547px
  padding: 40px 75px
  @media screen and (max-width: 1800px)
    margin: 65px 0 0 450px
    padding: 25px 50px
  @media screen and (max-width: 1200px)
    margin: 65px 0 0 350px
  @media screen and (max-width: 1000px)
    margin: 65px 0 0 200px
  @media screen and (max-width: 767px)
    margin: 65px 0 0 50px
  @media screen and (max-width: 400px)
    margin: 65px 0 0 25px
    max-width: 90%
  @media screen and (max-width: 200px)
    display: none
:deep(.el-button-dialog > span), .email-label
  font-family: sans-serif
  color: $white
  @media screen and (max-width: 1800px)
    font-size: 20px
  @media screen and (max-width: 1200px)
    font-size: 16px
  @media screen and (max-width: 767px)
    font-size: 14px
.checkbox
  margin-top: 0
  margin-bottom: 0
:deep(.el-checkbox__inner)
  border-radius: 0px
.email-label
  margin-left: 15px
.email-visible
  opacity: 1
  transition: all 1s ease-out
.email-invisible
  opacity: 0
  transition: all 1s ease-out
</style>