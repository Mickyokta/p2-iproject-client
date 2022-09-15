<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default {
    data() {
        return {

        }
    },
    methods: {
        ...mapActions(useCounterStore, [""])
    },
    props: ["video"]
}
</script>

<template>
    <div class="w-100pc md-w-33pc p-10">
        <a :href="video.videoUrl" target="_blank"
            class="block no-underline p-5 br-8 hover-bg-indigo-lightest-10 hover-scale-up-1 ease-300">
            <img class="w-100pc" :src="video.videoImg" alt="" style="width:100%; height:30vw; object-fit:cover">
            <p class="fw-600 white fs-m3 mt-3">
                {{video.videoTitle}}
                <div class="container d-flex justify-content-end my-3">
                    <router-link :to="`/videos/edit/${video.id}`">
                        <button type="button"
                            class="button-md bg-indigo indigo-lightest fw-300 fs-s3 br-l-0">Edit</button>
                    </router-link>
                </div>
            </p>
        </a>
        <br>
    </div>
</template>