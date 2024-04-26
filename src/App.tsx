import { Card, CardBody, Flex, Heading, Icon } from "@chakra-ui/react";
import { IoLockClosed } from "react-icons/io5";

function App() {
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
					<Flex gap={"5"}>
						<Icon as={IoLockClosed} fontSize={"5xl"} />
						<Flex direction={"column"}>
							<Heading>Secure Chat</Heading>
							<Heading fontSize={"xl"} mt="2">
								Coming soon...
							</Heading>
						</Flex>
					</Flex>
				</CardBody>
			</Card>
		</Flex>
	);
}

export default App;
