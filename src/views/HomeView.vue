<template>
    <section class="
    home xl:h-screen min-h-screen w-screen 
    xl:bg-[url('@/assets/home/background-home-desktop.jpg')]
    lg:bg-[url('@/assets/home/background-home-tablet.jpg')] 
    bg-[url('@/assets/home/background-home-mobile.jpg')] 
    bg-cover 
    bg-center">
        
        <router-link :to="{name: 'Destination'}" class="flex xl:items-end h-full xl:pb-36 xl:justify-between xl:flex-row xl:text-left flex-col text-center items-center">
            <div class="space-y-5 md:w-[450px] xl:ml-40 xl:mt-0 md:mt-52 mt-32 md:px-0 px-6">
                <div class="md:text-[28px]">SO, YOU WANT TO TRAVEL TO</div>
                <div class="font-bellfair md:text-[150px] text-7xl">SPACE</div>
                <div class="md:text-xl text-base">Lets face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</div>
            </div>
            <div class="z-[1] relative xl:mr-40 mx-auto font-bellfair md:h-64 md:w-64 h-[150px] w-[150px] rounded-full text-black lg:text-3xl text-xl bg-white flex items-center justify-center cursor-pointer xl:mt-0 md:mt-36 mt-20
            before:transition-all
            before:duration-300
            before:ease-in-out
            before:h-full 
            before:w-full 
            before:bg-white
            before:absolute 
            before:rounded-full
            before:bg-blend-normal
            before:z-[-1]
            hover:before:scale-150
            hover:before:opacity-10
            xl:mb-0 mb-40
            "><div>EXPLORE</div></div>
        </router-link>
    </section>
</template>

<script>
export default {}
</script>

<style scoped>

</style>