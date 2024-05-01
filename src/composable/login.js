import router from '../router'
import { elMessage } from './message'
import { reactive, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useVuelidate } from '@vuelidate/core'
import { useLoginStore } from '../stores/login'
import { pathURL, secretPhrase } from '../constants'
import { required, helpers, minLength } from '@vuelidate/validators'

const loginStore = useLoginStore()

const { warning, message } = storeToRefs(loginStore)

export const addLoginForm = reactive({name: '', password: ''})

const rulesLogin = computed(() => {
  return {
  name: {required: helpers.withMessage('Обязательное поле', required), 
          minLength: helpers.withMessage('Введите более 1-ой буквы', minLength(2))},
  password: {required: helpers.withMessage('Обязательное поле', required), 
              minLength: helpers.withMessage('Длина пароля от 6-ти символов', minLength(6)), 
              containsPasswordRequirements: helpers.withMessage(() =>
              `Пароль должен содержать латинские буквы в верхнем и нижнем регистре, цифры и символы`,
              (value) => /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/.test(value)
              )
        }
    }
})

export const vuelidateLogin = useVuelidate(rulesLogin, addLoginForm)

const addLogin = (path, payload) => {
  loginStore.loginResponse(path, payload, secretPhrase)
  .then(() => {
      elMessage(warning.value, message.value)
      warning.value == 'success' ? router.push('tables') : undefined
   })    
  .catch((err) => {
    console.error(err)
    let warning = 'error'
    let message = 'Произошла неожиданная ошибка! Попробуйте позже'
    elMessage(warning, message)
   })
}

const initForm = () => {
  addLoginForm.name = ""
  addLoginForm.password = ""
}

export const onSubmitLogin = async (event) => {
  const path = `${pathURL}auth/login`
  event.preventDefault()
  const result = await vuelidateLogin.value.$validate()
  if (result) {
    const payload = {
      name: addLoginForm.name,
      password: addLoginForm.password
    }
    addLogin(path, payload)
    initForm()
  } else {
    let warning = 'warning'
    let message = 'Данные введены некорректно. Проверьте все обязательные поля'
    elMessage(warning, message)
    }
}




