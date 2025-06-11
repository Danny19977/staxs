<template>
  <footer class="footer-wrap">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="copyright-text">
            <span class="text-white text-bold">&copy; Pyle</span> is proudly
            owned by
            <a href="https://hibootstrap.com/" class="text-white text-bold">
              HiBootstrap
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <p class="text-offwhite mb-0 text-md-end">
            <span class="text-white text-bold">PYLE</span>
            - Ultimate Inventory With
            <span class="text-white text-bold">POS</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>

<style lang="scss" scoped>
.footer-wrap {
  background-color: #161e2c;
  padding: {
    top: 26px;
    bottom: 26px;
  }
  .copyright-text {
    color: var(--offwhiteColor);
    a {
      &:hover {
        color: var(--secondaryColor) !important;
      }
    }
  }
}
@media only screen and (max-width: 767px) {
  .footer-wrap {
    padding: {
      top: 18px;
      bottom: 18px;
    }
    .copyright-text {
      margin-bottom: 8px;
    }
    .copyright-text,
    p {
      text-align: center;
      font-size: 14px;
    }
  }
}
</style>