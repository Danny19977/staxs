<template>
  <div class="card border-0 shadow-none rounded-1 mb-25">
    <div class="card-body p-xl-40">
      <div class="table-responsive">
        <table class="table text-nowrap align-middle mb-0">
          <thead>
            <tr>
              <th scope="col" class="text-title fw-normal fs-14 pt-0 ps-0">
                <div class="form-check checkbox">
                  <input class="form-check-input" type="checkbox" id="test_1" />
                  <label class="form-check-label" for="test_1"> IMAGE </label>
                </div>
              </th>
              <th scope="col" class="text-title fw-normal fs-14 pt-0">
                FIRST NAME
                <img
                  class="ms-2"
                  src="../../../assets/img/icons/up-down-aroow.svg"
                  alt="Image"
                />
              </th>
              <th scope="col" class="text-title fw-normal fs-14 pt-0">
                LAST NAME
                <img
                  class="ms-2"
                  src="../../../assets/img/icons/up-down-aroow.svg"
                  alt="Image"
                />
              </th>
              <th scope="col" class="text-title fw-normal fs-14 pt-0">
                USERNAME
                <img
                  class="ms-2"
                  src="../../../assets/img/icons/up-down-aroow.svg"
                  alt="Image"
                />
              </th>
              <th scope="col" class="text-title fw-normal fs-14 pt-0">
                EMAIL
                <img
                  class="ms-2"
                  src="../../../assets/img/icons/up-down-aroow.svg"
                  alt="Image"
                />
              </th>
              <th scope="col" class="text-title fw-normal fs-14 pt-0">
                PHONE
                <img
                  class="ms-2"
                  src="../../../assets/img/icons/up-down-aroow.svg"
                  alt="Image"
                />
              </th>
              <th scope="col" class="text-title fw-normal fs-14 pt-0">
                STATUS
                <img
                  class="ms-2"
                  src="../../../assets/img/icons/up-down-aroow.svg"
                  alt="Image"
                />
              </th>
              <th scope="col" class="text-title fw-normal fs-14 pt-0 pe-0">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="shadow-none fw-normal text-black title ps-0">
                <div class="d-flex product-item">
                  <div class="form-check checkbox me-25">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="test_2"
                    />
                    <label class="form-check-label" for="test_2"> </label>
                  </div>
                  <img
                    src="../../../assets/img/users/user-1.webp"
                    alt="Image"
                  />
                </div>
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                ANgela
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                Carter
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                Angela C.
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                any1994@gmail.com
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                1990 32 64 970
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                <span class="badge badge-success fs-14 fw-medium">Active</span>
              </td>
              <td class="shadow-none lh-1 text-end pe-0">
                <div class="button-group d-flex flex-wrap align-items-center">
                  <a
                    href="javascript:void(0)"
                    class=""
                    title="Edit"
                    data-bs-target="#detailsModal"
                    data-bs-toggle="modal"
                  >
                    <img src="../../../assets/img/icons/eye.svg" alt="Image" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    class=""
                    title="Edit"
                    data-bs-target="#createModal"
                    data-bs-toggle="modal"
                  >
                    <img src="../../../assets/img/icons/edit.svg" alt="Image" />
                  </a>
                  <a
                    class="delete-btn"
                    data-bs-toggle="offcanvas"
                    href="#deletePopup"
                    role="button"
                    aria-controls="deletePopup"
                  >
                    <img
                      src="../../../assets/img/icons/close.svg"
                      alt="Image"
                    />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td class="shadow-none fw-normal text-black title ps-0">
                <div class="d-flex product-item">
                  <div class="form-check checkbox me-25">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="test_3"
                    />
                    <label class="form-check-label" for="test_3"> </label>
                  </div>
                  <img
                    src="../../../assets/img/users/user-2.webp"
                    alt="Image"
                  />
                </div>
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                Victor
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                James
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                Victor J.
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                vicky128@gmail.com
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                990 12 64 333
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                <span class="badge badge-success fs-14 fw-medium">Active</span>
              </td>
              <td class="shadow-none lh-1 text-end pe-0">
                <div class="button-group d-flex flex-wrap align-items-center">
                  <a
                    href="javascript:void(0)"
                    class=""
                    title="Edit"
                    data-bs-target="#detailsModal"
                    data-bs-toggle="modal"
                  >
                    <img src="../../../assets/img/icons/eye.svg" alt="Image" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    class=""
                    title="Edit"
                    data-bs-target="#createModal"
                    data-bs-toggle="modal"
                  >
                    <img src="../../../assets/img/icons/edit.svg" alt="Image" />
                  </a>
                  <a
                    class="delete-btn"
                    data-bs-toggle="offcanvas"
                    href="#deletePopup"
                    role="button"
                    aria-controls="deletePopup"
                  >
                    <img
                      src="../../../assets/img/icons/close.svg"
                      alt="Image"
                    />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td class="shadow-none fw-normal text-black title ps-0">
                <div class="d-flex product-item">
                  <div class="form-check checkbox me-25">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="test_4"
                    />
                    <label class="form-check-label" for="test_4"> </label>
                  </div>
                  <img
                    src="../../../assets/img/users/user-3.webp"
                    alt="Image"
                  />
                </div>
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                Jhonathon
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                Ronan
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                Jhonathon R.
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                jhonathon12@gmail.com
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                990 32 64 235
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                <span class="badge badge-danger fs-14 fw-medium">Inactive</span>
              </td>
              <td class="shadow-none lh-1 text-end pe-0">
                <div class="button-group d-flex flex-wrap align-items-center">
                  <a
                    href="javascript:void(0)"
                    class=""
                    title="Edit"
                    data-bs-target="#detailsModal"
                    data-bs-toggle="modal"
                  >
                    <img src="../../../assets/img/icons/eye.svg" alt="Image" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    class=""
                    title="Edit"
                    data-bs-target="#createModal"
                    data-bs-toggle="modal"
                  >
                    <img src="../../../assets/img/icons/edit.svg" alt="Image" />
                  </a>
                  <a
                    class="delete-btn"
                    data-bs-toggle="offcanvas"
                    href="#deletePopup"
                    role="button"
                    aria-controls="deletePopup"
                  >
                    <img
                      src="../../../assets/img/icons/close.svg"
                      alt="Image"
                    />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td class="shadow-none fw-normal text-black title ps-0">
                <div class="d-flex product-item">
                  <div class="form-check checkbox me-25">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="test_5"
                    />
                    <label class="form-check-label" for="test_5"> </label>
                  </div>
                  <img
                    src="../../../assets/img/users/user-4.webp"
                    alt="Image"
                  />
                </div>
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                Jhon
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                Smith
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                Jhon S.
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                jhon123@gmail.com
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                983 345 2344
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                <span class="badge badge-success fs-14 fw-medium">Active</span>
              </td>
              <td class="shadow-none lh-1 text-end pe-0">
                <div class="button-group d-flex flex-wrap align-items-center">
                  <a
                    href="javascript:void(0)"
                    class=""
                    title="Edit"
                    data-bs-target="#detailsModal"
                    data-bs-toggle="modal"
                  >
                    <img src="../../../assets/img/icons/eye.svg" alt="Image" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    class=""
                    title="Edit"
                    data-bs-target="#createModal"
                    data-bs-toggle="modal"
                  >
                    <img src="../../../assets/img/icons/edit.svg" alt="Image" />
                  </a>
                  <a
                    class="delete-btn"
                    data-bs-toggle="offcanvas"
                    href="#deletePopup"
                    role="button"
                    aria-controls="deletePopup"
                  >
                    <img
                      src="../../../assets/img/icons/close.svg"
                      alt="Image"
                    />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td class="shadow-none fw-normal text-black title ps-0">
                <div class="d-flex product-item">
                  <div class="form-check checkbox me-25">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="test_6"
                    />
                    <label class="form-check-label" for="test_6"> </label>
                  </div>
                  <img
                    src="../../../assets/img/users/user-5.webp"
                    alt="Image"
                  />
                </div>
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                Pitter
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                Parker
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                Pitter P.
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                pitter 432@gmail.com
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                876 232 1212
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                <span class="badge badge-success fs-14 fw-medium">Active</span>
              </td>
              <td class="shadow-none lh-1 text-end pe-0">
                <div class="button-group d-flex flex-wrap align-items-center">
                  <a
                    href="javascript:void(0)"
                    class=""
                    title="Edit"
                    data-bs-target="#detailsModal"
                    data-bs-toggle="modal"
                  >
                    <img src="../../../assets/img/icons/eye.svg" alt="Image" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    class=""
                    title="Edit"
                    data-bs-target="#createModal"
                    data-bs-toggle="modal"
                  >
                    <img src="../../../assets/img/icons/edit.svg" alt="Image" />
                  </a>
                  <a
                    class="delete-btn"
                    data-bs-toggle="offcanvas"
                    href="#deletePopup"
                    role="button"
                    aria-controls="deletePopup"
                  >
                    <img
                      src="../../../assets/img/icons/close.svg"
                      alt="Image"
                    />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td class="shadow-none fw-normal text-black title ps-0">
                <div class="d-flex product-item">
                  <div class="form-check checkbox me-25">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="test_7"
                    />
                    <label class="form-check-label" for="test_7"> </label>
                  </div>
                  <img
                    src="../../../assets/img/users/user-6.webp"
                    alt="Image"
                  />
                </div>
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                Henry
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                Piter
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                Henry P.
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                henry454@gmail.com
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                898 1234 5456
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                <span class="badge badge-danger fs-14 fw-medium">Active</span>
              </td>
              <td class="shadow-none lh-1 text-end pe-0">
                <div class="button-group d-flex flex-wrap align-items-center">
                  <a
                    href="javascript:void(0)"
                    class=""
                    title="Edit"
                    data-bs-target="#detailsModal"
                    data-bs-toggle="modal"
                  >
                    <img src="../../../assets/img/icons/eye.svg" alt="Image" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    class=""
                    title="Edit"
                    data-bs-target="#createModal"
                    data-bs-toggle="modal"
                  >
                    <img src="../../../assets/img/icons/edit.svg" alt="Image" />
                  </a>
                  <a
                    class="delete-btn"
                    data-bs-toggle="offcanvas"
                    href="#deletePopup"
                    role="button"
                    aria-controls="deletePopup"
                  >
                    <img
                      src="../../../assets/img/icons/close.svg"
                      alt="Image"
                    />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="row pb-45 align-items-center">
    <div class="col-sm-6">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-start page-unit"
      >
        <span class="fs-13">Showing product per page</span>
        <select class="text-title border-0 fs-14 bg-transparent">
          <option value="0">10</option>
          <option value="1">20</option>
          <option value="2">30</option>
        </select>
      </div>
    </div>
    <div class="col-sm-6 text-sm-end text-center">
      <ul class="page-nav list-style">
        <li>
          <a href="#">
            <img
              src="../../../assets/img/icons/left-arrow-purple.svg"
              alt="Image"
            />
          </a>
        </li>
        <li><a href="#" class="active">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li>
          <a href="#">
            <img
              src="../../../assets/img/icons/right-arrow-purple.svg"
              alt="Image"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserList",
};
</script>