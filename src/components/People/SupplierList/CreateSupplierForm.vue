<template>
  <div
    class="modal fade"
    id="createModal"
    tabindex="-1"
    aria-labelledby="createModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-xl modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-title" id="createModalLabel">
            Create Supplier
          </h5>
          <button
            type="button"
            class="btn-close p-0"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <img
              src="../../../assets/img/icons/close-circle-2.svg"
              alt="Image"
            />
          </button>
        </div>
        <div class="modal-body">
          <form action="#">
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group mb-15">
                  <label class="d-block fs-14 text-black mb-10"
                    >Supplier Name</label
                  >
                  <input
                    type="text"
                    class="w-100 d-block shadow-none fs-14 bg_ash rounded-1 text-black border-0 placeholder-1"
                    placeholder="Enter Supplier Name"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-15">
                  <label class="d-block fs-14 text-black mb-10">Email</label>
                  <input
                    type="email"
                    class="w-100 d-block shadow-none fs-14 bg_ash rounded-1 text-black border-0 placeholder-1"
                    placeholder="Enter Email"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-15">
                  <label class="d-block fs-14 text-black mb-10"
                    >Phone Number</label
                  >
                  <input
                    type="number"
                    class="w-100 d-block shadow-none fs-14 bg_ash rounded-1 text-black border-0 placeholder-1"
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-15">
                  <label class="d-block fs-14 text-black mb-10">Country</label>
                  <select class="bg_ash border-0 rounded-1 fs-14 text-optional">
                    <option value="0">USA</option>
                    <option value="1">UK</option>
                    <option value="2">Canada</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-15">
                  <label class="d-block fs-14 text-black mb-10">City</label>
                  <input
                    type="number"
                    class="w-100 d-block shadow-none fs-14 bg_ash rounded-1 text-black border-0 placeholder-1"
                    placeholder="Enter City"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-15">
                  <label class="d-block fs-14 text-black mb-10"
                    >Taz Number</label
                  >
                  <input
                    type="number"
                    class="w-100 d-block shadow-none fs-14 bg_ash rounded-1 text-black border-0 placeholder-1"
                    placeholder="Enter Tax Number"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group mb-15">
                  <label class="d-block fs-14 text-black mb-10">Address</label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    class="w-100 d-block shadow-none fs-14 bg_ash rounded-1 text-black border-0 placeholder-1"
                    placeholder="Address"
                  ></textarea>
                </div>
              </div>
              <div class="col-12">
                <button type="button" class="btn style-five w-100 d-block">
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateSupplierForm",
};
</script>