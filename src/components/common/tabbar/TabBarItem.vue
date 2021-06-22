<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activestyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      // isActive: true
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !==-1
    },
    activestyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  background-color: #f6f6f6;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
.active{
  color: red;
}
</style>
