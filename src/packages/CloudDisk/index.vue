<template>
  <router-view />
</template>

<script>

export default {
  data() {
    return {

    }
  },
}
</script>

<style>
body, html {
  height: 100%;
  font-size: 1rem;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  background: none!important;
  color: #5b6f82;
}

#app {
  width: 100%;
  height: 100%;
  position: relative
}

.container,.container-sm {
  width: 100%;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px
}

@media (min-width: 481px) {
  .container,.container-sm {
    padding-left:24px;
    padding-right: 24px
  }
}

.container {
  max-width: 1128px
}

.container-sm {
  max-width: 848px
}

.container .container-sm {
  max-width: 800px;
  padding-left: 0;
  padding-right: 0
}

.boxed-container {
  max-width: 1440px;
  margin: 0 auto;
  -webkit-box-shadow: 0 16px 48px #e3e7eb;
  box-shadow: 0 16px 48px #e3e7eb
}

@supports (-ms-ime-align:auto) {
  .boxed-container {
    -webkit-box-shadow: 0 16px 48px rgba(32,43,54,.12);
    box-shadow: 0 16px 48px rgba(32,43,54,.12)
  }
}
</style>
