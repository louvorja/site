<template>
  <footer class="footer-section">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-7 order-lg-2">
          <div class="row">
            <div class="col-sm-2">
              <div class="footer-widget"></div>
            </div>
            <div class="col-sm-5">
              <div class="footer-widget">
                <h2>{{ $t("footer.links.title") }}</h2>
                <ul>
                  <li>
                    <router-link :to="{ name: 'app' }">
                      {{ $t("footer.links.list.app") }}
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'help' }">
                      {{ $t("footer.links.list.help") }}
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'faq' }">
                      {{ $t("footer.links.list.faq") }}
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'drive' }">
                      {{ $t("footer.links.list.drive") }}
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'dev' }">
                      {{ $t("footer.links.list.dev") }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-5">
              <div class="footer-widget">
                <h2>{{ $t("footer.partners.title") }}</h2>
                <ul>
                  <li>
                    <a href="https://ligaosom.com.br/" target="_blank">
                      {{ $t("footer.partners.list.ligaosom") }}
                    </a>
                  </li>
                  <li>
                    <a href="https://iasdbaixoguandu.com.br/" target="_blank">
                      {{ $t("footer.partners.list.iasdbaixogandu") }}
                    </a>
                  </li>
                  <li>
                    <a href="https://seveninformatica.net.br/" target="_blank">
                      {{ $t("footer.partners.list.seveninformatica") }}
                    </a>
                  </li>
                  <li>
                    <a href="https://300gideao.com.br/" target="_blank">
                      {{ $t("footer.partners.list.300degideao") }}
                    </a>
                  </li>
                  <li>
                    <a href="https://mda.wiki.br/" target="_blank">
                      {{ $t("footer.partners.list.mdawiki") }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-5 order-lg-1">
          <router-link to="/" class="site-logo p-0 m-0">
            <div class="d-flex align-items-center">
              <img src="@/assets/imgs/logo.svg" alt="" />
              <div class="text-logo">
                {{ $t("logo.text-normal") }}
                <span>JA</span>
              </div>
            </div>
          </router-link>
          <div class="copyright">
            {{ $t("footer.texts[0]") }}
            <br /><b>{{ $t("footer.texts[1]") }}:</b>
            {{ version ?? "..." }}
          </div>
          <div class="social-links">
            <router-link :to="{ name: 'facebook' }">
              <i class="fa fa-facebook"></i>
            </router-link>
            <router-link :to="{ name: 'whatsapp' }">
              <i class="fa fa-whatsapp"></i>
            </router-link>
            <router-link :to="{ name: 'telegram' }">
              <i class="fa fa-telegram"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Api from "@/services/Api";

export default {
  name: "FooterLayout",
  data() {
    return {
      params: {},
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
