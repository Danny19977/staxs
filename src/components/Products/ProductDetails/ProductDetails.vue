<template>
  <div class="card border-0 shadow-none rounded-1 mb-40">
    <div class="card-body p-xl-60">
      <div class="row gx-xxl-6">
        <div class="col-xl-4 col-lg-5 pe-xxl-1">
          <div class="single-product-img">
            <img
              src="../../../assets/img/products/single-product.webp"
              alt="Product"
            />
          </div>
        </div>
        <div class="col-xl-8 col-lg-7 ps-xxl-6">
          <table class="table single-product-table mb-60">
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Single</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Product Code</th>
                <td>3214578</td>
              </tr>
              <tr>
                <th scope="row">Product name</th>
                <td>Camera</td>
              </tr>
              <tr>
                <th scope="row">Category</th>
                <td>Electronics</td>
              </tr>
              <tr>
                <th scope="row">Brand</th>
                <td>Nikon</td>
              </tr>
              <tr>
                <th scope="row">Price</th>
                <td>$120.00</td>
              </tr>
              <tr>
                <th scope="row">Cost</th>
                <td>$150.00</td>
              </tr>
              <tr>
                <th scope="row">Unit</th>
                <td>pc</td>
              </tr>
              <tr>
                <th scope="row">Tax</th>
                <td>2.5%</td>
              </tr>
              <tr>
                <th scope="row">Stock Alert</th>
                <td>
                  <span class="badge badge-outline-green fs-14 fw-semibold"
                    >20</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <table class="table single-product-table style-two mb-0">
            <thead>
              <tr>
                <th scope="col">STOCK</th>
                <th scope="col">QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Warehouse 01</th>
                <td>123px</td>
              </tr>
              <tr>
                <th scope="row">Warehouse 02</th>
                <td>72pc</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
};
</script>