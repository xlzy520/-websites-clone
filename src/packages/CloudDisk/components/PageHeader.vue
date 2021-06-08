<template>
  <header class="site-header">
    <div class="container">
      <div class="site-header-inner">
        <div class="header-brand">
          <logo></logo>
          <span>CloudDisk</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import logo from './logo.vue'

export default {
  name: 'PageHeader',
  components: {
    logo,
  },
}
</script>

<style scoped>
.site-header {
  position: relative;
  padding: 24px 0
}

.site-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 16%;
  width: 84%;
  height: 500px;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4MCIgaGVpZ2h0PSI2NTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+ICAgIDxwYXRoIGQ9Ik03MzEuMjA3IDY0OS44MDJDOTM1LjQ4NCA2NDIuMTQgMTQ4MCAzMzcuMzI1IDE0ODAgMTgwLjg4OGMwLTE1Ni40MzgtMzA5Ljc0NC0zNi4wNTUtNzIwLTM2LjA1NVMwLTE3NC40ODMgMCAxMzUuMTQ0YzAgMzA5LjYyNyA1MjYuOTMgNTIyLjMyIDczMS4yMDcgNTE0LjY1OHoiIGZpbGw9IiNGNkY4RkEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
  background-size: 1140px 500px;
  background-repeat: no-repeat
}

.site-header-inner {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center
}
.header-brand{
  display: flex;
  align-items: center;
}
.header-brand img{
  width: 40px;
  height: 40px;
  border-radius: 100%;
}
.header-brand span{
  margin-left: 10px;
}
@media (min-width: 641px) {
  .site-header {
    position: relative;
    padding: 24px 0
  }

  .site-header::before {
    top: -50%;
    left: 20%;
    width: 80%;
    height: 651px;
    background-size: 1480px 651px
  }
}
</style>
