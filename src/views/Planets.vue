<template>
    <div class="flex items-center xl:justify-evenly xl:h-screen w-screen flex-col xl:flex-row xl:pb-0 pb-16">
        <div class="xl:mt-8 md:mt-44 mt-28 xl:w-auto w-screen">
            <div class="md:text-3xl text-[18px] uppercase xl:mb-24 mb-12 lg:pl-0 md:ml-[39px] md:text-left text-center"><span class="opacity-25 pr-[28px]">01</span> Pick your destination</div>
            <img :src="'../src/' + destination.images.png" :alt="destination.name" srcset="" class="slide-in-elliptic-top-fwd xl:w-full md:w-[300px] w-[170px] mx-auto">
        </div>
        <div class="xl:max-w-md max-w-[593px] xl:px-0 px-6 xl:text-left text-center">
            <div>
                <div class="space-x-12 mt-16">
                    <router-link class="border-b-2 border-transparent hover:border-opacity-30 hover:border-white uppercase text-base pb-2 text-[#D0D6F9]" v-for="(value, key) in destinations" :key="key" :to="{name: 'Planet', params:{slug: value.slug}}">{{value.name}}</router-link>
                </div>
                <div class="md:text-[100px] text-[54px] font-bellfair uppercase pt-8">{{destination.name}}</div>
                <div class="md:text-lg text-[15px] leading-9 text-[#D0D6F9]">{{destination.description}}</div>
            </div>
            <div class="h-[1px] w-100 bg-white bg-opacity-50 mt-12 mb-7"></div>
            <div class="flex xl:space-x-20 xl:justify-start justify-evenly md:flex-row flex-col md:space-y-0 space-y-10">
                <div>
                    <div class="text-base text-[#D0D6F9] uppercase">Avg. Distance</div>
                    <div class="font-bellfair uppercase md:text-3xl text-2xl">{{destination.distance}}</div>
                </div>
                <div>
                    <div class="text-base text-[#D0D6F9] uppercase">Est. Travel Time</div>
                    <div class="font-bellfair uppercase md:text-3xl text-2xl">{{destination.travel}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sourceData from '@/assets/data.json'
export default {
    data () {
        return{
            destinations: sourceData.destinations
        }
    },
    created(){
        console.log(this.destinations, this.destination);
        console.log(Math.random());
    },
    computed:{
        destinationSlug(){
            return this.$route.params.slug
        },
        destination(){
            return sourceData.destinations.find(destination => destination.slug === this.destinationSlug)
        }
    }
}
</script>

<style scoped>
@-webkit-keyframes slide-in-elliptic-top-fwd {
  0% {
    -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
            transform: translateY(-600px) rotateX(-30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    opacity: 0.6;
    -webkit-filter: blur(10px);
            filter: blur(10px);
  }
  100% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 1400px;
            transform-origin: 50% 1400px;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
@keyframes slide-in-elliptic-top-fwd {
  0% {
    -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
            transform: translateY(-600px) rotateX(-30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    opacity: 0.6;
    -webkit-filter: blur(10px);
            filter: blur(10px);
  }
  100% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 1400px;
            transform-origin: 50% 1400px;
    opacity: 1;
    -webkit-filter: blur(0);
            filter: blur(0);
  }
}


.slide-in-elliptic-top-fwd {
	-webkit-animation: slide-in-elliptic-top-fwd 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-elliptic-top-fwd 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
</style>
