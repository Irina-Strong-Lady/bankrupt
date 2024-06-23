<script setup>
import { computed, watch, ref, onBeforeMount } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { useClaimDataStore } from '@/stores/claimData'

const claimDataStore = useClaimDataStore()

const { width, height } = useWindowSize()

onBeforeMount(() => {
  try {
        claimDataStore.claimDataResponse()
        if (JSON.parse(localStorage.getItem('switch')))
          claimDataStore.switchArchive = JSON.parse(localStorage.getItem('switch'))._value
  } catch(e) {
    console.log(e)
  }
})

const search = ref('')

const changeSwitchArchive = () => claimDataStore.switchArchive = !claimDataStore.switchArchive

const filterArchiveData = () => { 
  if (claimDataStore.switchArchive) {
    claimDataStore.archiveArray = claimDataStore?.claim?.filter(
    (data) => data.archive === true)
  } else {
    claimDataStore.archiveArray = claimDataStore?.claim?.filter(
    (data) => data.archive === false)
  } return claimDataStore.archiveArray
}

const filterTableData = computed(() =>  
  filterArchiveData().filter(
    (data) => 
      !search.value ||
      data.fabula.toLowerCase().includes(search.value.toLowerCase()) 
  ))

const tableSize = () => width.value > 767 ? 'large' : 'small'

const switchSize = () => width.value > 300 ? '100' : '75'

const currentPage = ref(1)

const handleCurrentChange = (val) => currentPage.value = val

const pageSize = ref(4)

const totalData = computed(() => 
  filterTableData.value.slice(pageSize.value * currentPage.value - 
    pageSize.value, pageSize.value * currentPage.value))

const deleteDialog = ref(false);

</script>

<template #default>
  <div>
    <el-switch
      :model-value="claimDataStore.switchArchive"
      @change="changeSwitchArchive"
      class="mb-2"
      :inline-prompt="true"
      active-text="В архиве"
      inactive-text="В работе"
      size="large"
      :width="switchSize()"
    >    
    </el-switch>
  </div>
  <div class="claim-style"> 
    <div class="button-wrapper"
      v-if="filterTableData.length > 0"
    >      
      <el-button
        v-if="!claimDataStore.switchArchive"
        size="small" 
        :style="width >= 1150 ? 'margin-bottom: 0' : 'margin-bottom: .5em'"
        type="warning"
        @click.prevent="claimDataStore.updateData"
      >
        Сохранить
      </el-button>
      <el-button
        v-if="!claimDataStore.switchArchive"
        size="small"
        :style="width >= 1150 ? 'margin-bottom: 0' : 'margin-bottom: .5em'"
        type="danger"
        @click.prevent="deleteDialog = true" 
      >
        Удалить
      </el-button>
      <el-button 
        v-if="filterTableData.length > 0"
        size="small" 
        :style="width >= 1150 ? 'margin-bottom: 0' : 'margin-bottom: .5em'"
        :type="claimDataStore.switchArchive ? 'success' : 'primary'"
        @click.prevent="claimDataStore.archiveData()"
      >
        {{ claimDataStore.switchArchive ? 'В работу' : 'В архив' }}
      </el-button>
    </div>
    <div class="total-wrapper">
      {{ filterTableData.length == 0 ? 
    `Заявки ${claimDataStore.switchArchive ? 'в архиве' : 'в работе'} отсутствуют` : 
    `Количество заявок в ${claimDataStore.switchArchive ? 'архиве' : 'работе'}: ${filterTableData.length}`}}
    </div>
  </div>  
  <el-table 
    :data="totalData" 
    style="width: 100%" 
    :size="tableSize()" 
    :stripe="true" 
    :border="true" 
    :fit="true" 
    :default-expand-all="true"
    :scrollbar-always-on="true"
    :height="height * .5"
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
          :disabled="!claimDataStore.selectedItems.includes(scope.row.id) || 
            claimDataStore.switchArchive"
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
          :disabled="!claimDataStore.selectedItems.includes(scope.row.id) || 
            claimDataStore.switchArchive"
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
    title="Удаление выбранного элемента" 
    :width="500" 
    draggable
    align-center
  >
    <span>Вы уверены, что хотите удалить выбранные поля?</span>
    <template #footer>
      <div>
        <el-button type="primary" @click="deleteDialog = false">Отменить</el-button>
        <el-button type="danger" @click="claimDataStore.deleteData(); deleteDialog = false" style="margin-left: 10px">
          Удалить
        </el-button>
      </div>
    </template>
  </el-dialog>
    <div class="pagination">
      <el-pagination 
        background
        layout="prev, pager, next"
        :hide-on-single-page="true" 
        :total="filterTableData.length"
        :page-size=pageSize
        @current-change="handleCurrentChange"
      />
    </div>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/variables'
.claim-style
  display: flex
  justify-content: space-between
  color: $white
  margin-bottom: 1em  
.total-wrapper
  display: flex
  align-items: flex-end
  font-family: sans-serif
  color: $white
  @media screen and (max-width: 1200px)
    font-size: 16px
  @media screen and (max-width: 767px)
    font-size: 14px
  @media screen and (max-width: 500px)
    font-size: 12px
.button-wrapper
  @media screen and (max-width: 500px)
    display: flex
    flex-direction: column
:global(.el-table)
  --el-table-border: 2px solid var(--el-table-border-color)
:deep(.el-button)
  @media screen and (max-width: 500px)
    margin-left: 0
:deep(.el-button > span)
  color: $white
  font-size: 16px
  font-weight: 600 
  @media screen and (max-width: 767px)
    font-size: 14px
.el-switch
  --el-switch-off-color: var(--el-color-primary)
:deep(.el-switch__core .el-switch__inner .is-text)
  font-size: 16px
  font-weight: 600
  color: $white
  @media screen and (max-width: 767px)
    font-size: 14px  
.pagination
  display: flex
  flex-wrap: wrap
  justify-content: center
  margin: 2em 0
</style>