<template>
  <MainHeader />
  <MainSidebar />
  <div
    class="main-content bg_gray d-flex flex-column transition overflow-hidden"
  >
    <BreadcrumbMenu pageTitle="Create Transfer" />
    <ChooseForm />
    <SelectedProducts />
    <CreateTransferFrom />

    <div class="flex-grow-1"></div>
    <MainFooter />
  </div>

  <div
    class="delete-popup offcanvas offcanvas-end border-0"
    tabindex="-1"
    id="deletePopup"
  >
    <div class="offcanvas-body p-0">
      <div class="delete-success">
        <img src="../../assets/img/icons/tick-circle.svg" alt="Image" />
        <span class="text-white fw-medium">
          Your product is deleted from the list.
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MainHeader from "../../components/Layouts/MainHeader.vue";
import MainSidebar from "../../components/Layouts/MainSidebar.vue";
import BreadcrumbMenu from "../../components/Common/BreadcrumbMenu.vue";
import ChooseForm from "../../components/Transfer/CreateTransfer/ChooseForm.vue";
import SelectedProducts from "../../components/Transfer/CreateTransfer/SelectedProducts.vue";
import CreateTransferFrom from "../../components/Transfer/CreateTransfer/CreateTransferFrom.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "CreateTransferPage",
  components: {
    MainHeader,
    MainSidebar,
    BreadcrumbMenu,
    ChooseForm,
    SelectedProducts,
    CreateTransferFrom,
    MainFooter,
  },
});
</script>