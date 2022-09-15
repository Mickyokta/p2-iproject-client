<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default {
    data() {
        return {
            videoTitle: ''
        }
    },
    methods: {
        ...mapActions(useCounterStore, ["deleteVideo"]),
        localDeleteVideo() {
            this.deleteVideo(this.videoTitle)
            this.$router.push('/videos')
        }
    }
}
</script>
    
<template>
    <div class="container mxl-5 mb-5">
        <div class="w-100pc md-w-50pc">
            <h1 class="white lh-2 md-fs-l5 fw-900 ">Delete a Video By Title!</h1>
            <h4 class="white fw-450 ">This system is case sensitive so please insert the exact same title</h4>
            <form @submit.prevent="localDeleteVideo">
                <div class="flex my-5">
                    <input type="text" v-model="videoTitle" required
                        class="input-lg flex-grow-1 bw-0 fw-200 bg-indigo-lightest-10 white ph-indigo-lightest focus-white opacity-80 fs-s3 py-5 br-r-0"
                        placeholder="Video Title">
                </div>
                <button type="submit" class="button-md bg-indigo indigo-lightest fw-300 fs-s3 br-l-0">Delete</button>
            </form>
        </div>
    </div>
</template>