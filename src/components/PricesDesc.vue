<script setup>
import { ref } from 'vue'
import { useMotion } from '@vueuse/motion'

const targetEl = ref()

useMotion(targetEl, {
          initial: { opacity: 0, y: 100 },
          visibleOnce: { opacity: 1, y: 0, transition: {
                        delay: 200,
                        type: 'spring',
                        stiffness: 50,
                        mass: .5
                      }
                    }
})

const props = defineProps({
  captionList: {
    type: Object,
    required: true
  },
  priceList: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <section>
    <div class="wrapper">
      <table ref="targetEl">
        <tbody>
          <tr></tr>
        </tbody>
        <caption>{{ captionList.caption }}</caption>
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <th ref="targetEl" class="align-bottom">{{ captionList.price }}
            </th>
          </tr>
          <tr 
            v-for="(item, index) in priceList" 
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
            <td :class="index % 2 == 0 ? 'dark-item' : ''">{{ item.service }}</td>
            <td 
              :class="index % 2 == 0 ? 'dark-item' : ''"
              class="price"
            >{{ item.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.wrapper
  display: flex
  flex-wrap: wrap
  flex-direction: column
  align-content: center
  justify-items: center
  background: $pinky_bg
table
  width: 80%
  margin: 20px 0
  border-left: 1px solid $accent
  border-right: 1px solid $accent
  border-bottom: 1px solid $accent
caption
  caption-side: top
  background: $table_caption
  font-size: 16px
  font-weight: bold
  font-family: sans-serif
  text-align: justify
  color: $white
  padding: 30px 10px
  @media screen and (max-width: 767px)
    font-size: 14px
  @media screen and (max-width: 200px)
    font-size: 12px
    word-break: break-all
th, td
  font-family: sans-serif
  font-size: 16px
  padding: 1em 0 10px 10px
  @media screen and (max-width: 767px)
    font-size: 14px
  @media screen and (max-width: 200px)
    font-size: 12px
    word-break: break-all  
th 
  font-weight: 600
  text-align: center
  border-bottom: 3px solid $accent
td
  font-weight: 500
  text-align: left
  padding-right: 15px
.price
  text-align: center
  font-weight: 600
  border-left: none
.dark-item
  background: $circles
  color: $white
</style>