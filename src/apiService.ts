import axiosInstance from "./client.ts";
import { ApiResponse } from "./types";
import {AxiosRequestConfig, AxiosResponse} from "axios";

const request = async<T>(
    method: "GET" | "POST" | "PUT" | "DELETE",
    url: string,
    data?: any,
    config?: AxiosRequestConfig
): Promise<T> => {
    try {
        const response: AxiosResponse<T> = await axiosInstance({
            method,
            url,
            data,
            ...config,
        });
        return response.data;
    } catch (error: unknown) {
        if (error instanceof Error) {
           console.log(error.message);
        }
    }
}

const apiService = {
    get: <T>(url: string, config?: AxiosRequestConfig) => request("GET", url, undefined, config),
    post: <T>(url: string, data: any, config?: AxiosRequestConfig) => request("POST", url, config),
    put: <T>(url: string, data?: any, config?: AxiosRequestConfig) => request<T>("PUT", url, data, config),
    delete: <T>(url: string, config?: AxiosRequestConfig) => request<T>("DELETE", url, undefined, config),
}

// const apiService = {
//     get: async <T>(url: string, config = {}): Promise<ApiResponse<T>> => {
//         const response = await axiosInstance.get<T>(url, config);
//         return response.data;
//     },
//
//     post: async <T>(url: string, data?: any, config = {}): Promise<ApiResponse<T>> => {
//         const response = await axiosInstance.post<T>(url, data, config);
//         return response.data.data;
//     },
//
//     put: async <T>(url: string, data: any, config = {}): Promise<ApiResponse<T>> => {
//         const response = await axiosInstance.put<T>(url, data, config);
//         return response.data.data;
//     },
//
//     delete: async <T>(url: string, config = {}): Promise<ApiResponse<T>> => {
//         const response = await axiosInstance.delete<T>(url, config);
//         return response.data.data;
//     },
// }

export default apiService;