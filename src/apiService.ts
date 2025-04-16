import axiosInstance from "./client.ts";
import { ApiResponse } from "./types";

const apiService = {
    get: async <T>(url: string, config = {}): Promise<ApiResponse<T>> => {
        const response = await axiosInstance.get<T>(url, config);
        return response.data;
    },

    post: async <T>(url: string, data?: any, config = {}): Promise<ApiResponse<T>> => {
        const response = await axiosInstance.post<T>(url, data, config);
        return response.data.data;
    },

    put: async <T>(url: string, data: any, config = {}): Promise<ApiResponse<T>> => {
        const response = await axiosInstance.put<T>(url, data, config);
        return response.data.data;
    },

    delete: async <T>(url: string, config = {}): Promise<ApiResponse<T>> => {
        const response = await axiosInstance.delete<T>(url, config);
        return response.data.data;
    },
}

export default apiService;