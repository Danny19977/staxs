<template>
  <MainHeader />
  <MainSidebar />
  <div
    class="main-content bg_gray d-flex flex-column transition overflow-hidden"
  >
    <StatusContent />
    <div class="chart-wrapper style-one d-flex">
      <div class="card border-0 rounded-1 mb-20">
        <div class="card-body p-xl-40">
          <h6 class="card-title fw-semiBold fs-18 mb-30">
            Top Selling Products (2023)
          </h6>
          <div class="chart-body">
            <TopSellingProductsChart />
          </div>
        </div>
      </div>
      <div class="card border-0 rounded-1 mb-20">
        <div class="card-body p-xl-40">
          <h6 class="card-title fw-semiBold fs-18 mb-30">
            This Weeks Sales & Purchases
          </h6>
          <ThisWeeksSalesPurchasesChart />
        </div>
      </div>
    </div>
    <div class="chart-wrapper style-two d-flex">
      <div class="card border-0 rounded-1 mb-20">
        <StockAlert />
      </div>
      <div class="card border-0 rounded-1 mb-20">
        <TopCustomerChart />
      </div>
    </div>
    <div class="chart-wrapper style-three d-flex flex-wrap">
      <div class="card border-0 rounded-1 mb-20">
        <SalesTargetChart />
      </div>
      <div class="card border-0 rounded-1 mb-20">
        <PaymentSentReceivedChart />
      </div>
      <div class="card border-0 shadow-none rounded-1 mb-20">
        <RecentInvoices />
      </div>
    </div>
    <div class="card border-0 shadow-none rounded-1 mb-40">
      <RecentSales />
    </div>

    <div class="flex-grow-1"></div>
    <MainFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MainHeader from "../../components/Layouts/MainHeader.vue";
import MainSidebar from "../../components/Layouts/MainSidebar.vue";
import StatusContent from "../../components/Dashboard/StatusContent.vue";
import TopSellingProductsChart from "../../components/Dashboard/TopSellingProductsChart.vue";
import ThisWeeksSalesPurchasesChart from "../../components/Dashboard/ThisWeeksSalesPurchasesChart.vue";
import StockAlert from "../../components/Dashboard/StockAlert.vue";
import TopCustomerChart from "../../components/Dashboard/TopCustomerChart.vue";
import SalesTargetChart from "../../components/Dashboard/SalesTargetChart.vue";
import PaymentSentReceivedChart from "../../components/Dashboard/PaymentSentReceivedChart.vue";
import RecentInvoices from "../../components/Dashboard/RecentInvoices.vue";
import RecentSales from "../../components/Dashboard/RecentSales.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "DashboardPage",
  components: {
    MainHeader,
    MainSidebar,
    StatusContent,
    TopSellingProductsChart,
    ThisWeeksSalesPurchasesChart,
    StockAlert,
    TopCustomerChart,
    SalesTargetChart,
    PaymentSentReceivedChart,
    RecentInvoices,
    RecentSales,
    MainFooter,
  },
});
</script>

<style lang="scss" scoped>
.chart-wrapper {
  margin: 0 -10px;
  .card {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>