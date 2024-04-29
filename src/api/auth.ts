import { axiosInstance, axiosWithToken } from "../utils/api";
import {
	CurrentUserResponse,
	LoginAPIProps,
	LoginAPIResponse,
	RegisterAPIProps,
	RegisterAPIResponse,
} from "./auth.types";

const login = async ({ username, password }: LoginAPIProps) => {
	const user = await axiosInstance
		.post<LoginAPIResponse>(`/login`, {
			username,
			password,
		})
		.then((res) => res.data);
	return user;
};

const register = async (data: RegisterAPIProps) => {
	const user = await axiosInstance
		.post<RegisterAPIResponse>(`/register`, data)
		.then((res) => res.data);
	return user;
};

const getCurrentUser = async () => {
	const user = await axiosWithToken
		.get<CurrentUserResponse>("/me")
		.then((res) => res.data);
	return user;
};

const AuthAPI = {
	login,
	register,
	getCurrentUser,
};

export default AuthAPI;
