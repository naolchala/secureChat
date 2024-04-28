import { Flex } from "@chakra-ui/react";
import { Message } from "./Message";

export const MessagesList = () => {
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
			<Message
				createdAt={new Date()}
				message="Here is an example message Here is an example message Here is an example message"
			/>
			<Message
				createdAt={new Date()}
				message="Here is an example message"
				isMine
			/>
			<Message
				createdAt={new Date()}
				message="Here is an example message"
			/>
			<Message
				createdAt={new Date()}
				message="Here is an example message"
				isMine
			/>
			<Message
				createdAt={new Date()}
				message="Here is an example message"
			/>
			<Message
				createdAt={new Date()}
				message="Here is an example message"
				isMine
			/>
			<Message
				createdAt={new Date()}
				message="Here is an example message"
			/>
			<Message
				createdAt={new Date()}
				message="Here is an example message"
				isMine
			/>
		</Flex>
	);
};
