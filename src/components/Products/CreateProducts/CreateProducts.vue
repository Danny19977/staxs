<template>
  <form action="#" class="pb-60">
    <div class="row">
      <div class="col-xxl-9 col-xl-8 col-lg-8 pe-xxl-6 mb-md-25">
        <div class="row gx-xxl-6">
          <div class="col-lg-6">
            <div class="form-group mb-25">
              <label class="d-block fs-14 text-black mb-2">Product Name</label>
              <input
                type="text"
                class="w-100 d-block shadow-none fs-14 bg-white rounded-1 text-title"
                placeholder="Enter Product Name"
                required
              />
              <span class="text-red fs-12 d-none">This field is required!</span>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="form-group mb-25">
              <label class="d-block fs-14 text-black mb-2">Code Product</label>
              <input
                type="text"
                class="w-100 d-block shadow-none fs-14 bg-white rounded-1 text-title"
                placeholder="Scan Code"
                required
              />
              <span class="text-parageaph d-block w-100 fs-12 mt-1 d-none">
                Scan your barcode and select the correct symbology below.
              </span>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="form-group mb-25">
              <label class="d-block fs-14 text-black mb-2">Category</label>
              <select class="bg-white border-0 rounded-1 fs-14 text-optional">
                <option value="0">Choose Category</option>
                <option value="1">Choose Category</option>
                <option value="2">Choose Category</option>
              </select>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="form-group mb-25">
              <label class="d-block fs-14 text-black mb-2">Brand</label>
              <select class="bg-white border-0 rounded-1 fs-14 text-optional">
                <option value="0">Choose Brand</option>
                <option value="1">Choose Category</option>
                <option value="2">Choose Category</option>
              </select>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="form-group mb-25">
              <label class="d-block fs-14 text-black mb-2">
                Barcode Symbology
              </label>
              <select class="bg-white border-0 rounded-1 fs-14 text-optional">
                <option value="0">Choose Symbology</option>
                <option value="1">Choose Category</option>
                <option value="2">Choose Category</option>
              </select>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="form-group mb-25">
              <label class="d-block fs-14 text-black mb-2">Product Cost</label>
              <input
                type="number"
                class="w-100 d-block shadow-none fs-14 bg-white rounded-1 text-title"
                placeholder="Enter Product Cost"
                required
              />
              <span class="text-red fs-12 d-none">This field is required!</span>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="form-group mb-25">
              <label class="d-block fs-14 text-black mb-2">Product Price</label>
              <input
                type="number"
                class="w-100 d-block shadow-none fs-14 bg-white rounded-1 text-title"
                placeholder="Enter Product Price"
                required
              />
              <span class="text-red fs-12 d-none">This field is required!</span>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="form-group mb-25">
              <label class="d-block fs-14 text-black mb-2">Product Unit</label>
              <select class="bg-white border-0 rounded-1 fs-14 text-optional">
                <option value="0">Choose Product unit</option>
                <option value="1">5</option>
                <option value="2">10</option>
                <option value="3">15</option>
              </select>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="form-group mb-25">
              <label class="d-block fs-14 text-black mb-2">Sales Unit</label>
              <select class="bg-white border-0 rounded-1 fs-14 text-optional">
                <option value="0">Choose Sales unit</option>
                <option value="1">5</option>
                <option value="2">10</option>
                <option value="3">15</option>
              </select>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="form-group mb-25">
              <label class="d-block fs-14 text-black mb-2">Purchase Unit</label>
              <select class="bg-white border-0 rounded-1 fs-14 text-optional">
                <option value="0">Choose Purchase unit</option>
                <option value="1">5</option>
                <option value="2">10</option>
                <option value="3">15</option>
              </select>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="form-group mb-25">
              <label class="d-block fs-14 text-black mb-2">
                Product Quantity
              </label>
              <input
                type="number"
                class="w-100 d-block shadow-none fs-14 bg-white rounded-1 text-title"
                placeholder="01"
                required
              />
              <span class="text-red fs-12 d-none">This field is required!</span>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="form-group mb-25">
              <label class="d-block fs-14 text-black mb-2">Stock Alert</label>
              <input
                type="number"
                class="w-100 d-block shadow-none fs-14 bg-white rounded-1 text-title"
                placeholder="0"
              />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="form-group mb-25">
              <label class="d-block fs-14 text-black mb-2">Order Tax</label>
              <input
                type="number"
                class="w-100 d-block shadow-none fs-14 bg-white rounded-1 text-title"
                placeholder="0"
              />
              <span
                class="percent-sign position-absolute rounded-1 text-center d-flex flex-column justify-content-center"
              >
                %
              </span>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="form-group mb-25">
              <label class="d-block fs-14 text-black mb-2">Tax Type</label>
              <select class="bg-white border-0 rounded-1 fs-14 text-optional">
                <option value="1">Inclusive</option>
                <option value="2">Exclusive</option>
              </select>
            </div>
          </div>

          <div class="col-lg-12">
            <div class="form-group mb-25">
              <label class="d-block fs-14 text-black mb-2">Notes</label>
              <textarea
                cols="30"
                rows="10"
                placeholder="Add a note"
                class="d-block w-100 bg-white border-0 rounded-1 resize-none fs-14 text-title"
              ></textarea>
            </div>
          </div>

          <div class="col-12">
            <button
              class="btn style-one transition border-0 fw-medium text-white rounded-1 fs-md-15 fs-lg-16"
              type="submit"
            >
              Submit Products
            </button>
          </div>
        </div>
      </div>

      <div class="col-xxl-3 col-xl-4 col-lg-4">
        <AddImages />
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AddImages from "./AddImages.vue";

export default defineComponent({
  name: "CreateProducts",
  components: {
    AddImages,
  },
});
</script>