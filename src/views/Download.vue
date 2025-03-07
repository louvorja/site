<template>
  <section class="intro-section spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="section-title">
            <h2>DOWNLOADDDDD</h2>
          </div>
        </div>
        <div class="col-lg-6">
          <p>{{ $t("home.card1.text") }}</p>
          <router-link :to="{ name: 'about' }" class="site-btn">
            {{ $t("home.card1.button") }}
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <section class="how-section spad set-bg">
    <div class="container text-white">
      <div class="section-title">
        <h2>{{ $t("home.card2.title") }}</h2>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="how-item">
            <div class="hi-icon">
              <i class="fa fa-book"></i>
            </div>
            <h4>{{ $t("home.card2.col1.title") }}</h4>
            <p>{{ $t("home.card2.col1.text") }}</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="how-item">
            <div class="hi-icon">
              <i class="fa fa-list"></i>
            </div>
            <h4>{{ $t("home.card2.col2.title") }}</h4>
            <p>{{ $t("home.card2.col2.text") }}</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="how-item">
            <div class="hi-icon">
              <i class="fa fa-puzzle-piece"></i>
            </div>
            <h4>{{ $t("home.card2.col3.title") }}</h4>
            <p>{{ $t("home.card2.col3.text") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="concept-section spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="section-title">
            <h2>{{ $t("home.card3.title") }}</h2>
          </div>
        </div>
        <div class="col-lg-6" style="white-space: pre-line">
          {{ $t("home.card3.text") }}
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <div class="concept-item">
            <img src="@/assets/imgs/photo-002.jpg" alt="" />
            <h5>{{ $t("home.card3.photo1") }}</h5>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="concept-item">
            <img src="@/assets/imgs/photo-004.jpg" alt="" />
            <h5>{{ $t("home.card3.photo2") }}</h5>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="concept-item">
            <img src="@/assets/imgs/photo-003.jpg" alt="" />
            <h5>{{ $t("home.card3.photo3") }}</h5>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="concept-item">
            <img src="@/assets/imgs/photo-001.jpg" alt="" />
            <h5>{{ $t("home.card3.photo4") }}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Carousel from "@/components/Carousel.vue";

export default {
  name: "DownloadPage",
  components: {
    Carousel,
  },
  computed: {
    lang() {
      return this.$i18n.locale;
    },
  },
};
</script>
