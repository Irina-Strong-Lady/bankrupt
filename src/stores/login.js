import { defineStore } from 'pinia'
import Buffer from 'vue-buffer'
import axios from 'axios'


export const useLoginStore = defineStore('login', {
  state: () => ({
    warning: '',
    message: '',
    token: ''
  }),
  actions: {
    async loginResponse(path, payload, secretPhrase) {
      const encoded = Buffer.from(`${payload.name}`+':'+`${payload.password}`).toString('base64')
      const data = await axios.get(path, { headers: {'Authorization': 'Basic ' + encoded, secret: secretPhrase} })
      this.warning = data?.data?.warning
      this.message = data?.data?.message
      this.token = data?.data?.token
    }
  },
  persist: true
})