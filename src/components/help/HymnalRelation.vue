<template>
  <div>
    <ul class="nav nav-tabs mb-3">
      <li class="nav-item" v-for="(tab, index) in tabs" :key="index">
        <a
          class="nav-link"
          :class="{ active: activeTab === tab.id }"
          @click="activeTab = tab.id"
          style="cursor: pointer"
        >
          {{ tab.name }}
        </a>
      </li>
    </ul>
    <Hymnal1996x2022 v-if="activeTab === 'hymnal1996x2022'" />
    <Hymnal2022x1996 v-if="activeTab === 'hymnal2022x1996'" />
    <HymnalRemoved v-if="activeTab === 'hymnalRemoved'" />
    <HymnalNew v-if="activeTab === 'hymnalNew'" />
  </div>
</template>

<script>
import Hymnal1996x2022 from "@/components/help/partials/Hymnal1996x2022.vue";
import Hymnal2022x1996 from "@/components/help/partials/Hymnal2022x1996.vue";
import HymnalRemoved from "@/components/help/partials/HymnalRemoved.vue";
import HymnalNew from "@/components/help/partials/HymnalNew.vue";

export default {
  name: "HymnalRelationComponent",
  components: {
    Hymnal1996x2022,
    Hymnal2022x1996,
    HymnalRemoved,
    HymnalNew,
  },
  data() {
    return {
      tabs: [
        { id: "hymnal1996x2022", name: "Hinário 1996 x 2022" },
        { id: "hymnal2022x1996", name: "Hinário 2022 x 1996" },
        { id: "hymnalRemoved", name: "Hinos Removidos" },
        { id: "hymnalNew", name: "Hinos Novos" },
      ],
      activeTab: "hymnal1996x2022",
    };
  },
};
</script>

<style scoped>
.nav-tabs {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-link {
  cursor: pointer;
  border: 0;
  font-weight: bold;
  font-size: 13px;
  color: #6a7080;
}
.nav-link:hover {
  border-bottom: 3px solid #f8c800;
  color: #f8c800;
}
.nav-link.active {
  border-bottom: 3px solid #f8c800;
  color: #f8c800;
}
</style>
