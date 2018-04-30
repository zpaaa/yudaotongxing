<template>
	<div class="home">
		<header>
			<img src="~common/images/logo.png"/>
	    </header>
	   	<div class="slider">
	   		<swiper :options="swiperOption">
				<swiper-slide v-for="(item,index) in imgs" :key="index">
					<img :src="item" alt="">
					<!--<img src="~common/images/01banner.jpg"/>-->
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
	   	</div>
	    
	</div>
    </template>

<script>
    export default {
        data(){
			return{
				swiperOption: {
					pagination : '.swiper-pagination',
					paginationClickable: true,
					autoplay :2000,
					autoplayDisableOnInteraction: false,
					loop: true,
				},
				imgs:["/static/images/01banner.jpg","/static/images/02banner.jpg"]
			}
		}
    }
</script>

<style scoped lang="stylus">
	@import "~common/stylus/variable"
	header
		height:.9rem;
		background:$color-bg-item;
		padding-top:.15rem;
		box-sizing:border-box;
		img
			height:.6rem;                             
			display:block;
			margin:0 auto
	.slider
		img
			height:6rem;
			width:100%;
			display:block
</style>