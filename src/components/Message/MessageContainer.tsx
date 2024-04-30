import { Flex, IconButton, Icon, Input } from "@chakra-ui/react";
import { IoAttach, IoSend } from "react-icons/io5";
import { MessagesList } from "./MessagesList";
import { useSelectedContact } from "../../states/user/useSelectedUser";

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
		</Flex>
	);
};
