import { useEffect, useState } from "react";

export const useToken = () => {
	const [token, setToken] = useState<string | undefined>();

	const handleSetToken = (newToken: string) => {
		window.localStorage.setItem("token", newToken);
		setToken(newToken);
	};

	const handleClearToken = () => {
		window.localStorage.removeItem("token");
		setToken(undefined);
	};

	useEffect(() => {
		setToken(window.localStorage.getItem("token") || undefined);
	}, []);

	return { token, setToken: handleSetToken, clearToken: handleClearToken };
};
