<template>
	<div class="container-fuild nav-bar">
		<div class="row ">
			<div class="col-3">
				<slot name="left"></slot>
			</div>
			<div class="col-6">
				<slot name="center"></slot>
			</div>
			<div class="col-3">
				<slot name="right"></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'NavBar'
	}
</script>

<style scoped>
	.nav-bar{
		height: 44px;
		line-height: 44px;
		background: #ff5a86;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		box-shadow: 0px 1px 1px rgba(100, 100, 100, .1);
	}
	.nav-bar .row .col-6{
		text-align: center;
		color: #f5f5f5;
	}
</style>
