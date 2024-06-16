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

const search = ref('')

const filterTableData = computed(() =>
  claimDataStore?.claim?.filter(
    (data) => data.archive === false))
  claimDataStore?.claim?.filter(
    (data) => 
      !search.value ||
      data.fabula.toLowerCase().includes(search.value.toLowerCase()) 
  )


const tableSize = () => width.value > 767 ? 'large' : 'small'

const deleteDialog = ref(false);

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
        type="primary"
        @click.prevent="claimDataStore.archiveData()"
      >
          В архив
        </el-button>
      <el-button 
        size="small" 
        :style="width >= 1150 ? 'margin-bottom: 0' : 'margin-bottom: .5em'"
        type="warning"
        @click.prevent="claimDataStore.updateData"
      >
          Сохранить
        </el-button>
        <el-button
          size="small"
          :style="width >= 1150 ? 'margin-bottom: 0' : 'margin-bottom: .5em'"
          type="danger"
          @click.prevent="deleteDialog = true" 
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
            @input="claimDataStore.checkItem(scope.row.id, $event.target.checked)" 
            :checked="claimDataStore.selectedItems.includes(scope.row.id)"            
          ></el-checkbox>
      </template>
    </el-table-column>
    <el-table-column label="Номер" prop="id" width="auto" resizeable />
    <el-table-column label="Дата и время" prop="timestamp" width="auto" resizeable show-overflow-tooltip />
    <el-table-column label="Содержание обращения" prop="fabula" width="auto" resizeable>
      <template v-slot="scope">
        <el-input 
          v-model="scope.row.fabula"
          :disabled="!claimDataStore.selectedItems.includes(scope.row.id)"
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
          :disabled="!claimDataStore.selectedItems.includes(scope.row.id)"
          filterable
          allow-create
        >
          <el-option 
            v-for="item in scope.row.user" 
            :key="item.id" 
            :value="item.name"
            @click="claimDataStore.getUserId(scope.row.question_id, item.id)"
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
  <el-dialog 
    v-model="deleteDialog"
    title="Удалить" 
    width="500" 
    draggable
  >
    <span>{{ deleteDialog ? 
      'Вы уверены, что хотите удалить выбранные поля?' : 
      'Сохранить выбранные поля?' }}
    </span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="deleteDialog = false">Отменить</el-button>
        <el-button type="danger" @click="claimDataStore.deleteData(); deleteDialog = false">
          {{ deleteDialog ? 
            'Удалить' : 
            'Сохранить' }}
        </el-button>
      </div>
    </template>
  </el-dialog>
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
:deep(.el-button)
  @media screen and (max-width: 600px)
    margin-left: 0
:deep(.el-button > span)
  color: $text_photo
  font-size: 16px
  @media screen and (max-width: 767px)
    font-family: sans-serif
    font-size: 14px    
</style>