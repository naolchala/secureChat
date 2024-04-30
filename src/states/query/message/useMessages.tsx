import { useQuery } from "@tanstack/react-query";
import { useSelectedContact } from "../../user/useSelectedUser";
import MessageAPI from "../../../api/message";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { MessageResponse } from "../../../api/message.types";
import { useEffect } from "react";

const GET_MESSAGES = "GET_MESSAGES";
export const useMessagesQuery = () => {
	const { selectedContact } = useSelectedContact();
	const { setUserMessages } = useMessages();
	const query = useQuery({
		queryKey: [GET_MESSAGES, selectedContact?.id],
		queryFn: () =>
			selectedContact ? MessageAPI.getMessages(selectedContact?.id) : [],
	});

	useEffect(() => {
		if (query.data && selectedContact) {
			setUserMessages(selectedContact?.id, query.data);
		}
	}, [query.data, selectedContact, setUserMessages]);

	return query;
};

interface State {
	messages: { [key: string]: MessageResponse[] };
}
interface Action {
	setUserMessages: (userId: string, messages: MessageResponse[]) => void;
	addUserMessage: (userId: string, message: MessageResponse) => void;
	removeUserMessage: (userId: string, messageId: string) => void;
}
export const useMessages = create(
	immer<State & Action>((set) => ({
		messages: {},
		setUserMessages: (userId, messages) =>
			set((state) => {
				state.messages[userId] = messages;
			}),
		addUserMessage: (userId, message) =>
			set(
				(state) =>
					(state.messages[userId] = [
						...state.messages[userId],
						message,
					])
			),
		removeUserMessage: (userId, messageId) =>
			set(
				(state) =>
					(state.messages[userId] = state.messages[userId].filter(
						(message) => message.id !== messageId
					))
			),
	}))
);
