<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
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
    font-family: 'Bellefair', serif !important;
}
.router-link-active{
    border-color: #ffffff !important;
}
</style>
