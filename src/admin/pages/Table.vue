<script setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useLoginStore } from '../../stores/login'

const router = useRouter()
const toAdmin = () => router.push('admins')
const loginStore = useLoginStore()

const getTokenData = () => {
  const { token } = storeToRefs(loginStore)
  if (!token || token.value.split('.').length < 3) {
    return false
  }
  const data = JSON.parse(atob(token.value.split('.')[1]))
  return data 
}

const userData = getTokenData()

const isValidToken = () => {
  const data = getTokenData()
  const exp = new Date(data.exp * 1000)
  const now = new Date()
  return now < exp
}

const logout = () => {
  localStorage.removeItem('login')
  toAdmin()
};

</script>

<template>
  <section>
    <div class="wrapper">
      <div class="caption-wrapper">
        <h1 class="caption">{{ isValidToken() ? 'Это страница с таблицей' : 'Сессия истекла. Необходима авторизация'}}</h1>
        <div v-if="isValidToken()">
          <h1 class="caption">{{ userData.id }}</h1>
          <h1 class="caption">{{ userData.name }}</h1>
          <h1 class="caption">{{ userData.phone }}</h1>
        </div>
      </div>
      <el-button class="button" @click.prevent="logout">
          Выход
      </el-button>
    </div>
  </section>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
.wrapper
  position: absolute
  background: $table_caption
  width: 100%
  height: 100%
  margin: 0
  padding: 20px
.caption-wrapper
  display: flex
  align-items: center
  flex-wrap: wrap
  flex-direction: column
.caption
  color: $white
  font-family: sans-serif
  font-size: 36px
</style>