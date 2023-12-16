<script setup>

const props = defineProps({    
    hummer: {
      type: String,
      required: true
    }
});
</script>

<template>
  <section>
    <div class="wrapper">
      <div class="image" :style="`background-image: url(${hummer})`">
        <el-button class="button">Заказать звонок</el-button>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.wrapper
  width: 100%
  height: 100%
.image
  position: relative
  display: flex
  flex-wrap: wrap
  width: 100%
  height: 720px
  background: $pinky_bg no-repeat center/cover
.button
  display: flex
  flex-wrap: wrap
  align-self: center
</style>