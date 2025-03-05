<template>
  <!-- Hero section -->
  <section class="hero-section">
    <div class="hero-slider">
      <Carousel v-bind="carouselConfig">
        <Slide v-for="slide in 10" :key="slide">
          <div class="hs-item">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <div class="hs-text">
                    <h2>
                      <span>Music {{ slide }}</span> for everyone.
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>
                    <a href="#" class="site-btn">Download Now</a>
                    <a href="#" class="site-btn sb-c2">Start free trial</a>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="hr-img">
                    <img src="@/assets/img/hero-bg.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
  <!-- Hero section end -->
</template>

<script>
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "CarouselComponent",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data: () => ({
    carouselConfig: {
      itemsToShow: 1,
      wrapAround: true,
    },
  }),
};
</script>

<style>
.carousel__icon {
  fill: white;
}
.carousel__pagination button {
  opacity: 0.3;
  background: white;
}
.carousel__pagination .carousel__pagination-button--active {
  opacity: 1;
}
</style>
