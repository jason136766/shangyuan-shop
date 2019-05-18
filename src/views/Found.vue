<template>
    <div class="bg-light found">
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
        </header>
    </div>
</template>

<script>
    export default {
        name: "Found"
    }
</script>

<style scoped>
    header{
        background-color: ;
    }
</style>