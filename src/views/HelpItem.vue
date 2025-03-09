<template>Em breve...</template>

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
      return this.lang === "pt" ? helpPt : helpEs;
    },
  },
};
</script>
