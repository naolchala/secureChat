import {
	Flex,
	HStack,
	Icon,
	Heading,
	Button,
	InputGroup,
	InputLeftElement,
	Input,
	IconButton,
} from "@chakra-ui/react";
import { IoLockClosed, IoSearch, IoPersonAdd } from "react-icons/io5";
import { generateRandomAvatar } from "../../utils/avatar";
import { ProfileIcon } from "./ProfileIcon";
import { User } from "./User";
import { useState } from "react";

const ChatModes = {
	PERSONAL: "PERSONAL",
	GROUP: "GROUP",
};

export const Sidebar = () => {
	const [selectedMode, setSelectedMode] = useState(ChatModes.PERSONAL);
	return (
		<Flex as="aside" w="300px" bg="background" direction={"column"} p="5">
			<Flex alignItems={"center"} justifyContent={"space-between"}>
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
				{[ChatModes.PERSONAL, ChatModes.GROUP].map((type, index) => (
					<Button
						key={index}
						flex="1"
						size={"sm"}
						colorScheme={selectedMode === type ? "primary" : "gray"}
						variant={selectedMode === type ? "solid" : "ghost"}
						onClick={() => setSelectedMode(type)}
						textTransform={"capitalize"}
						fontWeight={"500"}
					>
						{type.toLowerCase()}
					</Button>
				))}
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
					<Input bg="white" boxShadow={"xl"} fontSize={"sm"} />
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
	);
};
