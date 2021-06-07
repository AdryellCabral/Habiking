import axios from "axios"

export const apiKabit = axios.create({
    baseURL: "https://kabit-api.herokuapp.com"
})