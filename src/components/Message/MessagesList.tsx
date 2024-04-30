import { Flex, Spinner, Text } from "@chakra-ui/react";
import { Message } from "./Message";
import {
	useMessages,
	useMessagesQuery,
} from "../../states/query/message/useMessages";
import { EmptyMessages } from "./EmptyMessages";
import { useUser } from "../../states/user/useUser";
import { useSelectedContact } from "../../states/user/useSelectedUser";

export const MessagesList = () => {
	const { user } = useUser();
	const { messages } = useMessages();
	const { selectedContact } = useSelectedContact();
	const messagesQuery = useMessagesQuery();
	if (messagesQuery.isLoading) {
		return (
			<Flex
				flex={"1"}
				direction={"column"}
				alignItems={"center"}
				justifyContent={"center"}
			>
				<Spinner />
			</Flex>
		);
	}

	if (messagesQuery.isError) {
		return <Text>Error</Text>;
	}

	if (!messagesQuery.data || messagesQuery.data.length === 0) {
		return <EmptyMessages />;
	}

	const data = selectedContact ? messages[selectedContact.id] ?? [] : [];
	console.log({ data });

	if (
		!messagesQuery.data ||
		messagesQuery.data.length === 0 ||
		data.length == 0
	) {
		return <EmptyMessages />;
	}

	return (
		<Flex
			flex="1"
			direction={"column-reverse"}
			py="5"
			px="6"
			overflow={"auto"}
			gap={"2"}
			sx={{
				"&::-webkit-scrollbar": {
					position: "fixed",
					left: 0,
					width: "8px",
					height: "8px",
				},
				"&::-webkit-scrollbar-track": {
					borderRadius: "5px",
					backgroundColor: "gray.100", // Use Chakra UI theme colors
				},
				"&::-webkit-scrollbar-thumb": {
					borderRadius: "9px",
					backgroundColor: "gray.400", // Use Chakra UI theme colors
					transition: "all 300ms",
				},
				"&::-webkit-scrollbar-thumb:hover": {
					backgroundColor: "primary.700", // Use Chakra UI theme colors
				},
				"&::-webkit-scrollbar-thumb:active": {
					backgroundColor: "primary.800", // Use Chakra UI theme colors
				},
			}}
		>
			{data.map((message) => (
				<Message key={message.id} message={message} />
			))}
		</Flex>
	);
};
