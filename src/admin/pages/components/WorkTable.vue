<script setup>
import { computed, ref, onMounted } from 'vue'
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

const getRowIndex = (idx) => claimDataStore.rowIndex = idx

const getQuestionId = (id) => claimDataStore.questionId = id

const changeCheckedValue = () => { 
  claimDataStore.checked = !claimDataStore.checked 
  claimDataStore.checkActive = !claimDataStore.checkActive
}

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
  <div class="claim-style">
    {{ claimDataStore.claim.length == 0 ? 
    'Заявки отсутствуют' : 
    `Количество заявок в работе: ${claimDataStore.claim.length}`}}
    <span class="total-wrapper">
    </span>
    <div class="button-wrapper">
      <el-button 
        size="small" 
        :style="width >= 1150 ? 'margin-bottom: 0' : 'margin-bottom: .5em'"
        type="warning"
        @click.prevent="claimDataStore.updateData(claimDataStore.rowIndex); 
          claimDataStore.checkActive = true"
        class="button"
      >
          Сохранить
        </el-button>
        <el-button
          size="small"
          :style="width >= 1150 ? 'margin-bottom: 0' : 'margin-bottom: .5em'"
          type="danger"
          @click.prevent="claimDataStore.deleteData(claimDataStore.questionId); claimDataStore.checkActive = true"
        >
          Удалить
      </el-button>
    </div>
  </div>  
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
    <el-table-column width="55">
      <template v-slot="scope">
        <el-checkbox 
          @click="getRowIndex(scope.$index); changeCheckedValue(); getQuestionId(scope.row.question_id)" 
          :checked="claimDataStore.checked"
        ></el-checkbox>
      </template>
    </el-table-column>
    <el-table-column label="Номер" prop="id" width="auto" resizeable />
    <el-table-column label="Дата и время" prop="timestamp" width="auto" resizeable show-overflow-tooltip />
    <el-table-column label="Содержание обращения" prop="fabula" width="auto" resizeable>
      <template v-slot="scope">
        <el-input 
          v-model="scope.row.fabula"
          :disabled="!claimDataStore.checked" 
          type="textarea" 
          resizeable
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="Исполнитель" width="auto" resizeable>
      <template v-slot="scope">
        <el-select 
          v-model="scope.row.user.name" 
          :placeholder="scope.row.executor"
          :disabled="!claimDataStore.checked"
          filterable
          allow-create
        >
          <el-option 
            v-for="item in scope.row.user" 
            :key="item.id" 
            :value="item.name"
            @click="claimDataStore.userId=item.id" 
          />
        </el-select>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="origin" width="auto" resizeable>
      <template #header>
        <el-input v-model="search" :size="tableSize()" placeholder="Поиск" />
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/variables'
.claim-style, .total-wrapper
  display: flex
  justify-content: space-between
  color: $white
  margin-bottom: 1em
  font-family: sans-serif
:global(.el-table)
  --el-table-border: 2px solid var(--el-table-border-color)
:deep(.el-button > span)
  color: $text_photo
  font-size: 16px
  @media screen and (max-width: 767px)
    font-family: sans-serif
    font-size: 14px 
   
</style>