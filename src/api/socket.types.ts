const SocketKeys = {
	CONNECTION: "connection",
	DISCONNECTING: "disconnecting",
	SEND_MESSAGE: "SEND_MESSAGE",
	SEND_MESSAGE_ERROR: "SEND_MESSAGE_ERROR",
	SEND_MESSAGE_SUCCESS: "SEND_MESSAGE_SUCCESS",
	RECEIVE_MESSAGE: "RECEIVE_MESSAGE",
	FRIEND_ONLINE: "FRIEND_ONLINE",
	FRIEND_OFFLINE: "FRIEND_OFFLINE",
	TYPING: "TYPING",
	TYPING_DONE: "TYPING_DONE",
	ERROR: "ERROR",
} as const;

export default SocketKeys;
