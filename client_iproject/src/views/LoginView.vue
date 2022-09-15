<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default {
    methods: {
        ...mapActions(useCounterStore, ["steamLogin"])
    }
}
</script>

<template>
    <!-- hero section -->
    <section id="home" class="min-h-100vh flex justify-start items-center">
        <div class="mx-5 md-mx-l5">
            <div>
                <h1 class="white fs-l3 lh-2 md-fs-xl1 md-lh-1 fw-900 ">Gate Keeper<br /></h1>
                <h1 class="white ms-2 fs-l3 lh2 md-fs-m5">Your Own Splitgate Stats Tracker</h1>

                <div class="br-8 mt-10 inline-flex">
                    <!-- form bagus hehe -->
                    <!-- <input type="text"
                          class="input-lg half bw-0 fw-200 bg-indigo-lightest-10 white ph-indigo-lightest focus-white opacity-80 fs-s3 py-5 min-w-25vw br-r-0"
                          placeholder="Email Address"> -->
                    <a href="https://gatekeeper-iproj.herokuapp.com/api/auth/steam">
                        <button
                            class="button-lg bg-indigo-lightest-20 indigo-lightest focus-white fw-300 fs-s3 mr-0 br-l-0">Get
                            Started
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>