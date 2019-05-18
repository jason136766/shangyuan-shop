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
            <van-tabs v-model="active" :line-width="lineWidth" color="#64B4FF" title-active-color="#64B4FF" :line-height=lineHeight title-inactive-color="#000" swipe-threshold=6>
                <van-tab title="享美食">
                    <div class="subtitle mt-2 font-12 overflow-hidden text-left">
                        <div class="swipe overflow-auto">
                            <span class="p-1 active">热门</span>
                            <span class="p-1">甜点饮品</span>
                            <span class="p-1">火锅烧烤</span>
                            <span class="p-1">小吃快餐</span>
                            <span class="p-1">家常炒菜</span>
                            <span class="p-1">日韩料理</span>
                            <span class="p-1">日韩料理</span>
                            <span class="p-1">日韩料理</span>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="惠生活">惠生活</van-tab>
                <van-tab title="爱玩乐">爱玩乐</van-tab>
                <van-tab title="住酒店">住酒店</van-tab>
                <van-tab title="时尚购">时尚购</van-tab>
            </van-tabs>
            <van-row>
                <van-col span="8">商家类型<i class="iconfont align-middle">&#xe729;</i></van-col>
                <van-col span="8">附近<i class="iconfont align-middle">&#xe729;</i></van-col>
                <van-col span="8">智能排序<i class="iconfont align-middle">&#xe729;</i></van-col>
            </van-row>
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
        height: 20px;
        overflow-y: hidden;
        .swipe{
            white-space:nowrap;
            height: 30px;
            -webkit-overflow-scrolling: touch
        }
        .active{
            color:#64B4FF;
            background-color: #B8DDFF;
            line-height: 20px;
            border-radius: 7px;
            margin-right: 5px;

        }
    }

    .tab{
        margin-bottom: 10rem;
    }


</style>