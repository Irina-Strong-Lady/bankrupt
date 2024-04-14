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
    <el-input 
      @input="vuelidate.$touch()"
      v-model="addForm.question" 
      name="question"
      type="textarea" 
      placeholder="Вопрос"
      autocomplete="off"
      class="el-input-textarea"
    />
    <div class="message-wrapper textarea-custom__wrapper">
      <transition name="fade" appear>
        <small
          v-if="vuelidate.question.$error"
          class="el-textarea__message"
        >{{ vuelidate.question.$errors[0].$message }}
        </small>
      </transition>
    </div>
  </el-form-item>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
@import '@/assets/styles/modal/modal'
</style>