<template>
  <div class="profile-dropdown">
    <button
      class="dropdown-toggle text-start text-black-emphasis d-flex align-items-center p-0 position-relative bg-transparent border-0 transition lh-1"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <img src="../../../assets/img/admin.webp" alt="admin" />
      <span class="md-none">
        <span class="d-block fw-bold text-title">Andrew Smith</span>
        <span class="text-paragraph fs-14">Admin</span>
      </span>
    </button>
    <div class="dropdown-menu top-1 shadow-none border-0">
      <ul class="list-style">
        <li class="fs-14 d-block transition">
          <router-link to="/my-profile" class="d-block">
            My Profile
          </router-link>
        </li>
        <li class="fs-14 d-block transition">
          <router-link to="/system-settings" class="d-block">
            Settings
          </router-link>
        </li>
        <li class="fs-14 d-block transition">
          <router-link to="/login" class="d-block"> Logout </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileDropdown",
};
</script>

<style lang="scss" scoped>
.profile-dropdown {
  img {
    border-radius: 5px;
    margin-right: 10px;
  }
  .dropdown-toggle {
    &:after {
      display: none;
    }
  }
  span {
    &:nth-child(1) {
      margin-bottom: 5px;
    }
    &:nth-child(2) {
      color: #8a939b;
    }
  }
  .dropdown-menu {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.15) !important;
    padding: 14px 20px;
    top: 20px !important;
    ul {
      li {
        margin-bottom: 7px;
        padding-bottom: 7px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.03);
        &:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }
        a {
          &:hover {
            color: var(--secondaryColor);
            padding-left: 5px;
          }
        }
      }
    }
  }
}
</style>