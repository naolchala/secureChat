import { Flex } from "@chakra-ui/react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useSocket } from "../../states/socket/useSocket";
import { MessageContainer } from "../../components/Message/MessageContainer";

const ChatPage = () => {
	useSocket();
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
					<MessageContainer />
				</Flex>
			</Flex>
		</Flex>
	);
};

export default ChatPage;
