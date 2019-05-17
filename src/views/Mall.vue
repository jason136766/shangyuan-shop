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
    .category{

    }

</style>