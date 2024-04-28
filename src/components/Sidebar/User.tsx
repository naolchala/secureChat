import { Flex, Avatar, AvatarBadge, Text } from "@chakra-ui/react";
import { getAvatarUrl } from "../../utils/avatar";

interface UserProps {
	id: string;
	name: string;
	username: string;
	avatar: string;
}
export const User = ({ avatar, name, username }: UserProps) => {
	return (
		<Flex
			gap={"4"}
			alignItems={"center"}
			cursor={"pointer"}
			p="3"
			borderRadius={"lg"}
			transition={"all 200ms ease-in-out"}
			_hover={{
				bg: "blackAlpha.100",
			}}
		>
			<Avatar
				name={name}
				src={getAvatarUrl(avatar)}
				size={"sm"}
				border={"2px solid"}
				borderColor={"black"}
			>
				<AvatarBadge boxSize={"1em"} bg="primary" />
			</Avatar>
			<Flex direction={"column"}>
				<Text fontWeight={"bold"} fontSize={"sm"}>
					{name}
				</Text>
				<Text fontSize={"xs"} color={"gray"}>
					{username}
				</Text>
			</Flex>
		</Flex>
	);
};
