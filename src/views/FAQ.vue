<template>
  <section class="subscription-section spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="sub-text">
            <h2>{{ $t("faq.title") }}</h2>
          </div>
        </div>
        <div class="col-lg-6">
          <ul class="sub-list">
            <li v-for="(item, url) in help['faq'].items" :key="url">
              <router-link
                :to="{ name: 'help-item', params: { slug: url } }"
                class="text-white"
              >
                {{ item.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import helpPt from "../help/pt.json";
import helpEs from "../help/es.json";

export default {
  name: "FAQPage",
  computed: {
    lang() {
      return this.$i18n.locale;
    },
    help() {
      let help = this.lang === "pt" ? helpPt : helpEs;
      let helpUnified = {};
      Object.keys(help.categories).map((c) => {
        if (Array.isArray(help.categories[c].items)) {
          let items = help.categories[c].items;
          help.categories[c].items = {};
          items.map((i) => {
            help.categories[c].items[i] = help.items[i];
          });
        }
      });

      return help.categories;
    },
  },
};
</script>

<style scoped>
ul.sub-list a:hover {
  color: #f8c800 !important;
}
</style>
