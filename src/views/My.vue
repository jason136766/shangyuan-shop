<template>
    <div class="bg-light my">
        <header class="text-white">
            <div class="top pl-3 pr-3">
                <div class="clearfix mt-2 pt-1">
                    <span class="float-right iconfont font-18">&#xe763;</span>
                    <span class="float-right iconfont mr-2 font-18">&#xe604;</span>
                </div>
                <van-row>
                    <van-col span="6">
                        <div class="rounded-circle">
                            <img src="@/static/images/user-avatar.png" alt="头像" width="100%" height="auto">
                        </div>
                        <div class="text-center m-level">
                            <span class="p-1 font-10 rounded-lg">普通会员</span>
                        </div>
                    </van-col>
                    <van-col span="18" class="pl-3">
                        <div class="text-white font-20 text-left">爱哭宝宝</div>
                        <div class="font-10 add-info mt-1">
                            <span class="bg-dark mr-1">实名认证</span>
                            <span class="bg-dark">会员俱乐部></span>
                        </div>
                    </van-col>
                </van-row>
                <div class="float-right m-activity">
                    <img src="@/static/images/m-advert.png" alt="会员活动" width="100%" height="auto">
                </div>
            </div>

            <div class="head-bg"><img src="@/static/images/found-head-bg.png" alt="" width="100%"></div>
        </header>

        <!-- 我的订单 -->
    </div>
</template>

<script>
    export default {
        name: "My"
    }
</script>

<style scoped lang="scss">
    .top {
        position: relative;
        z-index: 1;
    }

    .head-bg {
        width: 100%;
        position: absolute;
        top: 0;

        img {
            height: 12rem
        }
    }

    .m-level {
        margin-top: -0.8rem;

        span {
            background-color: #535353;
        }
    }

    .add-info {
        span {
            padding: 1px 5px;
            border-radius: 8px;
            line-height: 15px;
        }
    }

    .m-activity {
        width: 30%;
        position: absolute;
        right: 0.7rem;
        top: 4.7rem
    }

    @media (max-width: 360px) {
        .head-bg img {
            height: 11rem
        }
    }
</style>