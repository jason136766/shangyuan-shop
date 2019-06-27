<template>
    <div class="bg-light home">
        <header class="text-white">
            <van-row type="flex" justify="space-between" class="text-center">
                <van-col span="4">
                    <div><i class="iconfont font-18">&#xe65d;</i></div>
                    <div class="font-10">会员码</div>
                </van-col>
                <van-col span="16" class="no-gutters">
                    <van-search
                            shape="round"
                            input-align="center"
                            class="iconfont search"
                            :placeholder="searchIcon"
                            background="none"
                    >
                        <div slot="left-icon"></div>
                    </van-search>
                </van-col>
                <van-col span="4">
                    <div><i class="iconfont font-18">&#xe763;</i></div>
                    <div class="font-10">信息</div>
                </van-col>
            </van-row>

            <van-row type="flex" justify="space-around" class="mt-2 text-center">
                <van-col span="5" v-for="(item, index) in categorys" :key="index">
                    <div><img :src="item.url" alt="分类"></div>
                    <div>{{item.name}}</div>
                </van-col>

            </van-row>
        </header>

        <!-- banner 轮播 -->
        <HeaderBanner :slides="slides"/>

        <!-- 优惠券 -->
        <div class="text-center">
            <img src="@/static/images/coupon.png" alt="优惠券" width="92%" height="auto">
        </div>

        <!-- 秒杀商品 -->
        <div class="seckill pr-3 pl-3">
            <div class="text-center seckill-title">
                <div class="d-inline-flex align-items-center">
                    <hr width="56px" color="#ffa6bc"/>
                    <div class="iconfont ml-1 mr-1">&#xe610;<span class="font-14">秒杀</span></div>
                    <hr width="56px" color="#ffa6bc"/>
                </div>
            </div>

            <van-row type="flex" justify="space-around">
                <van-col span="10" class="bg-white m-1">
                    <div><img src="@/static/images/seckill-good.png" alt="秒杀商品" width="100%" height="auto"></div>
                    <div class="p-1 pb-2 font-13">
                        <div class="font-10 van-ellipsis">百丽2017春时尚小白哈哈哈</div>
                        <span class="text-primary mr-1">￥699.00</span>
                        <s class="font-10 text-secondary">￥899.00</s>
                    </div>
                </van-col>
                <van-col span="10" class="bg-white m-1">
                    <div><img src="@/static/images/seckill-good.png" alt="秒杀商品" width="100%" height="auto"></div>
                    <div class="p-1 pb-2 font-13">
                        <div class="font-10 van-ellipsis">百丽2017春时尚小白哈哈哈</div>
                        <span class="text-primary mr-1">￥699.00</span>
                        <s class="font-10 text-secondary">￥899.00</s>
                    </div>
                </van-col>
                <van-col span="3" class="bg-white more-seckill d-flex ml-1 mt-1 mb-1">
                    <div class="align-self-center m-auto">
                        <div class="text-center font-14">
                            更<br/>多<br/>秒<br/>杀<br/>
                            <i class="iconfont">&#xe646;</i>
                        </div>
                    </div>
                </van-col>
            </van-row>
        </div>

        <!-- 推荐商家 -->
        <div class="recommend-merchant pr-3 pl-3 clearfix">
            <div class="text-center recommend-title">
                <div class="d-inline-flex align-items-center">
                    <hr width="46px" color="#007bff"/>
                    <div class="ml-1 mr-1 font-13">推 荐 商 家</div>
                    <hr width="46px" color="#007bff"/>
                </div>
                <div class="font-10 recommend-more text-999 float-right mt-2">
                    <span class="text-bbb">更多</span><i class="iconfont">&#xe6c1;</i>
                </div>
            </div>

            <van-row class="text-center font-14" gutter="8">
                <van-col span="8" class="mb-2">
                    <div><img src="@/static/images/seckill-good.png" alt="秒杀商品" width="100%" height="auto"></div>
                    <div class="mt-1">平台自营店</div>
                </van-col>
                <van-col span="8" class="mb-2">
                    <div><img src="@/static/images/seckill-good.png" alt="秒杀商品" width="100%" height="auto"></div>
                    <div class="mt-1">平台自营店</div>
                </van-col>
                <van-col span="8" class="mb-2">
                    <div><img src="@/static/images/seckill-good.png" alt="秒杀商品" width="100%" height="auto"></div>
                    <div class="mt-1">平台自营店</div>
                </van-col>
                <van-col span="8" class="mb-2">
                    <div><img src="@/static/images/seckill-good.png" alt="秒杀商品" width="100%" height="auto"></div>
                    <div class="mt-1">平台自营店</div>
                </van-col>
                <van-col span="8" class="mb-2">
                    <div><img src="@/static/images/seckill-good.png" alt="秒杀商品" width="100%" height="auto"></div>
                    <div class="mt-1">平台自营店</div>
                </van-col>
                <van-col span="8" class="mb-2">
                    <div><img src="@/static/images/seckill-good.png" alt="秒杀商品" width="100%" height="auto"></div>
                    <div class="mt-1">平台自营店</div>
                </van-col>
            </van-row>

        </div>

        <!-- 广告2区域 -->
        <div class="pr-3 pl-3"><img src="@/static/images/banner-2.png" alt="广告2" width="100%" height="auto"></div>

        <!-- 推荐商品 -->
        <div class="text-center recommend-title pr-3 pl-3">
            <div class="d-inline-flex align-items-center">
                <hr width="46px" color="#007bff"/>
                <div class="ml-1 mr-1 font-13">推 荐 商 品</div>
                <hr width="46px" color="#007bff"/>
            </div>
        </div>
        <RecommendGoods/>

        <!-- 广告3区域 -->
        <div class="pr-3 pl-3 mt-2 mb-3"><img src="@/static/images/banner-3.png" alt="广告3" width="100%" height="auto">
        </div>

        <!-- 推荐商品 -->
        <RecommendGoods/>

        <!-- 广告4区域 -->
        <div class="pr-3 pl-3 mt-2"><img src="@/static/images/banner-2.png" alt="广告2" width="100%" height="auto"></div>

        <!-- 商品分类 -->
        <van-tabs class="mt-3 pr-3 pl-3 font-13 goods-tab mb-5" swipeable animated :line-height=lineHeight
                  color="#4DA9FF" title-active-color="#4DA9FF">
            <van-tab title="全部">
                <van-row class="pt-2 pb-2" gutter="6">
                    <van-col span="12" class="mb-2 good">
                        <div class="bg-white rounded-lg">
                            <img src="@/static/images/good.png" alt="广告2" width="100%" height="auto">
                            <div class="pl-2 pr-2 pb-1 mt-1">
                                <div class="line-ellipsis">拉夏贝尔2017春装新款 复古拼接五分袖短款假两件小衫哈哈哈...</div>
                                <div class="text-primary">￥699.00</div>
                                <div class="font-10 text-danger">抵扣零钱：260币</div>
                            </div>
                        </div>
                    </van-col>
                    <van-col span="12" class="mb-2 good">
                        <div class="bg-white rounded-lg">
                            <img src="@/static/images/good.png" alt="广告2" width="100%" height="auto">
                            <div class="pl-2 pr-2 pb-1 mt-1">
                                <div class="line-ellipsis">拉夏贝尔2017春装新款 复古拼接五分袖短款假两件小衫哈哈哈...</div>
                                <div class="text-primary">￥699.00</div>
                                <div class="font-10 text-danger">抵扣零钱：260币</div>
                            </div>
                        </div>
                    </van-col>
                    <van-col span="12" class="mb-2 good">
                        <div class="bg-white rounded-lg">
                            <img src="@/static/images/good.png" alt="广告2" width="100%" height="auto">
                            <div class="pl-2 pr-2 pb-2 mt-1">
                                <div class="line-ellipsis">拉夏贝尔2017春装新款 复古拼接五分袖短款假两件小衫哈哈哈...</div>
                                <div class="text-primary">￥699.00</div>
                                <div class="font-10 text-danger">抵扣零钱：260币</div>
                            </div>
                        </div>
                    </van-col>
                    <van-col span="12" class="mb-2 good">
                        <div class="bg-white rounded-lg">
                            <img src="@/static/images/good.png" alt="广告2" width="100%" height="auto">
                            <div class="pl-2 pr-2 pb-2 mt-1">
                                <div class="line-ellipsis">拉夏贝尔2017春装新款 复古拼接五分袖短款假两件小衫哈哈哈...</div>
                                <div class="text-primary">￥699.00</div>
                                <div class="font-10 text-danger">抵扣零钱：260币</div>
                            </div>
                        </div>
                    </van-col>
                    <van-col span="12" class="mb-2 good">
                        <div class="bg-white rounded-lg">
                            <img src="@/static/images/good.png" alt="广告2" width="100%" height="auto">
                            <div class="pl-2 pr-2 pb-2 mt-1">
                                <div class="line-ellipsis">拉夏贝尔2017春装新款 复古拼接五分袖短款假两件小衫哈哈哈...</div>
                                <div class="text-primary">￥699.00</div>
                                <div class="font-10 text-danger">抵扣零钱：260币</div>
                            </div>
                        </div>
                    </van-col>
                    <van-col span="12" class="mb-2 good">
                        <div class="bg-white rounded-lg">
                            <img src="@/static/images/good.png" alt="广告2" width="100%" height="auto">
                            <div class="pl-2 pr-2 pb-2 mt-1">
                                <div class="line-ellipsis">拉夏贝尔2017春装新款 复古拼接五分袖短款假两件小衫哈哈哈...</div>
                                <div class="text-primary">￥699.00</div>
                                <div class="font-10 text-danger">抵扣零钱：260币</div>
                            </div>
                        </div>
                    </van-col>
                </van-row>
            </van-tab>
            <van-tab title="农特产品">农特产品</van-tab>
            <van-tab title="家居百货">家居百货</van-tab>
            <van-tab title="文化玩乐">文化玩乐</van-tab>
            <van-tab title="加盟商">加盟商</van-tab>
            <van-tab title="联盟商家">联盟商家</van-tab>
        </van-tabs>

        <Footer/>
    </div>


