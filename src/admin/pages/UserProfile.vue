<script setup>
import router from '@/router'
import { ref } from 'vue'
import { adminOptions } from '@/admin/constants'
import { isValidToken, getTokenData } from '@/composable'
import { useProfileStore } from '@/stores/profile'
import UserProfileForm from '@/admin/forms/UserProfileForm.vue'

const userData = getTokenData()

const profileStore = useProfileStore()

const selectProfileVisible = ref(false)

const isCheckedProfile = () => selectProfileVisible.value = !selectProfileVisible.value

const selectOptionProfile = ref('')

const selectRoleVisible = ref(false)

const isCheckedRole = () => selectRoleVisible.value = !selectRoleVisible.value

const selectOptionRole = ref('')

const deleteDialog = ref(false)

const isCheckedDelete = () => deleteDialog.value = !deleteDialog.value

const userFormVisible = ref(false);

</script>

<template>
  <div class="layuot">
    <section>
      <div class="wrapper">
        <div class="btn-img" 
              @click.prevent="isValidToken() ? 
              router.push({name: 'tables'}) : 
              router.push({name: 'admins'})"
        >
          <img src="/src/assets/img/png/back-btn.png" alt="back-btn" class="btn" />
        </div>
        <div class="caption-wrapper">
          <div
            :class="userData.admin && userData.name != profileStore?.usersArray[profileStore.userIdx]?.name ? 'edit' : 'caption'"
          > {{ userData.admin && userData.name != profileStore?.usersArray[profileStore.userIdx]?.name ? 
            `Вы редактируете профиль "${profileStore?.usersArray[profileStore.userIdx]?.name}"` :
            'Ваш профиль пользователя' 
             }}
          </div>
        </div>
        <div class="user-wrapper">
          <div class="user-info">
            <tbody>
              <tr>
                <div class="row-wrapper">
                  <th>Имя:</th>
                  <td v-if="userData.admin">{{ profileStore?.usersArray[profileStore.userIdx]?.name }}
                    <span v-if="userData.name != profileStore?.usersArray[profileStore.userIdx]?.name" style="display: inline-block; width: .75em; color: white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                      <path fill="currentColor" d="m199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336zm384 254.272v-64h448v64h-448z">
                      </path>
                    </svg>
                  </span>
                  </td>                  
                  <td v-else>{{ userData.name }}
                  </td>
                </div>
              </tr>
              <tr>
                <div class="row-wrapper">
                  <th>Телефон:</th>
                  <td v-if="userData.admin">{{ profileStore?.usersArray[profileStore.userIdx]?.phone }}
                  </td>
                  <td v-else>{{ userData.phone }}
                  </td>
                </div>
              </tr>
            </tbody>
            <div 
              v-if="userData.admin"
              @click.prevent="isCheckedProfile();
                              selectRoleVisible = false;
                              isValidToken() ? 
                              router.push({name: 'profiles'}) : 
                              router.push({name: 'admins'})"
              class="checkbox-wrapper"
            >
              <div class="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                  <path fill="currentColor" d="M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0">
                  </path>
                </svg>
              </div>
              <span>Выбрать профиль</span>       
            </div>
            <transition 
              v-if="userData.admin"
              name="fade">
              <div v-if="selectProfileVisible" :class="['btn-wrapper embedded', { selectProfileVisible: 'btn-transition'}]">
                <el-select
                  v-model="selectOptionProfile"
                  :placeholder="userData.admin ? profileStore?.usersArray[profileStore.userIdx]?.name : userData.name" 
                  filterable
                  allow-create
                  class="mb-2"
                >
                  <el-option
                    v-for="(item, idx) in profileStore.usersArray"
                    :key="item.id"
                    :value="item.name"
                    @click.prevent="profileStore.userIdx = idx;
                                    profileStore.deleteId = item.id;
                                    profileStore.deleteIdx = idx;
                                    isValidToken() ? 
                                    router.push({name: 'profiles'}) : 
                                    router.push({name: 'admins'})"           
                    class="select-custom">{{ item.name }}
                  </el-option>
                </el-select>
                <div
                  @click.prevent="isCheckedRole();
                                    isValidToken() ? 
                                    router.push({name: 'profiles'}) : 
                                    router.push({name: 'admins'})" 
                  class="checkbox-wrapper"
                >
                  <div class="svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                      <path fill="currentColor" d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z">
                      </path>
                      <path fill="currentColor" d="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z">
                      </path>
                    </svg>
                  </div>
                  <span>Установить роль</span>       
                </div>
                <transition 
                  v-if="userData.admin"
                  name="fade">
                  <div v-if="selectRoleVisible" :class="['btn-wrapper', { selectProfileVisible: 'btn-transition'}]">
                    <el-select
                      v-model="selectOptionRole"
                      :placeholder="profileStore?.usersArray[profileStore.userIdx]?.admin ? 
                                    'Администратор' : 
                                    'Исполнитель'" 
                      filterable
                      allow-create
                      class="mb-2"
                    >
                      <el-option
                        v-for="(item, idx) in adminOptions"
                        :key="item"
                        :value="item"
                        @click.prevent="profileStore.updateRole(idx, 
                                        userData.confirm == profileStore?.usersArray[profileStore.userIdx]?.id ? 
                                        userData.confirm : 
                                        profileStore?.usersArray[profileStore.userIdx]?.id);
                                        isValidToken() ? 
                                        router.push({name: 'profiles'}) : 
                                        router.push({name: 'admins'})"            
                        class="select-custom">{{ item }}
                      </el-option>
                    </el-select>
                  </div> 
                </transition>
                <div 
                  @click.prevent="isCheckedDelete();
                                  isValidToken() ? 
                                  router.push({name: 'profiles'}) : 
                                  router.push({name: 'admins'})"
                  class="checkbox-wrapper"
                >
                  <div class="svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                      <path fill="currentColor" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32">
                      </path>
                    </svg>          
                  </div>
                  <span>Удалить профиль пользователя</span>
                </div>
              </div> 
            </transition>
            <div 
              @click.prevent="userFormVisible = true; 
                        isValidToken() ? 
                        router.push({name: 'profiles'}) : 
                        router.push({name: 'admins'})"
              class="checkbox-wrapper">
              <div class="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                  <path fill="currentColor" d="M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z">
                  </path>
                </svg>
              </div>            
              <span>Обновить данные пользователя</span>
            </div>
          </div>
        </div>
      </div>    
    </section>
    <section>
      <UserProfileForm v-model="userFormVisible" />
      <el-dialog 
        v-model="deleteDialog"
        title="Удаление выбранного элемента" 
        :width="500" 
        draggable
        align-center
        style="padding-top: 6em"
      >
        <span>Вы уверены, что хотите удалить аккаунт?
          <br>{{ profileStore?.usersArray[profileStore.deleteIdx]?.name }}
              {{ profileStore?.usersArray[profileStore.deleteIdx]?.phone }}
        </span>
        <template #footer>
          <div>
            <el-button type="primary" @click.prevent="deleteDialog = false">Отменить</el-button>
            <el-button type="danger" @click.prevent="profileStore.deleteUser(profileStore.deleteId, profileStore.deleteIdx); deleteDialog = false" >
              Удалить
            </el-button>
          </div>
        </template>
      </el-dialog>
    </section>
  </div>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
