export interface SelectedOption {
	label: string;
	value: string;
}

export interface Reply {
	content: string;
	replyingTo: string;
	user: User;
}
export interface User {
	image: string;
	name: string;
	username: string;
}

export interface Comments {
	id: string;
	content: string;
	user: User;
	replies?: Reply[];
}

export interface ProductRequests {
	_id?: string;
	title: string;
	category: string;
	upvotes: number;
	status: string;
	description: string;
	comments?: Comments[];
}
