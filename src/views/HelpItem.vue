<template>
  <section v-if="helpItem" class="intro-section spad set-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>{{ helpItem.title }}</h2>
          </div>
        </div>
        <div class="col-lg-8 mb-5">
          <div class="how-item mx-5">
            <template v-for="(item, key) in helpItem.text" :key="key">
              <h4 v-if="item.type == 'title'" class="m-0 p-0 mt-4">
                {{ item.value }}
              </h4>
              <ul v-else-if="item.type == 'list'" class="my-3">
                <li
                  v-for="(item_list, k_item) in item.value"
                  :key="k_item"
                  v-html="item_list"
                />
              </ul>
              <div v-else-if="item.type == 'code'" class="m-0 mt-3">
                <code v-html="item.value" />
              </div>
              <p v-else class="m-0">
                <span v-html="item.value" />
                <router-link
                  v-if="item.link"
                  class="ms-1"
                  :to="{ name: 'help-item', params: { slug: item.link } }"
                >
                  <i class="fa fa-share"></i>
                  {{ $t("help.link_more") }}
                </router-link>
              </p>
            </template>
          </div>
        </div>
        <div class="col-lg-4 mb-5">
          <div class="how-item m-3">
            <h5 class="my-3">{{ $t("help.related") }}</h5>
            <ul>
              <template v-for="category in categories" :key="category">
                <template
                  v-for="(item, url) in help[category].items"
                  :key="url"
                >
                  <li v-if="url != slug">
                    <router-link
                      :to="{ name: 'help-item', params: { slug: url } }"
                      style="font-size: 14px"
                    >
                      {{ item.title }}
                    </router-link>
                  </li>
                </template>
              </template>
              <li class="mt-3">
                <router-link :to="{ name: 'help' }" style="font-size: 14px">
                  <i class="fa fa-reply-all"></i> &nbsp;
                  {{ $t("help.link_back") }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <NotFoundComponent v-else />
</template>

<script>
import NotFoundComponent from "@/components/NotFound.vue";

import helpPt from "../help/pt.json";
import helpEs from "../help/es.json";

export default {
  name: "HelpPage",
  components: {
    NotFoundComponent,
  },
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
    helpItem() {
      let item = null;
      Object.keys(this.help).map((c) => {
        if (this.help[c].items[this.slug]) {
          item = this.help[c].items[this.slug];
          return;
        }
      });

      return item;
    },
    categories() {
      let items = [];
      Object.keys(this.help).map((c) => {
        if (this.help[c].items[this.slug]) {
          items.push(c);
        }
      });

      return items;
    },
    slug() {
      return this.$route.params.slug;
    },
  },
};
</script>

<style scoped>
ul li {
  color: #6a7080;
}
</style>
>
