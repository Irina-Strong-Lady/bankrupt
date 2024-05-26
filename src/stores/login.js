import { defineStore } from 'pinia'
import Buffer from 'vue-buffer'
import axios from 'axios'
import { ref, watch } from 'vue'


export const useLoginStore = defineStore('login', () => {
  const warning = ref('')
  const message = ref('')
  const token = ref('')

  const tokenInLocalStorage = localStorage.getItem('token')
  if (tokenInLocalStorage) {
    token.value = JSON.parse(tokenInLocalStorage)._value
  }
  
  const loginResponse = async (path, payload, secretPhrase) => {
    const encoded = Buffer.from(`${payload.name}`+':'+`${payload.password}`).toString('base64')
    const data = await axios.get(path, { headers: {'Authorization': 'Basic ' + encoded, secret: secretPhrase} })
    warning.value = data?.data?.warning
    message.value = data?.data?.message
    token.value = data?.data?.token
  };

  watch(() => token, (state) => {
    localStorage.setItem('token', JSON.stringify(state))
  }, {deep: true})

  return {
    warning,
    message,
    token,
    loginResponse
  }
})