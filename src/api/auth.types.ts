export interface LoginAPIProps {
	username: string;
	password: string;
}
export interface LoginAPIResponse {
	user: CurrentUserResponse;
	token: string;
}

export interface CurrentUserResponse {
	id: string;
	displayName: string;
	username: string;
	avatar: string;
	pvtKey?: string;
	pubKey?: string;
	createdAt: string;
	updatedAt: string;
}
