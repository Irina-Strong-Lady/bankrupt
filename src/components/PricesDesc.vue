<script setup>  

const props = defineProps({
  captionList: {
    type: Object,
    required: true
  },
  priceList: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section>
    <div class="wrapper">
      <table>
        <tbody>
          <tr></tr>
        </tbody>
        <caption>{{ captionList.caption }}</caption>
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <th 
              v-motion
                :initial="{ opacity: 0, x: 100, y: 100 }"
                :visibleOnce="{ opacity: 1, x: 0, y: 0, transition: {
                              delay: 1000,
                              type: 'spring',
                              stiffness: 50,
                              mass: .5
                            }
                          }"
              class="align-bottom">{{ captionList.price }}
            </th>
          </tr>
          <tr 
            v-for="(item, index) in priceList" 
            :key="item.id"
            v-motion
              :initial="{ opacity: 0, x: 100, y: 100 }"
              :visibleOnce="{ opacity: 1, x: 0, y: 0, transition: {
                            delay: 1200,
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
  display: block
  background: $pinky_bg
table
  width: 80%
caption
  caption-side: top
  padding: 30px 10px
  color: $white
  background: $table_caption
  font-size: 16px
  font-weight: bold
  font-family: sans-serif
  text-align: justify
  @media screen and (max-width: 767px)
    font-size: 10px
  @media screen and (max-width: 200px)
    font-size: 6px
    word-break: break-all
th, td
  font-family: sans-serif
  font-size: 16px
  padding: 1em 0 10px 10px
  @media screen and (max-width: 767px)
    font-size: 10px  
  @media screen and (max-width: 200px)
    font-size: 6px
    word-break: break-all  
th 
  border-right: 1px solid $accent
  font-weight: 600
  text-align: center
td
  border-left: 1px solid $accent
  padding-right: 10px
  font-weight: 500
  text-align: justify 
.price
  border-right: 1px solid $accent
  border-left: none
  text-align: center
  font-weight: 600
.dark-item
  background: $circles
  color: $white
</style>