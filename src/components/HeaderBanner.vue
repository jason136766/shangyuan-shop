<template>
    <!-- banner 轮播-->
    <van-swipe :autoplay="3000" class="text-center banner">
        <van-swipe-item v-for="(image, index) in slides" :key="index">
            <img :src="image" width="92%" height="auto"/>
        </van-swipe-item>
    </van-swipe>
</template>

<script>
    export default {
        name: "Banner",
        props: {
            slides: {
                type: Array,
                default: () => []
            }
        },
    }
</script>

<style scoped>

</style>