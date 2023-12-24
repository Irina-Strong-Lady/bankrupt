<script setup>
import { useRoute } from 'vue-router'
import { navBarItems } from '../constants/header'

const props = defineProps({    
    glasses: {
      type: String,
      required: true
    },
    navBarItems: {
      type: Array,
      required: true
    }
})

const route = useRoute()

const itemRoute = () => navBarItems.find(item => item.name == route.name);

</script>

<template>
  <section>
    <div class="wrapper">
      <div class="image" :style="`background-image: url(${glasses})`">
        <div class="container">
          <div class="title">
            <p>{{ itemRoute().title }}</p>
          <div class="text">
            <p>{{ navBarItems[0].title }}&emsp;</p>
            <p>&emsp;{{ itemRoute().title }}</p>
          </div>
          </div>
        </div>
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
  display: flex
  flex-wrap: wrap
  height: 740px
  background: $pinky_bg no-repeat center/cover
.container
  display: flex
  max-width: 1920px
.title
  display: flex
  flex-wrap: wrap
  flex-direction: column
  align-self: center
  margin: 0 auto  
.title > p
  color: $white
  font-size: 30px
  text-align: center   
  margin-bottom: 20px  
  @media screen and (max-width: 150px)
    font-size: 16px
  @media screen and (max-width: 100px)
    display: none
.text
  display: flex
  flex-wrap: nowrap  
.text > p 
  color: $white
  font-size: 24px
  &:first-child::after
    content: '\2022'
  @media screen and (max-width: 250px)
    font-size: 12px
  @media screen and (max-width: 100px)
    display: none
</style>