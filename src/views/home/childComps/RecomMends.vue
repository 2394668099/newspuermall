<template>
  <div>
    <div class="recommends">
      <div
        v-for="(item, index) in recommends"
        :key="index"
        class="recommends-item"
      >
        <a :href="item.link">
          <img :src="item.image" alt="" />
          <p>{{ item.title }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecomMends",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommends {
  display: flex;
  padding: 10px 0px 20px;
  border-bottom: 8px solid #eee;
}
.recommends-item {
  flex: 1;
  text-align: center;
}
.recommends-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
