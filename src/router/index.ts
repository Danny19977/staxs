import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import DashboardPage from "../pages/Dashboard/DashboardPage.vue";
import CreateProductsPage from "../pages/Products/CreateProductsPage.vue";
import ProductsListPage from "../pages/Products/ProductsListPage.vue";
import EditProductsPage from "../pages/Products/EditProductsPage.vue";
import PrintBarcodePage from "../pages/Products/PrintBarcodePage.vue";
import ProductDetailsPage from "../pages/Products/ProductDetailsPage.vue";
import CreateAdjustmentsPage from "../pages/Adjustments/CreateAdjustmentsPage.vue";
import AdjustmentListPage from "../pages/Adjustments/AdjustmentListPage.vue";
import EditAdjustmentPage from "../pages/Adjustments/EditAdjustmentPage.vue";
import CreateTransferPage from "../pages/Transfer/CreateTransferPage.vue";
import TransferListPage from "../pages/Transfer/TransferListPage.vue";
import EditTransferPage from "../pages/Transfer/EditTransferPage.vue";
import CreateExpensesPage from "../pages/Expenses/CreateExpensesPage.vue";
import ExpensesListPage from "../pages/Expenses/ExpensesListPage.vue";
import EditExpensesPage from "../pages/Expenses/EditExpensesPage.vue";
import ExpenseCategoryPage from "../pages/Expenses/ExpenseCategoryPage.vue";
import CreateQuotationPage from "../pages/Quotations/CreateQuotationPage.vue";
import QuotationListPage from "../pages/Quotations/QuotationListPage.vue";
import EditQuotationPage from "../pages/Quotations/EditQuotationPage.vue";
import CreatePurchasePage from "../pages/Purchases/CreatePurchasePage.vue";
import PurchaseListPage from "../pages/Purchases/PurchaseListPage.vue";
import EditPurchasePage from "../pages/Purchases/EditPurchasePage.vue";
import CreateSalesPage from "../pages/Sales/CreateSalesPage.vue";
import SalesListPage from "../pages/Sales/SalesListPage.vue";
import EditSalesPage from "../pages/Sales/EditSalesPage.vue";
import PosPage from "../pages/Sales/PosPage.vue";
import ShipmentPage from "../pages/Sales/ShipmentPage.vue";
import CreateSalesReturnPage from "../pages/SalesReturn/CreateSalesReturnPage.vue";
import SalesReturnListPage from "../pages/SalesReturn/SalesReturnListPage.vue";
import EditSalesReturnPage from "../pages/SalesReturn/EditSalesReturnPage.vue";
import CreatePurchaseReturnPage from "../pages/PurchaseReturn/CreatePurchaseReturnPage.vue";
import PurchaseReturnListPage from "../pages/PurchaseReturn/PurchaseReturnListPage.vue";
import EditPurchaseReturnPage from "../pages/PurchaseReturn/EditPurchaseReturnPage.vue";
import CustomerListPage from "../pages/People/CustomerListPage.vue";
import SupplierListPage from "../pages/People/SupplierListPage.vue";
import UserListPage from "../pages/People/UserListPage.vue";
import SystemSettingsPage from "../pages/Settings/SystemSettingsPage.vue";
import MyProfilePage from "../pages/Settings/MyProfilePage.vue";
import GroupPermissionPage from "../pages/Settings/GroupPermissionPage.vue";
import CreateGroupPermissionPage from "../pages/Settings/CreateGroupPermissionPage.vue";
import EditGroupPermissionPage from "../pages/Settings/EditGroupPermissionPage.vue";
import WarehousePage from "../pages/Settings/WarehousePage.vue";
import CategoryPage from "../pages/Settings/CategoryPage.vue";
import BrandListPage from "../pages/Settings/BrandListPage.vue";
import CurrncyListPage from "../pages/Settings/CurrncyListPage.vue";
import UnitListPage from "../pages/Settings/UnitListPage.vue";
import BackupPage from "../pages/Settings/BackupPage.vue";
import PurchaseReportPage from "../pages/Reports/PurchaseReportPage.vue";
import PurchasePaymentReportPage from "../pages/Reports/PurchasePaymentReportPage.vue";
import PurchaseReturnReportPage from "../pages/Reports/PurchaseReturnReportPage.vue";
import SalesReportPage from "../pages/Reports/SalesReportPage.vue";
import SalesPaymentReportPage from "../pages/Reports/SalesPaymentReportPage.vue";
import SalesReturnReportPage from "../pages/Reports/SalesReturnReportPage.vue";
import ProductQuantityAlertPage from "../pages/Reports/ProductQuantityAlertPage.vue";
import ProfitLossPage from "../pages/Reports/ProfitLossPage.vue";
import ProductReportPage from "../pages/Reports/ProductReportPage.vue";
import StockReportPage from "../pages/Reports/StockReportPage.vue";
import StockReportDetailsPage from "../pages/Reports/StockReportDetailsPage.vue";
import WarehouseReportPage from "../pages/Reports/WarehouseReportPage.vue";
import CustomerReportPage from "../pages/Reports/CustomerReportPage.vue";
import SupplierReportPage from "../pages/Reports/SupplierReportPage.vue";
import UserReportPage from "../pages/Reports/UserReportPage.vue";
import LandingPage from "../pages/BestElectronicsShop/LandingPage.vue";
import ShopRightSidebarPage from "../pages/BestElectronicsShop/ShopRightSidebarPage.vue";
import ShopLeftSidebarPage from "../pages/BestElectronicsShop/ShopLeftSidebarPage.vue";
import ShopGridPage from "../pages/BestElectronicsShop/ShopGridPage.vue";
import ShopDetailsPage from "../pages/BestElectronicsShop/ShopDetailsPage.vue";
import CartPage from "../pages/BestElectronicsShop/CartPage.vue";
import WishlistPage from "../pages/BestElectronicsShop/WishlistPage.vue";
import CheckoutPage from "../pages/BestElectronicsShop/CheckoutPage.vue";
import LoginPage from "../pages/BestElectronicsShop/LoginPage.vue";
import TermsConditionsPage from "../pages/BestElectronicsShop/TermsConditionsPage.vue";
import OfferPage from "../pages/BestElectronicsShop/OfferPage.vue";
import FaqPage from "../pages/BestElectronicsShop/FaqPage.vue";
import ContactPage from "../pages/BestElectronicsShop/ContactPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "DashboardPage",
    component: DashboardPage,
  },
  {
    path: "/create-product",
    name: "CreateProductsPage",
    component: CreateProductsPage,
  },
  {
    path: "/product-list",
    name: "ProductsListPage",
    component: ProductsListPage,
  },
  {
    path: "/edit-product",
    name: "EditProductsPage",
    component: EditProductsPage,
  },
  {
    path: "/product-details",
    name: "ProductDetailsPage",
    component: ProductDetailsPage,
  },
  {
    path: "/print-barcode",
    name: "PrintBarcodePage",
    component: PrintBarcodePage,
  },
  {
    path: "/create-adjustment",
    name: "CreateAdjustmentsPage",
    component: CreateAdjustmentsPage,
  },
  {
    path: "/adjustment-list",
    name: "AdjustmentListPage",
    component: AdjustmentListPage,
  },
  {
    path: "/edit-adjustment",
    name: "EditAdjustmentPage",
    component: EditAdjustmentPage,
  },
  {
    path: "/create-transfer",
    name: "CreateTransferPage",
    component: CreateTransferPage,
  },
  {
    path: "/transfer-list",
    name: "TransferListPage",
    component: TransferListPage,
  },
  {
    path: "/edit-transfer",
    name: "EditTransferPage",
    component: EditTransferPage,
  },
  {
    path: "/create-expense",
    name: "CreateExpensesPage",
    component: CreateExpensesPage,
  },
  {
    path: "/expense-list",
    name: "ExpensesListPage",
    component: ExpensesListPage,
  },
  {
    path: "/edit-expense",
    name: "EditExpensesPage",
    component: EditExpensesPage,
  },
  {
    path: "/expense-category",
    name: "ExpenseCategoryPage",
    component: ExpenseCategoryPage,
  },
  {
    path: "/create-quotation",
    name: "CreateQuotationPage",
    component: CreateQuotationPage,
  },
  {
    path: "/quotation-list",
    name: "QuotationListPage",
    component: QuotationListPage,
  },
  {
    path: "/edit-quotation",
    name: "EditQuotationPage",
    component: EditQuotationPage,
  },
  {
    path: "/create-purchase",
    name: "CreatePurchasePage",
    component: CreatePurchasePage,
  },
  {
    path: "/purchase-list",
    name: "PurchaseListPage",
    component: PurchaseListPage,
  },
  {
    path: "/edit-purchase",
    name: "EditPurchasePage",
    component: EditPurchasePage,
  },
  {
    path: "/create-sales",
    name: "CreateSalesPage",
    component: CreateSalesPage,
  },
  {
    path: "/sales-list",
    name: "SalesListPage",
    component: SalesListPage,
  },
  {
    path: "/edit-sales",
    name: "EditSalesPage",
    component: EditSalesPage,
  },
  {
    path: "/pos",
    name: "PosPage",
    component: PosPage,
  },
  {
    path: "/shipment-list",
    name: "ShipmentPage",
    component: ShipmentPage,
  },
  {
    path: "/create-sales-return",
    name: "CreateSalesReturnPage",
    component: CreateSalesReturnPage,
  },
  {
    path: "/sales-return-list",
    name: "SalesReturnListPage",
    component: SalesReturnListPage,
  },
  {
    path: "/edit-sales-return",
    name: "EditSalesReturnPage",
    component: EditSalesReturnPage,
  },
  {
    path: "/create-purchase-return",
    name: "CreatePurchaseReturnPage",
    component: CreatePurchaseReturnPage,
  },
  {
    path: "/purchase-return-list",
    name: "PurchaseReturnListPage",
    component: PurchaseReturnListPage,
  },
  {
    path: "/edit-purchase-return",
    name: "EditPurchaseReturnPage",
    component: EditPurchaseReturnPage,
  },
  {
    path: "/customer-list",
    name: "CustomerListPage",
    component: CustomerListPage,
  },
  {
    path: "/supplier-list",
    name: "SupplierListPage",
    component: SupplierListPage,
  },
  {
    path: "/user-list",
    name: "UserListPage",
    component: UserListPage,
  },
  {
    path: "/system-settings",
    name: "SystemSettingsPage",
    component: SystemSettingsPage,
  },
  {
    path: "/my-profile",
    name: "MyProfilePage",
    component: MyProfilePage,
  },
  {
    path: "/group-permission",
    name: "GroupPermissionPage",
    component: GroupPermissionPage,
  },
  {
    path: "/create-group-permission",
    name: "CreateGroupPermissionPage",
    component: CreateGroupPermissionPage,
  },
  {
    path: "/edit-group-permission",
    name: "EditGroupPermissionPage",
    component: EditGroupPermissionPage,
  },
  {
    path: "/warehouse-list",
    name: "WarehousePage",
    component: WarehousePage,
  },
  {
    path: "/category-list",
    name: "CategoryPage",
    component: CategoryPage,
  },
  {
    path: "/brand-list",
    name: "BrandListPage",
    component: BrandListPage,
  },
  {
    path: "/currency-list",
    name: "CurrncyListPage",
    component: CurrncyListPage,
  },
  {
    path: "/unit-list",
    name: "UnitListPage",
    component: UnitListPage,
  },
  {
    path: "/backup",
    name: "BackupPage",
    component: BackupPage,
  },
  {
    path: "/purchase-report",
    name: "PurchaseReportPage",
    component: PurchaseReportPage,
  },
  {
    path: "/purchase-payment-report",
    name: "PurchasePaymentReportPage",
    component: PurchasePaymentReportPage,
  },
  {
    path: "/purchase-return-report",
    name: "PurchaseReturnReportPage",
    component: PurchaseReturnReportPage,
  },
  {
    path: "/sales-report",
    name: "SalesReportPage",
    component: SalesReportPage,
  },
  {
    path: "/sales-payment-report",
    name: "SalesPaymentReportPage",
    component: SalesPaymentReportPage,
  },
  {
    path: "/sales-return-report",
    name: "SalesReturnReportPage",
    component: SalesReturnReportPage,
  },
  {
    path: "/product-quantity-alert",
    name: "ProductQuantityAlertPage",
    component: ProductQuantityAlertPage,
  },
  {
    path: "/profit-loss",
    name: "ProfitLossPage",
    component: ProfitLossPage,
  },
  {
    path: "/product-report",
    name: "ProductReportPage",
    component: ProductReportPage,
  },
  {
    path: "/stock-report",
    name: "StockReportPage",
    component: StockReportPage,
  },
  {
    path: "/stock-report-details",
    name: "StockReportDetailsPage",
    component: StockReportDetailsPage,
  },
  {
    path: "/warehouse-report",
    name: "WarehouseReportPage",
    component: WarehouseReportPage,
  },
  {
    path: "/customer-report",
    name: "CustomerReportPage",
    component: CustomerReportPage,
  },
  {
    path: "/supplier-report",
    name: "SupplierReportPage",
    component: SupplierReportPage,
  },
  {
    path: "/user-report",
    name: "UserReportPage",
    component: UserReportPage,
  },
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/shop-right-sidebar", name: "ShopRightSidebarPage", component: ShopRightSidebarPage },
  { path: "/shop-left-sidebar", name: "ShopLeftSidebarPage", component: ShopLeftSidebarPage },
  { path: "/shop-grid", name: "ShopGridPage", component: ShopGridPage },
  { path: "/shop-details", name: "ShopDetailsPage", component: ShopDetailsPage },
  { path: "/cart", name: "CartPage", component: CartPage },
  { path: "/wishlist", name: "WishlistPage", component: WishlistPage },
  { path: "/checkout", name: "CheckoutPage", component: CheckoutPage },
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/terms-conditions", name: "TermsConditionsPage", component: TermsConditionsPage },
  { path: "/offers", name: "OfferPage", component: OfferPage },
  { path: "/faq", name: "FaqPage", component: FaqPage },
  { path: "/contact", name: "ContactPage", component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;