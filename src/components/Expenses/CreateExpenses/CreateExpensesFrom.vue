<template>
  <div class="row mb-40">
    <div class="col-md-6">
      <div class="form-group mb-25">
        <label class="d-block fs-14 text-black mb-2">Date</label>
        <input
          type="date"
          class="w-100 h-55 bg_ash border-0 rounded-1 fs-14 text-black bg-white"
        />
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group mb-25">
        <label class="d-block fs-14 text-black mb-2">Warehouse</label>
        <select class="bg-white border-0 rounded-1 fs-14 text-optional">
          <option value="0">Select Warehouse</option>
          <option value="1">Warehouse 01</option>
          <option value="2">Warehouse 02</option>
        </select>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group mb-25">
        <label class="d-block fs-14 text-black mb-2">Expense Category</label>
        <select class="bg-white border-0 rounded-1 fs-14 text-optional">
          <option value="0">Select Category</option>
          <option value="1">Electornics</option>
          <option value="2">Accessories</option>
        </select>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group mb-25">
        <label class="d-block fs-14 text-black mb-2">Amount</label>
        <input
          type="number"
          class="w-100 d-block shadow-none fs-14 bg-white rounded-1 text-title"
          placeholder="0"
        />
        <span
          class="percent-sign position-absolute rounded-1 text-center d-flex flex-column justify-content-center fw-semibold text-optional"
        >
          $
        </span>
      </div>
    </div>
    <div class="col-lg-12">
      <div class="form-group mb-25">
        <label class="d-block fs-14 text-black mb-2">Details</label>
        <textarea
          cols="30"
          rows="10"
          placeholder="A few words"
          class="d-block w-100 bg-white border-0 rounded-1 resize-none fs-14 text-title"
        ></textarea>
      </div>
    </div>
    <div class="col-12">
      <button
        class="btn style-one transition border-0 fw-medium text-white rounded-1 fs-md-15 fs-lg-16"
        type="submit"
      >
        Create Expense
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateExpensesFrom",
};
</script>