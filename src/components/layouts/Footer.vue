<template>
    <!-- 底部导航 -->
    <van-tabbar class="text-center footer" :z-index = zIndex>
        <van-tabbar-item>
            <div class="iconfont">&#xe677;</div>
            <div class="mt-2 pb-1">首页</div>
        </van-tabbar-item>
        <van-tabbar-item>
            <div class="iconfont">&#xe642;</div>
            <div class="mt-2 pb-1">商圈</div>
        </van-tabbar-item>
        <van-tabbar-item>
            <div class="iconfont cart rounded-circle text-white">&#xe767;</div>
        </van-tabbar-item>
        <van-tabbar-item>
            <div class="iconfont">&#xe68e;</div>
            <div class="mt-2 pb-1">发现</div>
        </van-tabbar-item>
        <van-tabbar-item>
            <div class="iconfont">&#xe764;</div>
            <div class="mt-2 pb-1">我的</div>
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                zIndex: 100,
            }
        }
    }
</script>

<style scoped>
    .footer .cart{
        width: 55px;
        height: 55px;
        position: relative;
        top:-0.8rem;
        background-color: #64B4FF;
        font-size: 2rem;
        line-height: 55px;
        z-index: 1;
    }
</style>