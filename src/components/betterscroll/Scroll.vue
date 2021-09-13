<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
name:"scroll",
props:{
    probeType:{
        type:Number,
        default:0
    },
    pullUpLoad:{
        type: Boolean,
        default:false
    }
},
data(){
    return {
        scroll: null,
        message:'哈哈哈'
        }
},
mounted(){
// 1.创建BScroll对象
this.scroll = new BScroll(this.$refs.wrapper,{
    click:true,
    probeType:this.probeType,
    pullUpLoad:this.pullUpLoad
})
// 监听滚动的位置
this.scroll.on('scroll',(position)=>{
    // console.log(position)
    this.$emit('scroll',position)
})
// 监听上拉事件
this.scroll.on('pullingUp',()=>{
    this.$emit('pullingUp')
})
},
updated(){
  this.scroll=new BScroll(this.$refs.wrapper,{
    observeDOM:true,
    click:true,
    probeType:this.probeType,
    pullUpLoad:this.pullUpLoad
    })
},
methods:{
    scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
    },
    finishPullUp() {
        this.scroll.finishPullUp()
      },
      refresh(){
          this.scroll. refresh()
          console.log(this.scroll);
      },
       getScrollY(){
           return this.scroll?this.scroll.y:0
       }
}    
}
</script>

<style scoped>

</style>