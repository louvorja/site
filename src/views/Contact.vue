<template>
  <section class="contact-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 p-0">
          <div class="contact-warp">
            <div class="section-title mb-0">
              <h2>{{ $t("contact.title") }}</h2>
            </div>
            <p>
              {{ $t("contact.text[0]") }}
              <a
                :href="$router.resolve({ name: 'whatsapp' }).href"
                target="_blank"
              >
                {{ $t("contact.whatsapp") }}
              </a>
              {{ $t("contact.text[1]") }}
              <a
                :href="$router.resolve({ name: 'telegram' }).href"
                target="_blank"
              >
                {{ $t("contact.telegram") }}
              </a>
              <br />
              {{ $t("contact.text[2]") }}
            </p>
            <ul>
              <li>
                <a href="mailto:contato@louvorja.com.br">
                  contato@louvorja.com.br
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
  name: "ContactPage",
  computed: {
    lang() {
      return this.$i18n.locale;
    },
  },
};
</script>
