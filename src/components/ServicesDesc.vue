<script setup>

const props = defineProps({
  serviceOptions: {
    type: Array,
    required: true
  }
});

</script>

<template>
  <section>
    <div class="container">
      <div class="wrapper">
        <ul 
          v-for="item in serviceOptions" 
          :key="item.id"
          v-motion
              :initial="{ opacity: 0, y: 100 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: {
                              delay: 400,
                              type: 'spring',
                              stiffness: 50,
                              mass: .5
                              }
                            }"           
        >
          <li>
            <h1>{{ item.title }}</h1>
            <h3>{{ item.text }}</h3>
          </li>
        </ul>
      </div>    
    </div>
  </section>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.container
  min-width: 100%
  display: flex
  justify-content: space-around
  background: $pinky_bg
.wrapper
  width: 82.5%
  padding: 30px 0 
  @media screen and (max-width: 150px) 
    display: none
ul
  background: url('@/assets/img/svg/ellipse-sm.svg') no-repeat left top .5rem
  padding-left: 45px
  list-style: none
  @media screen and (max-width: 200px)
    padding-left: 30px
ul:first-child > li 
  background: none
h1, h3 
  color: $footer_letters
  font-family: sans-serif
  text-align: justify
h1  
  font-size: 20px
  font-weight: 600
  &:last-child
    display: none
  @media screen and (max-width: 200px)
    font-size: 14px
h3 
  font-size: 18px
  margin-bottom: 1em
  @media screen and (max-width: 200px)
    font-size: 12px  
</style>