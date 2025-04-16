import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
    baseURL: "",
    headers: {
        "Content-Type": "application/json",
    },
}

const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
    (config) => {
        // handling auth token,
        return config;
    },
    (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
);

export default axiosInstance;