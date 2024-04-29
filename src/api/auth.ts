import { axiosInstance } from "../utils/api";
import { LoginAPIProps, LoginAPIResponse } from "./auth.types";

const login = async ({ username, password }: LoginAPIProps) => {
	const user = await axiosInstance
		.post<LoginAPIResponse>(`/login`, {
			username,
			password,
		})
		.then((res) => res.data);
	return user;
};

const AuthAPI = {
	login,
};

export default AuthAPI;
