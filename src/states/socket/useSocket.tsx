import { Socket, io } from "socket.io-client";
import { BASE_URL } from "../../utils/api";
import { TOKEN } from "../../utils/token";
import { create } from "zustand";
import { useEffect } from "react";

type State = {
	socket: Socket;
};

type Action = {
	setSocket: (socket: Socket) => void;
};
export const useSocketState = create<State & Action>((set) => ({
	socket: io(BASE_URL, {
		autoConnect: false,
		reconnection: false,
		auth: {
			token: window.localStorage.getItem(TOKEN),
		},
	}),
	setSocket: (newSocket: Socket) =>
		set((state) => ({ ...state, socket: newSocket })),
}));

export const useSocket = () => {
	const { socket } = useSocketState();

	useEffect(() => {
		if (!socket.connected) {
			socket.connect();
		}

		return () => {
			socket.disconnect();
		};
	}, [socket]);

	return socket;
};
