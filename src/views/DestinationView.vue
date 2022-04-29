<template>
    <section class="destination xl:h-screen min-h-screen w-screen 
    xl:bg-[url('@/assets/destination/background-destination-desktop.jpg')] 
    lg:bg-[url('@/assets/destination/background-destination-tablet.jpg')] 
    bg-[url('@/assets/destination/background-destination-mobile.jpg')] 
    bg-cover bg-center">
        
        <!-- <router-view :key="$route.path"/> -->
        <router-view :key="$route.path"/>
    </section>
</template>

<script>
export default {
}
</script>
