<template>
    <div class="bg-light my">
        <header class="text-white">
            <div class="top pl-3 pr-3">
                <div class="clearfix mt-2 pt-1">
                    <span class="float-right iconfont font-18">&#xe763;</span>
                    <span class="float-right iconfont mr-2 font-18">&#xe604;</span>
                </div>
                <van-row>
                    <van-col span="10">
                        <div class="rounded-circle">
                            <img src="@/static/images/user-avatar.png" alt="头像" width="82px" height="auto">
                        </div>
                        <div class="pl-1 bg-dark font-10">普通会员</div>
                    </van-col>
                    <van-col span="14"></van-col>
                </van-row>
            </div>

            <div class="head-bg"><img src="@/static/images/found-head-bg.png" alt="" width="100%" height="auto"></div>
        </header>
    </div>
</template>

<script>
    export default {
        name: "My"
    }
</script>

<style scoped>
    .top{
        position: relative;
        z-index: 1;
    }
    .head-bg{
        width: 100%;
        position: absolute;
        top:0;
    }
</style>