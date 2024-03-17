<script setup>

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
  <el-form-item>
    <div class="circle"></div>
    <el-input 
      @input="vuelidate.$touch()"
      v-model="addForm.name" 
      name="name" 
      type="text"
      placeholder="Имя"          
      autocomplete="off"
    />
    <small
      v-if="vuelidate.name.$error"
      class="el-input__message"
    >{{ vuelidate.name.$errors[0].$message }}
    </small>
  </el-form-item>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
@import '@/assets/styles/modal/modal'
</style>