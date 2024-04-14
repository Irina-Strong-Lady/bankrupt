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
    }
});

</script>

<template>
  <el-form-item class="el-form-item-2">
    <div class="circle"></div>
    <el-input
      @input="vuelidate.$touch()" 
      v-model="addForm.phone" 
      v-maska :data-maska="'+7 (###) ###-##-##'"
      name="phone"
      placeholder="Телефон"
      autocomplete="off"
    />
    <div class="message-wrapper">
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