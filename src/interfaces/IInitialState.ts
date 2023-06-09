import { ProductRequests, SelectedOption } from './IProductRequests';

export interface InitialStateProdRequests {
	productRequests: ProductRequests[];
	singleRequest: ProductRequests;
	selectedCategory: SelectedOption;
	selectedStatus: SelectedOption;
	sortingOption: string;
	sortingCategory: string;
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
