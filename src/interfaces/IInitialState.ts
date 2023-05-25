import { ProductRequests, SelectedOption } from './IProductRequests';

export interface InitialStateProdRequests {
	productRequests: [];
	singleRequest: ProductRequests;
	selectedCategory: SelectedOption;
	selectedStatus: SelectedOption;
	isError: boolean;
	isSuccess: boolean;
	isLoading: boolean;
	message: unknown;
}

export interface InitialStateSidebar {
	isSidebarOpen: boolean;
}

export interface InitialStateFilteredRequests {
	inProgress: ProductRequests[];
	planned: ProductRequests[];
	live: ProductRequests[];
}
