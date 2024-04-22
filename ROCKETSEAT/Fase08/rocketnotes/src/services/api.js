import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000"
});

api.interceptors.response.use((response) => response, (error) => {
    if(error.response?.status === 401){
        window.dispatchEvent(new Event('sessionExpired'));
        window.location.href = `/login?callbackUrl=${encodeURIComponent(window.location.pathname)}`;
    }

    return Promise.reject(error);
});

api.interceptors.request.use((request) => {
    const token = localStorage.getItem("@rocketnotes:token");

    if(token){
        request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
});
