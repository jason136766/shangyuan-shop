<template>
    <div class="bg-light found">
        <header>
            <div class="text-white top">
                <div class="code"><i class="iconfont rounded-circle icon font-20">&#xe600;</i></div>
                <div class="middle-search">
                    <van-search
                            shape="round"
                            class="iconfont search"
                            background="none"
                    >
                        <div slot="left-icon">
                            <i class="iconfont pl-1 text-white">&#xe61b;</i>
                        </div>
                    </van-search>
                </div>
                <div class="msg"><i class="iconfont rounded-circle icon font-20">&#xe763;</i></div>
            </div>
            
            <div><img src="@/static/images/found-head-bg.png" alt=""></div>
        </header>
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

    header {
        background: linear-gradient(to right, #F8655A,#FB8C55, #FEAB50);
        .top {
            width: 100%;
            position: absolute;
            z-index: 1;

            .code {
                position: absolute;
                left: 0.8rem;
            }

            .middle-search {
                width: 80%;
                position: absolute;
                left: 10%;
            }

            .msg {
                position: absolute;
                right: 0.8rem;
            }

            .icon {
                line-height: 67px;
            }
        }

    }

</style>