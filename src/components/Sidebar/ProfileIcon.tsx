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
	useToast,
	Spinner,
} from "@chakra-ui/react";
import { IoPersonCircle, IoExit } from "react-icons/io5";
import { generateRandomAvatar, getAvatarUrl } from "../../utils/avatar";
import { useToken } from "../../utils/token";
import { useUser } from "../../states/user/useUser";

export const ProfileIcon = () => {
	const toast = useToast();
	const { clearToken } = useToken();
	const { clearUser, user } = useUser();

	const handleLogout = () => {
		clearToken();
		clearUser();
		toast({
			position: "top",
			status: "warning",
			title: "Signed out successfully",
		});
	};

	if (!user) {
		return <Spinner />;
	}

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
							src={getAvatarUrl(user.avatar)}
							name={user.displayName}
						/>
						<Flex direction={"column"} alignItems={"flex-start"}>
							<Text fontWeight={"600"}>{user.displayName}</Text>
							<Text fontSize={"sm"} color={"gray.600"}>
								{user.username}
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
						onClick={handleLogout}
					>
						Logout
					</Button>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
};
