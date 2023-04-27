import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllProductRequests } from '../../../utils/api';
import { InitialStateProdRequests } from '../../../interfaces/IInitialState';

const initialState: InitialStateProdRequests = {
	productRequests: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

export const getProductRequests = createAsyncThunk(
	'productRequests/getAll',
	async (_: void, thunkAPI) => {
		try {
			return await getAllProductRequests();
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
	reducers: {},
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
			});
	},
});

export const {} = productRequestsSlice.actions;

export default productRequestsSlice.reducer;
