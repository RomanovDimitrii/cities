<script setup lang="ts">
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';

import 'swiper/scss/pagination';

import { Navigation, Pagination } from 'swiper/modules';

const slides = [
  { image: '/images/1.png', alt: 'Slide 1' },
  { image: '/images/2.png', alt: 'Slide 2' },
  { image: '/images/3.png', alt: 'Slide 3' }
];

const swiperInstance = ref(null);

const pagination = {
  clickable: true,
  renderBullet: (_, className) => {
    return `<span class="${className} "></span>`;
  }
};

const modules = [Navigation, Pagination];

const goNext = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext();
  } else {
    console.error('Swiper instance is not initialized yet.');
  }
};

const goPrev = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev();
  } else {
    console.error('Swiper instance is not initialized yet.');
  }
};
</script>

<template>
  <div class="slider">
    <swiper
      :slides-per-view="1"
      :space-between="0"
      loop
      :modules="modules"
      :pagination="pagination"
      :navigation="{
        nextEl: '.custom-next',
        prevEl: '.custom-prev'
      }"
      class="swiper"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" :alt="slide.alt" class="slider-image" />
      </swiper-slide>
    </swiper>
    <div class="slider-navigation">
      <button class="custom-prev" @click="goPrev">
        <img
          class="slider-navigation__img"
          src="/images/nav_arrow_prev.svg"
          alt="предыдущая картинка"
        />
      </button>
      <button class="custom-next" @click="goNext">
        <img
          class="slider-navigation__img"
          src="../images/nav_arrow_next.svg"
          alt="следующая картинка"
        />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.slider {
  height: auto;
  box-sizing: border-box;
  padding: 0 0;
  position: relative;
}

.swiper {
  width: 100%;
  height: auto;
  max-width: 50vw;
  margin: 0 0 32px;
  box-sizing: border-box;
}

.swiper-slide {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  background: transparent;
}

.slider-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider-navigation {
  position: absolute;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  z-index: 3;

  &__img {
    width: 1.4rem;
    object-fit: contain;
  }
}

.custom-next {
  background-color: #fff;
  width: 2rem;
  height: 2rem;
  border: none;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}

.custom-prev {
  background-color: #3f3f3f;
  width: 2rem;
  height: 2rem;
  border: none;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

::v-deep(.swiper-pagination) {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  gap: 1rem;
}

::v-deep(.swiper-pagination-bullet) {
  width: 0.5rem;
  height: 0.5rem;
  background: #fff;
  border-radius: 0.5rem;
  opacity: 100;
}

::v-deep(.swiper-pagination-bullet-active) {
  width: 2rem;
  height: 0.5rem;
  background: #fff;
  border-radius: 0.5rem;
  opacity: 100;
}
</style>
