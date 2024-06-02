import { defineStore } from 'pinia'
import { pathURL, secretPhrase } from '../constants'
import axios from 'axios'
import { ref, watch } from 'vue'
import { elMessage } from '@/composable'

export const useClaimDataStore = defineStore('claimDataStore', () => {
  const claim = ref([])
  const userId = ref('')
    
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
    const id = claim.value[idx].id
    const fabula = { fabula: claim.value[idx].fabula, id: userId.value }
    const path = `${pathURL}question_update/${id}`
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
    
    let warning = data?.data?.warning
    let message = data?.data?.message
    elMessage(warning, message)
  }

  const deleteClaim = (id) => 
    claim.value = claim.value.filter(el => el.id != id)

  const deleteData = async (id) => {
    const path = `${pathURL}question_update/${id}`
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

    let warning = data?.data?.warning
    let message = data?.data?.message
    elMessage(warning, message)

    deleteClaim(id)
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
    claimDataResponse,
    updateData,
    deleteData,
    deleteClaim 
  }
})