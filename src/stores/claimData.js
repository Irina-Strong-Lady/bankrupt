import { defineStore } from 'pinia'
import { pathURL, secretPhrase } from '../constants'
import axios from 'axios'
import { ref, watch } from 'vue'
import { elMessage } from '@/composable'

export const useClaimDataStore = defineStore('claimDataStore', () => {
  const claim = ref([])
  const userId = ref('')
  const questionId = ref(null)
  const rowIndex = ref(null)
  const checked = ref(false)
  let warning
  let message
    
  const claimDataResponse = async () => {
    const path = `${pathURL}questions_list`
    const data = await axios
    .get(path, {headers: {secret: secretPhrase}})
    .catch(function(error) {
      if (error.response) {
        console.log(response.data)
        console.log(response.staus)
        console.log(response.headers)
      } else if (error.request) {
       console.log(error.request) 
      } else {
        console.log('Error', error.message)
      }
      console.log(error.config)       
      elMessage('warning', 'Отсутствует соединение с сервером')
      claim.value = JSON.parse(localStorage.getItem('claim'))._value
      }
    )
      claim.value = data?.data?.response
      // claim.value.forEach(el => el['user'] = perms.data.response) 
  }

  const updateData = async (idx) => {    
    if (checked.value) {
    const question_id = claim.value[idx].question_id
    const fabula = { fabula: claim.value[idx].fabula, id: userId.value }
    const path = `${pathURL}question_update/${question_id}`
    const data = await axios
    .put(path, fabula, {headers: {secret: secretPhrase}})
    .catch(function(error) {
      if (error.response) {
        console.log(response.data)
        console.log(response.staus)
        console.log(response.headers)
      } else if (error.request) {
       console.log(error.request) 
      } else {
        console.log('Error', error.message)
      }
      console.log(error.config)
    })
    warning = data?.data?.warning
    message = data?.data?.message
    elMessage(warning, message) 
  } else 
  {
    warning = 'warning'
    message = 'Выберите фабулу'
    elMessage(warning, message)
  }
}

  const deleteClaim = (question_id) => 
    claim.value = claim.value.filter(el => el.question_id != question_id)

  const deleteData = async (question_id) => {
    if (checked.value) {
    const path = `${pathURL}question_update/${question_id}`
    const data = await axios
    .delete(path, {headers: {secret: secretPhrase}})
    .catch(function(error) {
      if (error.response) {
        console.log(response.data)
        console.log(response.staus)
        console.log(response.headers)
      } else if (error.request) {
       console.log(error.request) 
      } else {
        console.log('Error', error.message)
      }
      console.log(error.config)
    })

    warning = data?.data?.warning
    message = data?.data?.message
    elMessage(warning, message)
    deleteClaim(question_id) 
  } else 
  {
    warning = 'warning'
    message = 'Выберите фабулу'
    elMessage(warning, message)
  }
}

  const checkActive = ref(true)

  setInterval(() => { checkActive.value ? claimDataResponse() : console.log('Table update is off')}, 10000)

  watch(() => claim, (state) => {
    localStorage.setItem('claim', JSON.stringify(state))      
    }, {deep: true})  
 
  return {
    claim,
    userId,
    checkActive,
    questionId,
    rowIndex,
    checked,
    claimDataResponse,
    updateData,
    deleteData,
    deleteClaim 
  }
})