<script setup>
import banner from '@/assets/mbodm.png';
</script>

<template>
    <div class="container">
        <img :src="banner" alt="banner-image">
    </div>
</template>

<style>
div.container {
    /* fill the layout's main container (height AND width cause Vue use scoped styles) */
    height: 100%;
    width: 100%;
    /* this div container is a flexbox container which centers its own content horizontally and vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
