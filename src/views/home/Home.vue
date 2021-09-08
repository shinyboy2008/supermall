<template>
  <div id="Home">
    <!-- 头部导航栏 -->
    <div class="home-nav">
			<nav-bar>
			  <div slot="center">购物街</div>
			</nav-bar>
		</div>
    <!-- 轮播图 -->
  <swiper :banners="banners" />
  <!-- 数据展示 -->
  <recommendview :recommends="recommends"></recommendview>
  <!-- 导航控制 -->
  <div class="tab-content">
    <tab-control :titles="titles" @itemClick="itemClick"></tab-control>
  </div>
  <!-- 商品列表 -->
  <good-list :goods="goods[currentTitles].list"/>
  <!--  -->
  <!--  -->
  <div style="width:100%;height:5000px;"></div>
  <!--  -->
  </div>

</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";
import Swiper from '../../components/swiper/Swiper.vue'
import Recommendview from '../../components/RecommendView/recommendView.vue'
import TabControl from '../../components/tabControl/TabControl.vue'
import GoodList from '../../components/goods/GoodList.vue'
import { getHomeMutilData } from '../../network/home';
export default {
  name: "Home",
  components: {
    NavBar,
		Swiper,
    Recommendview,
    TabControl,
    GoodList
  },
  data() {
    return {
      // result: null
      banners: [],
      recommends: [],
      titles:['流行','新款','精选'],
      goods:{
        pop:{page:0,list:[]},
        news:{page:0,list:[]},
        sell:{page:0,list:[]}
      },
      currentTitles:'pop',
    };
  },
  created() {
  this.getHomeMutilData();
  },
  methods:{
    // 网络请求的相关办法
     getHomeMutilData(){
     getHomeMutilData().then(res=>{
     this.banners = res.data.banner.list;    
     this.recommends = res.data.recommend.list;
   })
   },
    itemClick(index){
      // this.$refs.tabControl.currentIndex = index
    }
  }
}
</script>

<style>
.home-nav{
	width: 100%;
	height: 44px;
}
.tab-content{
  top: 44px;
  position: sticky;
}
</style>