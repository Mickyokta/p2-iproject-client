<script>
import { mapActions, mapState } from "pinia";
import io from "socket.io-client";
import { useCounterStore } from "../stores/counter";

export default {
    data() {
        return {
            socket: '',
            text: ''
        }
    },
    computed: {
    },
    methods: {
        postChat() {
            this.socket.emit("send-chat-message", this.text)
            this.appendMessage(`You: ${this.text}`)
            this.text = ''
        },
        appendMessage(message) {
            const messageContainer = document.getElementById("message-container")
            const messageElement = document.createElement('div')
            messageElement.classList.add("white")
            messageElement.innerText = message
            messageContainer.append(messageElement)
        }
    },
    created() {
        this.socket = io("http://localhost:3000")
    },
    mounted() {
        this.appendMessage(`You Joined`)
        this.socket.emit("new-user", localStorage.getItem("username"))
        this.socket.on("chat-message", data => {
            this.appendMessage(`${data.user}: ${data.message}`)
        })
        this.socket.on("user-connected", user => {
            this.appendMessage(`${user} Connected`)
        })
        this.socket.on("user-disconnected", user => {
            this.appendMessage(`${user} Disconnected`)
        })
    }
}
</script>

<template>
    <div class="container d-flex justify-content-center my-2 mb-5">
        <h1 class="white">Chat With Other Users</h1>
    </div>
    <div class="container my-5" id="message-container">
    </div>
    <div class="container my-2">
        <form @submit.prevent="postChat" id="send-container">
            <input type="text" v-model="text"
                class="input flex-grow-1 bw-0 fw-200 bg-indigo-lightest-10 white ph-indigo-lightest focus-white opacity-80 fs-s3 py-5 br-r-0"
                placeholder="Message">
            <button class="button bg-indigo indigo-lightest fw-300 fs-s3 br-l-0">Send</button>
        </form>
    </div>
</template>