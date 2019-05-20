<template>
    <div class="bg-light mall">
        <header>
            <div class="text-white top">
                <div class="code"><i class="iconfont rounded-circle icon font-18">&#xe600;</i></div>
                <div class="middle-search">
                    <van-search
                            shape="round"
                            input-align="center"
                            class="iconfont search"
                            :placeholder="searchIcon"
                            background="none"
                    >
                        <div slot="left-icon"></div>
                    </van-search>
                </div>
                <div class="msg"><i class="iconfont rounded-circle icon font-18">&#xe763;</i></div>
            </div>

            <!-- banner 轮播 -->
            <HeaderBanner :slides="slides"/>
        </header>

        <!-- 分类 -->
        <van-row class="category text-center pt-3 pb-3 bg-white font-14">
            <van-col span="6" class="mb-4">
                <div class="mb-2"><img src="@/static/images/category-2.png" alt="分类" width="37px" height="37px"></div>
                <div>美食</div>
            </van-col>
            <van-col span="6" class="mb-4">
                <div class="mb-2"><img src="@/static/images/category-2.png" alt="分类" width="37px" height="37px"></div>
                <div>美食</div>
            </van-col>
            <van-col span="6" class="mb-4">
                <div class="mb-2"><img src="@/static/images/category-2.png" alt="分类" width="37px" height="37px"></div>
                <div>美食</div>
            </van-col>
            <van-col span="6" class="mb-4">
                <div class="mb-2"><img src="@/static/images/category-2.png" alt="分类" width="37px" height="37px"></div>
                <div>美食</div>
            </van-col>
            <van-col span="6">
                <div class="mb-2"><img src="@/static/images/category-2.png" alt="分类" width="37px" height="37px"></div>
                <div>美食</div>
            </van-col>
            <van-col span="6">
                <div class="mb-2"><img src="@/static/images/category-2.png" alt="分类" width="37px" height="37px"></div>
                <div>美食</div>
            </van-col>
            <van-col span="6">
                <div class="mb-2"><img src="@/static/images/category-2.png" alt="分类" width="37px" height="37px"></div>
                <div>美食</div>
            </van-col>
            <van-col span="6">
                <div class="mb-2"><img src="@/static/images/category-2.png" alt="分类" width="37px" height="37px"></div>
                <div>美食</div>
            </van-col>
        </van-row>

        <!-- 广告 1 区域 -->
        <div class="pr-3 pl-3 mt-3"><img src="@/static/images/advert.png" alt="广告2" width="100%" height="auto"></div>
        
        <!-- 广告 2 区域 -->
        <van-row class="pr-3 pl-3 mt-3" gutter="5">
            <van-col span="9"><img src="@/static/images/advert-1.png" alt="广告" width="100%" height="auto"></van-col>
            <van-col span="15">
                <van-row span="24" class="mb-1"><img src="@/static/images/advert-2.png" alt="广告" width="100%" height="auto"></van-row>
                <van-row gutter="5">
                    <van-col span="12"><img src="@/static/images/advert-3.png" alt="广告" width="100%" height="auto"></van-col>
                    <van-col span="12"><img src="@/static/images/advert-3.png" alt="广告" width="100%" height="auto"></van-col>
                </van-row>
            </van-col>
        </van-row>

        <!--商店分类 -->
        <div class="bg-white ml-3 mr-3 mt-3 text-center pl-2 pr-2 font-15 rounded-lg tab">
            <van-tabs
                v-model="active"
                :line-width="lineWidth"
                color="#64B4FF"
                title-active-color="#64B4FF"
                :line-height=lineHeight
                title-inactive-color="#000"
                :swipe-threshold=6
            >
                <van-tab title="享美食">
                    <div class="subtitle mt-2 font-12 overflow-hidden text-left">
                        <div class="swipe overflow-auto">
                            <span class="active">热门</span>
                            <span>甜点饮品</span>
                            <span>火锅烧烤</span>
                            <span>小吃快餐</span>
                            <span>家常炒菜</span>
                            <span>日韩料理</span>
                            <span>日韩料理</span>
                            <span>日韩料理</span>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="惠生活">惠生活</van-tab>
                <van-tab title="爱玩乐">爱玩乐</van-tab>
                <van-tab title="住酒店">住酒店</van-tab>
                <van-tab title="时尚购">时尚购</van-tab>
            </van-tabs>
            <van-row type="flex" justify="space-around" class="font-13 mt-2 mb-2 pb-1">
                <van-col span="8" class="text-left pl-1">
                    <div>商家类型 <i class="iconfont align-middle">&#xe729;</i></div>
                </van-col>
                <van-col span="6">
                    <div>附近 <i class="iconfont align-middle">&#xe729;</i></div>
                </van-col>
                <van-col span="8" class="text-right">
                    <div>智能排序 <i class="iconfont align-middle">&#xe729;</i></div>
                </van-col>
            </van-row>
        </div>

        <!-- 附近商店 -->
        <div class="mb-5 pb-3 mt-3">
            <div class="pt-3 pb-2 bg-white ml-3 mr-3 mb-3 merchants rounded-lg">
                <van-row class="mb-2">
                    <van-col span="6">
                        <img src="@/static/images/merchant.png" alt="商店" width="100%" height="auto">
                    </van-col>
                    <van-col span="13" class="font-10 pl-2">
                        <div class="font-14 pl-1">世纪联华</div>
                        <div>
                            <div class="mt-1 pl-1 attr">
                                <span class="mr-1">随时退</span> <span class="mr-1">过期退</span> <span class="mr-1">免预约</span>
                            </div>
                            <div class="mt-1">
                                <van-rate
                                    :value=3.5
                                    allow-half
                                    void-icon="star"
                                    readonly
                                    class="d-inline-block"
                                    :size=11
                                />
                                <span>4.0分</span>
                            </div>

                        </div>
                        <div class="pl-1">月销量 21 单</div>
                    </van-col>
                    <van-col span="5" class="font-10 text-white text-center tip">
                        <div class="text-right">
                            <span class="bg-warning rounded">超市</span>
                        </div>
                        <div class="text-right mt-2">
                            <span class="bg-danger rounded">返零钱</span>
                        </div>
                        <div class="text-dark text-right mt-1">876m</div>
                    </van-col>
                </van-row>
            </div>
            <div class="pt-3 pb-2 bg-white ml-3 mr-3 mb-3 merchants rounded-lg">
                <van-row class="mb-2">
                    <van-col span="6">
                        <img src="@/static/images/merchant.png" alt="商店" width="100%" height="auto">
                    </van-col>
                    <van-col span="13" class="font-10 pl-2">
                        <div class="font-14 pl-1">世纪联华</div>
                        <div>
                            <div class="mt-1 pl-1 attr">
                                <span class="mr-1">随时退</span> <span class="mr-1">过期退</span> <span class="mr-1">免预约</span>
                            </div>
                            <div class="mt-1">
                                <van-rate
                                        :value=3.5
                                        allow-half
                                        void-icon="star"
                                        readonly
                                        class="d-inline-block"
                                        :size=11
                                />
                                <span>4.0分</span>
                            </div>

                        </div>
                        <div class="pl-1">月销量 21 单</div>
                    </van-col>
                    <van-col span="5" class="font-10 text-white text-center tip">
                        <div class="text-right">
                            <span class="bg-warning rounded">超市</span>
                        </div>
                        <div class="text-right mt-2">
                            <span class="bg-danger rounded">返零钱</span>
                        </div>
                        <div class="text-dark text-right mt-1">876m</div>
                    </van-col>
                </van-row>
            </div>
            <div class="pt-3 pb-2 bg-white ml-3 mr-3 mb-3 merchants rounded-lg">
                <van-row class="mb-2">
                    <van-col span="6">
                        <img src="@/static/images/merchant.png" alt="商店" width="100%" height="auto">
                    </van-col>
                    <van-col span="13" class="font-10 pl-2">
                        <div class="font-14 pl-1">世纪联华</div>
                        <div>
                            <div class="mt-1 pl-1 attr">
                                <span class="mr-1">随时退</span> <span class="mr-1">过期退</span> <span class="mr-1">免预约</span>
                            </div>
                            <div class="mt-1">
                                <van-rate
                                        :value=3.5
                                        allow-half
                                        void-icon="star"
                                        readonly
                                        class="d-inline-block"
                                        :size=11
                                />
                                <span>4.0分</span>
                            </div>

                        </div>
                        <div class="pl-1">月销量 21 单</div>
                    </van-col>
                    <van-col span="5" class="font-10 text-white text-center tip">
                        <div class="text-right">
                            <span class="bg-warning rounded">超市</span>
                        </div>
                        <div class="text-right mt-2">
                            <span class="bg-danger rounded">返零钱</span>
                        </div>
                        <div class="text-dark text-right mt-1">876m</div>
                    </van-col>
                </van-row>
            </div>
        </div>

    </div>
