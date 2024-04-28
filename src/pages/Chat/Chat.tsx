import {
	Button,
	Flex,
	HStack,
	Heading,
	Icon,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react";
import { IoLockClosed, IoPersonAdd, IoSearch } from "react-icons/io5";
import { generateRandomAvatar } from "../../utils/avatar";
import { ProfileIcon } from "../../components/Sidebar/ProfileIcon";
import { useState } from "react";
import { User } from "../../components/Sidebar/User";

const ChatModes = {
	PERSONAL: "PERSONAL",
	GROUP: "GROUP",
};

const ChatPage = () => {
	const [selectedMode, setSelectedMode] = useState(ChatModes.PERSONAL);
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
				<Flex
					as="aside"
					w="300px"
					bg="background"
					direction={"column"}
					p="5"
				>
					<Flex
						alignItems={"center"}
						justifyContent={"space-between"}
					>
						<HStack justifyContent={"center"} alignItems={"end"}>
							<Icon as={IoLockClosed} fontSize={"3xl"} />
							<Heading fontSize={"xl"} fontWeight={"bold"}>
								SecureChat
							</Heading>
						</HStack>
						<ProfileIcon />
					</Flex>
					<Flex
						bg="white"
						p="2"
						my="5"
						border={"1px solid"}
						borderColor={"gray.200"}
						borderRadius={"lg"}
						gap={"2"}
					>
						{[ChatModes.PERSONAL, ChatModes.GROUP].map(
							(type, index) => (
								<Button
									key={index}
									flex="1"
									size={"sm"}
									colorScheme={
										selectedMode === type
											? "primary"
											: "gray"
									}
									variant={
										selectedMode === type
											? "solid"
											: "ghost"
									}
									onClick={() => setSelectedMode(type)}
									textTransform={"capitalize"}
									fontWeight={"500"}
								>
									{type.toLowerCase()}
								</Button>
							)
						)}
					</Flex>
					<Flex
						flex="1"
						direction={"column"}
						overflow={"auto"}
						gap={"2"}
						sx={{
							"&::-webkit-scrollbar": {
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
						{[...Array(10)].map((_, i) => (
							<User
								key={i}
								avatar={generateRandomAvatar()}
								name="John Doe"
								username="johnDoe12"
								id={`${i}`}
							/>
						))}
					</Flex>
					<Flex gap="2" mt="2">
						<InputGroup>
							<InputLeftElement>
								<Icon as={IoSearch} />
							</InputLeftElement>
							<Input
								bg="white"
								boxShadow={"xl"}
								fontSize={"sm"}
							/>
						</InputGroup>
						<IconButton
							aria-label="Add User"
							colorScheme="primary"
							boxShadow={"xl"}
							borderRadius={"xl"}
						>
							<Icon as={IoPersonAdd} />
						</IconButton>
					</Flex>
				</Flex>
				<Flex as="main" flex="1" bg="#fffa"></Flex>
			</Flex>
		</Flex>
	);
};

export default ChatPage;
