<script setup>
import router from '@/router'
import { isValidToken, getTokenData } from '@/composable'
import { ArrowDown } from '@element-plus/icons-vue'

const userData = getTokenData();

</script>

<template>
  <section>
    <div class="wrapper">
      <div class="btn-img" 
            @click.prevent="isValidToken() ? 
            router.push({name: 'tables'}) : 
            router.push({name: 'admins'}); 
            console.dir(userData)">
        <img src="/src/assets/img/png/back-btn.png" alt="back-btn" class="btn" />
      </div>
      <div class="caption-wrapper">
        <h2 class="caption">Профиль пользователя</h2>
      </div>
      <div class="user-wrapper">
        <div class="user-info">
          <el-dropdown class="dropdown-wrapper">
            <span class="el-dropdown-link">
              Меню
              <el-icon class="el-icon--right">
                <arrow-down :style="'color: #91C9FF; display: flex; justify-content: flex-end'"/>
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <tbody>
            <tr>
              <th scope="row">Имя:</th>
              <td>{{ userData.name }}</td>
            </tr>
            <tr>
              <th scope="row">Телефон:</th>
              <td>{{ userData.phone }}</td>
            </tr>
          </tbody>          
        </div>  
      </div>
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
.btn-img
  margin: 20px 0 0 20px
.btn
  width: 2em
  height: 2em
  &:hover, &:active, &:focus
    transform: scale(1.125)
    cursor: pointer
    transition: .75s
.caption-wrapper
  display: flex
  justify-content: center
.caption  
  font-size: 24px
  font-weight: 600
  color: $white
.user-wrapper
  display: flex
  width: 20%
  height: 50%
  margin: 0 0 0 20px
.el-dropdown
  border: 1px solid $border_dialog
.el-dropdown > span
  color: $white
  width: 100%
  text-align: center
  font-size: 18px
  font-weight: 600
  &:hover, &:focus, &active    
    border: 1px solid $border_dialog
.dropdown-wrapper
  display: flex
  justify-content: center
  margin-top: 20px
  margin-bottom: 20px
  border: none  
.example-showcase .el-dropdown-link
  cursor: pointer
  color: var(--el-color-primary)
  display: flex
  align-items: center

.user-info
  margin: 0
th, td
  display: inline-block
  color: $white
  font-size: 18px
  font-weight: 600
  color: $white
  &:last-child
    margin-left: 10px
</style>