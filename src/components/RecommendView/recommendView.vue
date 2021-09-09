<template>
    <div class="recommends">
        <div v-for="(item,index) in recommends" class="recommend" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
            <div>{{item.title}}</div>
        </div>
    </div>
</template>

<script>
export default{
    name:'recommendview',
    props:{
        recommends:{
            type:Array,
            default(){
                return[];
            }
        }
    }
}
</script>
<style scoped>
.recommends{
  width: 100%;
  display: flex;
  text-align: center;
  border-bottom: 8px solid #eee;  
}
.recommend{
    flex: 1;
    margin: 12px 0;
}
.recommends .recommend img{
    width: 70px;
    height: 70px;
}
</style>