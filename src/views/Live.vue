<template>
  <section class="live-page spad set-bg">
    <div class="container text-white">
      <div class="row align-items-center">
        <!-- Left Column: Info -->
        <div class="col-lg-6 mb-5 mb-lg-0">&nbsp;</div>

        <!-- Right Column: Live Cards -->
        <div class="col-lg-6 pl-lg-5">EM BREVE</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LivePage",
  computed: {
    lang() {
      return this.$i18n.locale;
    },
  },
};
</script>
