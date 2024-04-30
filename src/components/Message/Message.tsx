import { Flex, Avatar, Text, SlideFade } from "@chakra-ui/react";
import dayjs from "dayjs";
import { MessageResponse } from "../../api/message.types";
import { useUser } from "../../states/user/useUser";
import { useQueryClient } from "@tanstack/react-query";
import { GET_CONTACTS } from "../../states/query/contact/useContacts";
import { ContactResponse } from "../../api/contact.types";
import { getAvatarUrl } from "../../utils/avatar";

interface MessageProps {
	message: MessageResponse;
}

export const Message = ({ message }: MessageProps) => {
	const client = useQueryClient();
	const { user } = useUser();
	const isMine = user?.id === message.sender_id;
	const contacts = client.getQueryData([GET_CONTACTS]) as
		| ContactResponse[]
		| undefined;
	const contact = contacts?.find(
		(c) =>
			(isMine && c.id === message.receiver_id) ||
			c.id === message.sender_id
	) ?? {
		avatar: "GUEST",
		username: "Loading",
		displayName: "Loading",
		createdAt: new Date().toUTCString(),
		updatedAt: new Date().toUTCString(),
		id: isMine ? message.receiver_id : message.sender_id,
	};

	return (
		<SlideFade in>
			<Flex
				direction={isMine ? "row-reverse" : "row"}
				alignSelf={isMine ? "flex-end" : "flex-start"}
				gap={"2"}
				alignItems={"flex-end"}
				maxW={"60%"}
			>
				<Avatar
					name={contact.displayName}
					src={getAvatarUrl(contact.avatar)}
					size={"sm"}
					border={"2px solid"}
					borderColor={"white"}
				></Avatar>
				<Flex
					bg={isMine ? "primary" : "white"}
					color={isMine ? "white" : "black"}
					p="4"
					pb="2"
					borderRadius={"xl"}
					borderBottomLeftRadius={!isMine ? "0" : undefined}
					borderBottomRightRadius={isMine ? "0" : undefined}
					boxShadow="md"
					direction={"column"}
				>
					<Text as="p" fontSize={"xs"}>
						{message.content}
					</Text>
					<Text
						mt="2"
						fontSize={"xs"}
						color={isMine ? "gray.200" : "gray"}
					>
						{dayjs(message.createdAt).format("hh:mm A")}
					</Text>
				</Flex>
			</Flex>
		</SlideFade>
	);
};
