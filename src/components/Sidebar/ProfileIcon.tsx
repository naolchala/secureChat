import {
	Popover,
	PopoverTrigger,
	IconButton,
	Icon,
	PopoverContent,
	PopoverBody,
	Flex,
	Avatar,
	Divider,
	Button,
	Text,
} from "@chakra-ui/react";
import { IoPersonCircle, IoExit } from "react-icons/io5";
import { generateRandomAvatar } from "../../utils/avatar";

export const ProfileIcon = () => {
	return (
		<Popover>
			<PopoverTrigger>
				<IconButton
					variant={"ghost"}
					aria-label="profile"
					size={"sm"}
					icon={<Icon boxSize={"22px"} as={IoPersonCircle} />}
				></IconButton>
			</PopoverTrigger>
			<PopoverContent>
				<PopoverBody p="5">
					<Flex gap={"4"}>
						<Avatar
							src={
								"https://api.dicebear.com/8.x/fun-emoji/svg?seed=" +
								generateRandomAvatar()
							}
							name={generateRandomAvatar()}
						/>
						<Flex direction={"column"} alignItems={"flex-start"}>
							<Text fontWeight={"600"}>John Doe</Text>
							<Text fontSize={"sm"} color={"gray.600"}>
								@johndoe123
							</Text>
						</Flex>
					</Flex>
					<Divider my="2"></Divider>
					<Button
						w="full"
						size="sm"
						variant="ghost"
						colorScheme="red"
						leftIcon={<Icon as={IoExit} />}
					>
						Logout
					</Button>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
};
