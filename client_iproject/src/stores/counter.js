import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios"
let baseUrl = "http://localhost:3000"

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      isLoggedIn: false,
      user: "",
      avatar: "",
      userStats: null,
      videos: [],
      oneVideo: ''
    }
  },
  actions: {
    logout() {
      this.isLoggedIn = false
      localStorage.clear()
      Swal.fire({
        icon: 'success',
        title: 'Successfully logged out',
        text: 'See you next time.',
      })
    },
    alreadyLoggedIn() {
      this.isLoggedIn = true
    },
    async getOneVideo(id) {
      try {
        let { data } = await axios.get(`${baseUrl}/videos/${id}`)
        this.oneVideo = data
      } catch (err) {
        console.log(err)
      }
    },
    async getVideos() {
      try {
        let { data } = await axios.get(`${baseUrl}/videos`)
        console.log(data)
        this.videos = data
      } catch (err) {
        console.log(err)
      }
    },
    async deleteVideo(videoTitle) {
      try {
        let response = await axios.delete(`${baseUrl}/videos?title=${videoTitle}`)
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
    async postVideo(videoTitle, videoImg, videoUrl) {
      try {
        console.log(videoImg, videoTitle, videoUrl)
        await axios.post(`${baseUrl}/videos`, { videoUrl, videoTitle, videoImg })
      } catch (err) {
        console.log(err)
      }
    },
    async editVideo(videoTitle, id) {
      try {
        await axios.patch(`${baseUrl}/videos/${id}`, { videoTitle })
      } catch (err) {
        console.log(err)
      }
    },
    async getStats() {
      try {
        let { data } = await axios.get(`${baseUrl}/splitgate`, { headers: { steamid: localStorage.getItem("steamid") } })
        this.userStats = data.user
      } catch (err) {
        console.log(err)
      }
    },
    async steamLogin(steamid, username, avatar) {
      try {
        localStorage.setItem("steamid", steamid)
        localStorage.setItem("username", username)
        this.alreadyLoggedIn()
      } catch (err) {
        console.log(err)
      }
    }
  }
});
