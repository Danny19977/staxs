<template>
  <div
    class="modal fade"
    id="createModal"
    tabindex="-1"
    aria-labelledby="createModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-title" id="createModalLabel">
            Create Warehouse
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
                  <label class="d-block fs-14 text-black mb-10">
                    Warehouse Name
                  </label>
                  <input
                    type="text"
                    class="w-100 d-block shadow-none fs-14 bg_ash rounded-1 text-black border-0 placeholder-1"
                    placeholder="Enter Warehouse Name"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-15">
                  <label class="d-block fs-14 text-black mb-10">Phone</label>
                  <input
                    type="text"
                    class="w-100 d-block shadow-none fs-14 bg_ash rounded-1 text-black border-0 placeholder-1"
                    placeholder="999 234 567"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-15">
                  <label class="d-block fs-14 text-black mb-10">City</label>
                  <input
                    type="text"
                    class="w-100 d-block shadow-none fs-14 bg_ash rounded-1 text-black border-0 placeholder-1"
                    placeholder="Enter City"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-15">
                  <label class="d-block fs-14 text-black mb-10">Country</label>
                  <input
                    type="text"
                    class="w-100 d-block shadow-none fs-14 bg_ash rounded-1 text-black border-0 placeholder-1"
                    placeholder="Enter Country"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-15">
                  <label class="d-block fs-14 text-black mb-10">Email</label>
                  <input
                    type="number"
                    class="w-100 d-block shadow-none fs-14 bg_ash rounded-1 text-black border-0 placeholder-1"
                    placeholder="Enter Email"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-25">
                  <label class="d-block fs-14 text-black mb-10">ZIP Code</label>
                  <input
                    type="number"
                    class="w-100 d-block shadow-none fs-14 bg_ash rounded-1 text-black border-0 placeholder-1"
                    placeholder="ZIP Code"
                  />
                </div>
              </div>
              <div class="col-12">
                <button type="button" class="btn style-five w-100 d-block">
                  Submit
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
  name: "CreateWarehouseModal",
};
</script>