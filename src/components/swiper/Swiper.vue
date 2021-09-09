<template>
<!-- <div v-if="banners"> -->
<van-swipe :autoplay="3000">
  <van-swipe-item v-for="(item, index) in banners" :key="index">
    <a :href="item.link">
      <img :src="item.image" @load="imgLoad" alt=""/>
    </a>
  </van-swipe-item>
</van-swipe>
<!-- </div> -->

</template>

<script>
// var aaa = document.getElementsByTagName('van-swipe-item').length
// console.log
export default {
    name:'Swiper',
    props:{
      banners:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    data(){
      return{
        isLoad:false,
      }
    },
    methods:{
      imgLoad(){
        if(!this.isLoad){
          this.$emit('imgLoadOver')
          this.isLoad = true
        }
      }
    },
}

</script>

<style scoped>
.home-swiper{
    background-color:gray;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 250px;
    text-align: center;
    background-color: #39a9ed;
  }
  .van-swipe__track{
    width: 100% !important;
  }
  .van-swipe-item img{
    width: 100%;
    height: 100%;
  }
</style>