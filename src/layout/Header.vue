<template>
  <header class="header-section clearfix">
    <router-link to="/" class="site-logo">
      <div class="d-flex align-items-center">
        <img src="@/assets/imgs/logo.svg" alt="" />
        <div class="text-logo">
          {{ $t("logo.text-normal") }}
          <span>JA</span>
        </div>
      </div>
    </router-link>
    <ul class="main-menu">
      <li>
        <router-link :to="{ name: 'home' }">{{ $t("menu.home") }}</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'about' }">
          {{ $t("menu.about") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'download' }">
          {{ $t("menu.download") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'contact' }">
          {{ $t("menu.contact") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'donation' }">
          {{ $t("menu.donation") }}
        </router-link>
      </li>
      <li>
        <a href="#">
          <img
            v-if="flag === 'br'"
            style="height: 21px"
            src="@/assets/flags/br.svg"
          />
          <img
            v-else-if="flag === 'es'"
            style="height: 21px"
            src="@/assets/flags/es.svg"
          />
        </a>
        <ul class="sub-menu" style="width: 60px">
          <li>
            <a href="#" @click="changeLocale('pt')">
              <img style="height: 21px" src="@/assets/flags/br.svg" />
            </a>
          </li>
          <li>
            <a href="#" @click="changeLocale('es')">
              <img style="height: 21px" src="@/assets/flags/es.svg" />
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "HeaderLayout",
  methods: {
    changeLocale(lang) {
      this.$i18n.locale = lang;
    },
  },
  computed: {
    flag() {
      const flags = {
        pt: "br",
        es: "es",
      };
      return flags[this.$i18n.locale] || "br";
    },
  },
  mounted() {
    $(".main-menu").slicknav({
      appendTo: ".header-section",
      allowParentLinks: true,
      closedSymbol: '<i class="fa fa-angle-right"></i>',
      openedSymbol: '<i class="fa fa-angle-down"></i>',
    });

    $(".slicknav_nav").prepend('<li class="header-right-warp"></li>');
    $(".header-right").clone().prependTo(".slicknav_nav > .header-right-warp");
  },
};
</script>
