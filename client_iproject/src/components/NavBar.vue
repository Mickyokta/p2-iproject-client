<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    computed: {
        ...mapState(useCounterStore, ["isLoggedIn"])
    },
    methods: {
        ...mapActions(useCounterStore, ["logout", "alreadyLoggedIn"]),
        localLogout() {
            this.logout()
            setTimeout(() => {
                this.$router.push(`/login`)
            }, 200);
        }
    },
    created() {
        if (localStorage.getItem("steamid")) {
            this.alreadyLoggedIn()
        }
    }
}
</script>
    
<template>
    <nav class="w-100pc flex flex-column md-flex-row md-px-10 py-5 bg-black">
        <div class="flex justify-between">
            <a class="flex items-center p-2 mr-4 no-underline">
                <img class="max-h-l2 w-auto" src="../../src/assets/images/logo.png" />
            </a>
            <a data-toggle="toggle-nav" data-target="#nav-items" href="#"
                class="flex items-center ml-auto md-hidden indigo-lighter opacity-50 hover-opacity-100 ease-300 p-1 m-3">
                <i data-feather="menu"></i>
            </a>
        </div>
        <div id="nav-items" class="hidden flex sm-w-100pc flex-column md-flex md-flex-row md-justify-end items-center">
            <router-link v-if="isLoggedIn" to="/" class="fs-s1 mx-3 py-3 indigo no-underline hover-underline">Home
            </router-link>
            <router-link v-if="isLoggedIn" to="/stats" class="fs-s1 mx-3 py-3 indigo no-underline hover-underline">Stats
            </router-link>
            <router-link v-if="isLoggedIn" to="/videos" class="fs-s1 mx-3 py-3 indigo no-underline hover-underline">
                Videos </router-link>
            <router-link v-if="isLoggedIn" to="/others" class="fs-s1 mx-3 py-3 indigo no-underline hover-underline">
                Others</router-link>
            <a href="" v-if="isLoggedIn" @click.prevent="localLogout"
                class="fs-s1 mx-3 py-3 indigo no-underline hover-underline">Logout</a>
            <router-link to="/login" v-else class="fs-s1 mx-3 py-3 indigo no-underline hover-underline">Login
            </router-link>
        </div>
    </nav>
</template>