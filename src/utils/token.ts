export const TOKEN = "token";
export const useToken = () => {
	const handleSetToken = (newToken: string) => {
		window.localStorage.setItem("token", newToken);
	};

	const handleClearToken = () => {
		window.localStorage.removeItem("token");
	};

	return {
		token: window.localStorage.getItem(TOKEN),
		setToken: handleSetToken,
		clearToken: handleClearToken,
	};
};
