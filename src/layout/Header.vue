<template>
  <!-- Header section -->
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
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li>
        <a href="#">Pages</a>
        <ul class="sub-menu">
          <li><a href="category.html">Category</a></li>
          <li><a href="playlist.html">Playlist</a></li>
          <li><a href="artist.html">Artist</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </li>
      <li><a href="blog.html">News</a></li>
      <li><a href="contact.html">Contact</a></li>
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
        <ul class="sub-menu">
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
  <!-- Header section end -->
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
