<script setup>
import { vMaska } from 'maska'

const props = defineProps({    
    addForm: {
      type: Object,
      required: true
    },
    vuelidate: {
      type: Object,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
});

</script>

<template>
  <el-form-item class="el-form-item-2">
    <div class="circle"></div>
    <el-input
      v-if="placeholder == 'Телефон'"
      @input="vuelidate.$touch()" 
      v-model="addForm.phone" 
      v-maska :data-maska="'+7 (###) ###-##-##'"
      name="phone"
      :placeholder="placeholder"
      autocomplete="off"
    />
    <el-input
      v-else-if="placeholder == 'Новый телефон'"
      @input="vuelidate.$touch()" 
      v-model="addForm.newPhone" 
      v-maska :data-maska="'+7 (###) ###-##-##'"
      name="phone"
      :placeholder="placeholder"
      autocomplete="off"
    />
    <div v-show="placeholder == 'Телефон'" class="message-wrapper">
      <transition name="fade" appear>
        <small
          v-if="vuelidate.phone.$error"
          class="el-input__message"
        >{{ vuelidate.phone.$errors[0].$message }}
        </small>
      </transition>
    </div>
  </el-form-item>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
@import '@/assets/styles/modal/modal'
</style>