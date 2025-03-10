<template>
  <NotFoundComponent />
</template>

<script>
import NotFoundComponent from "@/components/NotFound.vue";

export default {
  name: "NotFoundPage",
  components: {
    NotFoundComponent,
  },
  computed: {
    lang() {
      return this.$i18n.locale;
    },
  },
};
</script>
