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
import { ProfileIcon } from "./ProfileIcon";
import { useState } from "react";
import { ContactList } from "./ContactList";
import { useAddContactMutation } from "../../states/query/contact/useAddContactMutation";

const ChatModes = {
	PERSONAL: "PERSONAL",
	GROUP: "GROUP",
};

export const Sidebar = () => {
	const addMutation = useAddContactMutation();
	const [username, setUsername] = useState("");
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
			<Flex flex={"1"}>
				<ContactList />
			</Flex>
			<Flex gap="2" mt="2">
				<InputGroup>
					<InputLeftElement>
						<Icon as={IoSearch} />
					</InputLeftElement>
					<Input
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="add contact by username"
						bg="white"
						boxShadow={"xl"}
						fontSize={"xs"}
					/>
				</InputGroup>
				<IconButton
					aria-label="Add User"
					colorScheme="primary"
					boxShadow={"xl"}
					borderRadius={"xl"}
					isLoading={addMutation.isPending}
					onClick={() => {
						if (username)
							addMutation.mutate(username, {
								onSuccess: () => setUsername(""),
							});
					}}
				>
					<Icon as={IoPersonAdd} />
				</IconButton>
			</Flex>
		</Flex>
	);
};
