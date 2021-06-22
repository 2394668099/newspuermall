<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.nav-bar {
  height: 44px;
  line-height: 44px;
  display: flex;
  position: fixed;
  top: 0%;
  left: 0%;
  right: 0%;
  text-align: center;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1);
}
.right,
.left {
  width: 60px;

}
.center {
  flex: 1;
}
</style>
