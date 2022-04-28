<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from '@/components/Navigation.vue'
</script>

<template>
    <header>
        <Navigation />
    </header>
    <RouterView />
</template>

<style>
html, body{
    /* font-family: 'Bellefair', serif !important; */
    font-family: 'Barlow Condensed', sans-serif;
    color: #ffffff;
}
.router-link-active{
    border-color: #ffffff !important;
}
.font-bellfair{
    font-family: 'Bellefair', serif !important;
}
</style>
