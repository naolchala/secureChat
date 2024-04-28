import { Flex, Icon, IconButton, Input } from "@chakra-ui/react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { IoAttach, IoSend } from "react-icons/io5";
import { Message } from "../../components/Message/Message";

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
