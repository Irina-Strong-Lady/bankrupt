import axios from 'axios'
import { reactive, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { pathURL, secretPhrase } from '../constants'
import { email, required, helpers, minLength } from '@vuelidate/validators'
import { elMessage } from './message'

let warning = ''
let message = ''

export const addQuestionForm = reactive({name: '', phone: '', email: '', question: '', password: '', confirm: ''})

const rulesVisitor = computed(() => {
  return {
  name: {required: helpers.withMessage('Обязательное поле', required), 
         minLength: helpers.withMessage('Введите более 1-ой буквы' , minLength(2))},
  phone: {required: helpers.withMessage('Обязательное поле', required),
          minLength: helpers.withMessage('Неверный формат номера', minLength(18))}, 
  email: {email: helpers.withMessage('Некорректный email', email)},
  question: {required: helpers.withMessage('Обязательное поле', required), 
             minLength: helpers.withMessage('Сформулируйте вопрос' , minLength(6))}
    }
})

export const vuelidateVisitor = useVuelidate(rulesVisitor, addQuestionForm)

const addVisitor = async payload => {
  const path = `${pathURL}visitors`
  await axios
    .post(path, payload, { headers: {secret: secretPhrase} })
    .then(() => addQuestion(payload))
    .catch((err) => {
      console.error(err)
      warning = 'error'
      message = 'Произошла неожиданная ошибка! Попробуйте позже'      
      elMessage(warning, message)
    })
}

const addQuestion = async payload => {
  const path = `${pathURL}questions`
  await axios
    .post(path, payload, { headers: {secret: secretPhrase} })
    .then((res) => {
      warning = res.data.warning
      message = res.data.message
      elMessage(warning, message)
    })
    .catch((err) => {
      console.error(err)
    })
 }

const initForm = () => {
  addQuestionForm.name = ""
  addQuestionForm.phone = ""
  addQuestionForm.email = ""
  addQuestionForm.question = ""
}

export const onSubmitVisitor = async (event) => {
  event.preventDefault()
  const result = await vuelidateVisitor.value.$validate()
  if (result) {
  const payload = {
    name: addQuestionForm.name,
    phone: addQuestionForm.phone,
    email: addQuestionForm.email,
    question: addQuestionForm.question
  }
    addVisitor(payload)
    initForm()
  } else {
    warning = 'warning'
    message = 'Данные введены некорректно. Проверьте все обязательные поля'
    elMessage(warning, message)
    }
} 
