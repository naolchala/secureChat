import { Flex } from "@chakra-ui/react";
import { MessagesList } from "./MessagesList";
import { useSelectedContact } from "../../states/user/useSelectedUser";
import { MessageInput } from "./MessageInput";

export const MessageContainer = () => {
	const { selectedContact } = useSelectedContact();
	if (!selectedContact) return <></>;

	return (
		<Flex
			bg="background"
			w="full"
			h="full"
			borderRadius={"lg"}
			boxShadow={"xl"}
			direction={"column"}
			overflow={"hidden"}
		>
			<MessagesList />
			<MessageInput />
		</Flex>
	);
};
