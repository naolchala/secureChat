import { io } from "socket.io-client";
import { BASE_URL } from "../../utils/api";
import { TOKEN } from "../../utils/token";

export const socket = io(BASE_URL, {
	autoConnect: false,
	reconnection: false,
	auth: {
		token: window.localStorage.getItem(TOKEN),
	},
});
