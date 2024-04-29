import { useQuery } from "@tanstack/react-query";
import AuthAPI from "../../api/auth";
import { useToken } from "../../utils/token";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CURRENT_USER = "CURRENT_USER";
export const useCurrentUser = () => {
	const { token } = useToken();
	const router = useNavigate();
	const query = useQuery({
		queryKey: [CURRENT_USER],
		queryFn: () => AuthAPI.getCurrentUser(),
	});

	useEffect(() => {
		console.log(token);
		if (!token) {
			router("/login");
		}
	}, [token, router]);

	if (query.data) {
		router("/chat");
	}

	if (query.error) {
		router("/login");
	}

	return query;
};
