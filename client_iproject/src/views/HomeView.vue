<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    computed: {
        ...mapState(useCounterStore, ["isLoggedIn"])
    },
    data() {
        return {
            username: localStorage.getItem("username")
        }
    }
}
</script>

<template>
    <!-- features -->
    <section id="features" class="p-10 md-p-l5">
        <div class="container d-flex justify-content-center">
            <h1 class="white ms-2 fs-l3 lh2 md-fs-m5">Welcome, {{username}}</h1>
        </div>
        <div class="flex flex-column md-flex-row mx-auto my-5" v-if="isLoggedIn">
            <div class="w-100pc md-w-40pc">
                <div class="br-8 p-5 m-5">
                    <div class="flex justify-center items-center bg-indigo-lightest-10 white w-l5 h-l5 br-round mb-5"><i
                            data-feather="bar-chart" class="w-l5"></i>

                    </div>
                    <h4 class="white fw-600 fs-m3 mb-5">Stats</h4>
                    <div class="indigo-lightest fw-600 fs-m1 lh-3 opacity-50">The main reason you come to this web
                        page (probably).
                    </div>
                    <router-link to="/stats"
                        class="mt-5 button bg-indigo-lightest-10 fs-s3 white no-underline hover-opacity-100 hover-scale-up-1 ease-300">
                        Go!</router-link>
                </div>
            </div>
            <div class="w-100pc md-w-40pc">
                <div class="br-8 p-5 m-5">
                    <div class="flex justify-center items-center bg-indigo-lightest-10 white w-l5 h-l5 br-round mb-5"><i
                            data-feather="youtube" class="w-l5"></i></div>
                    <h4 class="white fw-600 fs-m3 mb-5">Videos</h4>
                    <div class="indigo-lightest fw-600 fs-m1 opacity-50">Things you can do to improve your skills even
                        further</div>
                    <router-link to="/videos"
                        class="mt-5 button bg-indigo-lightest-10 fs-s3 white no-underline hover-opacity-100 hover-scale-up-1 ease-300">
                        Go!</router-link>
                </div>
            </div>
            <div class="w-100pc md-w-40pc">
                <div class="br-8 p-5 m-5">
                    <div class="flex justify-center items-center bg-indigo-lightest-10 white w-l5 h-l5 br-round mb-5"><i
                            data-feather="compass" class="w-l5"></i></div>
                    <h4 class="white fw-600 fs-m3 mb-5">Others</h4>
                    <div class="indigo-lightest fw-600 fs-m1 opacity-50">Some other things that you might find fun and
                        interesting...</div>
                    <router-link to="/others"
                        class="mt-5 button bg-indigo-lightest-10 fs-s3 white no-underline hover-opacity-100 hover-scale-up-1 ease-300">
                        Go!</router-link>
                </div>
            </div>
        </div>
        <div class="container d-flex justify-content-center" v-else>
            <div class="w-100pc md-w-40pc">
                <div class="br-8 p-5 m-5">
                    <div class="flex justify-center items-center bg-indigo-lightest-10 white w-l5 h-l5 br-round mb-5"><i
                            data-feather="compass" class="w-l5"></i></div>
                    <h4 class="white fw-600 fs-m3 mb-5">Others</h4>
                    <div class="indigo-lightest fw-600 fs-m1 opacity-50">Some other things that you might find fun and
                        interesting...</div>
                    <router-link to="/others"
                        class="mt-5 button bg-indigo-lightest-10 fs-s3 white no-underline hover-opacity-100 hover-scale-up-1 ease-300">
                        Go!</router-link>
                </div>
            </div>
        </div>
    </section>
</template>