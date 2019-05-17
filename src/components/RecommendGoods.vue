<template>
    <div class="recommend-box pr-3 pl-3">
        <div class="lateral-sliding text-left font-13">
            <div class="good-wrap">
                <div span="7" class="m-1 good">
                    <div><img src="../static/images/recommend-good.png" alt="推荐商品" width="100%" height="auto"></div>
                    <div class="mt-1 van-ellipsis">药妆什么都值得买</div>
                    <div class="text-primary">￥590</div>
                    <div class="text-danger font-10">抵扣零钱：260币</div>
                </div>
                <div span="7" class="m-1 good">
                    <div><img src="../static/images/recommend-good.png" alt="推荐商品" width="100%" height="auto"></div>
                    <div class="mt-1 van-ellipsis">药妆什么都值得买</div>
                    <div class="text-primary">￥590</div>
                    <div class="text-danger font-10">抵扣零钱：260币</div>
                </div>
                <div span="7" class="m-1 good">
                    <div><img src="../static/images/recommend-good.png" alt="推荐商品" width="100%" height="auto"></div>
                    <div class="mt-1 van-ellipsis">药妆什么都值得买</div>
                    <div class="text-primary">￥590</div>
                    <div class="text-danger font-10">抵扣零钱：260币</div>
                </div>
                <div span="7" class="m-1 good">
                    <div><img src="../static/images/recommend-good.png" alt="推荐商品" width="100%" height="auto"></div>
                    <div class="mt-1 van-ellipsis">药妆什么都值得买</div>
                    <div class="text-primary">￥590</div>
                    <div class="text-danger font-10">抵扣零钱：260币</div>
                </div>
                <div span="7" class="m-1 good">
                    <div><img src="../static/images/recommend-good.png" alt="推荐商品" width="100%" height="auto"></div>
                    <div class="mt-1 van-ellipsis">药妆什么都值得买</div>
                    <div class="text-primary">￥590</div>
                    <div class="text-danger font-10">抵扣零钱：260币</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RecommendGoods"
    }
</script>

<style scoped lang="scss">
    .recommend-box{
        .lateral-sliding{
            overflow-y: hidden;
            overflow-x: scroll;
        }
        .lateral-sliding::-webkit-scrollbar {
            display: none;
        }
        .good-wrap{
            display: flex;
        }
        .good{
            width:91px;
            display: inline-block;
        }
    }
    .goods-tab .good{
        border-bottom-right-radius:10px;
        border-bottom-left-radius:10px;
    }
    @media (max-width: 350px){
        .recommend-box .good{
            width:80px;
        }
    }
    @media (min-width: 400px) and (max-width: 500px){
        .recommend-box .good{
            width:105px;
        }
    }
</style>