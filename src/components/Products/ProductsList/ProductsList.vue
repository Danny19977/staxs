<template>
  <div class="card border-0 shadow-none rounded-1 mb-25">
    <div class="card-body p-xl-40">
      <div class="table-responsive">
        <table class="table text-nowrap align-middle mb-0">
          <thead>
            <tr>
              <th scope="col" class="text-title fw-normal fs-14 pt-0 ps-0">
                <div class="form-check checkbox">
                  <input class="form-check-input" type="checkbox" id="test_1" />
                  <label class="form-check-label" for="test_1"> IMAGE </label>
                </div>
              </th>
              <th scope="col" class="text-title fw-normal fs-14 pt-0">
                NAME
                <img
                  class="ms-2"
                  src="../../../assets/img/icons/up-down-aroow.svg"
                  alt="Image"
                />
              </th>
              <th scope="col" class="text-title fw-normal fs-14 pt-0">
                CODE
                <img
                  class="ms-2"
                  src="../../../assets/img/icons/up-down-aroow.svg"
                  alt="Image"
                />
              </th>
              <th scope="col" class="text-title fw-normal fs-14 pt-0">
                CATEGORY
                <img
                  class="ms-2"
                  src="../../../assets/img/icons/up-down-aroow.svg"
                  alt="Image"
                />
              </th>
              <th scope="col" class="text-title fw-normal fs-14 pt-0">
                BRAND
                <img
                  class="ms-2"
                  src="../../../assets/img/icons/up-down-aroow.svg"
                  alt="Image"
                />
              </th>
              <th scope="col" class="text-title fw-normal fs-14 pt-0">
                PRICE
                <img
                  class="ms-2"
                  src="../../../assets/img/icons/up-down-aroow.svg"
                  alt="Image"
                />
              </th>
              <th scope="col" class="text-title fw-normal fs-14 pt-0">
                UNIT
                <img
                  class="ms-2"
                  src="../../../assets/img/icons/up-down-aroow.svg"
                  alt="Image"
                />
              </th>
              <th scope="col" class="text-title fw-normal fs-14 pt-0">
                QUANTITY
                <img
                  class="ms-2"
                  src="../../../assets/img/icons/up-down-aroow.svg"
                  alt="Image"
                />
              </th>
              <th scope="col" class="text-title fw-normal fs-14 pt-0 pe-0">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td class="shadow-none fw-normal text-black title ps-0">
                <div class="d-flex align-items-center product-item">
                  <div class="form-check checkbox style-three me-25">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="test_2"
                    />
                    <label class="form-check-label" for="test_2"> </label>
                  </div>
                  <img :src="product.image" alt="Image" />
                </div>
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                {{ product.name }}
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                {{ product.code }}
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                {{ product.category }}
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                {{ product.brand }}
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                {{ product.price }}
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                {{ product.unit }}
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                {{ product.quantity }}
              </td>
              <td class="shadow-none lh-1 text-end pe-0">
                <div class="button-group d-flex flex-wrap align-items-center">
                  <router-link to="/product-details" class="" title="View">
                    <img src="../../../assets/img/icons/eye.svg" alt="Image" />
                  </router-link>
                  <router-link to="/edit-product" class="" title="Edit">
                    <img src="../../../assets/img/icons/edit.svg" alt="Image" />
                  </router-link>
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
  <div class="row pb-45 align-items-center">
    <div class="col-sm-6">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-start page-unit"
      >
        <span class="fs-13">Showing product per page</span>
        <select class="text-title border-0 fs-14 bg-transparent">
          <option value="0">10</option>
          <option value="1">20</option>
          <option value="2">30</option>
        </select>
      </div>
    </div>
    <div class="col-sm-6 text-sm-end text-center">
      <ul class="page-nav list-style">
        <li>
          <a href="#">
            <img
              src="../../../assets/img/icons/left-arrow-purple.svg"
              alt="Image"
            />
          </a>
        </li>
        <li><a href="#" class="active">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li>
          <a href="#">
            <img
              src="../../../assets/img/icons/right-arrow-purple.svg"
              alt="Image"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div
    class="delete-popup offcanvas offcanvas-end border-0"
    tabindex="-1"
    id="deletePopup"
  >
    <div class="offcanvas-body p-0">
      <div class="delete-success">
        <img src="../../../assets/img/icons/tick-circle.svg" alt="Image" />
        <span class="text-white fw-medium">
          Your product is deleted from the list.
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductsList",
  data() {
    return {
      products: [
        {
          id: 1,
          image: require("../../../assets/img/products/product-thumb-1.webp"),
          name: "Earphones",
          code: "5389607",
          category: "Electronics",
          brand: "JCL",
          price: "101.00",
          unit: "pc",
          quantity: "105",
        },
        {
          id: 2,
          image: require("../../../assets/img/products/product-thumb-2.webp"),
          name: "Joy Stick",
          code: "5389608",
          category: "Electronics",
          brand: "JCL",
          price: "167.00",
          unit: "pc",
          quantity: "126",
        },
        {
          id: 3,
          image: require("../../../assets/img/products/product-thumb-3.webp"),
          name: "Smart Watch",
          code: "5389601",
          category: "Electronics",
          brand: "JCL",
          price: "212.00",
          unit: "pc",
          quantity: "111",
        },
        {
          id: 4,
          image: require("../../../assets/img/products/product-thumb-4.webp"),
          name: "Mobile",
          code: "5389603",
          category: "Electronics",
          brand: "JCL",
          price: "311.00",
          unit: "pc",
          quantity: "231",
        },
        {
          id: 5,
          image: require("../../../assets/img/products/product-thumb-5.webp"),
          name: "Joy Stick",
          code: "1389607",
          category: "Electronics",
          brand: "JCL",
          price: "213.00",
          unit: "pc",
          quantity: "125",
        },
        {
          id: 6,
          image: require("../../../assets/img/products/product-thumb-6.webp"),
          name: "Smart Watch",
          code: "1289607",
          category: "Electronics",
          brand: "JCL",
          price: "321.00",
          unit: "pc",
          quantity: "213",
        },
        {
          id: 7,
          image: require("../../../assets/img/products/product-thumb-7.webp"),
          name: "Laptop",
          code: "3289607",
          category: "Electronics",
          brand: "JCL",
          price: "169.00",
          unit: "pc",
          quantity: "214",
        },
        {
          id: 8,
          image: require("../../../assets/img/products/product-thumb-8.webp"),
          name: "VR Box",
          code: "4389607",
          category: "Electronics",
          brand: "JCL",
          price: "654.00",
          unit: "pc",
          quantity: "423",
        },
        {
          id: 9,
          image: require("../../../assets/img/products/product-thumb-9.webp"),
          name: "Macbook Pro",
          code: "5389634",
          category: "Electronics",
          brand: "JCL",
          price: "324.00",
          unit: "pc",
          quantity: "125",
        },
        {
          id: 10,
          image: require("../../../assets/img/products/product-thumb-10.webp"),
          name: "Tablet",
          code: "5389665",
          category: "Electronics",
          brand: "JCL",
          price: "897.00",
          unit: "pc",
          quantity: "432",
        },
        {
          id: 11,
          image: require("../../../assets/img/products/product-thumb-11.webp"),
          name: "Laptop",
          code: "5389765",
          category: "Electronics",
          brand: "JCL",
          price: "432.00",
          unit: "pc",
          quantity: "123",
        },
        {
          id: 12,
          image: require("../../../assets/img/products/product-thumb-12.webp"),
          name: "Tablet",
          code: "53896542",
          category: "Electronics",
          brand: "JCL",
          price: "423.00",
          unit: "pc",
          quantity: "243",
        },
        {
          id: 13,
          image: require("../../../assets/img/products/product-thumb-13.webp"),
          name: "Magic Pen",
          code: "6589607",
          category: "Electronics",
          brand: "JCL",
          price: "345.00",
          unit: "pc",
          quantity: "254",
        },
        {
          id: 14,
          image: require("../../../assets/img/products/product-thumb-14.webp"),
          name: "Earphones",
          code: "53489607",
          category: "Electronics",
          brand: "JCL",
          price: "342.00",
          unit: "pc",
          quantity: "213",
        },
        {
          id: 15,
          image: require("../../../assets/img/products/product-thumb-7.webp"),
          name: "Laptop",
          code: "9889607",
          category: "Electronics",
          brand: "JCL",
          price: "543.00",
          unit: "pc",
          quantity: "245",
        },
      ],
    };
  },
});
</script>