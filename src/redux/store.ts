import { configureStore } from '@reduxjs/toolkit';
import productRequestsReducer from './features/productRequestsSlice';

export const store = configureStore({
	reducer: { productRequests: productRequestsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
