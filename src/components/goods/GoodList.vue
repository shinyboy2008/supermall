<template>
    <div class="good-list">
        <div v-for="(item,index) in goods" class="good-item" :key="index">
            <img :v-lazy="item.img || item.image || item.show.img ">
        </div>
    </div>
</template>

<script>
export default{
    name:"GoodList",
    props:{
        goods:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    // methods:{

    // }
}
</script>

<style>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.good-item{
    width: 47%;
}
.item-img{
    width: 100%;
    height: 275px;
    border-radius: 6px;
}
.item-info{
    display: flex;
    align-items: center;
    justify-content: center;  
}
</style>
