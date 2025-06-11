<template>
  <div class="card border-0 shadow-none rounded-1 mb-30">
    <div class="card-body p-xl-40">
      <h6 class="fs-18 mb-40 text-title">
        Selected Products For Print Barcode
      </h6>
      <div class="table-responsive">
        <table class="table text-nowrap align-middle mb-0">
          <thead>
            <tr>
              <th scope="col" class="text-title fw-normal fs-14 pt-0 ps-0 ls-1">
                PRODUCT
              </th>
              <th scope="col" class="text-title fw-normal fs-14 pt-0 ls-1">
                PRODUCT CODE
              </th>
              <th scope="col" class="text-title fw-normal fs-14 pt-0 ls-1">
                QUANTITY
              </th>
              <th
                scope="col"
                class="text-title fw-normal fs-14 pt-0 ls-1 text-end pe-0"
              >
                DELETE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph ps-0">
                {{ product.product }}
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                {{ product.code }}
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                <QuantityCounter />
              </td>
              <td class="shadow-none lh-1 text-end pe-0">
                <div
                  class="button-group style-two ms-auto d-flex flex-wrap align-items-center"
                >
                  <a
                    class="delete-btn"
                    data-bs-toggle="offcanvas"
                    href="#deletePopup"
                    role="button"
                    aria-controls="deletePopup"
                  >
                    <img
                      src="../../../assets/img/icons/close.svg"
                      alt="Image"
                    />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import QuantityCounter from "./QuantityCounter.vue";

export default defineComponent({
  name: "SelectedProducts",
  components: {
    QuantityCounter,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          product: "Smartphone",
          code: "87305928",
        },
        {
          id: 2,
          product: "Smart Watch",
          code: "56305954",
        },
        {
          id: 3,
          product: "Laptop",
          code: "32305954",
        },
        {
          id: 4,
          product: "Headphone",
          code: "56305945",
        },
      ],
    };
  },
});
</script>