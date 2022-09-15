<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    methods: {
        ...mapActions(useCounterStore, ["steamLogin"])
    },
    created() {
        this.steamLogin(this.$route.query.steamid, this.$route.query.username, this.$route.query.avatar)
        setTimeout(() => {
            this.$router.push('/')
            Swal.fire({
                icon: 'success',
                title: 'Successfully logged in',
                text: `Welcome, ${this.$route.query.username}`,
            })
        }, 80);
    }
}
</script>

<template>

</template>