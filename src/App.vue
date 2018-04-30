<template>
	<div id="app">
		<router-view></router-view>
		<tab></tab>
	</div>
</template>

<script>
import Tab from "components/tabbar/tabbar"
export default({
	components:{
		Tab
	}
})
</script>

<style scoped lang="stylus">
	 @import "common/stylus/variable"

	 
</style>