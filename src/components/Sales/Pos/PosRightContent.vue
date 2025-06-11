<template>
  <div class="pos-right">
    <form action="#" class="pb-60">
      <div class="row gx-xxl-6">
        <div class="col-lg-6">
          <div class="form-group mb-20">
            <label class="d-block fs-14 text-black mb-2">
              Reference Number
            </label>
            <input
              type="text"
              class="w-100 d-block shadow-none fs-14 bg-white rounded-1 text-title"
              placeholder="Enter Reference Number"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="form-group mb-20">
            <label class="d-block fs-14 text-black mb-2">Warehouse</label>
            <select class="bg-white border-0 rounded-1 fs-14 text-optional">
              <option value="0">Choose Warehouse</option>
              <option value="1">Warehouse 01</option>
              <option value="2">Warehouse 02</option>
              <option value="3">Warehouse 03</option>
            </select>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="form-group mb-20">
            <label class="d-block fs-14 text-black mb-2">Customer</label>
            <select class="bg-white border-0 rounded-1 fs-14 text-optional">
              <option value="0">Walk-in Customer</option>
              <option value="1">Walk-in Customer</option>
            </select>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="form-group mb-20">
            <label class="d-block fs-14 text-black mb-2">Biller</label>
            <select class="bg-white border-0 rounded-1 fs-14 text-optional">
              <option value="0">Jhon Doe</option>
              <option value="1">Fredik Jhone</option>
            </select>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group mb-20">
            <label class="d-block fs-14 text-black mb-2">Choose Product</label>
            <div class="search-area style-two position-relative w-100">
              <input
                type="text"
                placeholder="Scan / Search product by code"
                class="w-100 h-55 bg_ash border-0 rounded-1 fs-14 text-black bg-white"
              />
              <button
                type="submit"
                class="bg-transparent border-0 position-absolute top-0 end-0 h-100 pt-0 py-0 px-2"
              >
                <img src="../../../assets/img/icons/search.svg" alt="Image" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card border-0 shadow-none rounded-1 mb-30">
        <SelectedProducts />
      </div>
      <div class="total-cost">
        <div class="row pb-10 mb-10 px-3 gx-xxl-7">
          <div class="col-xl-4">
            <div
              class="d-flex flex-wrap justify-content-between align-items-center"
            >
              <span class="fs-14 text-title">Total Item</span>
              <span class="fs-14 fw-bold text-title">04</span>
            </div>
          </div>
          <div class="col-xl-4">
            <div
              class="d-flex flex-wrap justify-content-between align-items-center"
            >
              <span class="fs-14 text-title">Total Cost</span>
              <span class="fs-14 fw-bold text-title">04</span>
            </div>
          </div>
          <div class="col-xl-4">
            <div
              class="d-flex flex-wrap justify-content-between align-items-center"
            >
              <span class="fs-14 text-title">Discount</span>
              <div class="fs-14 fw-bold text-title">
                <span>00.00</span>
                <button
                  type="button"
                  class="border-0 bg-transparent p-0 ms-2"
                  data-bs-toggle="modal"
                  data-bs-target="#filterModal"
                >
                  <img src="../../../assets/img/icons/edit.svg" alt="Image" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="row mb-20 px-3 gx-5">
          <div class="col-xl-4">
            <div
              class="d-flex flex-wrap justify-content-between align-items-center"
            >
              <span class="fs-14 text-title">Coupon</span>
              <div class="fs-14 fw-bold text-title">
                <span>00.00</span>
                <button
                  type="button"
                  class="border-0 bg-transparent p-0 ms-2"
                  data-bs-toggle="modal"
                  data-bs-target="#filterModal"
                >
                  <img src="../../../assets/img/icons/edit.svg" alt="Image" />
                </button>
              </div>
            </div>
          </div>
          <div class="col-xl-4">
            <div
              class="d-flex flex-wrap justify-content-between align-items-center"
            >
              <span class="fs-14 text-title">Tax</span>
              <div class="fs-14 fw-bold text-title">
                <span>00.00</span>
                <button
                  type="button"
                  class="border-0 bg-transparent p-0 ms-2"
                  data-bs-toggle="modal"
                  data-bs-target="#filterModal"
                >
                  <img src="../../../assets/img/icons/edit.svg" alt="Image" />
                </button>
              </div>
            </div>
          </div>
          <div class="col-xl-4">
            <div
              class="d-flex flex-wrap justify-content-between align-items-center"
            >
              <span class="fs-14 text-title">Shipping</span>
              <div class="fs-14 fw-bold text-title">
                <span>00.00</span>
                <button
                  type="button"
                  class="border-0 bg-transparent p-0 ms-2"
                  data-bs-toggle="modal"
                  data-bs-target="#detailsModal"
                >
                  <img src="../../../assets/img/icons/edit.svg" alt="Image" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="grand-total">Grand Total: <span>800.00</span></div>
        <div
          class="btn-wrapper d-flex justify-content-between align-items-center flex-wrap"
        >
          <button class="btn style-five">
            Card
            <img src="../../../assets/img/icons/cards.svg" alt="Image" />
          </button>
          <button class="btn style-seven">
            Cash
            <img src="../../../assets/img/icons/moneys.svg" alt="Image" />
          </button>
          <button class="btn style-eight">
            Paypal
            <img src="../../../assets/img/icons/paypal.svg" alt="Image" />
          </button>
          <button class="btn style-nine">
            Cheque
            <img src="../../../assets/img/icons/money-tick.svg" alt="Image" />
          </button>
          <button class="btn style-ten">
            Gift Card
            <img src="../../../assets/img/icons/money-2.svg" alt="Image" />
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SelectedProducts from "./SelectedProducts.vue";

export default defineComponent({
  name: "PosRightContent",
  components: {
    SelectedProducts,
  },
});
</script>

<style lang="scss" scoped>
.pos-right {
  width: calc(55% - 10px);
  .grand-total {
    background-color: #1e293b;
    font-size: 16px;
    color: var(--whiteColor);
    font-weight: 600;
    text-align: center;
    padding: 17px 20px;
    border-radius: 4px;
    margin-bottom: 30px;
    span {
      font-size: 20px;
      font-weight: 800;
    }
  }
  .btn-wrapper {
    button {
      width: calc(20% - 10px);
      padding: 14.5px 8px;
      font-size: 14px;
      text-align: center;
    }
  }
}

@media only screen and (max-width: 575px) {
  .pos-right {
    .btn-wrapper {
      button {
        width: 100%;
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

@media only screen and (max-width: 991px) {
  .pos-right {
    width: 100%;
  }
}

@media only screen and (min-width: 1600px) {
  .pos-right {
    width: calc(50% - 10px);
    .btn-wrapper {
      button {
        width: calc(20% - 20px);
      }
    }
  }
}
</style>