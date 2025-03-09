<template>
  <section class="intro-section spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>{{ $t("download.title") }}</h2>
          </div>

          <a
            href="https://api.louvorja.com.br/pt/download"
            target="_blank"
            class="site-btn m-2"
          >
            {{ $t("download.button.pt") }}
          </a>
          <a
            href="https://api.louvorja.com.br/es/download"
            target="_blank"
            class="site-btn m-2"
          >
            {{ $t("download.button.es") }}
          </a>
          <a
            href="https://app.louvorja.com.br/"
            target="_blank"
            class="site-btn sb-c2 m-2"
          >
            {{ $t("download.button.app") }}
          </a>
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
