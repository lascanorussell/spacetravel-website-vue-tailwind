<template>
    <div class="wrapper lg:mt-10 absolute lg:w-[95%] lg:right-0 w-screen">
        <nav class="text-white w-full flex items-center h-[96px] justify-between lg:px-0 px-6">
            <div class="logo"><img src="@/assets/shared/logo.svg" alt=""></div>
            <div class="line border-b 2xl:w-[47%] xl:w-[35%] h-[1px] border-white mix-blend-normal opacity-25 xl:block hidden absolute left-24 z-10"></div>
            <button class="lg:hidden block"><img src="@/assets/shared/icon-hamburger.svg" alt="" @click="hidenav = !hidenav"></button>
            <div class="transition-all nav-links ml-auto lg:w-[830px] w-[254px] lg:h-full h-screen top-0 lg:flex items-center lg:pl-36 bg-white bg-opacity-5 backdrop-blur-xl lg:relative fixed right-0 lg:translate-x-0 translate-x-full" :class="{ 'translate-x-0': hidenav }">
                <div class="h-full flex lg:flex-row flex-col lg:space-x-20 lg:space-y-0 space-y-10">
                    <div class="lg:hidden flex justify-end px-6 py-6"><button><img src="@/assets/shared/icon-close.svg" alt="" @click="hidenav = !hidenav"></button></div>
                    <RouterLink @click="hidenav = !hidenav" id="home" class="uppercase font-normal text-base lg:border-b-2 lg:border-r-0 border-r-4 border-transparent hover:border-opacity-25 hover:border-white lg:h-full h-8 flex items-center transition-all pl-10 lg:pl-0" to="/"><div><span class="font-bold">00</span> Home</div></RouterLink>
                    <RouterLink @click="hidenav = !hidenav" id="destination" class="uppercase font-normal text-base lg:border-b-2 lg:border-r-0 border-r-4 border-transparent hover:border-opacity-25 hover:border-white lg:h-full h-8 flex items-center transition-all pl-10 lg:pl-0" to="/destination"><div><span class="font-bold">01</span> Destination</div></RouterLink>
                    <RouterLink @click="hidenav = !hidenav" id="crew" class="uppercase font-normal text-base lg:border-b-2 lg:border-r-0 border-r-4 border-transparent hover:border-opacity-25 hover:border-white lg:h-full h-8 flex items-center transition-all pl-10 lg:pl-0" to="/crew"><div><span class="font-bold">02</span> Crew</div></RouterLink>
                    <RouterLink @click="hidenav = !hidenav" id="technology" class="uppercase font-normal text-base lg:border-b-2 lg:border-r-0 border-r-4 border-transparent hover:border-opacity-25 hover:border-white lg:h-full h-8 flex items-center transition-all pl-10 lg:pl-0" to="/technology"><div><span class="font-bold">03</span> Technology</div></RouterLink>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data (){
        return{
            hidenav: false,
        }   
    }
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