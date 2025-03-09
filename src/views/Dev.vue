<template>
  <section class="contact-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 p-0">
          <div class="contact-warp">
            <div class="section-title mb-0">
              <h2>{{ $t("dev.title") }}</h2>
            </div>
            <p>
              {{ $t("dev.text") }}
            </p>
            <ul>
              <li>
                <a
                  :href="$router.resolve({ name: 'telegram-dev' }).href"
                  target="_blank"
                >
                  {{ $t("dev.link") }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DevPage",
  computed: {
    lang() {
      return this.$i18n.locale;
    },
  },
};
</script>
