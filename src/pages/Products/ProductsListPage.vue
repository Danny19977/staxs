<template>
  <MainHeader />
  <MainSidebar />
  <div
    class="main-content bg_gray d-flex flex-column transition overflow-hidden"
  >
    <BreadcrumbMenu pageTitle="Products List" />
    <FilterContent btnText="Product" btnLink="/create-product" />
    <ProductsList />

    <div class="flex-grow-1"></div>
    <MainFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MainHeader from "../../components/Layouts/MainHeader.vue";
import MainSidebar from "../../components/Layouts/MainSidebar.vue";
import BreadcrumbMenu from "../../components/Common/BreadcrumbMenu.vue";
import FilterContent from "../../components/Common/FilterContent.vue";
import ProductsList from "../../components/Products/ProductsList/ProductsList.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ProductsListPage",
  components: {
    MainHeader,
    MainSidebar,
    BreadcrumbMenu,
    FilterContent,
    ProductsList,
    MainFooter,
  },
});
</script>

<style lang="scss" scoped>
.chart-wrapper {
  margin: 0 -10px;
  .card {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>