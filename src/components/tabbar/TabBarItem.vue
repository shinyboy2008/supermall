<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="isActive">
			<slot name="item-icon"></slot>
		</div>
		<div v-else>
			<slot name="item-icon-active"></slot>
		</div>
		<div :style="activeStyle">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default{
		name:"TabBarItem",
		props:{
			path: String,
			activeColor:{
				type:String,
				default:'#ff5a86'
			}
		},
		data(){
		 return{
			 // isActive: false
		 }
		},
		methods:{
			itemClick(){
				this.$router.replace(this.path).catch(() => {})//加上.catch(()=>{})后多次点击不会出现报错
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path) !== -1? false : true
			},
			activeStyle(){
				return this.isActive ? {} :{color:this.activeColor}
			}
		}
	}
</script>

<style>
	.tab-bar-item{
		flex: 1;
		text-align: center;
		height: 49px;
		box-shadow: 0px -3px 1px rgba(100,100,100,.1);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		font-size: 14px;
	}
	.tab-bar-item img{
		width: 24px;
		height: 24px;
	}
	.active {
		color: red;
	}
</style>
