<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default {
    data() {
        return {
            doneLoading: false
        }
    },
    methods: {
        ...mapActions(useCounterStore, ["steamLogin", "getStats"])
    },
    computed: {
        ...mapState(useCounterStore, ["user", "avatar", "userStats"])
    },
    created() {
        this.getStats()
        setTimeout(() => {
            console.log(`dsaodjas`)
        }, 400);
    },
    beforeMount() {
        let timerInterval
        Swal.fire({
            title: 'Loading...',
            timer: 1000,
            timerProgressBar: false,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })
    },
    watch: {
        userStats(newState, oldState) {
            if (newState !== null) {
                this.doneLoading = true
            }
        },
        doneLoading(newState, oldState) {
            if (newState) {
                setTimeout(() => {
                    const ctx = document.getElementById('killsChart').getContext('2d');
                    const killsChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: ['Points', 'Kills', 'Deaths', 'Assists', 'Melee Kills', 'King Slayers', 'Headshot Kills'],
                            datasets: [{
                                label: 'Combats',
                                data: [this.userStats.allTimeData.stats.points, this.userStats.allTimeData.stats.kills, this.userStats.allTimeData.stats.deaths,
                                this.userStats.allTimeData.stats.assists, this.userStats.allTimeData.stats.meleeKills, this.userStats.allTimeData.stats.kingSlayers, this.userStats.allTimeData.stats.headshotKills],
                                backgroundColor: [
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(150, 122, 100, 0.2)',
                                    'rgba(25, 50, 75, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(150, 122, 100, 1)',
                                    'rgba(25, 50, 75, 1)',
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: false
                                }
                            }
                        }
                    });
                }, 600);
            }
        }
    },
}

</script>

<template>
    <!-- featured blog -->
    <div class="container.fluid" v-if="userStats">
        <div class="container mxl-5">
            <div class="flex items-center mx-5 my-5">
                <div class="block br-round border bc-black">
                    <img class="br-round" :src="userStats.avatarUrl" alt="Avatar">
                </div>
                <div class="ml-4 fs-2">
                    <div class="indigo-lightest">{{userStats.username}}</div>
                    <div class="indigo-lightest opacity-20">Played For {{userStats.allTimeData.stats.timePlayed}}</div>
                    <div class="indigo-lightest opacity-20">KD: {{userStats.allTimeData.stats.kd}}</div>
                    <div class="indigo-lightest opacity-20">KDA: {{userStats.allTimeData.stats.kad}}</div>
                    <div class="indigo-lightest opacity-20">Win Rate: {{userStats.allTimeData.stats.wlPercentage}}
                        ({{userStats.allTimeData.stats.wins}} W, {{userStats.allTimeData.stats.losses}} L)</div>
                </div>
            </div>
        </div>
        <section class="p-10 md-p-l10">
            <div class="md-w-75pc">
                <h2 class="white fs-l3 fw-900 lh-1">Overview</h2>
                <div class="" width="50" height="50" v-if="doneLoading">
                    <canvas id="killsChart"></canvas>
                </div>
                <p class="indigo-lightest fw-600 fs-m1 opacity-50 my-5">Not bad, impressive stats</p>
                <p class="indigo-lightest fw-600 fs-m1 opacity-50 my-5">But you can improve even more</p>
                <router-link to="/videos"
                    class="bg-white black px-5 py-3 absolute hover-bg-black hover-white ease-500 flex justify-center items-center no-underline fs-m1">
                    <div class="black">
                        Click Me!
                    </div>
                </router-link>
            </div>
            <div class="relative w-100pc h-70vh bg-cover bg-b">
                <router-link to="/stats/extras"
                    class="bg-white black px-5 py-3 absolute right-0 bottom-0 hover-bg-black hover-white ease-500 flex justify-center items-center after-arrow-right no-underline fs-m1">
                </router-link>
            </div>
        </section>
    </div>
</template>