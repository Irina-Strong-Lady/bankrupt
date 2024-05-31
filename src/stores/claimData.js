import { defineStore } from 'pinia'
import { pathURL, secretPhrase } from '../constants'
import axios from 'axios'
import { ref, watch, computed } from 'vue'
import { elMessage } from '@/composable'

export const useClaimDataStore = defineStore('claimDataStore', () => {
  const claim = ref([])
  
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
  } 

  const updateData = async (idx) => {
    const id = claim.value[idx].id
    const fabula = { fabula: claim.value[idx].fabula } 
    console.log(claim.value[idx].fabula)   
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

  const checkActiveCell = select => {if (select) {
    return true
    } else {return false }
  }

  setInterval(claimDataResponse, 30000)

  watch(() => claim, (state) => {
    localStorage.setItem('claim', JSON.stringify(state))      
    }, {deep: true})  
 
  return {
    claim,
    claimDataResponse,
    updateData,
    deleteData,
    deleteClaim
  }
})