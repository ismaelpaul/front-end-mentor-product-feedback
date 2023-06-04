import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
	addRequest,
	deleteRequest,
	getAllProductRequests,
	getSingleProductRequest,
} from '../../../utils/api';
import { InitialStateProdRequests } from '../../../interfaces/IInitialState';
import {
	ProductRequests,
	SelectedOption,
} from '../../../interfaces/IProductRequests';
import { RootState } from '../../store';

const initialState: InitialStateProdRequests = {
	productRequests: [],
	singleRequest: {} as ProductRequests,
	selectedCategory: {
		label: 'Feature',
		value: 'feature',
	},
	selectedStatus: {} as SelectedOption,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

const storeResponseInLocalStorage = (response: ProductRequests[]) => {
	return () => {
		localStorage.setItem('productRequests', JSON.stringify(response));
	};
};

export const getProductRequests = createAsyncThunk(
	'productRequests/getAll',
	async (_: void, thunkAPI) => {
		try {
			const response = await getAllProductRequests();
			thunkAPI.dispatch(storeResponseInLocalStorage(response));
			return response;
		} catch (error: any) {
			const message =
				(error.response && error.response.data && error.response.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const getProductRequest = createAsyncThunk(
	'productRequest/getSingle',
	async (id: string, thunkAPI) => {
		try {
			return await getSingleProductRequest(id);
		} catch (error: any) {
			const message =
				(error.response && error.response.data && error.response.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const addProductRequest = createAsyncThunk(
	'productRequest/addNew',
	async (data: ProductRequests, thunkAPI) => {
		try {
			return await addRequest(data);
		} catch (error: any) {
			const message =
				(error.response && error.response.data && error.response.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const deleteProductRequest = createAsyncThunk(
	'productRequest/delete',
	async (id: string, thunkAPI) => {
		try {
			return await deleteRequest(id);
		} catch (error: any) {
			const message =
				(error.response && error.response.data && error.response.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

const productRequestsSlice = createSlice({
	name: 'productRequests',
	initialState,
	reducers: {
		SET_SELECTED_CATEGORY(state, action) {
			state.selectedCategory = action.payload;
		},
		SET_SELECTED_STATUS(state, action) {
			state.selectedStatus = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProductRequests.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProductRequests.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.isError = false;
				state.productRequests = action.payload;
			})
			.addCase(getProductRequests.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getProductRequest.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProductRequest.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.isError = false;
				state.singleRequest = action.payload;
			})
			.addCase(getProductRequest.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(addProductRequest.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(addProductRequest.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.isError = false;
				state.productRequests.push(action.payload);
			})
			.addCase(addProductRequest.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(deleteProductRequest.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteProductRequest.fulfilled, (state) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.isError = false;
			})
			.addCase(deleteProductRequest.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { SET_SELECTED_CATEGORY } = productRequestsSlice.actions;

export const { SET_SELECTED_STATUS } = productRequestsSlice.actions;

export const selectedCategoryForm = (state: RootState) =>
	state.productRequests.selectedCategory;

export const selectedStatusForm = (state: RootState) =>
	state.productRequests.selectedStatus;

export default productRequestsSlice.reducer;
