import axios from 'axios'
import Buffer from 'vue-buffer'
import { elMessage } from './message'
import { reactive, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { pathURL, secretPhrase } from '../constants'
import { required, helpers, minLength, sameAs } from '@vuelidate/validators'

let warning = ''
let message = ''

export const addRegisterForm = reactive({name: '', phone: '', password: '', confirm: ''})

export const rulesUser = computed(() => {
  return {
  name: {required: helpers.withMessage('Обязательное поле', required), 
          minLength: helpers.withMessage('Введите более 1-ой буквы', minLength(2))},
  phone: {required: helpers.withMessage('Обязательное поле', required), 
          minLength: helpers.withMessage('Неверный формат номера', minLength(18))}, 
  password: {required: helpers.withMessage('Обязательное поле', required), 
              minLength: helpers.withMessage('Длина пароля от 6-ти символов', minLength(6)), 
              containsPasswordRequirements: helpers.withMessage(() =>
              `Пароль должен содержать латинские буквы в верхнем и нижнем регистре, цифры и символы`,
              (value) => /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/.test(value)
              )
            },
  confirm: {required: helpers.withMessage('Обязательное поле', required), 
            sameAs: helpers.withMessage("Пароли не совпадают", sameAs(addRegisterForm.password))}
    }
})

export const vuelidateUser = useVuelidate(rulesUser, addRegisterForm)

const addUser = payload => {
  const path = `${pathURL}auth/register`
  const encoded = Buffer.from(`${payload.name}`+':'+`${payload.password}`).toString('base64')
  axios
    .get(path, { headers: {'Authorization': 'Basic ' + encoded, phone: payload.phone, secret: secretPhrase} })
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
  addRegisterForm.name = ""
  addRegisterForm.phone = ""
  addRegisterForm.password = ""
  addRegisterForm.confirm = ""
}

export const onSubmitUser = async (event) => {
  event.preventDefault()
  const result = await vuelidateUser.value.$validate()
  if (result) {
  const payload = {
    name: addRegisterForm.name,
    phone: addRegisterForm.phone,
    password: addRegisterForm.password,
  }
    addUser(payload)
    initForm()
  } else {
    warning = 'warning'
    message = 'Данные введены некорректно. Проверьте все обязательные поля'
    elMessage(warning, message)
    }
}

