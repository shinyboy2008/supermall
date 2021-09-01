<template>
	<div id="app">
		<MainTabBar></MainTabBar>
		<router-view></router-view>
	</div>
</template>

<script>
	import MainTabBar from './components/tabbar/MainTabBar.vue'
	import NavBar from './components/navbar/NavBar.vue'

	export default {
		name: 'app',
		components: {
			MainTabBar,
			NavBar
		}
	}
</script>

<style>
	@import url("assets/css/base.css");
</style>
