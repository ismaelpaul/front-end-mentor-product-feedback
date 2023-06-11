import axios, { AxiosRequestConfig } from 'axios';
import { Comments, ProductRequests } from '../interfaces/IProductRequests';

interface AxiosConfig extends AxiosRequestConfig {
	credentials?: string;
}

const baseUrl = import.meta.env.VITE_BASE_URL;

const productFeedbackApi = axios.create({
	baseURL: `${baseUrl}`,
	withCredentials: true,
	credentials: 'include',
} as AxiosConfig);

export const getAllProductRequests = async (
	sortingOption: string,
	category?: string
) => {
	try {
		const response = await productFeedbackApi.get('/product-requests', {
			params: {
				sort: sortingOption,
				category: category,
			},
		});

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

export const addRequest = async (newRequest: ProductRequests) => {
	try {
		const response = await productFeedbackApi.post(
			'/product-requests',
			newRequest
		);
		return response.data;
	} catch (error: any) {
		return error.response.data.message;
	}
};

export const deleteRequest = async (id: string) => {
	try {
		const response = await productFeedbackApi.delete(`/product-requests/${id}`);

		return response.data;
	} catch (error: any) {
		return error.response.data.message;
	}
};

export const addComment = async (id: string, newComment: Comments) => {
	try {
		const response = await productFeedbackApi.patch(
			`/product-requests/${id}`,
			newComment
		);

		return response.data;
	} catch (error: any) {
		return error.response.data.message;
	}
};
