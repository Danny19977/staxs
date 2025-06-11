<template>
  <div
    class="modal fade"
    id="createModal"
    tabindex="-1"
    aria-labelledby="createModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-rl modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-title" id="createModalLabel">
            Create Brand
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
            <div class="form-group mb-15">
              <label class="d-block fs-14 text-black mb-10">Brand Name</label>
              <input
                type="text"
                class="w-100 d-block shadow-none fs-14 bg_ash rounded-1 text-black border-0 placeholder-1"
                placeholder="Enter Brand Name"
              />
            </div>
            <div class="form-group mb-15">
              <label class="d-block fs-14 text-black mb-10"
                >Brand Description</label
              >
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                class="w-100 d-block shadow-none fs-14 bg_ash rounded-1 text-black border-0 placeholder-1"
                placeholder="Enter Brand Description"
              ></textarea>
            </div>
            <div class="form-group mb-15">
              <label class="d-block fs-14 text-black mb-10">Brand Image</label>
              <input
                type="file"
                class="w-100 d-block shadow-none fs-14 bg-transparent ps-0 rounded-1 text-black border-0 placeholder-1"
                placeholder="Enter Brand Name"
              />
            </div>
            <button type="button" class="btn style-five w-100 d-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateBrandModal",
};
</script>