import {
	Button,
	Card,
	CardBody,
	Flex,
	HStack,
	Heading,
	Icon,
} from "@chakra-ui/react";
import { IoLockClosed, IoLockOpen } from "react-icons/io5";
import { FormInput } from "../components/Form/FormInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

const LoginPage = () => {
	const initialValues = {
		username: "",
		password: "",
	};

	const schema = yup.object().shape({
		username: yup.string().required("Please enter your username"),
		password: yup
			.string()
			.required("Please enter your password")
			.min(8, "It should be at least 8 chars."),
	});

	const formik = useFormik({
		initialValues,
		validationSchema: schema,
		onSubmit: (_, actions) => {
			setTimeout(() => actions.setSubmitting(false), 500);
			return;
		},
	});

	return (
		<Flex
			bg="primary"
			w="full"
			h="100vh"
			direction={"column"}
			alignItems={"center"}
			justifyContent={"center"}
		>
			<Card
				boxShadow={"xl"}
				w={{ base: "90%", md: "40%", xl: "30%" }}
				bg="background"
				p="6"
				borderRadius={"3xl"}
			>
				<CardBody>
					<HStack justifyContent={"center"} alignItems={"end"}>
						<Icon as={IoLockClosed} fontSize={"4xl"} />
						<Heading fontSize={"2xl"} fontWeight={"bold"}>
							SecureChat
						</Heading>
					</HStack>
					<Flex mt="14" direction={"column"}>
						<form
							onChange={formik.handleChange}
							onSubmit={formik.handleSubmit}
							onReset={formik.handleReset}
						>
							<Flex gap={"6"} direction={"column"}>
								<FormInput
									formik={formik}
									label="Username"
									name="username"
									placeholder="Enter your username here"
									type="text"
								/>
								<FormInput
									formik={formik}
									label="Password"
									name="password"
									placeholder="Enter your password here"
									type="password"
								/>
							</Flex>
							<Flex
								justifyContent={"space-between"}
								mt="20"
								direction={{
									base: "column-reverse",
									lg: "row",
								}}
								gap={"4"}
							>
								<Button
									as={Link}
									to="/register"
									variant={"link"}
									fontWeight={"normal"}
									colorScheme={"gray"}
								>
									Create a new account
								</Button>
								<Button
									type="submit"
									boxShadow={"xl"}
									borderRadius={"xl"}
									colorScheme={"primary"}
									size={"lg"}
									leftIcon={<Icon as={IoLockOpen} />}
									px="10"
									isLoading={formik.isSubmitting}
								>
									Login
								</Button>
							</Flex>
						</form>
					</Flex>
				</CardBody>
			</Card>
		</Flex>
	);
};

export default LoginPage;
