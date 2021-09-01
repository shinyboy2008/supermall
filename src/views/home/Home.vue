<template>
  <div id="Home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
  
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";
import { getHomeMutilData } from "../../network/home";
// import Swiper from '../../components/swiper/Swiper.vue'

export default {
  name: "Home",
  components: {
    NavBar,
  },
  data() {
    return {
      // result: null
      banners: [],
      recommend: [],
    };
  },
  created() {
    // 请求多个数据
    getHomeMutilData().then((res) => {
      // this.result = res;
      this.banners = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
  },
};
</script>

<style>
.home-nav {
  width: 100%;
  /* background-color: pink; */
  color: #fff;
}
</style>
