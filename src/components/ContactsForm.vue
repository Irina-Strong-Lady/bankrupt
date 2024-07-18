<script setup>
import { ref, computed } from 'vue'
import router from '@/router'
import { onSubmitVisitor, addQuestionForm } from '../composable'
import { vMaska } from 'maska'

const props = defineProps({
  titleContact: {
    type: Array,
    requred: true
  },
  labelItem: {
    type: Array,
    requred: true
  }
})

const email = ref(null)

const checked = ref(false)

const isValidName = computed(() => {
    return /^[a-zA-Zа-яА-я ]+$/.test(addQuestionForm.name)
})

const isValidPhone = computed(() => {
    return addQuestionForm.phone.length < 18
})

const isValidEmail = computed(() => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(addQuestionForm.email)  
})

const isValidText = computed(() => {
    return addQuestionForm.question.length > 0
});

</script>

<template>
  <div class="wrapper">
    <div class="container">
      <p>{{ titleContact[0] }}</p>
      <div class="form">
        <div class="form-container">
          <el-form
            @submit="onSubmitVisitor"
            :model="labelItem"
            label-width="auto"
          > 
            <el-form-item label="Имя" required>
              <el-input 
                :class="{ valid: isValidName == true, invalid: isValidName == false }"
                v-model="addQuestionForm.name" 
                name="name" 
                type="text"
                :style="isValidName == false ? '--el-input-text-color: red' : ''"
                required
              >
              </el-input>
            </el-form-item>
            <el-form-item label="Телефон" required>
              <el-input 
                :class="{ valid: isValidPhone == false, invalid: isValidPhone == true }"
                v-model="addQuestionForm.phone" 
                v-maska :data-maska="'+7 (###) ###-##-##'"
                name="phone"
                placeholder="+7 (900) 000-00-00" 
                required
              >
              </el-input>
            </el-form-item>
            <el-form-item label="Email">
              <el-input ref="email"
                :class="{ valid: isValidEmail == true, invalid: isValidEmail == false }"
                v-model="addQuestionForm.email"                
                name="email"
                type="text" 
                placeholder="example@email.ru"  
              >             
              </el-input>
            </el-form-item>
            <el-form-item label="Вопрос" required>
              <el-input 
                :class="{ 'valid-textarea': isValidText == true, invalid: isValidText == false }"
                v-model="addQuestionForm.question"
                name="question"
                type="textarea"
                required
              >
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                native-type="submit" 
                :disabled="!checked"
                :style="!checked ? 'cursor: not-allowed' : 'cursor: pointer'"
              >
                <span :style="!checked ? 'cursor: not-allowed; color: #362E2E' : 'cursor: pointer'">Задать вопрос</span>
              </el-button>                
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="checked">
                <a
                  @click.prevent
                  style="color: #362E2E; cursor: default"
                  >{{ titleContact[1] }}
                </a>
                <a
                  @click.prevent="!checked ? router.push({name: 'confidentials'}) : router.push({name: 'cotacts'})"
                  :style="checked ? 'cursor: not-allowed; color: #362E2E' : 'cursor: pointer; color: #409eff'"
                  style="text-decoration: underline"
                  >{{ titleContact[2] }}
                </a>
              </el-checkbox>
            </el-form-item>
            <el-form-item>
              <p class="under-title">{{ titleContact[3] }}</p>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>  
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.wrapper
  width: 100%
  height: 100%
  padding: .5px 0
  background: $pinky_bg
.container
  display: block
  margin: 0 auto
  @media screen and (max-width: 150px)
    display: none
.container > p
  font-family: sans-serif
  font-size: 18px
  color: $footer_letters
  text-align: center
  margin: 10px 0
  @media screen and (max-width: 1000px)
    font-size: 16px
  @media screen and (max-width: 767px)
    font-size: 14px
  @media screen and (max-width: 200px)
    font-size: 12px
  @media screen and (max-width: 100px)
    font-size: 10px
.form
  display: flex
  justify-content: space-around
  margin-bottom: 20px
.form-container
  width: 40%
  height: 100%
  padding: 20px
  border: 1px solid red
  background: #E6F0F0
  @media screen and (max-width: 1000px)
    width: 60%
  @media screen and (max-width: 767px)
    width: 80%
:deep(.el-form)
  --el-form-label-font-size: 16px
  @media screen and (max-width: 767px)
    --el-form-label-font-size: 14px
  @media screen and (max-width: 350px)
    --el-form-label-font-size: 12px
.el-input
  --el-input-border-radius: 0
  margin-bottom: 20px
  width: 100%
  @media screen and (max-width: 200px)
    width: 100px
:deep(.el-textarea__inner)
  border-radius: 0
  margin-bottom: 20px
  @media screen and (max-width: 200px)
    width: 100%
:deep(.el-button)
  width: 50%
  padding: 0
  background: red
  border-radius: 0
  justify-content: center
  @media screen and (max-width: 1000px)
    width: 100%
.el-button span
  font-size: 16px
  color: $white
  font-weight: 600
  @media screen and (max-width: 1000px)
    font-size: 14px
  @media screen and (max-width: 300px)
    font-size: 12px
  @media screen and (max-width: 250px)
    font-size: 10px
.el-checkbox
  white-space: wrap
  width: 100%
.el-checkbox:last-of-type
  margin: 1.5em 0
  @media screen and (max-width: 580px)
    margin: 2em 0
  @media screen and (max-width: 450px)
    margin: 2.5em 0
  @media screen and (max-width: 400px)
    margin: 3em 0
  @media screen and (max-width: 350px)
    margin: 3.5em 0
.el-checkbox__label > a
  white-space: normal
  @media screen and (max-width: 767px)
    font-size: 14px
  @media screen and (max-width: 250px)
    font-size: 12px
.under-title
  &:before
    content: '\002A'
    color: red
  @media screen and (max-width: 767px)
    font-size: 14px  
  @media screen and (max-width: 250px)
    font-size: 12px
.valid, .valid-textarea
  --el-input-bg-color: url()
  --el-input-text-color: #409eff
  background: url('/src/assets/img/png/check-mark-icon.png') no-repeat
  background-size: 15px
  height: fit-content
  @media screen and (max-width: 320px)
    background: none
.valid
  background-position: center right 5%
.valid-textarea
  position: sticky
  background-position: top 32.5% right 5%
.invalid
  --el-input-text-color: red
</style>