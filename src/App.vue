<template>
  <PreLoader />
  <SettingSidebar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PreLoader from "./components/Layouts/PreLoader.vue";
import SettingSidebar from "./components/Layouts/SettingSidebar.vue";

export default defineComponent({
  name: "App",
  components: {
    PreLoader,
    SettingSidebar,
  },
});
</script>