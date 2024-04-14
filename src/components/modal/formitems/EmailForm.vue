<script setup>

const props = defineProps({    
    addForm: {
      type: Object,
      required: true
    },
    checked: {
      type: Boolean,
      required: true
    },
    vuelidate: {
      type: Object,
      required: true
    }
});

</script>

<template>
  <el-form-item :class="checked ? 'email-visible' : 'email-invisible'">        
    <div class="circle"></div>
    <el-input
      @input="vuelidate.$touch()"
      v-model="addForm.email"
      type="text"
      placeholder="Email"
    />
    <div class="message-wrapper">
      <transition name="fade" appear>
        <small
          v-if="vuelidate.email.$error"
          class="el-input__message"
        >{{ vuelidate.email.$errors[0].$message }}
        </small>
      </transition>
    </div>
  </el-form-item>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
@import '@/assets/styles/modal/modal'
</style>