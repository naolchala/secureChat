import {
	Card,
	CardBody,
	Flex,
	Heading,
	Icon,
	Spinner,
	Text,
} from "@chakra-ui/react";
import { IoLockClosed } from "react-icons/io5";
import { useCurrentUser } from "./states/query/useCurrentUser";

function App() {
	useCurrentUser();
	return (
		<Flex
			w={"full"}
			h="100vh"
			bg="primary"
			alignItems={"center"}
			justifyContent={"center"}
		>
			<Card boxShadow={"xl"}>
				<CardBody>
					<Flex direction={"column"} alignItems={"center"}>
						<Flex gap={"5"}>
							<Icon as={IoLockClosed} fontSize={"5xl"} />
							<Heading>Secure Chat</Heading>
						</Flex>
						<Spinner mt="5"></Spinner>
						<Text mt="2" fontWeight={"bold"} color={"black"}>
							Signing In
						</Text>
					</Flex>
				</CardBody>
			</Card>
		</Flex>
	);
}

export default App;
