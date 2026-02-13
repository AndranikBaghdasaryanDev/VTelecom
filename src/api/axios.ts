import axios from "axios";

export const Axios = axios.create({
    baseURL:`http://localhost:${import.meta.env.PORT || 4002}`
})
