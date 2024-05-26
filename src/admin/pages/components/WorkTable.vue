<script setup>
import { computed, ref, onMounted, watch } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { useClaimDataStore } from '@/stores/claimData'

const claimDataStore = useClaimDataStore()

const { width } = useWindowSize()

onMounted(() => {
  claimDataStore.claimDataResponse()
})

const search = ref('')
const filterTableData = computed(() =>
  claimDataStore.claim.filter(
    (data) =>
      !search.value ||
      data.fabula.toLowerCase().includes(search.value.toLowerCase())
  )
)
const handleEdit = (index, row) => {
    console.log(index, row)
  }
  const handleDelete = (index, row) => {
    console.log(index, row)
  }

const tableSize = () => width.value > 767 ? 'large' : 'small'
const buttonSize = () => width.value > 1200 ? 'large' : 'small';

</script>

<template #default>
  <el-table 
    :data="filterTableData" 
    style="width: 100%" 
    :size="tableSize()" 
    :stripe="true" 
    :border="true" 
    :fit="true" 
    :default-expand-all="true"
    :scrollbar-always-on="true"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column label="Номер" prop="id" width="75" />
    <el-table-column label="Дата и время" prop="timestamp" width="250"/>
    <el-table-column label="Содержание обращения" prop="fabula" width="500"/>
    <el-table-column align="center" >
      <template #header>
        <el-input v-model="search" :size="tableSize()" placeholder="Поиск" />
      </template>
      <template #default="scope">
        <el-button 
          :size="buttonSize()" 
          :style="width >= 1150 ? 'margin-bottom: 0' : 'margin-bottom: .5em'"
          type="warning"
          @click="handleEdit(scope.$index, scope.row)" 
          class="button"
        >
          Редактировать
        </el-button>
        <el-button
          :size="buttonSize()"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >
          Удалить
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/variables'
:global(.el-table)
  --el-table-border: 2px solid var(--el-table-border-color)
:deep(.el-button)
  &:last-child
    margin-right: 1em
:deep(.el-button > span)
  color: $text_photo
  font-size: 16px
  @media screen and (max-width: 767px)
    font-family: sans-serif
    font-size: 14px  
</style>