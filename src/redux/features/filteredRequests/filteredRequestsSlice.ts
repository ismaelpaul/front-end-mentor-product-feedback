import { createSlice } from '@reduxjs/toolkit';
import { ProductRequests } from '../../../interfaces/IProductRequests';
import { InitialStateFilteredRequests } from '../../../interfaces/IInitialState';

const initialState: InitialStateFilteredRequests = {
	inProgress: [],
	planned: [],
	live: [],
	suggestion: [],
};
const filteredRequestsSlice = createSlice({
	name: 'filteredRequests',
	initialState,
	reducers: {
		IN_PROGRESS_REQUESTS(state, action) {
			const productRequests = action.payload;

			const inProgressFiltered: ProductRequests[] = productRequests.filter(
				(request: ProductRequests) => {
					if (request.status === 'in-progress') {
						return request;
					}
				}
			);
			state.inProgress = inProgressFiltered;
		},
		PLANNED_REQUESTS(state, action) {
			const productRequests = action.payload;

			const plannedFiltered: ProductRequests[] = productRequests.filter(
				(request: ProductRequests) => {
					if (request.status === 'planned') {
						return request;
					}
				}
			);
			state.planned = plannedFiltered;
		},
		LIVE_REQUESTS(state, action) {
			const productRequests = action.payload;

			const liveFiltered: ProductRequests[] = productRequests.filter(
				(request: ProductRequests) => {
					if (request.status === 'live') {
						return request;
					}
				}
			);
			state.live = liveFiltered;
		},
		SUGGESTION_REQUESTS(state, action) {
			const productRequests = action.payload;

			const suggestionFiltered: ProductRequests[] = productRequests.filter(
				(request: ProductRequests) => {
					if (request.status === 'suggestion') {
						return request;
					}
				}
			);
			state.suggestion = suggestionFiltered;
		},
	},
});

export const {
	IN_PROGRESS_REQUESTS,
	PLANNED_REQUESTS,
	LIVE_REQUESTS,
	SUGGESTION_REQUESTS,
} = filteredRequestsSlice.actions;

export const selectInProgressFilteredRequests = (
	state: InitialStateFilteredRequests
) => state.inProgress;

export const selectPlannedRequests = (state: InitialStateFilteredRequests) =>
	state.planned;

export const selectLiveRequests = (state: InitialStateFilteredRequests) =>
	state.live;

export const selectSuggestionRequests = (state: InitialStateFilteredRequests) =>
	state.suggestion;

export default filteredRequestsSlice.reducer;