</template>

<script>
    import HeaderBanner from '@/components/HeaderBanner'
    export default {
        name: "Mall",
        components: {
            HeaderBanner
        },
        data() {
            return {
                lineHeight: 2,
                lineWidth: 20,
                active: 0,
                searchIcon: '\ue637 上海 \ue61b',
                slides: [
                    require('@/static/images/banner-5.png'),
                    require('@/static/images/banner-5.png')
                ],
                merchantType: ['1', '2', '3'],
                nearType: ['1', '2', '3'],
                orderType: ['1', '2', '3'],
                borderBool: false
            }
        }
    }
</script>

<style scoped lang="scss">
    .van-search__content,.search{
        background-color: rgba(10,10,10,0.4);
        margin-top: 3px;
    }
    header {
        .top{
            width: 100%;
            position: absolute;
            z-index: 1;
            .code {
                position: absolute;
                left:0.8rem;
            }
            .middle-search{
                width: 55%;
                position: absolute;
                left:23%;
            }
            .msg{
                position: absolute;
                right: 0.8rem;
            }
            .icon {
                line-height:67px;
                background-color: rgba(10,10,10,0.4);
                padding: 0.4rem;
            }
        }
        /deep/ .banner{
            width: 100%;
            z-index: 0;
            img{
                width: 100%;
            }
        }
    }
    .subtitle{
        height: 30px;
        overflow-y: hidden;
        .swipe{
            white-space:nowrap;
            height: 40px;
            -webkit-overflow-scrolling: touch
        }
        span{
            padding: 2px 4px;
            margin-right: 10px;
        }
        .active{
            line-height: 25px;
            color:#64B4FF;
            background-color: #B8DDFF;
            border-radius:0.3rem;
        }
    }
    .merchants{
        .tip{
            span{
                padding: 2px 5px;
            }
        }
        .attr{
            color:#1A8EF1
        }
    }

</style>