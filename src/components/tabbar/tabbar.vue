<template>
    <div class="tab">
        <router-link tag="div" class="tab-item" to="/home">
            <span class="tab-link">首页</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/singer">
            <span class="tab-link">活动</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/rank">
            <span class="tab-link">定制</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/search">
            <span class="tab-link">我的</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "tabbar"
    }
</script>

<style scoped lang="stylus">
    @import "~common/stylus/variable"
    .tab
        position:fixed;
        bottom:0;
        left:0;
        height:1.46rem;
        line-height:1.46rem;
        width:100%;
        background:$color-bg-item;
        display:flex;
        justify-content:space-around;
        border-top:.1px solid $color-text-grey



</style>