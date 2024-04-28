import { Flex, Icon, IconButton, Input } from "@chakra-ui/react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { IoAttach, IoSend } from "react-icons/io5";
import { MessagesList } from "../../components/Message/MessagesList";

const ChatPage = () => {
	return (
		<Flex
			bg="primary"
			w="full"
			h="100vh"
			direction={"column"}
			alignItems={"center"}
			justifyContent={{ base: "flex-start", lg: "center" }}
			overflow={"auto"}
			p="5"
		>
			<Flex
				w="75%"
				h="full"
				borderRadius={"xl"}
				overflow={"hidden"}
				boxShadow={"2xl"}
			>
				<Sidebar />
				<Flex as="main" flex="1" bg="#fffa" p="6">
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
				</Flex>
			</Flex>
		</Flex>
	);
};

export default ChatPage;
