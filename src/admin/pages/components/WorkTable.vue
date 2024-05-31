<script setup>
import { computed, ref, onMounted, watch } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { useClaimDataStore } from '@/stores/claimData'

const claimDataStore = useClaimDataStore()

const { width } = useWindowSize()

onMounted(() => {
  try {
  claimDataStore.claimDataResponse()
  } catch(e) {
    console.log(e)
  }
})

const search = ref('')

const filterTableData = computed(() =>
  claimDataStore?.claim?.filter(
    (data) =>
      !search.value ||
      data.fabula.toLowerCase().includes(search.value.toLowerCase())
  )
)

const tableSize = () => width.value > 767 ? 'large' : 'small';

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
    <el-table-column label="Номер" prop="id" width="auto" resizeable />
    <el-table-column label="Дата и время" prop="timestamp" width="auto" resizeable />
    <el-table-column label="Содержание обращения" prop="fabula" width="auto" resizeable>
      <template v-slot="scope">
        <el-input v-model="scope.row.fabula" @focusin="scope._self.emitsOptions.select = true" type="textarea" resizeable></el-input>
      </template>
    </el-table-column>
    <el-table-column label="Исполнитель" width="auto" resizeable/>
    <el-table-column align="center" width="auto" resizeable>
      <template #header>
        <el-input v-model="search" :size="tableSize()" placeholder="Поиск" />
      </template>
      <template #default="scope">
        <el-button 
          size="small" 
          :style="width >= 1150 ? 'margin-bottom: 0' : 'margin-bottom: .5em'"
          type="warning"
          @click.prevent="claimDataStore.updateData(scope.$index)"
          class="button"
        >
          Сохранить
        </el-button>
        <el-button
          size="small"
          type="danger"
          @click.prevent="claimDataStore.deleteData(scope.row.id)"
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