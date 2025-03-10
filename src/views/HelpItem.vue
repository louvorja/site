<template>
  <section class="intro-section spad set-bg">
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
              <h4 v-if="item.type == 'title'" class="m-0 p-0">
                {{ item.value }}
              </h4>
              <ul v-else-if="item.type == 'list'" class="my-3">
                <li
                  v-for="(item_list, k_item) in item.value"
                  :key="k_item"
                  v-html="item_list"
                />
              </ul>
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
                    >
                      {{ item.title }}
                    </router-link>
                  </li>
                </template>
              </template>
              <li class="mt-3">
                <router-link :to="{ name: 'help' }">
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

      let all = {};
      Object.keys(help).map((c) => {
        Object.keys(help[c].items).map((i) => {
          if (help[c].items[i] == "#") {
            help[c].items[i] = all[i];
          } else {
            all[i] = help[c].items[i];
          }
        });
      });

      return help;
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
