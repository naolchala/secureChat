import { ReactNode, useEffect } from "react";
import { useUser } from "../../states/user/useUser";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../utils/token";
import { socket } from "../../states/socket/socket";
import { MessageResponse } from "../../api/message.types";
import { useMessages } from "../../states/query/message/useMessages";
import SocketKeys from "../../api/socket.types";
import { GET_CONTACTS } from "../../states/query/contact/useContacts";
import { useQueryClient } from "@tanstack/react-query";
import { ContactResponse } from "../../api/contact.types";

interface GuardProps {
	children?: ReactNode;
}

export const Guard = ({ children }: GuardProps) => {
	const { token } = getToken();
	const { user } = useUser();
	const { replaceTempWithReal, addUserMessage } = useMessages();
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	useEffect(() => {
		if (!user && token) {
			navigate("/");
		} else if (!user && !token) {
			navigate("/login");
		}
	}, [user, navigate, token]);

	useEffect(() => {
		if (!socket.connected) {
			socket.connect();
		}

		if (socket.connected) {
			socket.on(SocketKeys.SEND_MESSAGE_SUCCESS, (req) => {
				const { message, tempId } = req as {
					message: MessageResponse;
					tempId: string;
				};
				if (user) {
					const contactID =
						message.sender_id == user?.id
							? message.receiver_id
							: message.sender_id;
					replaceTempWithReal(contactID, tempId, message);
				}
			});

			socket.on(SocketKeys.RECEIVE_MESSAGE, (req) => {
				queryClient.invalidateQueries({
					queryKey: [GET_CONTACTS],
				});

				const { message } = req as { message: MessageResponse };
				addUserMessage(message.sender_id, message);
			});

			socket.on(SocketKeys.FRIEND_ONLINE, (req) => {
				const { userId } = req as { userId: string };
				queryClient.setQueryData<ContactResponse[]>(
					[GET_CONTACTS],
					(data) => {
						if (data) {
							return data.map((contact) => {
								if (contact.id == userId) {
									return { ...contact, isOnline: true };
								}
								return contact;
							});
						}
					}
				);
			});

			socket.on(SocketKeys.FRIEND_OFFLINE, (req) => {
				const { userId } = req as { userId: string };
				queryClient.setQueryData<ContactResponse[]>(
					[GET_CONTACTS],
					(data) => {
						if (data) {
							return data.map((contact) => {
								if (contact.id == userId) {
									return { ...contact, isOnline: false };
								}
								return contact;
							});
						}
					}
				);
			});
		}

		return () => {
			socket.off(SocketKeys.SEND_MESSAGE_SUCCESS);
			socket.off(SocketKeys.RECEIVE_MESSAGE);
			socket.off(SocketKeys.FRIEND_OFFLINE);
			socket.off(SocketKeys.FRIEND_ONLINE);
		};
	});

	return <>{children}</>;
};
