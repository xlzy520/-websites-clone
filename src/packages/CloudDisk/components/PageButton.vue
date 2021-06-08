<template>
  <button class="button button-primary button-shadow">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'PageButton',
}
</script>

<style scoped>
.button {
  display: inline-flex;
  font-size: 13px;
  letter-spacing: 0px;
  font-weight: 700;
  line-height: 16px;
  text-transform: uppercase;
  text-decoration: none !important;
  background-color: #fff;
  color: #4992F0 !important;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  justify-content: center;
  padding: 16px 32px;
  height: 48px;
  text-align: center;
  white-space: nowrap
}
.button:active {
  outline: 0
}
.button::before {
  border-radius: 2px
}
.button-shadow {
  position: relative
}
.button-shadow::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: 0 8px 24px rgba(32, 43, 54, 0.12);
  mix-blend-mode: multiply;
  transition: box-shadow .15s ease
}
.button-shadow:hover::before {
  box-shadow: 0 8px 24px rgba(32, 43, 54, 0.25)
}
.button-primary {
  color: #fff !important;
  transition: background .15s ease
}
.button-primary {
  background: #2e83ef;
  background: linear-gradient(65deg, #1274ED 0, #4992F0 100%)
}
.button-primary:hover {
  background: #3386ef;
  background: linear-gradient(65deg, #1777ed 0, #4e95f0 100%)
}
</style>