.layuot
  position: absolute
  width: 100%
  height: 100%
  background: $table_caption
.wrapper
  background: $table_caption
  padding-bottom: 10vh
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
  flex-wrap: wrap
  justify-content: flex-start
  margin: 20px 10px 0 20px
  @media screen and (max-width: 265px)
    display: none
.caption  
  font-size: 18px
  font-weight: 600
  color: $white
  transition: all .5s ease-out
.edit
  font-size: medium 
  align-self: center 
  margin: 0 10px 0 0
  font-weight: 600 
  color: $white
  transition: all .5s ease-out
.btn-wrapper
  margin: 1em 0 1em 0
.btn-transition
  transition: margin-right 2s ease-in-out
.el-button
  background: $text_photo
:deep(.el-button > span)
  font-size: 18px
  color: $white
.user-wrapper
  display: flex
  width: 100%
  height: 50%
  margin-left: 20px
  @media screen and (max-width: 265px)
    display: none
.user-info
  margin: 0
.row-wrapper
  margin-top: 1em
.checkbox-wrapper
  margin-top: 1.5em
.embedded
  padding-left: .75em
.svg-wrapper
  display: inline-block
  width: 1.25em 
  color: white
  &:hover, &:active, &:focus
    animation: rotate 1s, spin 3s
    cursor: pointer
th, td, span
  display: inline-block
  color: $white
  font-size: 18px
  font-weight: 600
  color: $white
  &:last-child
    margin-left: 10px
span 
  color: $text_photo
  &:hover, &:focus, &:active
    cursor: pointer
.fade-enter-active, .fade-leave-active 
  transition: opacity 1s ease
.fade-enter-from,.fade-leave-to 
  opacity: 0
:deep(.el-input__wrapper)
  background-color: $table_caption
:deep(.el-input__inner)
  color: $pinky_bg
:global(.el-select-dropdown)
  background: $table_caption
.select-custom
  align-content: center
  color: $pinky_bg
  background: $table_caption
  padding-left: .5em
.submit-role-btn
  display: flex
  margin-top: 1.5em
:deep(.el-dialog__title)
  color: $white
  margin: 2em 0 0 10px
:deep(.el-dialog__footer)
  text-align: left
  margin-left: 10px
</style>