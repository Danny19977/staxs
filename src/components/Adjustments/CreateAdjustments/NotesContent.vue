<template>
  <div class="row">
    <div class="col-12">
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
    <div class="col-xl-4">
      <button
        class="btn style-one d-inline-block transition border-0 fw-medium text-white rounded-1 fs-md-15 fs-lg-16 mb-60"
        type="submit"
      >
        Submit Products
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotesContent",
};
</script>