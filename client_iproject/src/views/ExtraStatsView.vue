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
        }
    },
    mounted() {
        setTimeout(() => {
            let ctx = document.getElementById('multiKillMedals').getContext('2d');
            const multikillMedals = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Double Kills', 'Triple Kills', 'Quadra Kills', 'Quintuple Kills', 'Sextuple Kills'],
                    datasets: [{
                        label: 'Combats',
                        data: [this.userStats.allTimeData.stats.medalDoubleKills, this.userStats.allTimeData.stats.medalTripleKills, this.userStats.allTimeData.stats.medalQuadKills,
                        this.userStats.allTimeData.stats.medalQuintKills, this.userStats.allTimeData.stats.medalSexKills],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    elements: {
                        line: {
                            borderWidth: 3
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                },
            });

            ctx = document.getElementById('portals').getContext('2d');
            const portals = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Portals Spawned', 'Own Portals Entered', 'Enemy Portals Entered', 'Enemy Portals Destroyed', 'Ally Portals Entered'],
                    datasets: [{
                        label: 'Combats',
                        data: [this.userStats.allTimeData.stats.portalsSpawned, this.userStats.allTimeData.stats.ownPortalsEntered,
                        this.userStats.allTimeData.stats.enemyPortalsEntered, this.userStats.allTimeData.stats.enemyPortalsDestroyed, this.userStats.allTimeData.stats.allyPortalsEntered],
                        backgroundColor: [
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                        ],
                        borderColor: [
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(75, 192, 192, 1)',
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    elements: {
                        line: {
                            borderWidth: 3
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                },
            });
            ctx = document.getElementById('oddball').getContext('2d');
            const oddball = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Oddballs Picked Up', 'Oddball Kills', 'Oddball Carrier Kills'],
                    datasets: [{
                        label: 'Combats',
                        data: [this.userStats.allTimeData.stats.oddballsPickedUp, this.userStats.allTimeData.stats.oddballKills,
                        this.userStats.allTimeData.stats.oddballCarrierKills],
                        backgroundColor: [
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(200, 92, 92, 0.2)',
                            'rgba(75, 160, 160, 0.2)',
                        ],
                        borderColor: [
                            'rgba(153, 102, 255, 1)',
                            'rgba(200, 92, 92, 1)',
                            'rgba(75, 160, 160, 1)',
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    elements: {
                        line: {
                            borderWidth: 3
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                },
            });
            ctx = document.getElementById('flags').getContext('2d');
            const flag = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Flags Returned', 'Flag Kills', 'Flag Carrier Kills'],
                    datasets: [{
                        label: 'Combats',
                        data: [this.userStats.allTimeData.stats.flagsReturned, this.userStats.allTimeData.stats.flagKills,
                        this.userStats.allTimeData.stats.flagCarrierKills],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(75, 192, 192, 0,2)',
                            'rgba(153, 102, 255, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    elements: {
                        line: {
                            borderWidth: 3
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                },
            });
        }, 600);
    }
}
</script>

<template>
    <section class="p-10 md-p-l10">
        <div class="md-w-75pc">
            <h2 class="white fs-l3 fw-900 lh-1">Multi-kill Medals</h2>
            <div class="" width="50" height="50" v-if="doneLoading">
                <canvas id="multiKillMedals"></canvas>
            </div>
        </div>
        <br>
        <br>
        <br>
        <div class="md-w-75pc">
            <h2 class="white fs-l3 fw-900 lh-1">Portals</h2>
            <h2 class="white fs-l1 fw-900 lh-1">Portalling Distance:
                {{this.userStats.allTimeData.stats.distancePortaled}}</h2>
            <div class="" width="50" height="50" v-if="doneLoading">
                <canvas id="portals"></canvas>
            </div>
        </div>
        <br>
        <br>
        <br>
        <div class="md-w-75pc">
            <h2 class="white fs-l3 fw-900 lh-1">Oddball</h2>
            <div class="" width="50" height="50" v-if="doneLoading">
                <canvas id="oddball"></canvas>
            </div>
        </div>
        <br>
        <br>
        <br>
        <div class="md-w-75pc">
            <h2 class="white fs-l3 fw-900 lh-1">Flags</h2>
            <div class="" width="50" height="50" v-if="doneLoading">
                <canvas id="flags"></canvas>
            </div>
        </div>
        <br>
        <br>
        <br>
        <div class="relative w-100pc h-70vh bg-cover bg-b">
            <router-link to="/stats"
                class="bg-white black px-5 py-3 absolute right-0 bottom-0 hover-bg-black hover-white ease-500 flex justify-center items-center after-arrow-left no-underline fs-m1">
            </router-link>
        </div>
    </section>
</template>