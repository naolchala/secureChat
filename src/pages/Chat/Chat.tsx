import {
	Avatar,
	Button,
	Divider,
	Flex,
	HStack,
	Heading,
	Icon,
	IconButton,
	Popover,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	Text,
} from "@chakra-ui/react";
import { IoExit, IoLockClosed, IoPersonCircle } from "react-icons/io5";
import { generateRandomAvatar } from "../../utils/avatar";

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
			<Flex w="75%" h="full" borderRadius={"xl"} overflow={"hidden"}>
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
						<Popover>
							<PopoverTrigger>
								<IconButton
									variant={"ghost"}
									aria-label="profile"
									size={"sm"}
									icon={
										<Icon
											boxSize={"22px"}
											as={IoPersonCircle}
										/>
									}
								></IconButton>
							</PopoverTrigger>
							<PopoverContent>
								<PopoverBody>
									<Flex gap={"4"}>
										<Avatar
											src={
												"https://api.dicebear.com/8.x/fun-emoji/svg?seed=" +
												generateRandomAvatar()
											}
											name={generateRandomAvatar()}
										/>
										<Flex
											direction={"column"}
											alignItems={"flex-start"}
										>
											<Text fontWeight={"600"}>
												John Doe
											</Text>
											<Text
												fontSize={"sm"}
												color={"gray.600"}
											>
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
					</Flex>
				</Flex>
				<Flex as="main" flex="1" bg="#fffa"></Flex>
			</Flex>
		</Flex>
	);
};

export default ChatPage;
