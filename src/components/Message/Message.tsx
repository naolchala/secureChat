import { Flex, Avatar, Text } from "@chakra-ui/react";
import dayjs from "dayjs";

interface MessageProps {
	isMine?: boolean;
	message: string;
	createdAt: Date;
}

export const Message = ({ isMine, message, createdAt }: MessageProps) => {
	return (
		<Flex
			direction={isMine ? "row-reverse" : "row"}
			alignSelf={isMine ? "flex-end" : "flex-start"}
			gap={"2"}
			alignItems={"flex-end"}
			maxW={"60%"}
		>
			<Avatar
				name="Naol Chala"
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
					{message}
				</Text>
				<Text
					mt="2"
					fontSize={"xs"}
					color={isMine ? "gray.200" : "gray"}
				>
					{dayjs(createdAt).format("hh:mm A")}
				</Text>
			</Flex>
		</Flex>
	);
};
