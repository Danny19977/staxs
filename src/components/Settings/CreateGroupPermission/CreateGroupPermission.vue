<template>
  <div class="card border-0 shadow-none rounded-1 mb-40">
    <div class="card-body p-xl-40">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group mb-30">
            <label class="d-block fs-14 text-black mb-2">Role</label>
            <input
              type="text"
              class="w-100 d-block shadow-none fs-14 bg_ash rounded-1 text-title"
              placeholder="Enter Role"
              required
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group mb-30">
            <label class="d-block fs-14 text-black mb-2"
              >Role Description</label
            >
            <input
              type="text"
              class="w-100 d-block shadow-none fs-14 bg_ash rounded-1 text-title"
              placeholder="Role Description"
            />
          </div>
        </div>
      </div>
      <div class="row mt-30 justify-content-center">
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="group-checkbox mb-50">
            <h6 class="fs-14 text-white lh-1 fw-medium">Users Management</h6>
            <div class="row ps-xxl-2">
              <div class="col-md-7 ps-xxl-4">
                <div class="checkbox style-four mb-30">
                  <input class="form-check-input" type="checkbox" id="test_1" />
                  <label class="form-check-label fs-14" for="test_1">
                    View
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input class="form-check-input" type="checkbox" id="test_2" />
                  <label class="form-check-label fs-14" for="test_2">
                    Create
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input class="form-check-input" type="checkbox" id="test_3" />
                  <label class="form-check-label fs-14" for="test_3">
                    View All Records Of All Users
                  </label>
                </div>
              </div>
              <div class="col-md-5">
                <div class="checkbox style-four mb-30">
                  <input class="form-check-input" type="checkbox" id="test_4" />
                  <label class="form-check-label fs-14" for="test_4">
                    Edit
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input class="form-check-input" type="checkbox" id="test_5" />
                  <label class="form-check-label fs-14" for="test_5">
                    Delete
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="group-checkbox mb-50">
            <h6 class="fs-14 text-white lh-1 fw-medium">Users Permission</h6>
            <div class="row ps-xxl-2">
              <div class="col-md-7 ps-xxl-4">
                <div class="checkbox style-four mb-30">
                  <input class="form-check-input" type="checkbox" id="test_6" />
                  <label class="form-check-label fs-14" for="test_6">
                    View
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input class="form-check-input" type="checkbox" id="test_7" />
                  <label class="form-check-label fs-14" for="test_7">
                    Create
                  </label>
                </div>
              </div>
              <div class="col-md-5">
                <div class="checkbox style-four mb-30">
                  <input class="form-check-input" type="checkbox" id="test_8" />
                  <label class="form-check-label fs-14" for="test_8">
                    Edit
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input class="form-check-input" type="checkbox" id="test_9" />
                  <label class="form-check-label fs-14" for="test_9">
                    Delete
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="group-checkbox mb-50">
            <h6 class="fs-14 text-white lh-1 fw-medium">Products</h6>
            <div class="row ps-xxl-2">
              <div class="col-md-7 ps-xxl-4">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_10"
                  />
                  <label class="form-check-label fs-14" for="test_10">
                    View
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_11"
                  />
                  <label class="form-check-label fs-14" for="test_11">
                    Create
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_12"
                  />
                  <label class="form-check-label fs-14" for="test_12">
                    Barcode
                  </label>
                </div>
              </div>
              <div class="col-md-5">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_13"
                  />
                  <label class="form-check-label fs-14" for="test_13">
                    Edit
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_14"
                  />
                  <label class="form-check-label fs-14" for="test_14">
                    Delete
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_15"
                  />
                  <label class="form-check-label fs-14" for="test_15">
                    Import Products
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="group-checkbox mb-50">
            <h6 class="fs-14 text-white lh-1 fw-medium">Adjustments</h6>
            <div class="row ps-xxl-2">
              <div class="col-md-7 ps-xxl-4">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_16"
                  />
                  <label class="form-check-label fs-14" for="test_16">
                    View
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_17"
                  />
                  <label class="form-check-label fs-14" for="test_17">
                    Create
                  </label>
                </div>
              </div>
              <div class="col-md-5">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_18"
                  />
                  <label class="form-check-label fs-14" for="test_18">
                    Edit
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_19"
                  />
                  <label class="form-check-label fs-14" for="test_19">
                    Delete
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="group-checkbox mb-50">
            <h6 class="fs-14 text-white lh-1 fw-medium">Transfer</h6>
            <div class="row ps-xxl-2">
              <div class="col-md-7 ps-xxl-4">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_20"
                  />
                  <label class="form-check-label fs-14" for="test_20">
                    View
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_21"
                  />
                  <label class="form-check-label fs-14" for="test_21">
                    Create
                  </label>
                </div>
              </div>
              <div class="col-md-5">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_22"
                  />
                  <label class="form-check-label fs-14" for="test_22">
                    Edit
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_23"
                  />
                  <label class="form-check-label fs-14" for="test_23">
                    Delete
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="group-checkbox mb-50">
            <h6 class="fs-14 text-white lh-1 fw-medium">Expenses</h6>
            <div class="row ps-xxl-2">
              <div class="col-md-7 ps-xxl-4">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_24"
                  />
                  <label class="form-check-label fs-14" for="test_24">
                    View
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_25"
                  />
                  <label class="form-check-label fs-14" for="test_25">
                    Create
                  </label>
                </div>
              </div>
              <div class="col-md-5">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_26"
                  />
                  <label class="form-check-label fs-14" for="test_26">
                    Edit
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_27"
                  />
                  <label class="form-check-label fs-14" for="test_27">
                    Delete
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="group-checkbox mb-50">
            <h6 class="fs-14 text-white lh-1 fw-medium">Sales</h6>
            <div class="row ps-xxl-2">
              <div class="col-md-7 ps-xxl-4">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_28"
                  />
                  <label class="form-check-label fs-14" for="test_28">
                    View
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_29"
                  />
                  <label class="form-check-label fs-14" for="test_29">
                    Create
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_30"
                  />
                  <label class="form-check-label fs-14" for="test_30">
                    Point Of Sales
                  </label>
                </div>
              </div>
              <div class="col-md-5">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_31"
                  />
                  <label class="form-check-label fs-14" for="test_31">
                    Edit
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_32"
                  />
                  <label class="form-check-label fs-14" for="test_32">
                    Delete
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="group-checkbox mb-50">
            <h6 class="fs-14 text-white lh-1 fw-medium">Purchase</h6>
            <div class="row ps-xxl-2">
              <div class="col-md-7 ps-xxl-4">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_33"
                  />
                  <label class="form-check-label fs-14" for="test_33">
                    View
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_34"
                  />
                  <label class="form-check-label fs-14" for="test_34">
                    Create
                  </label>
                </div>
              </div>
              <div class="col-md-5">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_35"
                  />
                  <label class="form-check-label fs-14" for="test_35">
                    Edit
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_36"
                  />
                  <label class="form-check-label fs-14" for="test_36">
                    Delete
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="group-checkbox mb-50">
            <h6 class="fs-14 text-white lh-1 fw-medium">Quotation</h6>
            <div class="row ps-xxl-2">
              <div class="col-md-7 ps-xxl-4">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_37"
                  />
                  <label class="form-check-label fs-14" for="test_37">
                    View
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_38"
                  />
                  <label class="form-check-label fs-14" for="test_38">
                    Create
                  </label>
                </div>
              </div>
              <div class="col-md-5">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_39"
                  />
                  <label class="form-check-label fs-14" for="test_39">
                    Edit
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_40"
                  />
                  <label class="form-check-label fs-14" for="test_40">
                    Delete
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="group-checkbox mb-50">
            <h6 class="fs-14 text-white lh-1 fw-medium">Sales Return</h6>
            <div class="row ps-xxl-2">
              <div class="col-md-7 ps-xxl-4">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_41"
                  />
                  <label class="form-check-label fs-14" for="test_41">
                    View
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_42"
                  />
                  <label class="form-check-label fs-14" for="test_42">
                    Create
                  </label>
                </div>
              </div>
              <div class="col-md-5">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_43"
                  />
                  <label class="form-check-label fs-14" for="test_43">
                    Edit
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_44"
                  />
                  <label class="form-check-label fs-14" for="test_44">
                    Delete
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="group-checkbox mb-50">
            <h6 class="fs-14 text-white lh-1 fw-medium">Purchase Return</h6>
            <div class="row ps-xxl-2">
              <div class="col-md-7 ps-xxl-4">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_45"
                  />
                  <label class="form-check-label fs-14" for="test_45">
                    View
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_46"
                  />
                  <label class="form-check-label fs-14" for="test_46">
                    Create
                  </label>
                </div>
              </div>
              <div class="col-md-5">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_47"
                  />
                  <label class="form-check-label fs-14" for="test_47">
                    Edit
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_48"
                  />
                  <label class="form-check-label fs-14" for="test_48">
                    Delete
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="group-checkbox mb-50">
            <h6 class="fs-14 text-white lh-1 fw-medium">Payment Status</h6>
            <div class="row ps-xxl-2">
              <div class="col-md-7 ps-xxl-4">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_49"
                  />
                  <label class="form-check-label fs-14" for="test_49">
                    View
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_50"
                  />
                  <label class="form-check-label fs-14" for="test_50">
                    Create
                  </label>
                </div>
              </div>
              <div class="col-md-5">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_51"
                  />
                  <label class="form-check-label fs-14" for="test_51">
                    Edit
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_52"
                  />
                  <label class="form-check-label fs-14" for="test_52">
                    Delete
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="group-checkbox mb-50">
            <h6 class="fs-14 text-white lh-1 fw-medium">Payment Purchase</h6>
            <div class="row ps-xxl-2">
              <div class="col-md-7 ps-xxl-4">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_53"
                  />
                  <label class="form-check-label fs-14" for="test_53">
                    View
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_54"
                  />
                  <label class="form-check-label fs-14" for="test_54">
                    Create
                  </label>
                </div>
              </div>
              <div class="col-md-5">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_55"
                  />
                  <label class="form-check-label fs-14" for="test_55">
                    Edit
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_56"
                  />
                  <label class="form-check-label fs-14" for="test_56">
                    Delete
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="group-checkbox mb-50">
            <h6 class="fs-14 text-white lh-1 fw-medium">Payment Returns</h6>
            <div class="row ps-xxl-2">
              <div class="col-md-7 ps-xxl-4">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_57"
                  />
                  <label class="form-check-label fs-14" for="test_57">
                    View
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_58"
                  />
                  <label class="form-check-label fs-14" for="test_58">
                    Create
                  </label>
                </div>
              </div>
              <div class="col-md-5">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_59"
                  />
                  <label class="form-check-label fs-14" for="test_59">
                    Edit
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_60"
                  />
                  <label class="form-check-label fs-14" for="test_60">
                    Delete
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="group-checkbox mb-50">
            <h6 class="fs-14 text-white lh-1 fw-medium">Customer List</h6>
            <div class="row ps-xxl-2">
              <div class="col-md-7 ps-xxl-4">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_61"
                  />
                  <label class="form-check-label fs-14" for="test_61">
                    View
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_62"
                  />
                  <label class="form-check-label fs-14" for="test_62">
                    Create
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_63"
                  />
                  <label class="form-check-label fs-14" for="test_63">
                    Import Customer
                  </label>
                </div>
              </div>
              <div class="col-md-5">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_64"
                  />
                  <label class="form-check-label fs-14" for="test_64">
                    Edit
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_65"
                  />
                  <label class="form-check-label fs-14" for="test_65">
                    Delete
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="group-checkbox mb-50">
            <h6 class="fs-14 text-white lh-1 fw-medium">Supplier List</h6>
            <div class="row ps-xxl-2">
              <div class="col-md-7 ps-xxl-4">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_66"
                  />
                  <label class="form-check-label fs-14" for="test_66">
                    View
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_67"
                  />
                  <label class="form-check-label fs-14" for="test_67">
                    Create
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_68"
                  />
                  <label class="form-check-label fs-14" for="test_68">
                    Import Supplies
                  </label>
                </div>
              </div>
              <div class="col-md-5">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_69"
                  />
                  <label class="form-check-label fs-14" for="test_69">
                    Edit
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_70"
                  />
                  <label class="form-check-label fs-14" for="test_70">
                    Delete
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="group-checkbox mb-50">
            <h6 class="fs-14 text-white lh-1 fw-medium">Report List</h6>
            <div class="row ps-xxl-2">
              <div class="col-md-7 ps-xxl-4">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_71"
                  />
                  <label class="form-check-label fs-14" for="test_71">
                    Reports Payment Sales
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_72"
                  />
                  <label class="form-check-label fs-14" for="test_72">
                    Reports Payment Purchases
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_73"
                  />
                  <label class="form-check-label fs-14" for="test_73">
                    Reports Sales Return Payments
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_74"
                  />
                  <label class="form-check-label fs-14" for="test_74">
                    Reports Purchases Return Payments
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_75"
                  />
                  <label class="form-check-label fs-14" for="test_75">
                    Product Quantity Alerts
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_76"
                  />
                  <label class="form-check-label fs-14" for="test_76">
                    Warehouse Stock Chart
                  </label>
                </div>
              </div>
              <div class="col-md-5">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_78"
                  />
                  <label class="form-check-label fs-14" for="test_78">
                    Customer Report
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_79"
                  />
                  <label class="form-check-label fs-14" for="test_79">
                    Profit & Loss
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_80"
                  />
                  <label class="form-check-label fs-14" for="test_80">
                    Sale Report
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_81"
                  />
                  <label class="form-check-label fs-14" for="test_81">
                    Purchase Report
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="group-checkbox mb-50">
            <h6 class="fs-14 text-white lh-1 fw-medium">System Settings</h6>
            <div class="row ps-xxl-2">
              <div class="col-md-7 ps-xxl-4">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_82"
                  />
                  <label class="form-check-label fs-14" for="test_82">
                    System Settings
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_83"
                  />
                  <label class="form-check-label fs-14" for="test_83">
                    Brand
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_84"
                  />
                  <label class="form-check-label fs-14" for="test_84">
                    Warehouse
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_85"
                  />
                  <label class="form-check-label fs-14" for="test_85">
                    Backup
                  </label>
                </div>
              </div>
              <div class="col-md-5">
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_86"
                  />
                  <label class="form-check-label fs-14" for="test_86">
                    Category
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_87"
                  />
                  <label class="form-check-label fs-14" for="test_87">
                    Currency
                  </label>
                </div>
                <div class="checkbox style-four mb-30">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="test_88"
                  />
                  <label class="form-check-label fs-14" for="test_88">
                    Unit
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="btn style-five">Change Group Permission</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateGroupPermission",
};
</script>