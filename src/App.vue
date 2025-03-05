<template>
  <!-- Google font -->
  <link
    href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i&display=swap"
    rel="stylesheet"
  />

  <!-- Page Preloder -->
  <div id="preloder">
    <div class="loader"></div>
  </div>

  <Header />

  <router-view />

  <Footer />

  <!--====== Javascripts & Jquery ======-->
</template>

<script>
import Header from "@/layout/Header.vue";
import Footer from "@/layout/Footer.vue";

import Carousel from "@/components/Carousel.vue";

export default {
  name: "AppPage",
  components: {
    Header,
    Footer,
    Carousel,
  },
  mounted() {
    $(".loader").fadeOut();
    $("#preloder").delay(400).fadeOut("slow");

    $(".set-bg").each(function () {
      var bg = $(this).data("setbg");
      $(this).css("background-image", "url(" + bg + ")");
    });
  },
};
</script>
