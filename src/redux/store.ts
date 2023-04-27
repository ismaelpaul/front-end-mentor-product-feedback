import { configureStore } from '@reduxjs/toolkit';
import productRequestsReducer from './features/productRequests/productRequestsSlice';
import sidebarReducer from './features/sidebar/sidebarSlice';

export const store = configureStore({
	reducer: { productRequests: productRequestsReducer, sidebar: sidebarReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
