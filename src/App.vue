<script setup>
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <div :key="route.name">
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
</template>

<style lang="sass" scoped>
.fade-enter-active,
.fade-leave-active
  transition: all .3s ease-in-out
.fade-enter-from,
.fade-leave-to
  opacity: .85
</style>
