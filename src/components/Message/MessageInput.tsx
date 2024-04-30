import { Flex, IconButton, Icon, Input } from "@chakra-ui/react";
import { useState } from "react";
import { IoAttach, IoSend } from "react-icons/io5";
// import { useSocket } from "../../states/socket/useSocket";

export const MessageInput = () => {
	const [message, setMessage] = useState("");
	// const socket = useSocket();

	return (
		<Flex
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
				onChange={(e) => setMessage(e.target.value)}
				fontSize={"sm"}
				variant={"unstyled"}
				placeholder="Type your message here"
			/>
			<IconButton
				aria-label="Send"
				colorScheme="primary"
				variant={"ghost"}
			>
				<Icon as={IoSend} />
			</IconButton>
		</Flex>
	);
};
