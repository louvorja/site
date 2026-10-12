<template>
  <section class="live-page spad set-bg">
    <div class="container text-white">
      <div class="row align-items-center">
        <!-- Left Column: Info -->
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="d-flex align-items-center justify-content-center">
            <div
              class="d-flex align-items-center mb-4"
              style="
                background-color: #f60000;
                padding: 5px 20px;
                border-radius: 5px;
              "
            >
              <div class="live-icon mr-3">
                <i class="fa fa-circle"></i>
              </div>
              <h2 class="mb-0 ms-3">LIVE</h2>
            </div>
          </div>
        </div>

        <!-- Right Column: Live Cards -->
        <div class="col-lg-6 pl-lg-5">
          <div class="live-card">
            <h3 class="mb-3">{{ $t("live.title") }}</h3>
            <p>{{ $t("live.description") }}</p>
          </div>
        </div>
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
