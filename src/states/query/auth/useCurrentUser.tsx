import { useQuery } from "@tanstack/react-query";
import AuthAPI from "../../../api/auth";
import { useToken } from "../../../utils/token";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../user/useUser";

export const CURRENT_USER = "CURRENT_USER";
export const useCurrentUser = () => {
	const { token } = useToken();
	const { setUser } = useUser();
	const router = useNavigate();
	const query = useQuery({
		queryKey: [CURRENT_USER],
		queryFn: () => AuthAPI.getCurrentUser(),
	});

	useEffect(() => {
		console.log({ token });
		if (!token) {
			router("/login");
		}
	}, [token, router]);

	useEffect(() => {
		if (query.data) {
			setUser(query.data);
		}
	}, [query.data, setUser]);

	return query;
};
