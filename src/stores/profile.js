import { ref } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'
import { pathURL, secretPhrase } from '../constants'
import { elMessage, isValidToken, getTokenData } from '@/composable'
import { useClaimDataStore } from '@/stores/claimData'

export const useProfileStore = defineStore('profile', () => {
  const deleteId = ref()
  const deleteIdx = ref()
  const usersArray = ref([])
  const currentUserArray = ref([])
  const token = isValidToken()
  const userData = getTokenData()
  let warning
  let message

  currentUserArray.value.push(userData)
  const claimDataStore = useClaimDataStore() 
  const stateClaim = claimDataStore.claim
  const localStorageClaim = JSON.parse(localStorage.getItem('claim'))?._value
  const selectArray = () => { if (stateClaim.length == 0 && localStorageClaim[0] != undefined) {
       return localStorageClaim[0].user
    } else if (stateClaim.length != 0 && localStorageClaim.length == 0) {
      return stateClaim[0].user
    } else {
      return currentUserArray.value
  }}

  usersArray.value = selectArray()
  
  const setIdx = (el) => { return el.id ? 
                                  el.id : 
                                  userData.confirm }
  const userIdx = usersArray.value.findIndex(setIdx)

  const updateRole = async (idx, id) => { 
    let role = false
    if (id != undefined && token) { 
      idx == 0 ? role = false : role = true
      const path = `${pathURL}auth/role_update/${id}`
      const payload = {role: role}
      const data = await axios
        .put(path, payload, {headers: {secret: secretPhrase}})
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
          elMessage(warning, message);
        }
    else {
      warning = 'warning'
      message = 'Время сессии истекло. Авторизуйтесь повторно'
      elMessage(warning, message)      
    }
  }
  
  const deleteUser = async (id, idx) => {
    if (usersArray.value[idx]?.admin == true && usersArray.value.filter((el) => el.admin == true).length == 1) {
      warning = 'warning'
      message = 'Назначьте нового администратора перед удалением этого аккаунта'
      elMessage(warning, message)
    } else {
      const path = `${pathURL}auth/user_delete/${id}`
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
          elMessage(warning, message);
        }
      }
    
  return {
    usersArray,
    userIdx,
    deleteId,
    deleteIdx,
    updateRole,
    deleteUser
  }
})