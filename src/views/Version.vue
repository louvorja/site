<template>
  <section class="how-section spad set-bg">
    <div class="container text-white">
      <div class="section-title">
        <span>{{ $t("footer.texts[1]") }}:</span>
        <h2>{{ version ?? "..." }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
import Api from "@/services/Api";

export default {
  name: "VersionPage",
  data() {
    return {
      version: null,
    };
  },
  computed: {
    lang() {
      return this.$i18n.locale;
    },
  },
  watch: {
    lang() {
      this.setVersion();
    },
  },
  methods: {
    setVersion: function () {
      const field = this.lang + "_version";
      this.version = this.params[field] ?? "";
    },
  },
  async mounted() {
    const self = this;
    await Api.get("params", {}, function (resp, data) {
      if (resp) {
        self.params = data;
        self.setVersion();
      }
    });
  },
};
</script>
