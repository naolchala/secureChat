import { axiosInstance } from "../utils/api";
import {
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

const AuthAPI = {
	login,
	register,
};

export default AuthAPI;
