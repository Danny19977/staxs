<template>
  <div class="form-group w-xxl-5">
    <label class="d-block fs-14 text-black mb-2"> Add Multiple Images </label>
    <div class="card upload-gallery border-0 rounded-1 p-xxl-30 p-4">
      <div class="file-upload text-center position-relative mb-20">
        <img src="../../../assets/img/icons/upload-files.svg" alt="Image" />
        <span class="d-block text-optional fs-14 mt-30">
          Drag & Drop Multiple Images here or
          <span class="text_secondary fw-semibold position-relative">
            Select
          </span>
        </span>
        <input
          type="file"
          class="d-block w-100 shadow-none border-0 position-absolute start-0 end-0 top-0 bottom-0 z-1 opacity-0"
        />
      </div>

      <div class="mb-3" style="width: 60px">
        <img
          src="../../../assets/img/products/product-thumb-1.webp"
          alt="Image"
        />
      </div>

      <div class="form-check checkbox style-two mt-40">
        <input class="form-check-input" type="checkbox" id="test_1" />
        <label class="form-check-label text-optional fs-14" for="test_1">
          Product Has Multi Variants
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddImages",
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