<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import VideoCard from '../components/VideoCard.vue';
export default {
    components: { VideoCard },
    methods: {
        ...mapActions(useCounterStore, ["getVideos"])
    },
    computed: {
        ...mapState(useCounterStore, ["videos"])
    },
    mounted() {
        this.getVideos()
    }
}
</script>

<template>
    <!-- blog -->
    <div class="row">
        <div class="container col-6 mb-5">
            <router-link to="/videos/add"
                class="bg-blue black px-5 py-3 absolute hover-bg-black hover-white ease-500 flex justify-center items-center no-underline fs-m1">
                <div class="black">
                    +
                </div>
            </router-link>
        </div>
        <div class="container col-1 mb-5">
            <router-link to="/videos/delete"
                class="bg-red black px-5 py-3 absolute hover-bg-black hover-white ease-500 flex justify-center items-center no-underline fs-m1">
                <div class="black">
                    -
                </div>
            </router-link>
        </div>
    </div>
    <section class="container my-5 p-0 md-p-5">
        <div class="flex flex-wrap">
            <VideoCard v-for="video in videos" :key="video.id" :video="video" />
        </div>
    </section>
</template>