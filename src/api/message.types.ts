import { ChatModeType } from "../states/chat/useChatMode";

export interface MessageResponse {
	id: string;
	sender_id: string;
	receiver_id?: string;
	group_id?: string;
	scope: ChatModeType;
	content: string;
	createdAt: string;
	updatedAt: string;
}
