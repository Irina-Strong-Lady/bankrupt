import { defineStore } from 'pinia'
import { pathURL, secretPhrase } from '../constants'
import axios from 'axios'
import { ref, watch } from 'vue'
import { elMessage } from '@/composable'

export const useClaimDataStore = defineStore('claimDataStore', () => {
  const claim = ref([])
  const userId = ref({})
  const selectedItems = ref([])
  const archiveArray = ref([])
  const switchArchive = ref(false)
  let warning
  let message
    
  const claimDataResponse = async () => {
    const path = `${pathURL}questions_list`
    const data = await axios
    .get(path, {headers: {secret: secretPhrase}})
    .catch(function(error) {
      if (error.response) {
        console.log(response.data)
        console.log(response.status)
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

  const getUserId = (question, id) => {
    userId.value[question] = {id: id}
  }

  const updateData = () => {    
    if (selectedItems.value.length > 0) {
        selectedItems.value.forEach(async (el) => {
        const question_id = claim.value[el-1]?.question_id;
        const fabula = { fabula: claim.value[el-1]?.fabula, id: userId.value[question_id]?.id };
        const path = `${pathURL}question_update/${question_id}`
        const data = await axios
        .put(path, fabula, {headers: {secret: secretPhrase}})
        .catch(function(error) {
          if (error.response) {
            console.log(response.data)
            console.log(response.status)
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
      }) 
  } else {
      warning = 'warning'
      message = 'Выберите фабулу'
      elMessage(warning, message)
      }
    }   

  const deleteClaim = (question_id) => 
    claim.value = claim.value.filter(el => el.question_id != question_id)
    selectedItems.value.length = 0
  
  const deleteData = () => {
    if (selectedItems.value.length > 0) {
      selectedItems.value.forEach(async (el) => {
        const question_id = claim.value[el-1]?.question_id
        const path = `${pathURL}question_update/${question_id}`
        const data = await axios
        .delete(path, {headers: {secret: secretPhrase}})
        .catch(function(error) {
          if (error.response) {
            console.log(response.data)
            console.log(response.status)
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
        selectedItems.value = []
      })
      } else {
        warning = 'warning'
        message = 'Выберите фабулу'
        elMessage(warning, message)
      }
    }
  
  const archiveData = () => {
    if (selectedItems.value.length > 0) {
      selectedItems.value.forEach(async (el) => {        
        const questionId = claim.value[el-1]?.question_id
        const archiveData = claim.value[el-1]?.archive
        const path = `${pathURL}question_update/${questionId}`
        const archive = { archive: !archiveData }       
        const data = await axios
        .put(path, archive, {headers: {secret: secretPhrase}})
        .catch(function(error) {
          if (error.response) {
            console.log(response.data)
            console.log(response.status)
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
        deleteClaim(questionId)
        selectedItems.value = []
      })
      } else {
        warning = 'warning'
        message = 'Выберите фабулу'
        elMessage(warning, message)
      }
    }
    
  const checkItem = (id, checked) => { 
    if (checked) {
    selectedItems.value.push(id)
    } else {
      selectedItems.value.splice(selectedItems.value.indexOf(id), 1)
    }
  }

  setInterval(() => { selectedItems.value.length == 0 ? claimDataResponse() : console.log('Table update is off')}, 10000)

  watch(() => claim, (state) => {
    localStorage.setItem('claim', JSON.stringify(state))      
    }, {deep: true})  
  
  watch(() => switchArchive, (state) => {
    localStorage.setItem('switch', JSON.stringify(state))      
    }, {deep: true})  
 
  return {
    claim,
    userId,
    selectedItems,
    archiveArray,
    switchArchive,
    claimDataResponse,
    updateData,
    deleteData,
    checkItem,
    getUserId,
    archiveData
  }
})