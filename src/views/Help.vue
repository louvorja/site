<template>
  <section class="intro-section spad set-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>{{ $t("help.title") }}</h2>
          </div>
        </div>
        <div v-for="(category, key) in help" :key="key" class="col-md-4 mb-5">
          <div class="how-item mx-3">
            <div class="hi-icon">
              <i :class="category.icon"></i>
            </div>
            <h4>{{ category.title }}</h4>
            <ul class="list-links">
              <li v-for="(item, url) in category.items" :key="url">
                <router-link :to="{ name: 'help-item', params: { slug: url } }">
                  {{ item.title }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import helpPt from "../help/pt.json";
import helpEs from "../help/es.json";

export default {
  name: "HelpPage",
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
