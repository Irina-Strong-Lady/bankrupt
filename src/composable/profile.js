import axios from 'axios'
import router from '@/router'
import { elMessage } from './message'
import { reactive, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { pathURL, secretPhrase } from '../constants'
import { required, helpers, minLength } from '@vuelidate/validators'

const profile = axios.create()

let warning = ''
let message = ''

export const addProfileForm = reactive({name: '', phone: '', newPhone: ''})

export const rulesProfile = computed(() => {
  return {
  name: {minLength: helpers.withMessage('Введите более 1-ой буквы', minLength(2))},
  phone: {required: helpers.withMessage('Обязательное поле', required), 
          minLength: helpers.withMessage('Неверный формат номера', minLength(18))}, 
  newPhone: {minLength: helpers.withMessage('Неверный формат номера', minLength(18))} 
    }
})

export const vuelidateProfile = useVuelidate(rulesProfile, addProfileForm)

const addProfile = (payload) => {
  const path = `${pathURL}auth/profile`
  profile
    .put(path, payload, { headers: {secret: secretPhrase} })
    .then((res) => {
      warning = res.data.warning
      message = res.data.message
      elMessage(warning, message)
      })
    .catch((err) => {
      console.error(err)
      warning = 'error'
      message = 'Произошла неожиданная ошибка! Попробуйте позже'
      elMessage(warning, message)
    })
}

const initForm = () => {
  addProfileForm.name = ""
  addProfileForm.phone = ""
  addProfileForm.newPhone = ""
}

export const onSubmitProfile = async (event) => {
  event.preventDefault()
  const result = await vuelidateProfile.value.$validate()
  if (result) {
  const payload = {
    name: addProfileForm.name,
    phone: addProfileForm.phone,
    newPhone: addProfileForm.newPhone
  }
    addProfile(payload)
    initForm()
  } else {
    warning = 'warning'
    message = 'Данные введены некорректно. Проверьте все обязательные поля'
    elMessage(warning, message)
    }
}

export const profileResponse = profile.interceptors.response.use(function (response) {
  if (response?.data.message != 'Пользователь не существует') 
  { router.push({name: 'admins'}) }
    return response;
  }, function (error) {
    return Promise.reject(error);
})
