import { createSlice } from '@reduxjs/toolkit';
import { InitialStateSidebar } from '../../../interfaces/IInitialState';

const initialState = {
	isSidebarOpen: false,
};

const sidebarSlice = createSlice({
	name: 'sidebar',
	initialState,
	reducers: {
		SET_SIDEBAR(state, action) {
			state.isSidebarOpen = action.payload;
		},
	},
});

export const { SET_SIDEBAR } = sidebarSlice.actions;

export const selectIsSidebarOpen = (state: { sidebar: InitialStateSidebar }) =>
	state.sidebar.isSidebarOpen;

export default sidebarSlice.reducer;
