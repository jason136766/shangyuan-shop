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
        <div class="p-2 bg-white rounded-lg my-order ml-3 mr-3 mt-2">
            <van-row class="mb-3 pl-1 pr-1">
                <van-col span="24">
                    <div class="float-left text-secondary"><i class="iconfont font-weight-bold theme-color font-18">&#xe653;</i> 我的订单</div>
                    <div class="float-right font-11 pt-2 text-999">全部 <i class="iconfont font-10">&#xe628;</i></div>
                </van-col>
            </van-row>
            <van-row type="flex" class="text-666 pb-1 text-center" gutter="15">
                <van-col span="6">
                    <i class="iconfont font-20">&#xe621;</i>
                    <div>待付款</div>
                </van-col>
                <van-col span="6" >
                    <i class="iconfont font-20">&#xe615;</i>
                    <div>待发货</div>
                </van-col>
                <van-col span="6">
                    <i class="iconfont font-22">&#xe640;</i>
                    <div>待收货</div>
                </van-col>
                <van-col span="6">
                    <i class="iconfont font-20">&#xe623;</i>
                    <div>待评价</div>
                </van-col>
            </van-row>
        </div>

        <!-- 我的资产 -->
        <div class="p-2 bg-white rounded-lg my-order ml-3 mr-3 mt-3 mb-3">
            <van-row class="mb-3 pl-1 pr-1">
                <van-col span="24" class="text-secondary">
                    <i class="iconfont theme-color font-20">&#xe668;</i> 我的资产
                </van-col>
            </van-row>
            <van-row type="flex" class="text-666 text-center" gutter="20">
                <van-col span="6">
                    <i class="iconfont font-20">&#xe608;</i>
                    <div>我的钱包</div>
                </van-col>
                <van-col span="6">
                    <i class="iconfont font-20">&#xe644;</i>
                    <div>零钱余额</div>
                </van-col>
                <van-col span="6">
                    <i class="iconfont font-22">&#xe602;</i>
                    <div>红包卡券</div>
                </van-col>
            </van-row>
        </div>

        <!-- 广告1区域 -->
        <img src="@/static/images/my-advert-1.png" alt="广告" width="100%" height="auto">

        <!-- 必备工具 -->
        <div class="font-13 bg-white mt-3 rounded-lg">
            <van-row class="p-2">
                <van-col span="24" class="pl-1 font-15 text-secondary">必备工具</van-col>
            </van-row>
            <van-row class="text-center text-black-50">
                <van-col span="24">
                    <van-col span="6" class="border-top border-right pt-2 pb-2">
                        <i class="iconfont font-18">&#xe66a;</i>
                        <div>收藏宝贝</div>
                    </van-col>
                    <van-col span="6" class="border-top border-right pt-2 pb-2">
                        <i class="iconfont font-18">&#xe605;</i>
                        <div>关注店铺</div>
                    </van-col>
                    <van-col span="6" class="border-top border-right pt-2 pb-2">
                        <i class="iconfont font-18">&#xe60a;</i>
                        <div>退款/售后</div>
                    </van-col>
                    <van-col span="6" class="border-top pt-2 pb-2">
                        <i class="iconfont font-18">&#xe60c;</i>
                        <div>足迹</div>
                    </van-col>
                </van-col>
                <van-col span="24">
                    <van-col span="6" class="border-top border-right pt-2 pb-2">
                        <i class="iconfont font-18">&#xe66a;</i>
                        <div>收藏宝贝</div>
                    </van-col>
                    <van-col span="6" class="border-top border-right pt-2 pb-2">
                        <i class="iconfont font-18">&#xe605;</i>
                        <div>关注店铺</div>
                    </van-col>
                    <van-col span="6" class="border-top border-right pt-2 pb-2">
                        <i class="iconfont font-18">&#xe60a;</i>
                        <div>退款/售后</div>
                    </van-col>
                    <van-col span="6" class="border-top pt-2 pb-2">
                        <i class="iconfont font-18">&#xe60c;</i>
                        <div>足迹</div>
                    </van-col>
                </van-col>
            </van-row>
        </div>

        <!-- 为你推荐 -->
        <div class="text-center text-muted font-13 mt-3 mb-2">
            <div class="d-inline-flex align-items-center">
                ------ 为你推荐 ------
            </div>
        </div>

        <van-row class="pt-2 pb-2 mb-5 ml-2 mr-2 rounded-lg" gutter="10" type="flex">
            <van-col span="12" class="mb-2 good ml-1">
                <div class="bg-white rounded-lg">
                    <img src="@/static/images/recommend-goods.png" alt="广告2" width="100%" height="auto">
                    <div class="pl-2 pr-2 pb-1 mt-1 font-13">
                        <div class="line-ellipsis">拉夏贝尔2017春装新款 复古拼接五分袖短款假两件小衫哈哈哈...</div>
                        <div class="theme-color">￥699.00</div>
                        <div class="font-10 theme-color">抵扣零钱：260币</div>
                    </div>
                </div>
            </van-col>
            <van-col span="12" class="mb-2 good mr-1">
                <div class="bg-white rounded-lg">
                    <img src="@/static/images/recommend-goods.png" alt="广告2" width="100%" height="auto">
                    <div class="pl-2 pr-2 pb-1 mt-1 font-13">
                        <div class="line-ellipsis">拉夏贝尔2017春装新款 复古拼接五分袖短款假两件小衫哈哈哈...</div>
                        <div class="theme-color">￥699.00</div>
                        <div class="font-10 theme-color">抵扣零钱：260币</div>
                    </div>
                </div>
            </van-col>
        </van-row>

    </div>
</template>

<script>
    export default {
        name: "My"
    }
</script>

<style scoped lang="scss">
    .my {
        min-height: 780px;
    }

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

    .my-order {
        position: relative;
        z-index: 2;
        font-size: 13px;
    }

    @media (max-width: 360px) {
        .head-bg img {
            height: 11rem
        }
    }
</style>