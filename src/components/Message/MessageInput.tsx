import { Flex, IconButton, Icon, Input } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { IoAttach, IoSend } from "react-icons/io5";
import { useMessages } from "../../states/query/message/useMessages";
import { useSelectedContact } from "../../states/user/useSelectedUser";
import { useUser } from "../../states/user/useUser";
import { v4 } from "uuid";
import { encryptMessage } from "../../utils/key";
import { useServerKey } from "../../states/key/useServerKey";
import SocketKeys from "../../api/socket.types";
import { useDebouncedCallback } from "use-debounce";
import { socket } from "../../utils/socket";

export const MessageInput = () => {
	const { serverKey } = useServerKey();
	const { user } = useUser();
	const { selectedContact } = useSelectedContact();
	const { addUserMessage } = useMessages();
	const [message, setMessage] = useState("");
	const [typing, setTyping] = useState(false);
	const debounce = useDebouncedCallback(() => {
		if (selectedContact) {
			socket.emit(SocketKeys.TYPING_DONE, {
				contactId: selectedContact.id,
			});
		}
		setTyping(false);
	}, 1000);

	const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
		setMessage(e.target.value);
		if (!typing) {
			setTyping(true);
			socket.emit(SocketKeys.TYPING, { contactId: selectedContact?.id });
		}
		debounce();
	};

	const handleSendMessage = async (e: FormEvent) => {
		e.preventDefault();
		if (selectedContact && user && message && serverKey) {
			const encryptedMessage = await encryptMessage(message, serverKey);
			const tempId = v4();

			socket.emit(SocketKeys.SEND_MESSAGE, {
				message: encryptedMessage,
				contact: selectedContact?.id,
				tempId,
			});

			addUserMessage(selectedContact.id, {
				id: tempId,
				content: message,
				createdAt: new Date().toString(),
				sender_id: user?.id,
				receiver_id: selectedContact.id,
				updatedAt: new Date().toString(),
				isTemp: true,
			});

			setMessage("");
		}
	};

	return (
		<Flex
			as="form"
			onSubmit={(e) => handleSendMessage(e)}
			bg="white"
			boxShadow={"xl"}
			p="2"
			m="4"
			borderRadius={"xl"}
			gap={"2"}
		>
			<label htmlFor="fileInput">
				<IconButton
					aria-label="Send"
					colorScheme="primary"
					variant={"ghost"}
				>
					<Icon as={IoAttach} fontSize={"xl"} />
				</IconButton>
				<Input
					id="fileInput"
					type="file"
					fontSize={"sm"}
					variant={"unstyled"}
					placeholder="Type your message here"
					hidden
				/>
			</label>
			<Input
				value={message}
				onChange={handleMessageChange}
				fontSize={"sm"}
				variant={"unstyled"}
				placeholder="Type your message here"
			/>
			<IconButton
				aria-label="Send"
				colorScheme="primary"
				variant={"ghost"}
				type="submit"
				disabled={!message}
			>
				<Icon as={IoSend} />
			</IconButton>
		</Flex>
	);
};
