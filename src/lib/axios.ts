import { useUserStore } from "@/stores/UserStore";
import Axios from "axios";

// const token = useUserStore.getState().token

const axios = Axios.create({
    baseURL: "http://localhost:8000", // Remplacez ceci par l'URL de votre backend Laravel
    headers: {
        // "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});

axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${useUserStore.getState().token}`;
    return config
})

export default axios;
