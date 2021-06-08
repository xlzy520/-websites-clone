<template>
  <footer class="site-footer text-light">
    <div class="container">
      <div class="site-footer-inner">
        <div class="brand footer-brand">
          <logo></logo>
        </div>
        <ul class="footer-links list-reset">
          <li>
            <a href="http://zjinh.cn" target="_blank">ZJINH</a>
          </li>
          <li>
            <a href="http://blog.zjinh.cn" target="_blank">Blog</a>
          </li>
          <li>
            <a href="https://github.com/zjinh/" target="_blank">GitHub</a>
          </li>
        </ul>
        <ul class="footer-social-links list-reset">
          <li>
            项目均为学习用途，二次开发请遵守GPL协议
          </li>
        </ul>
        <div class="footer-copyright">CopyRight &copy; 2019 ZJINH </div>
      </div>
    </div>
  </footer>
</template>

<script>
import logo from './logo.vue'

export default {
  name: 'PageFooter',
  components: {
    logo,
  },
}
</script>

<style scoped>
.site-footer {
  position: relative;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px
}
.site-footer::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 259px;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIyMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgPGRlZnM+ICAgIDxwYXRoIGQ9Ik0yNjEuNyAyODYuNjgyYzQyMS40NzcgMCAxNDg4Ljk3NyAxNzYuMDc4IDE0ODguOTc3IDM5LjIzNHM0NzguNzU0LTI0OC4wNDMgNTcuMjc4LTI0OC4wNDNjLTE5OC43NDYgMC00NjguNTY2IDMuNTU1LTcxOS45NTctMTEuMjNDODA2LjI3MSA1MC4wNzYgNTQxLjkgMjcuMjI3IDM0NC45NzcgNTIuNDM4LTI3LjY2NSAxMDAuMTQ1LTE1OS43NzYgMjg2LjY4MyAyNjEuNyAyODYuNjgzeiIgaWQ9ImEiLz4gIDwvZGVmcz4gIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yODUgLTQxKSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgPG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPiAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4gICAgPC9tYXNrPiAgICA8dXNlIGZpbGw9IiM4MzhERUEiIHhsaW5rOmhyZWY9IiNhIi8+ICAgIDxwYXRoIGQ9Ik0yNDAuNzI3IDMyNi4zOTVjNDIxLjQ3NiAwIDk3Mi43NDQgMTc5Ljc4NyA5NzIuNzQ0IDQyLjk0M3MxMjkuMjg2LTE3NS43NDgtMjkyLjE5LTE3NS43NDgtMjU2LjMxNC0yMjYuNDk0LTI1Ni4zMTQtODkuNjVjMCAxMzYuODQzLTg0NS43MTcgMjIyLjQ1NS00MjQuMjQgMjIyLjQ1NXoiIGZpbGw9IiNBMEE2RUUiIG1hc2s9InVybCgjYikiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDEzNTUuMTYyIDApIi8+ICAgIDxwYXRoIGQ9Ik00NDUuNyAzODcuNjgyYzQyMS40NzcgMCA5NzIuNzQ1IDE3OS43ODcgOTcyLjc0NSA0Mi45NDNzNTc5Ljk0MS0yNTUuMjQ2IDE1OC40NjUtMjU1LjI0Ni03MDYuOTY5LTE0Ni45OTYtNzA2Ljk2OS0xMC4xNTJjMCAxMzYuODQzLTg0NS43MTcgMjIyLjQ1NS00MjQuMjQgMjIyLjQ1NXoiIGZpbGw9IiM2MjZDRDUiIG1hc2s9InVybCgjYikiLz4gIDwvZz48L3N2Zz4=");
  background-size: 1440px 259px;
  background-repeat: no-repeat
}
.site-footer a {
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
}
.site-footer a:hover, .site-footer a:active {
  color: #fff;
  text-decoration: underline
}
.site-footer-inner {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding-top: 40px;
  padding-bottom: 40px
}
.footer-brand, .footer-links, .footer-social-links, .footer-copyright {
  flex: none;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  color: #fff;
  font-size: 16px;
}
.footer-brand, .footer-links, .footer-social-links {
  margin-bottom: 24px
}
.footer-brand img{
  width: 32px;
  height: 32px;
}
.footer-links li + li, .footer-social-links li + li {
  margin-left: 16px
}
.footer-social-links li {
  display: inline-flex
}
.footer-social-links li a {
  padding: 8px
}
@media (min-width: 641px) {
  .site-footer::before {
    height: 202px
  }
  .site-footer-inner {
    justify-content: space-between
  }
  .footer-brand, .footer-links, .footer-social-links, .footer-copyright {
    flex: 50%
  }
  .footer-brand, .footer-copyright {
    justify-content: flex-start
  }
  .footer-links, .footer-social-links {
    justify-content: flex-end
  }
  .footer-links {
    order: 1;
    margin-bottom: 0
  }
}
.screen-reader-text {
  clip: rect(1px, 1px, 1px, 1px);
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  word-wrap: normal !important
}
.screen-reader-text:focus {
  border-radius: 2px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
  clip: auto !important;
  display: block;
  font-size: 13px;
  letter-spacing: 0px;
  font-weight: 700;
  line-height: 16px;
  text-transform: uppercase;
  text-decoration: none;
  background-color: #fff;
  color: #4992F0 !important;
  border: none;
  height: auto;
  left: 8px;
  padding: 16px 32px;
  top: 8px;
  width: auto;
  z-index: 100000
}
.list-reset {
  list-style: none;
  padding: 0
}
</style>
