<template>
  <div class="card border-0 shadow-none rounded-1 mb-40">
    <div class="card-body p-xl-40">
      <h6 class="fs-18 mb-35 text-title fw-semibold">System Settings</h6>
      <div class="row">
        <div class="col-lg-4">
          <div class="form-group mb-30">
            <label class="d-block fs-14 text-black mb-2">Company Name</label>
            <input
              type="text"
              class="w-100 d-block shadow-none fs-14 bg_ash rounded-1 text-title"
              placeholder="Pyle Corporation"
              required
            />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group mb-30">
            <label class="d-block fs-14 text-black mb-2">
              Company Phone Number
            </label>
            <input
              type="text"
              class="w-100 d-block shadow-none fs-14 bg_ash rounded-1 text-title"
              placeholder="990 321 52 36 21"
              required
            />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group mb-30">
            <label class="d-block fs-14 text-black mb-2">Default Email</label>
            <input
              type="text"
              class="w-100 d-block shadow-none fs-14 bg_ash rounded-1 text-title"
              placeholder="hello@pyle.com"
              required
            />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group mb-30">
            <label class="d-block fs-14 text-black mb-2">
              Default Currency
            </label>
            <select class="bg_ash border-0 rounded-1 fs-14 text-optional">
              <option value="0">USD Dollar</option>
              <option value="1">USD Dollar</option>
              <option value="2">USD Dollar</option>
            </select>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group mb-30">
            <label class="d-block fs-14 text-black mb-2">
              Default Language
            </label>
            <select class="bg_ash border-0 rounded-1 fs-14 text-optional">
              <option value="0">US English</option>
              <option value="1">UK English</option>
              <option value="2">Chinese</option>
            </select>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group mb-30">
            <label class="d-block fs-14 text-black mb-2">
              Default Customer
            </label>
            <select class="bg_ash border-0 rounded-1 fs-14 text-optional">
              <option value="0">Walk In Customer</option>
              <option value="1">Walk In Customer</option>
            </select>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group mb-30">
            <label class="d-block fs-14 text-black mb-2">
              Default Warehouse
            </label>
            <select class="bg_ash border-0 rounded-1 fs-14 text-optional">
              <option value="0">Walk In Customer</option>
              <option value="1">Walk In Customer</option>
            </select>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group mb-30">
            <label class="d-block fs-14 text-black mb-2">Footer</label>
            <input
              type="text"
              class="w-100 d-block shadow-none fs-14 bg_ash rounded-1 text-title"
              placeholder="PYLE - Inventory Management With POS"
            />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group mb-30">
            <label class="d-block fs-14 text-black mb-2">Developed By</label>
            <input
              type="text"
              class="w-100 d-block shadow-none fs-14 bg_ash rounded-1 text-title"
              placeholder="Pyle Corporation"
            />
          </div>
        </div>
        <div class="col-lg-8">
          <div class="form-group mb-30">
            <label class="d-block fs-14 text-black mb-2">Address</label>
            <input
              type="text"
              class="w-100 d-block shadow-none fs-14 bg_ash rounded-1 text-title"
              placeholder="413 North Las Vegas, NV 89032"
            />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group mb-30">
            <label class="d-block fs-14 text-black mb-2">Company Logo</label>
            <input
              type="file"
              class="w-100 d-block shadow-none fs-14 bg-transparent rounded-1 text-title ps-0"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <button type="button" class="btn style-five">Change Settings</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SystemSettings",
};
</script>