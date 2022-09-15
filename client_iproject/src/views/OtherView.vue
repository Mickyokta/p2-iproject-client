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
    <!-- slider -->
    <section class="relative bg-indigo-lightest-10">
        <div class="p-10 md-p-l10 flex justify-center items-center flex-column text-center">
            <h2 class="white fs-l3 fw-900">Chat with other active users!</h2>
            <p class="indigo-lightest fw-600 fs-m1 opacity-30 my-5">Go share your experiences, and make new friends!
            </p>
            <router-link to="/others/chats" class="button-md bg-indigo white fs-s3 br-4 black fw-600 no-underline m-5">
                Go !
            </router-link>
        </div>
    </section>
</template>