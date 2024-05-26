import { defineStore } from 'pinia'
import { pathURL, secretPhrase } from '../constants'
import axios from 'axios'
import { ref, watch } from 'vue'

export const useClaimDataStore = defineStore('claimDataStore', () => {
  const path = `${pathURL}questions_list`
  const claim = ref([])

  const claimDataResponse = async () => {
    const data = await axios.get(path, {headers: {secret: secretPhrase}})
    claim.value = data?.data?.response
  }

  const intervalRequest = () => setInterval(claimDataResponse, 30000)

  watch(() => claim, (state) => {  
    state = intervalRequest()
    }, {deep: true})

  return {
    claim,
    claimDataResponse
  }
})