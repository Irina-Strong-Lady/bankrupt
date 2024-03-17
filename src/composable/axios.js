import { reactive } from 'vue'
import axios from 'axios'
import { pathURL, secretPhrase } from '../constants'
import { useVuelidate } from '@vuelidate/core'
import { rules } from './vuelidate'
import { ElMessage } from 'element-plus'

let users = []
let questions = []

export const addQuestionForm = reactive({name: '', phone: '', email: '', question: '', password: '', confirm: ''})

export const vuelidate = useVuelidate(rules, addQuestionForm)

const getUsers = () => {
  const path = `${pathURL}/users`
  axios
    .get(path, { headers: {secret: secretPhrase} })
    .then((res) => {
      users = res.data.users;
    })
    .catch((err) => {
      console.error(err);
    });
}

const getQuestions = () => {
  const path = `${pathURL}/questions`
  axios
    .get(path, { headers: {secret: secretPhrase} })
    .then((res) => {
      questions = res.data.questions;
    })
    .catch((err) => {
      console.error(err);
    });
}

const addUser = payload => {
  const path = `${pathURL}/users`
  axios
    .post(path, payload, { headers: {secret: secretPhrase} })
    .then(() => getUsers())
    .then(() => addQuestion(payload))
    .catch((err) => {
      console.error(err)
      getUsers()
      }
    )
}

const addQuestion = payload => {
  const path = `${pathURL}/questions`
  axios
    .post(path, payload, { headers: {secret: secretPhrase} })
    .then(() => {
      ElMessage({ type: "success", 
                  message: "Успешно! Ваш вопрос передан в обработку.",
                  showClose: true, 
                  center: true, 
                  grouping: true, 
                  offset: 20
                })
      getQuestions()
    })
    .catch((err) => {
      console.error(err)
      ElMessage({ type: "error", 
                  message: "Произошла неожиданная ошибка! Попробуйте позже.", 
                  showClose: true, 
                  center: true, 
                  grouping: true, 
                  offset: 20
                })
      getQuestions()
    })
}

const initForm = () => {
  addQuestionForm.name = ""
  addQuestionForm.phone = ""
  addQuestionForm.email = ""
  addQuestionForm.question = ""
}

export const onSubmit = async (event) => {
  event.preventDefault()
  const result = await vuelidate.value.$validate()
  if (result) {
  const payload = {
    name: addQuestionForm.name,
    phone: addQuestionForm.phone,
    email: addQuestionForm.email,
    question: addQuestionForm.question
  }
    addUser(payload)
    initForm()
  } else {
    ElMessage({ type: "error", 
                  message: "Данные введены некорректно. Проверьте все обязательные поля", 
                  showClose: true, 
                  center: true, 
                  grouping: true, 
                  offset: 20
                })
  }
} 
