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
        ...mapActions(useCounterStore, ["editVideo", "getOneVideo"]),
        localEditVideo() {
            this.editVideo(this.videoTitle, this.$route.params.id)
            this.$router.push('/videos')
        }
    },
    created() {
        this.getOneVideo(this.$route.params.id)
    },
    computed: {
        ...mapState(useCounterStore, ["oneVideo"])
    },
    watch: {
        oneVideo() {
            this.videoTitle = this.oneVideo.videoTitle
        }
    }
}
</script>
    
<template>
    <div class="container mxl-5 mb-5">
        <div class="w-100pc md-w-50pc">
            <h1 class="white lh-2 md-fs-l5 fw-900 ">Edit This Video Title For Community!</h1>
            <form @submit.prevent="localEditVideo">
                <div class="flex my-5">
                    <input type="text" v-model="videoTitle" required
                        class="input-lg flex-grow-1 bw-0 fw-200 bg-indigo-lightest-10 white ph-indigo-lightest focus-white opacity-80 fs-s3 py-5 br-r-0"
                        placeholder="Video Title">
                </div>
                <button type="submit" class="button-md bg-indigo indigo-lightest fw-300 fs-s3 br-l-0">Edit</button>
            </form>
        </div>
    </div>
</template>