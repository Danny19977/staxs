<template>
  <form action="#" class="mb-30">
    <div class="form-group mb-25">
      <label class="d-block fs-14 text-black mb-2">Choose Warehouse</label>
      <select class="bg-white border-0 rounded-1 fs-14 text-optional">
        <option value="0">Choose Warehouse</option>
        <option value="1">Warehouse 01</option>
        <option value="2">Warehouse 02</option>
      </select>
    </div>
    <div class="form-group">
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
  </form>
</template>

<script>
export default {
  name: "ChooseForm",
};
</script>