</template>

<script>
    import HeaderBanner from '@/components/HeaderBanner'
    import RecommendGoods from '@/components/RecommendGoods'
    import Footer from '@/components/layouts/Footer'

    export default {
        name: "Home",
        components: {
            HeaderBanner,
            RecommendGoods,
            Footer,

        },
        data() {
            return {
                lineHeight: 2,
                searchIcon: '\ue625 商品/店铺搜索',
                slides: [
                    require('@/static/images/swipe-banner.png'),
                    require('@/static/images/swipe-banner.png')
                ],
                categorys: [
                    {url: require('@/static/images/category.png'), name: '平台自营'},
                    {url: require('@/static/images/category.png'), name: '平台自营'},
                    {url: require('@/static/images/category.png'), name: '平台自营'},
                    {url: require('@/static/images/category.png'), name: '平台自营'},
                    {url: require('@/static/images/category.png'), name: '平台自营'},
                ],
            }
        },
    }
</script>

<style scoped lang="scss">
    header {
        font-size: 0.8rem !important;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        height: 210px;
        background: #C771FF;
        padding: 8px 0;

        .van-search {
            padding: 3px 0;
        }

        .van-search__content, .search {
            background-color: rgba(255, 255, 255, 0.4);
        }
    }

    .seckill-title {
        color: #FE4070
    }

    .recommend-title {
        color: #428FE7
    }

    .more-seckill {
        color: #FE4070;
        border: #FE4070 1px solid
    }

    .recommend-more {
        span {
            position: relative;
            bottom: 0.1rem
        }
    }
</style>