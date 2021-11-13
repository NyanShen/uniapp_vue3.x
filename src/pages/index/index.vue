<template>
	<view class="care-box">
		<view>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		setup() {
			return {
				title: 'hello world'
			}
		},
		onLoad() {
			let self = this;
			console.log(self.$store.state.count);
			self.$miniApp.setNavigationBarColor('#000000', '#2279ea');
		},
		
		methods: {
			
		}
	}
</script>
<style scoped>

</style>