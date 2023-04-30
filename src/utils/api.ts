import axios, { AxiosRequestConfig } from 'axios';

interface AxiosConfig extends AxiosRequestConfig {
	credentials?: string;
}

const baseUrl = import.meta.env.VITE_BASE_URL;

const productFeedbackApi = axios.create({
	baseURL: `${baseUrl}`,
	withCredentials: true,
	credentials: 'include',
} as AxiosConfig);

export const getAllProductRequests = async () => {
	try {
		const response = await productFeedbackApi.get('/product-requests');

		return response.data;
	} catch (error: any) {
		return error.response.data.message;
	}
};

export const getSingleProductRequest = async (id: string) => {
	try {
		const response = await productFeedbackApi.get(`/product-requests/${id}`);

		return response.data;
	} catch (error: any) {
		return error.response.data.message;
	}
};
