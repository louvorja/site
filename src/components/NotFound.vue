<template>
  <section class="how-section spad set-bg">
    <div class="container text-white">
      <div class="section-title">
        <h2>{{ $t("notfound.title") }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NotFoundComponent",
  data: () => ({
    carouselConfig: {
      itemsToShow: 1,
      wrapAround: true,
    },
  }),
  computed: {
    lang() {
      return this.$i18n.locale;
    },
  },
};
</script>
