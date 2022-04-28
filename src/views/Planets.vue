<template>
    <div class="flex items-center justify-evenly h-screen w-screen">
        <div class="mt-8">
            <div class="text-3xl uppercase mb-24"><span class="opacity-25 pr-[28px]">01</span> Pick your destination</div>
            <img :src="'../src/' + destination.images.png" :alt="destination.name" srcset="" class="slide-in-bck-center">
        </div>
        <div class="max-w-md">
            <div>
                <div class="space-x-12 mt-16">
                    <router-link class="border-b-2 border-transparent hover:border-opacity-30 hover:border-white uppercase text-base pb-2" v-for="(value, key) in destinations" :key="key" :to="{name: 'Planet', params:{slug: value.slug}}">{{value.name}}</router-link>
                </div>
                <div class="text-[100px] font-bellfair uppercase pt-8">{{destination.name}}</div>
                <div class="text-lg leading-9 text-[#D0D6F9]">{{destination.description}}</div>
            </div>
            <div class="h-[1px] w-100 bg-white bg-opacity-50 mt-12 mb-7"></div>
            <div class="flex space-x-20">
                <div>
                    <div class="text-base text-[#D0D6F9] uppercase">Avg. Distance</div>
                    <div class="font-bellfair uppercase text-3xl">{{destination.distance}}</div>
                </div>
                <div>
                    <div class="text-base text-[#D0D6F9] uppercase">Est. Travel Time</div>
                    <div class="font-bellfair uppercase text-3xl">{{destination.travel}}</div>
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
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 1400px;
            transform-origin: 50% 1400px;
    opacity: 1;
  }
}
@keyframes slide-in-elliptic-top-fwd {
  0% {
    -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
            transform: translateY(-600px) rotateX(-30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 1400px;
            transform-origin: 50% 1400px;
    opacity: 1;
  }
}


.slide-in-elliptic-top-fwd {
	-webkit-animation: slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
</style>
