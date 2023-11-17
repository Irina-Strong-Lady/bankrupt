<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      modules: [Pagination],
    };
  },
};
</script>

<template>
  <swiper :pagination="pagination" :modules="modules">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
  </swiper>
</template>

<style lang="sass" scoped>
.swiper
  width: 100%
  height: 100%
.swiper-slide
  text-align: center
  font-size: 18px
  background: transparent
  display: flex
  justify-content: center
  align-items: center
  color: #FFFFFF
.swiper-slide img
  display: block
  width: 100%
  height: 100%
.swiper-pagination-bullet
  width: 20px
  height: 20px
  text-align: center
  line-height: 20px
  font-size: 12px
  color: #000
  opacity: 0
  background: rgba(0, 0, 0, 0.2)
.swiper-pagination-bullet-active
  color: #fff
  background: #007aff
</style>