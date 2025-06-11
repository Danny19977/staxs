<template>
  <div class="card border-0 shadow-none rounded-1 mb-25">
    <div class="card-body p-xl-40">
      <div class="table-responsive style-three">
        <table class="table text-nowrap align-middle mb-0">
          <thead>
            <tr>
              <th scope="col" class="text-title fw-normal fs-14 pt-0 ps-0">
                <div class="form-check checkbox">
                  <input class="form-check-input" type="checkbox" id="test_1" />
                  <label class="form-check-label" for="test_1">
                    NAME
                    <img
                      class="ms-2"
                      src="../../../assets/img/icons/up-down-aroow.svg"
                      alt="Image"
                    />
                  </label>
                </div>
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
                EMAIL
                <img
                  class="ms-2"
                  src="../../../assets/img/icons/up-down-aroow.svg"
                  alt="Image"
                />
              </th>
              <th scope="col" class="text-title fw-normal fs-14 pt-0">
                COUNTRY
                <img
                  class="ms-2"
                  src="../../../assets/img/icons/up-down-aroow.svg"
                  alt="Image"
                />
              </th>
              <th scope="col" class="text-title fw-normal fs-14 pt-0">
                CITY
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
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph ps-0">
                Warehouse 01
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                990 32 64 970
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                any1994@gmail.com
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                United States
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                Los Angeles
              </td>
              <td class="shadow-none lh-1 text-end pe-0">
                <div class="button-group d-flex flex-wrap align-items-center">
                  <a
                    href="javascript:void(0)"
                    class=""
                    title="Edit"
                    data-bs-toggle="modal"
                    data-bs-target="#createModal"
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
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph ps-0">
                Warehouse 02
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                234 32 64 970
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                viki478@gmail.com
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                United States
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                New York
              </td>
              <td class="shadow-none lh-1 text-end pe-0">
                <div class="button-group d-flex flex-wrap align-items-center">
                  <a
                    href="javascript:void(0)"
                    class=""
                    title="Edit"
                    data-bs-toggle="modal"
                    data-bs-target="#createModal"
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
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph ps-0">
                Warehouse 03
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                990 32 64 235
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                jeny19@gmail.com
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                Canada
              </td>
              <td class="shadow-none lh-1 fs-14 fw-normal text-paragraph">
                Ottiya
              </td>
              <td class="shadow-none lh-1 text-end pe-0">
                <div class="button-group d-flex flex-wrap align-items-center">
                  <a
                    href="javascript:void(0)"
                    class=""
                    title="Edit"
                    data-bs-toggle="modal"
                    data-bs-target="#createModal"
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
  name: "WarehouseList",
};
</script>