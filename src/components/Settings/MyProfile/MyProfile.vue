<template>
  <form action="#" class="pb-60">
    <div class="row">
      <div class="col-xxl-3 col-xl-4 col-lg-4">
        <div class="form-group">
          <label class="d-block fs-14 text-black mb-2">Add Profile Image</label>
          <div class="card upload-gallery border-0 rounded-1 p-xxl-30 p-4">
            <div class="file-upload text-center position-relative mb-35">
              <img
                src="../../../assets/img/icons/upload-files.svg"
                alt="Image"
              />
              <span class="d-block text-optional fs-14 mt-30">
                Drag & Drop Image here or
                <span class="text_secondary fw-semibold position-relative">
                  Select
                </span>
              </span>
              <input
                type="file"
                class="d-block w-100 shadow-none border-0 position-absolute start-0 end-0 top-0 bottom-0 z-1 opacity-0"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-9 col-xl-8 col-lg-8">
        <div class="row gx-xxl-6">
          <div class="col-lg-6">
            <div class="form-group mb-25">
              <label class="d-block fs-14 text-black mb-2">First Name</label>
              <input
                type="text"
                class="w-100 d-block shadow-none fs-14 bg-white rounded-1 text-title"
                placeholder="Jhonathon"
                required
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-25">
              <label class="d-block fs-14 text-black mb-2">Last Name</label>
              <input
                type="text"
                class="w-100 d-block shadow-none fs-14 bg-white rounded-1 text-title"
                placeholder="Ronan"
                required
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-25">
              <label class="d-block fs-14 text-black mb-2">Username</label>
              <input
                type="Number"
                class="w-100 d-block shadow-none fs-14 bg-white rounded-1 text-title"
                placeholder="Jhonathon R."
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-25">
              <label class="d-block fs-14 text-black mb-2">Phone Number</label>
              <input
                type="Number"
                class="w-100 d-block shadow-none fs-14 bg-white rounded-1 text-title"
                placeholder="236 999 456"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-25">
              <label class="d-block fs-14 text-black mb-2">Email</label>
              <input
                type="Number"
                class="w-100 d-block shadow-none fs-14 bg-white rounded-1 text-title"
                placeholder="jhonathon@pyle.com"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-25">
              <label class="d-block fs-14 text-black mb-2">Password</label>
              <input
                type="number"
                class="w-100 d-block shadow-none fs-14 bg-white rounded-1 text-title"
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group mb-25">
              <label class="d-block fs-14 text-black mb-2">Bio</label>
              <textarea
                cols="30"
                rows="10"
                placeholder="Add A Bio"
                class="d-block w-100 bg-white border-0 rounded-1 resize-none fs-14 text-title"
              ></textarea>
            </div>
          </div>
          <div class="col-12">
            <button
              class="btn style-one transition border-0 fw-medium text-white rounded-1 fs-md-15 fs-lg-16"
              type="submit"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "MyProfile",
};
</script>

<style lang="scss" scoped>
.upload-gallery {
  .file-upload {
    padding: 40px 20px;
    border: 1.5px dashed #a8acb2;
    text-align: center;
    border-radius: 4px;
    input {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }
}

@media only screen and (min-width: 1400px) {
  .upload-gallery {
    .file-upload {
      padding: 40px 75px 35px;
    }
  }
}
</style>