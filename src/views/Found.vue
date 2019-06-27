<template>
    <div class="bg-light found">
        <header>
            <van-row class="text-white top pl-2 pr-2" type="flex" justify="space-around">
                <van-col span="2" class="code text-right"><i class="iconfont rounded-circle icon font-20">&#xe600;</i>
                </van-col>
                <van-col span="20" class="middle-search">
                    <van-search
                            shape="round"
                            class="iconfont search"
                            background="none"
                    >
                        <div slot="left-icon">
                            <i class="iconfont pl-1 text-white">&#xe61b;</i>
                        </div>
                    </van-search>
                </van-col>
                <van-col span="2" class="msg text-left"><i class="iconfont rounded-circle icon font-20">&#xe763;</i>
                </van-col>
            </van-row>

            <div class="head-bg"><img src="@/static/images/found-head-bg.png" alt="" width="100%" height="auto"></div>
        </header>

        <!-- 导航标题 -->
        <div class="text-white nav-title pl-3 pr-3 font-13 position-relative">
            <span class="mr-3 active p-1">好友</span>
            <span class="mr-3 p-1">推荐</span>
            <span class="mr-3 p-1">视频</span>
            <span class="p-2">直播</span>
        </div>

        <!-- 动态内容 -->
        <div class="content position-relative mt-3">
            <div class="pt-2 pb-2 pl-1 pr-1 bg-white mr-3 ml-3 mt-3 entry">
                <van-row gutter="10" class="pl-2 pr-2">
                    <van-col span="3" class="text-right">
                        <div><img src="@/static/images/found-avatar.png" alt="" width="33px" height="auto"></div>
                    </van-col>
                    <van-col span="21" class="font-12">
                        <div class="name">慕斯Meath</div>
                        <div class="text-bbb font-10">21分钟前</div>
                    </van-col>
                    <van-col span="24" class="mt-1 font-14">真想拜倒在世姐这一双美腿下，根本不需要高跟鞋的加持。</van-col>
                    <van-col span="8" class="mb-2">
                        <img src="@/static/images/found-dynamic.png" alt="" class="rounded-lg" width="100%"
                             height="auto">
                    </van-col>
                    <van-col span="8" class="mb-2">
                        <img src="@/static/images/found-dynamic-2.png" alt="" class="rounded-lg" width="100%"
                             height="auto">
                    </van-col>
                    <van-col span="8" class="mb-2">
                        <img src="@/static/images/found-dynamic-2.png" alt="" class="rounded-lg" width="100%"
                             height="auto">
                    </van-col>
                    <van-col span="8" class="mb-2">
                        <img src="@/static/images/found-dynamic-2.png" alt="" class="rounded-lg" width="100%"
                             height="auto">
                    </van-col>
                    <van-col span="8" class="mb-2">
                        <img src="@/static/images/found-dynamic-2.png" alt="" class="rounded-lg" width="100%"
                             height="auto">
                    </van-col>
                    <van-col span="8" class="mb-2">
                        <img src="@/static/images/found-dynamic-2.png" alt="" class="rounded-lg" width="100%"
                             height="auto">
                    </van-col>
                    <van-row class="font-10 text-bbb pl-1 pr-2">
                        <van-col span="6">15.8万次阅读</van-col>
                        <van-col span="5" offset="3" class="text-right"><i class="iconfont font-12">&#xe6ff;</i> 分享
                        </van-col>
                        <van-col span="5" class="text-right"><i class="iconfont font-12">&#xe64c;</i> 评论30</van-col>
                        <van-col span="5" class="text-right"><i class="iconfont font-12">&#xe62b;</i> 点赞50</van-col>
                    </van-row>
                </van-row>
            </div>

            <div class="pt-2 pb-2 pl-1 pr-1 bg-white mr-3 ml-3 mt-3 entry">
                <van-row gutter="10" class="pl-2 pr-2">
                    <van-col span="3" class="text-right">
                        <div><img src="@/static/images/found-avatar.png" alt="" width="33px" height="auto"></div>
                    </van-col>
                    <van-col span="21" class="font-12">
                        <div class="name">慕斯Meath</div>
                        <div class="text-bbb font-10">21分钟前</div>
                    </van-col>
                    <van-col span="24" class="mt-1 font-14">真想拜倒在世姐这一双美腿下，根本不需要高跟鞋的加持。</van-col>
                    <van-col span="8" class="mb-2">
                        <img src="@/static/images/found-dynamic.png" alt="" class="rounded-lg" width="100%"
                             height="auto">
                    </van-col>
                    <van-col span="8" class="mb-2">
                        <img src="@/static/images/found-dynamic-2.png" alt="" class="rounded-lg" width="100%"
                             height="auto">
                    </van-col>
                    <van-col span="8" class="mb-2">
                        <img src="@/static/images/found-dynamic-2.png" alt="" class="rounded-lg" width="100%"
                             height="auto">
                    </van-col>
                    <van-row class="font-10 text-bbb pl-1 pr-2">
                        <van-col span="6">15.8万次阅读</van-col>
                        <van-col span="5" offset="3" class="text-right"><i class="iconfont font-12">&#xe6ff;</i> 分享
                        </van-col>
                        <van-col span="5" class="text-right"><i class="iconfont font-12">&#xe64c;</i> 评论30</van-col>
                        <van-col span="5" class="text-right"><i class="iconfont font-12">&#xe62b;</i> 点赞50</van-col>
                    </van-row>
                </van-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Found",
    }
</script>

<style scoped lang="scss">
    .van-search__content, .search {
        background-color: rgba(255, 255, 255, 0.2);
        margin-top: 3px;
    }

    .found {
        min-height: 780px;
    }

    .top {
        position: relative;
        z-index: 1;
        line-height: 65px;
    }

    .head-bg {
        width: 100%;
        position: absolute;
        top: 0;
    }

    .active {
        border-bottom: #fff 1px solid;
    }

    .entry {
        border-radius: 0.5rem;

        .name {
            color: #DDBA76
        }
    }

    @media (max-width: 360px) {
        .found .top {
            padding: 0 1rem !important;
        }
    }
</style>