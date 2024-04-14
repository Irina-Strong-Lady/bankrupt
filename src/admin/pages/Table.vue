<script setup>
import router from '../../router'
import { storeToRefs } from 'pinia'
import { useLoginStore } from '../../stores/login'

const toAdmin = () => router.push('admins')

const loginStore = useLoginStore()

const { response } = storeToRefs(loginStore)

</script>

<template>
  <section>
    <div class="wrapper">
      <div class="caption-wrapper">
        <h1 class="caption">Это страница с таблицей</h1>
        <div v-for="item in response" :key="item.id">
          <h1 class="caption">{{ item.id }}</h1>
          <h1 class="caption">{{ item.name }}</h1>
          <h1 class="caption">{{ item.phone }}</h1>
        </div>
      </div>
      <el-button class="button" @click.prevent="toAdmin">
          Админ
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