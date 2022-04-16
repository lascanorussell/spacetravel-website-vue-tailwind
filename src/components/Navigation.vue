<template>
    <div class="wrapper mt-10 absolute w-[95%] right-0">
        <nav class="text-white w-full  flex items-center h-[96px]">
            <div class="logo"><img src="@/assets/images/shared/logo.svg" alt=""></div>
            <div class="line border-b 2xl:w-[47%] xl:w-[35%] h-[1px] border-white mix-blend-normal opacity-25 xl:block hidden absolute left-24 z-10"></div>
            <div class="nav-links ml-auto w-[830px] h-full flex items-center pl-36 bg-white bg-opacity-5 backdrop-blur-xl">
                <button class="hidden"><img src="@/assets/images/shared/icon-hamburger.svg" alt=""></button>
                <button class="hidden"><img src="@/assets/images/shared/icon-close.svg" alt=""></button>
                <div class="h-full flex space-x-20">
                    <RouterLink id="home" class="uppercase font-normal text-base border-b-2 border-transparent hover:border-opacity-25 hover:border-white h-full flex items-center transition-all" to="/"><div><span class="font-bold">00</span> Home</div></RouterLink>
                    <RouterLink id="destination" class="uppercase font-normal text-base border-b-2 border-transparent hover:border-opacity-25 hover:border-white h-full flex items-center transition-all" to="/destination"><div><span class="font-bold">01</span> Destination</div></RouterLink>
                    <RouterLink id="crew" class="uppercase font-normal text-base border-b-2 border-transparent hover:border-opacity-25 hover:border-white h-full flex items-center transition-all" to="/crew"><div><span class="font-bold">02</span> Crew</div></RouterLink>
                    <RouterLink id="technology" class="uppercase font-normal text-base border-b-2 border-transparent hover:border-opacity-25 hover:border-white h-full flex items-center transition-all" to="/technology"><div><span class="font-bold">03</span> Technology</div></RouterLink>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    mounted(){

    },
    
}
</script>

<style>
    nav {
        font-family: 'Barlow Condensed', sans-serif;
    }
    
    #active{
        border-color: #fff;
    }
</style>