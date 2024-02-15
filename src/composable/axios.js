import { reactive } from 'vue'
import axios from 'axios'
import { pathURL, secretPhrase } from '../constants'
import { ElMessage } from 'element-plus'

let questions = []

export const addQuestionForm = reactive({name: '', phone: '', email: '', question: ''})

const getQuestions = () => {
  const path = pathURL
  axios
    .get(path, { headers: {secret: secretPhrase} })
    .then((res) => {
      questions = res.data.questions;
    })
    .catch((err) => {
      console.error(err);
    });
}

const addQuestion = payload => {
  const path = pathURL
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

export const onSubmit = (event) => {
  event.preventDefault()
  const payload = {
    name: addQuestionForm.name,
    phone: addQuestionForm.phone,
    email: addQuestionForm.email,
    question: addQuestionForm.question    
  }
  addQuestion(payload)
  initForm()
}
