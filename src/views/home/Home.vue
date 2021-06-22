<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
     <div class="seize-a-seat"></div>
    <home-swiper :banners='banners'></home-swiper>
    <recom-mends :recommends='recommends'></recom-mends>
  </div>

</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from './childComps/HomeSwiper';
import RecomMends from './childComps/RecomMends'
import {getHomeMultidata} from 'network/home';
export default {
  components: {
    NavBar,
    HomeSwiper,
    RecomMends

  },
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
};
</script>

<style>

.home-nav {
  background: var(--color-tint);
  color: #fff;
  z-index: 1;
}
.seize-a-seat {
  height: 44px;
}

</style>
